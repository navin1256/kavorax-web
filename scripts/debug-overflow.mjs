import { spawn } from 'node:child_process'

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9223
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_cdp_debug',
    '--window-size=375,812',
    'http://localhost:3000'
  ])

  // wait 2 seconds for chrome to start
  await new Promise((r) => setTimeout(r, 2500))

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json/list`)
    const pages = await listRes.json()
    const page = pages.find((p) => p.type === 'page') || pages[0]
    if (!page || !page.webSocketDebuggerUrl) {
      console.log('No page found:', pages)
      proc.kill()
      return
    }

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

    // Emulate exact mobile viewport
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    })

    // Wait for layout to settle
    await new Promise((r) => setTimeout(r, 1000))

    // Evaluate script to find overflowing elements
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const docW = document.documentElement.clientWidth;
        const bodyW = document.body.scrollWidth;
        const overflows = [];
        document.querySelectorAll('*').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.right > docW + 1 || el.scrollWidth > docW + 1) {
            overflows.push({
              tag: el.tagName,
              id: el.id,
              class: (el.className || '').toString().slice(0, 80),
              rectRight: Math.round(rect.right),
              scrollWidth: el.scrollWidth,
              text: (el.innerText || '').slice(0, 30).replace(/\\n/g, ' ')
            });
          }
        });
        return JSON.stringify({ docW, bodyW, count: overflows.length, overflows: overflows.slice(0, 10) }, null, 2);
      })()`
    })

    console.log(evalRes?.result?.value)

    // Capture screenshot
    const shot = await send('Page.captureScreenshot', { format: 'png' })
    if (shot?.data) {
      import('node:fs').then(({ writeFileSync }) => {
        writeFileSync('test_mobile_verified.png', Buffer.from(shot.data, 'base64'))
        console.log('Saved test_mobile_verified.png')
      })
    }
    ws.close()
  } catch (err) {
    console.error('Error:', err)
  } finally {
    proc.kill()
  }
}

run()
