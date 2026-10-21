import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import path from 'node:path'

const OUT_DIR = 'C:\\Users\\aaa\\Downloads\\SS'

async function captureSingle(url, outFileName, width, height, isMobile) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9240
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_single_' + Date.now(),
    url
  ])

  await new Promise((r) => setTimeout(r, 2200))

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

    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: isMobile ? 2 : 1,
      mobile: isMobile
    })

    await send('Page.navigate', { url })
    await new Promise((r) => setTimeout(r, 1600))

    const shot = await send('Page.captureScreenshot', { format: 'png' })
    if (shot?.data) {
      const dest = path.join(OUT_DIR, outFileName)
      writeFileSync(dest, Buffer.from(shot.data, 'base64'))
      console.log(`Saved: ${outFileName}`)
    }

    ws.close()
  } catch (err) {
    console.error(`Error capturing ${outFileName}:`, err)
  } finally {
    proc.kill()
  }
}

async function main() {
  await captureSingle('http://localhost:3000/products', '04_products_short.png', 1440, 900, false)
  await captureSingle('http://localhost:3000/industries', '05_industries_short.png', 1440, 900, false)
  await captureSingle('http://localhost:3000/industries', 'mobile_05_industries_short.png', 375, 812, true)
  console.log('Finished missing short screenshots.')
}

main()
