export default defineNuxtPlugin(() => {
  // Studio listener is restricted strictly to local development preview
  if (process.server || !import.meta.dev) return

  let isInStudio = false
  let selectedEl: HTMLElement | null = null
  let currentSelectionPath = ''

  function getElementPath(el: HTMLElement): string {
    if (!el || el.tagName === 'BODY') return 'body'
    const index = Array.from(el.parentNode?.children || []).indexOf(el)
    return `${el.tagName.toLowerCase()}:nth-child(${index + 1}) > ${getElementPath(el.parentElement as HTMLElement)}`
  }

  function handleMessage(event: MessageEvent) {
    if (event.origin !== 'http://localhost:3001') return

    if (event.data?.type === 'STUDIO_INIT') {
      isInStudio = true
      document.body.classList.add('in-kavorax-studio')
      injectStudioStyles()
    }

    if (event.data?.type === 'STUDIO_UPDATE_ELEMENT') {
      if (!selectedEl) return

      const { type, content, src, alt, href } = event.data.payload

      if (type === 'text') {
        selectedEl.textContent = content
      } else if (type === 'image' && selectedEl instanceof HTMLImageElement) {
        selectedEl.src = src || selectedEl.src
        if (alt !== undefined) selectedEl.alt = alt
      } else if (type === 'link' && selectedEl instanceof HTMLAnchorElement) {
        selectedEl.textContent = content
        if (href !== undefined) selectedEl.href = href
      }
    }
  }

  function handleClick(e: MouseEvent) {
    if (!isInStudio) return

    const el = e.target as HTMLElement

    // Check if the element is text-heavy, an image, or a link
    const isText = el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE
    const isImage = el.tagName === 'IMG'
    const isLink = el.tagName === 'A'

    if (!isText && !isImage && !isLink) return

    e.preventDefault()
    e.stopPropagation()

    if (selectedEl) {
      selectedEl.classList.remove('studio-selected-el')
    }

    selectedEl = el
    selectedEl.classList.add('studio-selected-el')
    currentSelectionPath = getElementPath(selectedEl)

    let type = 'text'
    if (isImage) type = 'image'
    if (isLink) type = 'link'

    const payload = {
      path: currentSelectionPath,
      type,
      content: selectedEl.textContent?.trim(),
      src: isImage ? (selectedEl as HTMLImageElement).src : undefined,
      alt: isImage ? (selectedEl as HTMLImageElement).alt : undefined,
      href: isLink ? (selectedEl as HTMLAnchorElement).href : undefined
    }

    window.parent.postMessage({ type: 'STUDIO_ELEMENT_SELECTED', payload }, 'http://localhost:3001')
  }

  function injectStudioStyles() {
    const style = document.createElement('style')
    style.innerHTML = `
      .in-kavorax-studio *:hover {
        outline: 1px dashed rgba(16, 185, 129, 0.5);
        cursor: pointer !important;
      }
      .in-kavorax-studio .studio-selected-el {
        outline: 2px solid #10b981 !important;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.3) !important;
      }
      .in-kavorax-studio a {
        pointer-events: none; /* Prevent navigation in studio */
      }
    `
    document.head.appendChild(style)
  }

  window.addEventListener('message', handleMessage)
  document.addEventListener('click', handleClick, { capture: true })
})
