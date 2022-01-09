const fs = require('fs');

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://diablo2.io/uniques/');

    await page.waitForTimeout(5000);

    const uniqs = await page.evaluate(() => {
        let items = document.querySelectorAll('div.forumbg  article');
        const results = [];

        items.forEach((item) => {
            const a = item.querySelector('a');
            const div = a.querySelector('div');
        
            results.push({
                image_url:  ('https://diablo2.io' + div.getAttribute('data-background-image')),
                name: item.querySelector('h3').innerText,
                desc: item.querySelector('p.z-smallstats').innerText
            });
        });

        return results;
    })

    browser.close();

    fs.writeFileSync('/results/uniqs.json', JSON.stringify(uniqs, null, 2));
})()