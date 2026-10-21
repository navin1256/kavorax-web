import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9231
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_p4_steps',
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

    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    })

    await send('Page.navigate', { url: 'http://localhost:3000' })
    await new Promise((r) => setTimeout(r, 1500))

    // Helper to evaluate and capture
    async function checkAtTargetTop(targetTop, label) {
      await send('Runtime.evaluate', {
        expression: `(() => {
          const bq = document.querySelector('blockquote');
          if (bq) {
            const currentTop = bq.getBoundingClientRect().top;
            window.scrollBy(0, currentTop - ${targetTop});
          }
        })()`
      })
      await new Promise((r) => setTimeout(r, 350))

      const evalResult = await send('Runtime.evaluate', {
        expression: `(() => {
          const bq = document.querySelector('blockquote');
          if (!bq) return null;
          const rect = bq.getBoundingClientRect();
          const spans = Array.from(bq.querySelectorAll('[aria-hidden="true"] > span'));
          const words = spans.map((s, idx) => ({
            idx,
            text: s.innerText.trim(),
            opacity: parseFloat(s.style.opacity || window.getComputedStyle(s).opacity).toFixed(2),
            color: s.style.color || window.getComputedStyle(s).color,
            isEmerald: (s.className || '').includes('text-brand') || window.getComputedStyle(s).color.includes('16, 185, 129')
          }));
          const fullyActive = words.filter(w => parseFloat(w.opacity) >= 0.95);
          const inactive = words.filter(w => parseFloat(w.opacity) <= 0.45);
          return {
            label: '${label}',
            actualRectTop: Math.round(rect.top),
            wordsCount: words.length,
            fullyActiveCount: fullyActive.length,
            inactiveCount: inactive.length,
            firstWord: words[0],
            midWord: words[Math.floor(words.length / 2)],
            lastWord: words[words.length - 1],
            clarityWord: words.find(w => w.text.toLowerCase().includes('clarity'))
          };
        })()`,
        returnByValue: true
      })
      console.log(`=== ${label} ===:`, evalResult?.result?.value)
      const shot = await send('Page.captureScreenshot', { format: 'png' })
      writeFileSync(`verify_p4_${label.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`, Buffer.from(shot.data, 'base64'))
    }

    // 1. Initial entering state (rect.top = 820px, before startOffset threshold)
    await checkAtTargetTop(820, '01_Inactive_Start')

    // 2. Partial scroll state (rect.top = 540px, around 50% progress)
    await checkAtTargetTop(540, '02_Halfway_Progress')

    // 3. Completed scroll state (rect.top = 260px, past endOffset threshold)
    await checkAtTargetTop(260, '03_Completed_Reveal')

    ws.close()
  } catch (e) {
    console.error('Error in step test:', e)
  } finally {
    proc.kill()
  }
}

run()
