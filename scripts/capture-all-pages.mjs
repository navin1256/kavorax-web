import { spawn } from 'node:child_process'
import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const OUT_DIR = 'C:\\Users\\aaa\\Downloads\\SS'
mkdirSync(OUT_DIR, { recursive: true })

const PUBLIC_PAGES = [
  { id: '01_home', url: 'http://localhost:3000/', name: 'Home' },
  { id: '02_about', url: 'http://localhost:3000/about', name: 'About' },
  { id: '03_solutions', url: 'http://localhost:3000/solutions', name: 'Solutions' },
  { id: '04_products', url: 'http://localhost:3000/products', name: 'Products' },
  { id: '05_industries', url: 'http://localhost:3000/industries', name: 'Industries' },
  { id: '06_pricing', url: 'http://localhost:3000/pricing', name: 'Pricing' },
  { id: '07_contact', url: 'http://localhost:3000/contact', name: 'Contact' },
  { id: '08_demo', url: 'http://localhost:3000/demo', name: 'Demo' }
]

const ADMIN_PAGES = [
  { id: 'admin_01_dashboard', url: 'http://localhost:3000/admin', name: 'Admin Dashboard' },
  { id: 'admin_02_enquiries', url: 'http://localhost:3000/admin/enquiries', name: 'Admin Enquiries' },
  { id: 'admin_03_solutions', url: 'http://localhost:3000/admin/solutions', name: 'Admin Solutions' },
  { id: 'admin_04_products', url: 'http://localhost:3000/admin/products', name: 'Admin Products' },
  { id: 'admin_05_industries', url: 'http://localhost:3000/admin/industries', name: 'Admin Industries' },
  { id: 'admin_06_pricing', url: 'http://localhost:3000/admin/pricing', name: 'Admin Pricing' },
  { id: 'admin_07_content', url: 'http://localhost:3000/admin/content', name: 'Admin Content' },
  { id: 'admin_08_settings', url: 'http://localhost:3000/admin/settings', name: 'Admin Settings' }
]

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const port = 9236
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + process.env.TEMP + '\\chrome_capture_all_' + Date.now(),
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
            if (data.error) {
              console.warn(`CDP error on ${method}:`, data.error.message)
              resolve(null)
            } else {
              resolve(data.result)
            }
          }
        }
        ws.addEventListener('message', handler)
        ws.send(JSON.stringify({ id: msgId, method, params }))
      })
    }

    await send('Page.enable')
    await send('Runtime.enable')

    console.log('====================================================')
    console.log('1. CAPTURING DESKTOP VIEWPORT & FULL-PAGE SCREENSHOTS (1440x900)')
    console.log('====================================================')

    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    })

    const allPages = [...PUBLIC_PAGES, ...ADMIN_PAGES]

    for (const p of allPages) {
      console.log(`\n--- Page: ${p.name} (${p.url}) ---`)
      await send('Page.navigate', { url: p.url })
      await new Promise((r) => setTimeout(r, 2000))

      // 1. Viewport / Short Screenshot (Above the fold)
      const shortShot = await send('Page.captureScreenshot', { format: 'png' })
      if (shortShot?.data) {
        const shortFile = path.join(OUT_DIR, `${p.id}_short.png`)
        writeFileSync(shortFile, Buffer.from(shortShot.data, 'base64'))
        console.log(`  [OK] Saved viewport short: ${p.id}_short.png`)
      } else {
        console.warn(`  [WARN] Failed to capture short screenshot for ${p.name}`)
      }

      // 2. Scroll through page to trigger all scroll reveals
      await send('Runtime.evaluate', {
        expression: `(async () => {
          const totalHeight = document.documentElement.scrollHeight;
          const step = Math.min(window.innerHeight * 0.8, 600);
          for (let y = 0; y < totalHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 60));
          }
          window.scrollTo(0, 0);
        })()`,
        awaitPromise: true
      })
      await new Promise((r) => setTimeout(r, 800))

      // 3. Full Page Screenshot
      let fullShot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true
      })
      if (!fullShot?.data) {
        // Fallback without captureBeyondViewport if page is too large
        fullShot = await send('Page.captureScreenshot', { format: 'png' })
      }
      if (fullShot?.data) {
        const fullFile = path.join(OUT_DIR, `${p.id}_full.png`)
        writeFileSync(fullFile, Buffer.from(fullShot.data, 'base64'))
        console.log(`  [OK] Saved full page: ${p.id}_full.png`)
      } else {
        console.warn(`  [WARN] Failed to capture full screenshot for ${p.name}`)
      }
    }

    console.log('\n====================================================')
    console.log('2. CAPTURING MOBILE VIEWPORT & FULL-PAGE SCREENSHOTS (375x812)')
    console.log('====================================================')

    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    })

    for (const p of PUBLIC_PAGES) {
      console.log(`\n--- Mobile: ${p.name} (${p.url}) ---`)
      await send('Page.navigate', { url: p.url })
      await new Promise((r) => setTimeout(r, 1800))

      // Mobile Short (Viewport)
      const mShort = await send('Page.captureScreenshot', { format: 'png' })
      if (mShort?.data) {
        const mShortFile = path.join(OUT_DIR, `mobile_${p.id}_short.png`)
        writeFileSync(mShortFile, Buffer.from(mShort.data, 'base64'))
        console.log(`  [OK] Saved mobile short: mobile_${p.id}_short.png`)
      }

      // Scroll to trigger reveals
      await send('Runtime.evaluate', {
        expression: `(async () => {
          const totalHeight = document.documentElement.scrollHeight;
          const step = 500;
          for (let y = 0; y < totalHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 50));
          }
          window.scrollTo(0, 0);
        })()`,
        awaitPromise: true
      })
      await new Promise((r) => setTimeout(r, 600))

      // Mobile Full
      let mFull = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true
      })
      if (!mFull?.data) {
        mFull = await send('Page.captureScreenshot', { format: 'png' })
      }
      if (mFull?.data) {
        const mFullFile = path.join(OUT_DIR, `mobile_${p.id}_full.png`)
        writeFileSync(mFullFile, Buffer.from(mFull.data, 'base64'))
        console.log(`  [OK] Saved mobile full: mobile_${p.id}_full.png`)
      }
    }

    ws.close()
    console.log('\n====================================================')
    console.log('ALL SCREENSHOTS SUCCESSFULLY RECORDED TO: ' + OUT_DIR)
    console.log('====================================================')
  } catch (err) {
    console.error('Fatal error during capture:', err)
  } finally {
    proc.kill()
  }
}

run()
