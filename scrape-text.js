const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeText() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const pagesToVisit = [
    '/',
    '/solutions/sales',
    '/solutions/support',
    '/solutions/document-processing',
    '/solutions/ai-powered-crm',
    '/about',
    '/careers'
  ];

  const results = {};

  for (const path of pagesToVisit) {
    const url = 'https://www.wngsolutions.tech' + path;
    console.log(`Scraping text from ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
      
      const text = await page.evaluate(() => {
        // Remove scripts and styles
        document.querySelectorAll('script, style, noscript').forEach(el => el.remove());
        return document.body.innerText;
      });
      
      results[path] = text;
    } catch (e) {
      console.error(`Error scraping ${url}:`, e);
      results[path] = "Error: " + e.message;
    }
  }

  await browser.close();
  fs.writeFileSync('text-content.json', JSON.stringify(results, null, 2));
  console.log('Text scraping complete!');
}

scrapeText().catch(console.error);
