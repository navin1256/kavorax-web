import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9225
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_p1_test',
    'http://localhost:3000'
  ])

  await new Promise((r) => setTimeout(r, 2000))

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

    // Enable console and runtime
    await send('Runtime.enable')

    console.log('=== TEST 1: DESKTOP HERO TYPOGRAPHY SEQUENCE ===')
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    })

    await send('Page.navigate', { url: 'http://localhost:3000' })
    // Wait for initial render + hero entrance
    await new Promise((r) => setTimeout(r, 1200))

    const p1Eval = await send('Runtime.evaluate', {
      expression: `(() => {
        const h1 = document.querySelector('h1');
        const srOnly = h1 ? h1.querySelector('.sr-only') : null;
        const visualContainer = h1 ? h1.querySelector('[aria-hidden="true"]') : null;
        const wordSpans = visualContainer ? Array.from(visualContainer.querySelectorAll('span > span')) : [];
        
        const wordsData = wordSpans.map((span, idx) => {
          const style = window.getComputedStyle(span);
          return {
            index: idx,
            text: span.innerText.trim(),
            opacity: style.opacity,
            transform: style.transform,
            color: style.color,
            transitionDelay: span.style.transitionDelay,
            isEmerald: style.color.includes('16, 185, 129') || style.color.includes('16,185,129')
          };
        });

        const eyebrow = document.querySelector('.hero-cinematic-bg .rounded-full');
        const supporting = document.querySelector('.hero-cinematic-bg p');
        const ctaContainer = document.querySelector('.hero-cinematic-bg .mt-8');

        return {
          h1Found: !!h1,
          srOnlyText: srOnly ? srOnly.innerText : '',
          wordsTotal: wordsData.length,
          words: wordsData,
          eyebrowRevealed: eyebrow ? window.getComputedStyle(eyebrow).opacity : null,
          supportingOpacity: supporting ? window.getComputedStyle(supporting).opacity : null,
          ctaOpacity: ctaContainer ? window.getComputedStyle(ctaContainer).opacity : null,
          h1BoundingRect: h1 ? h1.getBoundingClientRect() : null,
          windowWidth: window.innerWidth
        };
      })()`,
      returnByValue: true
    })

    console.log('Priority 1 Desktop Evaluation:', JSON.stringify(p1Eval?.result?.value, null, 2))

    const shotP1Desktop = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p1_desktop.png', Buffer.from(shotP1Desktop.data, 'base64'))
    console.log('Saved verify_p1_desktop.png')

    console.log('=== TEST 2: MOBILE 375px TYPOGRAPHY & WRAPPING ===')
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    })

    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 1200))

    const p1MobileEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const h1 = document.querySelector('h1');
        const rect = h1 ? h1.getBoundingClientRect() : null;
        const bodyScrollWidth = document.body.scrollWidth;
        const docScrollWidth = document.documentElement.scrollWidth;
        const innerWidth = window.innerWidth;
        const words = h1 ? Array.from(h1.querySelectorAll('span > span')).map(w => ({
          text: w.innerText.trim(),
          opacity: window.getComputedStyle(w).opacity,
          rect: w.getBoundingClientRect()
        })) : [];

        return {
          windowWidth: innerWidth,
          bodyScrollWidth,
          docScrollWidth,
          hasHorizontalOverflow: docScrollWidth > innerWidth || bodyScrollWidth > innerWidth,
          h1Rect: rect ? { width: rect.width, left: rect.left, right: rect.right } : null,
          words
        };
      })()`,
      returnByValue: true
    })

    console.log('Priority 1 Mobile Evaluation:', JSON.stringify(p1MobileEval?.result?.value, null, 2))

    const shotP1Mobile = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p1_mobile.png', Buffer.from(shotP1Mobile.data, 'base64'))
    console.log('Saved verify_p1_mobile.png')

    // Test Secondary Hero Routes
    const secondaryRoutes = ['/about', '/solutions', '/products', '/industries', '/pricing', '/contact', '/demo']
    for (const route of secondaryRoutes) {
      await send('Page.navigate', { url: `http://localhost:3000${route}` })
      await new Promise((r) => setTimeout(r, 800))
      const secCheck = await send('Runtime.evaluate', {
        expression: `(() => {
          const h1 = document.querySelector('h1');
          const words = h1 ? Array.from(h1.querySelectorAll('span > span')) : [];
          return {
            route: '${route}',
            h1Text: h1 ? h1.innerText.trim() : null,
            wordsCount: words.length,
            allWordsVisible: words.map(w => window.getComputedStyle(w).opacity).every(o => o === '1')
          };
        })()`,
        returnByValue: true
      })
      console.log(`Route ${route}:`, secCheck?.result?.value)
    }

    ws.close()
  } catch (e) {
    console.error('Priority 1 Test Error:', e)
  } finally {
    proc.kill()
  }
}

run()
