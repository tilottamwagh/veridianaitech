const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const baseUrl = 'https://www.wngsolutions.tech';
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

async function downloadImage(url, filepath) {
  if (url.startsWith('data:')) return; // Skip base64
  
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        res.resume();
        resolve(); // Ignore failed downloads silently to continue
      }
    }).on('error', (err) => {
      resolve(); // Ignore errors
    });
  });
}

async function scrapeImages() {
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

  const downloadedUrls = new Set();
  const imagesFound = [];

  for (const pagePath of pagesToVisit) {
    const url = baseUrl + pagePath;
    console.log(`Visiting ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
      
      const imageUrls = await page.evaluate(() => {
        const urls = new Set();
        // Extract from <img> tags
        document.querySelectorAll('img').forEach(img => {
          if (img.src) urls.add(img.src);
        });
        
        // Extract from background-image
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
          const style = window.getComputedStyle(el);
          const bg = style.backgroundImage;
          if (bg && bg !== 'none' && bg.includes('url(')) {
            const matches = bg.match(/url\(['"]?(.*?)['"]?\)/);
            if (matches && matches[1]) {
              // Convert relative to absolute
              const absoluteUrl = new URL(matches[1], document.baseURI).href;
              urls.add(absoluteUrl);
            }
          }
        });
        
        return Array.from(urls);
      });

      for (const imgUrl of imageUrls) {
        if (!downloadedUrls.has(imgUrl) && imgUrl.startsWith(baseUrl)) {
          downloadedUrls.add(imgUrl);
          
          // Get the path part of the URL (e.g. /assets/img.png)
          const urlObj = new URL(imgUrl);
          const pathname = urlObj.pathname;
          
          if (pathname === '/') continue;
          
          const destPath = path.join(publicDir, pathname);
          const destDir = path.dirname(destPath);
          
          if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
          
          console.log(`Downloading ${imgUrl} to ${destPath}`);
          await downloadImage(imgUrl, destPath);
          imagesFound.push({ url: imgUrl, localPath: pathname });
        }
      }
    } catch (e) {
      console.error(`Error visiting ${url}: ${e.message}`);
    }
  }

  await browser.close();
  
  // Save the mapping so we know what images exist
  fs.writeFileSync(path.join(__dirname, 'scraped-images.json'), JSON.stringify(imagesFound, null, 2));
  console.log('Scraping complete!');
}

scrapeImages().catch(console.error);
