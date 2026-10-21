import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9224
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_cdp_verify',
    'http://localhost:3000'
  ])

  await new Promise((r) => setTimeout(r, 2500))

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json/list`)
    const pages = await listRes.json()
    const page = pages.find((p) => p.type === 'page') || pages[0]
    const ws = new WebSocket(page.webSocketDebuggerUrl)
    await new Promise((resolve) => ws.onopen = resolve)

    let id = 1
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const msgId = id++
        const handler = (event) => {
          const data = JSON.parse(event.data)
          if (data.id === msgId) {
            ws.removeEventListener('message', handler)
            resolve(data.result)
          }
        }
        ws.addEventListener('message', handler)
        ws.send(JSON.stringify({ id: msgId, method, params }))
      })
    }

    // 1. Desktop Test: 1440x900
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    })
    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 1500))

    // Check Hero WordReveal
    const heroCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const h1 = document.querySelector('h1');
        const words = Array.from(h1 ? h1.querySelectorAll('span[style*="transition"]') : []);
        const opacities = words.map(w => window.getComputedStyle(w).opacity);
        const transforms = words.map(w => window.getComputedStyle(w).transform);
        const rect = h1 ? h1.getBoundingClientRect() : null;
        return {
          h1Text: h1 ? h1.innerText : '',
          wordsCount: words.length,
          allVisible: opacities.every(o => o === '1'),
          rect: rect ? { width: Math.round(rect.width), right: Math.round(rect.right) } : null
        };
      })()`,
      returnByValue: true
    })
    console.log('Hero Check Desktop:', heroCheck?.result?.value)

    const shotDesktopHero = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_desktop_hero.png', Buffer.from(shotDesktopHero.data, 'base64'))

    // Scroll to Connected Architecture (Section 2)
    await send('Runtime.evaluate', {
      expression: `document.getElementById('editorial-intro')?.scrollIntoView({ behavior: 'instant' })`
    })
    await new Promise((r) => setTimeout(r, 1000))

    const introCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById('editorial-intro');
        const reveals = el ? Array.from(el.querySelectorAll('.reveal-base')) : [];
        return {
          revealsCount: reveals.length,
          revealedCount: reveals.filter(r => r.classList.contains('is-revealed')).length,
          firstOpacity: reveals[0] ? window.getComputedStyle(reveals[0]).opacity : null
        };
      })()`,
      returnByValue: true
    })
    console.log('Editorial Intro Check:', introCheck?.result?.value)
    const shotIntro = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_desktop_intro.png', Buffer.from(shotIntro.data, 'base64'))

    // Scroll to BrandStatement (Section 6) to test ScrollTextReveal
    await send('Runtime.evaluate', {
      expression: `(() => {
        const blockquote = document.querySelector('blockquote');
        blockquote?.scrollIntoView({ behavior: 'instant', block: 'center' });
      })()`
    })
    await new Promise((r) => setTimeout(r, 1000))

    const brandCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const blockquote = document.querySelector('blockquote');
        const words = Array.from(blockquote ? blockquote.querySelectorAll('span[style*="opacity"]') : []);
        const wordStates = words.slice(0, 8).map(w => ({
          text: w.innerText,
          opacity: w.style.opacity,
          color: w.style.color,
          computedColor: window.getComputedStyle(w).color
        }));
        return {
          wordsTotal: words.length,
          samples: wordStates
        };
      })()`,
      returnByValue: true
    })
    console.log('BrandStatement ScrollTextReveal Check:', brandCheck?.result?.value)
    const shotBrand = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_desktop_brand.png', Buffer.from(shotBrand.data, 'base64'))

    // Test Secondary Route: /about
    await send('Page.navigate', { url: 'http://localhost:3000/about' })
    await new Promise((r) => setTimeout(r, 1500))
    const aboutCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const h1 = document.querySelector('h1');
        const rect = h1 ? h1.getBoundingClientRect() : null;
        const words = Array.from(h1 ? h1.querySelectorAll('span[style*="transition"]') : []);
        return {
          h1Text: h1 ? h1.innerText : '',
          wordsCount: words.length,
          allVisible: words.map(w => window.getComputedStyle(w).opacity).every(o => o === '1'),
          rect: rect ? { width: Math.round(rect.width), right: Math.round(rect.right) } : null,
          windowWidth: window.innerWidth
        };
      })()`,
      returnByValue: true
    })
    console.log('About Page Check:', aboutCheck?.result?.value)
    const shotAbout = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_desktop_about.png', Buffer.from(shotAbout.data, 'base64'))

    // Test Reduced Motion
    await send('Emulation.setEmulatedMedia', {
      media: 'page',
      features: [{ name: 'prefers-reduced-motion', value: 'reduce' }]
    })
    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 800))
    const reducedMotionCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const h1 = document.querySelector('h1');
        const words = Array.from(h1 ? h1.querySelectorAll('span[style*="transition"]') : []);
        const opacities = words.map(w => window.getComputedStyle(w).opacity);
        return {
          prefersReducedMotionMatches: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
          allWordsVisibleImmediately: opacities.every(o => o === '1')
        };
      })()`,
      returnByValue: true
    })
    console.log('Reduced Motion Check:', reducedMotionCheck?.result?.value)

    ws.close()
  } catch (err) {
    console.error('Error in verification:', err)
  } finally {
    proc.kill()
  }
}

run()
