import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9229
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_p4_test',
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

    console.log('=== TEST PRIORITY 4: SCROLL-PROGRESS TEXT COLOR REVEAL ===')
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    })

    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 1500))

    // Helper to evaluate words in ScrollTextReveal blockquote
    const evalWords = async () => {
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const bq = document.querySelector('blockquote');
          if (!bq) return null;
          const rect = bq.getBoundingClientRect();
          const spans = Array.from(bq.querySelectorAll('[aria-hidden="true"] > span'));
          const wordData = spans.map((s, idx) => ({
            idx,
            text: s.innerText.trim(),
            opacity: parseFloat(s.style.opacity || window.getComputedStyle(s).opacity).toFixed(2),
            color: s.style.color || window.getComputedStyle(s).color,
            isEmerald: (s.className || '').includes('text-brand') || window.getComputedStyle(s).color.includes('16, 185, 129')
          }));
          const activeWords = wordData.filter(w => parseFloat(w.opacity) > 0.8);
          return {
            rectTop: Math.round(rect.top),
            totalWords: wordData.length,
            activeCount: activeWords.length,
            inactiveCount: wordData.length - activeWords.length,
            sampleActive: activeWords.slice(0, 3).map(w => w.text),
            sampleInactive: wordData.filter(w => parseFloat(w.opacity) <= 0.6).slice(0, 3).map(w => w.text),
            clarityWord: wordData.find(w => w.text.toLowerCase().includes('clarity'))
          };
        })()`,
        returnByValue: true
      })
      return res?.result?.value
    }

    // Stage 1: Scroll to just entering viewport (quote near bottom)
    console.log('--- Stage 1: Scroll quote into initial range ---')
    await send('Runtime.evaluate', {
      expression: `(() => {
        const bq = document.querySelector('blockquote');
        if (bq) {
          const top = bq.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.82);
          window.scrollTo(0, top);
        }
      })()`
    })
    await new Promise((r) => setTimeout(r, 500))
    const stage1 = await evalWords()
    console.log('Stage 1 (Entering):', stage1)

    const shotP4Stage1 = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p4_stage1_entering.png', Buffer.from(shotP4Stage1.data, 'base64'))

    // Stage 2: Scroll to mid-progress (quote around 50% through range)
    console.log('--- Stage 2: Scroll quote to mid range ---')
    await send('Runtime.evaluate', {
      expression: `(() => {
        const bq = document.querySelector('blockquote');
        if (bq) {
          const top = bq.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.58);
          window.scrollTo(0, top);
        }
      })()`
    })
    await new Promise((r) => setTimeout(r, 500))
    const stage2 = await evalWords()
    console.log('Stage 2 (Mid-progress):', stage2)

    const shotP4Stage2 = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p4_stage2_mid.png', Buffer.from(shotP4Stage2.data, 'base64'))

    // Stage 3: Scroll to fully completed range (quote centered/elevated)
    console.log('--- Stage 3: Scroll quote to completed range ---')
    await send('Runtime.evaluate', {
      expression: `(() => {
        const bq = document.querySelector('blockquote');
        if (bq) {
          const top = bq.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.30);
          window.scrollTo(0, top);
        }
      })()`
    })
    await new Promise((r) => setTimeout(r, 500))
    const stage3 = await evalWords()
    console.log('Stage 3 (Completed):', stage3)

    const shotP4Stage3 = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p4_stage3_completed.png', Buffer.from(shotP4Stage3.data, 'base64'))

    // Stage 4: Test Reduced Motion
    console.log('--- Stage 4: Reduced Motion Preference ---')
    await send('Emulation.setEmulatedMedia', {
      media: 'page',
      features: [{ name: 'prefers-reduced-motion', value: 'reduce' }]
    })

    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 1000))

    await send('Runtime.evaluate', {
      expression: `(() => {
        const bq = document.querySelector('blockquote');
        bq?.scrollIntoView({ behavior: 'instant', block: 'center' });
      })()`
    })
    await new Promise((r) => setTimeout(r, 400))
    const reducedStage = await evalWords()
    console.log('Reduced Motion Quote state:', reducedStage)

    const shotP4Reduced = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync('verify_p4_reduced_motion.png', Buffer.from(shotP4Reduced.data, 'base64'))

    ws.close()
  } catch (e) {
    console.error('Priority 4 Test Error:', e)
  } finally {
    proc.kill()
  }
}

run()
