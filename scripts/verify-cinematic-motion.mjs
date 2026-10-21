import http from 'http';
import { spawn } from 'child_process';
import WebSocket from 'ws';

const DEV_SERVER_URL = 'http://localhost:3000';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DEBUG_PORT = 9224;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

class CdpClient {
  constructor(ws) {
    this.ws = ws;
    this.id = 1;
    this.callbacks = new Map();

    ws.on('message', (msg) => {
      const data = JSON.parse(msg.toString());
      if (data.id && this.callbacks.has(data.id)) {
        const { resolve, reject } = this.callbacks.get(data.id);
        this.callbacks.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expr) {
    const res = await this.send('Runtime.evaluate', {
      expression: expr,
      returnByValue: true,
      awaitPromise: true,
    });
    if (res.exceptionDetails) {
      throw new Error(JSON.stringify(res.exceptionDetails));
    }
    return res.result?.value;
  }
}

async function runVerification() {
  console.log('=====================================================');
  console.log('KAVORAX GLOBAL — CINEMATIC MOTION VERIFICATION');
  console.log('=====================================================');

  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--user-data-dir=' + (process.env.TEMP || 'C:\\Windows\\Temp') + '\\chrome_cinematic_test',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    DEV_SERVER_URL,
  ]);

  let cdp;
  const consoleLogs = [];
  const networkErrors = [];

  try {
    let connected = false;
    for (let i = 0; i < 20; i++) {
      await sleep(500);
      try {
        const list = await fetchJson(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
        const page = list.find((p) => p.type === 'page') || list[0];
        if (page && page.webSocketDebuggerUrl) {
          const wsUrl = page.webSocketDebuggerUrl;
          const ws = new WebSocket(wsUrl);
          await new Promise((res, rej) => {
            ws.on('open', res);
            ws.on('error', rej);
          });
          cdp = new CdpClient(ws);
          connected = true;
          break;
        }
      } catch {
        // Retry connecting to DevTools endpoint
      }
    }

    if (!connected) throw new Error('Could not connect to Headless Chrome');
    console.log('[CDP] Connected successfully.');

    await cdp.send('Page.enable');
    await cdp.send('DOM.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Network.enable');

    cdp.ws.on('message', (msg) => {
      const data = JSON.parse(msg.toString());
      if (data.method === 'Runtime.consoleAPICalled') {
        const type = data.params.type;
        const text = data.params.args?.map((a) => a.value || a.description).join(' ');
        if (type === 'error' || type === 'warning') {
          consoleLogs.push(`[Console ${type}] ${text}`);
        }
      }
      if (data.method === 'Network.responseReceived') {
        const resp = data.params.response;
        if (resp.status >= 400) {
          networkErrors.push(`${resp.status} ${resp.url}`);
        }
      }
    });

    // 1. DESKTOP VIEWPORT SETUP (1440x900)
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });

    console.log('[1/7] Navigating to homepage...');
    await cdp.send('Page.navigate', { url: DEV_SERVER_URL });
    await sleep(2500); // Allow Vue hydration and initial hero reveals

    // 2. HERO ANIMATION & ATMOSPHERE VERIFICATION
    console.log('[2/7] Verifying Hero Animation & Atmospheric Drift...');
    const heroStatus = await cdp.eval(`(() => {
      const img = document.querySelector('.hero-cinematic-bg img');
      const ambient = document.querySelector('.animate-ambient-drift');
      const h1 = document.querySelector('h1');
      const h1Words = Array.from(h1?.querySelectorAll('span[aria-hidden="true"] > span > span') || []);
      const ctas = document.querySelectorAll('.hero-cinematic-bg a button');

      const imgStyle = img ? window.getComputedStyle(img) : null;
      const h1WordsVisible = h1Words.length > 0 && h1Words.every(w => {
        const s = window.getComputedStyle(w);
        return parseFloat(s.opacity) > 0.8;
      });

      return {
        hasImg: !!img,
        imgHasDriftClass: img?.classList.contains('animate-hero-drift'),
        hasAmbientDrift: !!ambient,
        h1AriaLabel: h1?.getAttribute('aria-label'),
        h1InnerText: h1?.innerText?.trim(),
        totalH1Words: h1Words.length,
        h1WordsAllVisible: h1WordsVisible,
        ctasCount: ctas.length,
        forwardWordHighlighted: h1Words.some(w => w.innerText.includes('forward') && w.className.includes('text-brand'))
      };
    })()`);
    console.log('Hero Audit Result:', JSON.stringify(heroStatus, null, 2));

    // 3. TEXT SELECTION & ACCESSIBILITY DE-DUPLICATION CHECK
    console.log('[3/7] Verifying Text Selection & Screen Reader Text Integrity...');
    const textIntegrity = await cdp.eval(`(() => {
      const h1 = document.querySelector('h1');
      const h2Words = document.querySelectorAll('[aria-label]');
      const srOnlyElements = document.querySelectorAll('.sr-only');

      // Check if sr-only has select-none
      const srOnlySelectNone = Array.from(srOnlyElements).every(el => {
        const s = window.getComputedStyle(el);
        return s.userSelect === 'none' || el.classList.contains('select-none');
      });

      // Sample headings
      const samples = Array.from(h2Words).slice(0, 4).map(el => ({
        tag: el.tagName,
        ariaLabel: el.getAttribute('aria-label'),
        innerText: el.innerText?.trim()
      }));

      return {
        srOnlyElementsCount: srOnlyElements.length,
        srOnlySelectNone,
        samples
      };
    })()`);
    console.log('Text Integrity Result:', JSON.stringify(textIntegrity, null, 2));

    // 4. SCROLL PROGRESS & SCROLLYTELLING VERIFICATION (Full Page Scroll)
    console.log('[4/7] Simulating Page Scroll for Section Reveals & Telemetry...');
    
    // Scroll down through all sections to trigger observers
    for (let scrollY = 0; scrollY <= 7500; scrollY += 400) {
      await cdp.eval(`window.scrollTo(0, ${scrollY})`);
      await sleep(80);
    }
    await sleep(600);

    // Scroll directly into BrandStatement center to measure active scroll progress
    await cdp.eval(`(() => {
      const bs = document.getElementById('brand-statement');
      if (bs) bs.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`);
    await sleep(400);

    const sectionReveals = await cdp.eval(`(() => {
      // 1. Chapter 01 Manifesto ScrollTextReveal
      const chapter1Quote = document.querySelector('#editorial-intro blockquote, #editorial-intro h2');
      const ch1Words = chapter1Quote ? Array.from(chapter1Quote.querySelectorAll('span[aria-hidden="true"] > span')) : [];
      const ch1Awakened = ch1Words.filter(w => parseFloat(window.getComputedStyle(w).opacity) > 0.8).length;

      // 2. Connected Architecture SVG Bus
      const primaryPath = document.querySelector('.draw-path-primary');
      const secondaryPath = document.querySelector('.draw-path-secondary');
      const nodes = document.querySelectorAll('.draw-node');
      const activePulse = document.querySelector('.draw-node .animate-ping');

      const primaryOffset = primaryPath ? window.getComputedStyle(primaryPath).strokeDashoffset : null;
      const secondaryOffset = secondaryPath ? window.getComputedStyle(secondaryPath).strokeDashoffset : null;

      // 3. Product Showcases Telemetry Bars & Connectors
      const telemetryBars = document.querySelectorAll('#product-showcases .h-20 .w-full');
      const barHeights = Array.from(telemetryBars).map(b => window.getComputedStyle(b).height);
      const barsSurged = barHeights.some(h => parseFloat(h) > 20);

      // 4. Brand Statement Scroll-Progress
      const brandQuote = document.querySelector('#brand-statement blockquote, #brand-statement [aria-label*="empower"]');
      const brandWords = brandQuote ? Array.from(brandQuote.querySelectorAll('span[aria-hidden="true"] > span')) : [];
      const brandAwakened = brandWords.filter(w => parseFloat(window.getComputedStyle(w).opacity) > 0.8).length;

      return {
        ch1ManifestoWordsCount: ch1Words.length,
        ch1ManifestoAwakenedCount: ch1Awakened,
        primaryPathOffset: primaryOffset,
        secondaryPathOffset: secondaryOffset,
        nodesCount: nodes.length,
        hasActivePulse: !!activePulse,
        telemetryBarsCount: telemetryBars.length,
        barsSurged,
        sampleBarHeights: barHeights.slice(0, 5),
        brandWordsCount: brandWords.length,
        brandAwakenedCount: brandAwakened
      };
    })()`);
    console.log('Section & SVG Animation Result:', JSON.stringify(sectionReveals, null, 2));

    // 5. TEST INTERACTION: CLICK NODE IN CONNECTED ARCHITECTURE
    console.log('[5/7] Testing interactive layer switch in ConnectedArchitectureVisual...');
    await cdp.eval(`(() => {
      // Click Layer 02 Node
      const node2 = document.querySelectorAll('.draw-node')[1];
      if (node2) {
        node2.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    })()`);
    await sleep(400);

    const postClickStatus = await cdp.eval(`(() => {
      const activeNode = document.querySelectorAll('.draw-node')[1];
      const ping = activeNode?.querySelector('.animate-ping');
      const activeLayerCard = document.querySelector('.border-brand\\\\/50');
      return {
        hasPingOnNode2: !!ping,
        activeCardTitle: activeLayerCard?.querySelector('.font-editorial')?.innerText?.trim()
      };
    })()`);
    console.log('Interactive Layer Switch Result:', JSON.stringify(postClickStatus, null, 2));

    // 6. MULTI-VIEWPORT RESPONSIVENESS & OVERFLOW CHECKS
    console.log('[6/7] Auditing Multi-Viewport Responsiveness (375px, 768px, 1024px, 1440px)...');
    const viewports = [
      { name: 'Mobile', width: 375, height: 812, mobile: true },
      { name: 'Tablet', width: 768, height: 1024, mobile: false },
      { name: 'Laptop', width: 1024, height: 768, mobile: false },
      { name: 'Desktop', width: 1440, height: 900, mobile: false },
    ];

    const viewportResults = [];
    for (const vp of viewports) {
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.mobile,
      });
      await cdp.eval(`window.scrollTo(0, 0)`);
      await sleep(350);

      const check = await cdp.eval(`(() => {
        const docW = document.documentElement.scrollWidth;
        const bodyW = document.body.scrollWidth;
        const innerW = window.innerWidth;
        const h1 = document.querySelector('h1');
        const h1Rect = h1 ? h1.getBoundingClientRect() : null;

        return {
          innerWidth: innerW,
          docScrollWidth: docW,
          bodyScrollWidth: bodyW,
          hasOverflow: docW > innerW,
          h1Width: h1Rect ? Math.round(h1Rect.width) : null
        };
      })()`);
      viewportResults.push({ viewport: vp.name, ...check });
    }
    console.log('Viewport Audit Results:', JSON.stringify(viewportResults, null, 2));

    // 7. PREFERS-REDUCED-MOTION VERIFICATION
    console.log('[7/7] Verifying prefers-reduced-motion: reduce overrides...');
    await cdp.send('Emulation.setEmulatedMedia', {
      features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
    });
    await cdp.send('Page.navigate', { url: DEV_SERVER_URL });
    await sleep(1500);

    const reducedMotionAudit = await cdp.eval(`(() => {
      const h1Words = Array.from(document.querySelectorAll('h1 span[aria-hidden="true"] > span > span'));
      const allWordsVisible = h1Words.every(w => {
        const s = window.getComputedStyle(w);
        return parseFloat(s.opacity) >= 0.99;
      });

      const img = document.querySelector('.hero-cinematic-bg img');
      const imgStyle = img ? window.getComputedStyle(img) : null;

      const primaryPath = document.querySelector('.draw-path-primary');
      const pathOffset = primaryPath ? window.getComputedStyle(primaryPath).strokeDashoffset : null;

      return {
        mediaMatches: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        allH1WordsImmediatelyVisible: allWordsVisible,
        imgAnimationDuration: imgStyle?.animationDuration,
        primaryPathOffset: pathOffset
      };
    })()`);
    console.log('Reduced Motion Audit Result:', JSON.stringify(reducedMotionAudit, null, 2));

    console.log('=====================================================');
    console.log('VERIFICATION SUMMARY');
    console.log('=====================================================');
    console.log(`Console Warnings/Errors: ${consoleLogs.length}`);
    if (consoleLogs.length > 0) console.log(consoleLogs);
    console.log(`Failed Network Requests: ${networkErrors.length}`);
    if (networkErrors.length > 0) console.log(networkErrors);
    console.log('All automated checks executed successfully!');

  } catch (err) {
    console.error('Verification failed with error:', err);
  } finally {
    if (cdp?.ws) cdp.ws.close();
    chromeProc.kill();
  }
}

runVerification();
