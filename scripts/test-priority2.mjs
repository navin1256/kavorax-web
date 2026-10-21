import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9227
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_p2_test',
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

    await send('Runtime.enable')

    console.log('=== TEST PRIORITY 2: SCROLLYTELLING & SCROLL-TRIGGERED REVEAL ===')
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    })

    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 1500))

    // Step through each section on homepage by scrolling
    const sections = [
      { name: 'Hero', selector: 'section' },
      { name: 'EditorialIntro', selector: '#editorial-intro' },
      { name: 'ConnectedArchitecture', selector: 'section:nth-of-type(3)' },
      { name: 'ProductShowcases', selector: 'section:nth-of-type(4)' },
      { name: 'PhotographySolutions', selector: 'section:nth-of-type(5)' },
      { name: 'IndustryPreview', selector: 'section:nth-of-type(6)' },
      { name: 'BrandStatement', selector: 'section:nth-of-type(7)' },
      { name: 'FinalCta', selector: 'section:nth-of-type(8)' }
    ]

    const results = []

    for (const sec of sections) {
      await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('${sec.selector}');
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
        })()`
      })
      await new Promise((r) => setTimeout(r, 800))

      const secEval = await send('Runtime.evaluate', {
        expression: `(() => {
          const sec = document.querySelector('${sec.selector}');
          if (!sec) return { found: false, name: '${sec.name}' };
          const reveals = Array.from(sec.querySelectorAll('.reveal-base, .reveal-heading, .reveal-paragraph, .reveal-card'));
          const opacities = reveals.map(r => window.getComputedStyle(r).opacity);
          const hiddenCount = opacities.filter(o => o === '0').length;
          return {
            name: '${sec.name}',
            found: true,
            totalReveals: reveals.length,
            revealedCount: opacities.filter(o => o === '1').length,
            hiddenCount,
            allVisible: hiddenCount === 0
          };
        })()`,
        returnByValue: true
      })
      console.log(`Section ${sec.name}:`, secEval?.result?.value)
      results.push(secEval?.result?.value)
    }

    const shotP2 = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p2_scroll.png', Buffer.from(shotP2.data, 'base64'))
    console.log('Saved verify_p2_scroll.png')

    // Test Client-Side Navigation: navigate from / to /solutions and check reveals
    console.log('=== TEST CLIENT-SIDE NAVIGATION ===')
    await send('Runtime.evaluate', {
      expression: `(() => {
        const link = document.querySelector('a[href="/solutions"]');
        if (link) link.click();
      })()`
    })
    await new Promise((r) => setTimeout(r, 1200))

    const solutionsEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const h1 = document.querySelector('h1');
        const reveals = Array.from(document.querySelectorAll('.reveal-base, .reveal-heading, .reveal-paragraph, .reveal-card'));
        const firstFew = reveals.slice(0, 10).map(r => window.getComputedStyle(r).opacity);
        return {
          currentUrl: window.location.pathname,
          h1Text: h1 ? h1.innerText.trim() : null,
          totalReveals: reveals.length,
          firstFewOpacities: firstFew,
          hasStuckHiddenInHero: firstFew.slice(0, 3).some(o => o === '0')
        };
      })()`,
      returnByValue: true
    })
    console.log('Solutions Route Navigation Eval:', solutionsEval?.result?.value)

    ws.close()
  } catch (e) {
    console.error('Priority 2 Test Error:', e)
  } finally {
    proc.kill()
  }
}

run()
