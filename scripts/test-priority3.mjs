import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9228
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_p3_test',
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

    console.log('=== TEST PRIORITY 3: SELF-DRAWING TECHNICAL SVG ANIMATION ===')
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    })

    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 1500))

    // Scroll to Connected Architecture section
    await send('Runtime.evaluate', {
      expression: `(() => {
        const bus = document.querySelector('.draw-path-primary');
        if (bus) {
          bus.closest('section')?.scrollIntoView({ behavior: 'instant', block: 'center' });
        }
      })()`
    })

    // Check intermediate drawing state (t = 500ms)
    await new Promise((r) => setTimeout(r, 500))
    const midEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const primary = document.querySelector('.draw-path-primary');
        const secondary = document.querySelector('.draw-path-secondary');
        const node = document.querySelector('.draw-node');
        return {
          t: '500ms',
          primaryOffset: primary ? window.getComputedStyle(primary).strokeDashoffset : null,
          secondaryOffset: secondary ? window.getComputedStyle(secondary).strokeDashoffset : null,
          nodeOpacity: node ? window.getComputedStyle(node).opacity : null
        };
      })()`,
      returnByValue: true
    })
    console.log('SVG Mid-animation check:', midEval?.result?.value)

    // Check fully drawn state (t = 1400ms)
    await new Promise((r) => setTimeout(r, 1000))
    const endEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const primary = document.querySelector('.draw-path-primary');
        const secondary = document.querySelector('.draw-path-secondary');
        const nodes = Array.from(document.querySelectorAll('.draw-node'));
        return {
          t: '1500ms',
          primaryOffset: primary ? window.getComputedStyle(primary).strokeDashoffset : null,
          secondaryOffset: secondary ? window.getComputedStyle(secondary).strokeDashoffset : null,
          primaryStroke: primary ? window.getComputedStyle(primary).stroke : null,
          secondaryStroke: secondary ? window.getComputedStyle(secondary).stroke : null,
          nodesTotal: nodes.length,
          allNodesVisible: nodes.map(n => window.getComputedStyle(n).opacity).every(o => o === '1')
        };
      })()`,
      returnByValue: true
    })
    console.log('SVG Completed animation check:', endEval?.result?.value)

    const shotP3 = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p3_line_drawing.png', Buffer.from(shotP3.data, 'base64'))
    console.log('Saved verify_p3_line_drawing.png')

    // Test Reduced Motion
    console.log('=== TEST PRIORITY 3: REDUCED MOTION PREFERENCE ===')
    await send('Emulation.setEmulatedMedia', {
      media: 'page',
      features: [{ name: 'prefers-reduced-motion', value: 'reduce' }]
    })

    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 1000))

    await send('Runtime.evaluate', {
      expression: `(() => {
        const bus = document.querySelector('.draw-path-primary');
        if (bus) {
          bus.closest('section')?.scrollIntoView({ behavior: 'instant', block: 'center' });
        }
      })()`
    })
    await new Promise((r) => setTimeout(r, 300))

    const reducedEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const primary = document.querySelector('.draw-path-primary');
        const secondary = document.querySelector('.draw-path-secondary');
        const nodes = Array.from(document.querySelectorAll('.draw-node'));
        return {
          prefersReducedMotionMatches: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
          primaryOffset: primary ? window.getComputedStyle(primary).strokeDashoffset : null,
          secondaryOffset: secondary ? window.getComputedStyle(secondary).strokeDashoffset : null,
          nodesVisible: nodes.map(n => window.getComputedStyle(n).opacity).every(o => o === '1')
        };
      })()`,
      returnByValue: true
    })
    console.log('Reduced Motion SVG check:', reducedEval?.result?.value)

    const shotP3Reduced = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p3_reduced_motion.png', Buffer.from(shotP3Reduced.data, 'base64'))
    console.log('Saved verify_p3_reduced_motion.png')

    ws.close()
  } catch (e) {
    console.error('Priority 3 Test Error:', e)
  } finally {
    proc.kill()
  }
}

run()
