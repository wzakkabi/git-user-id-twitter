const puppeteer = require('puppeteer');
const https = require('https');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    await page.setJavaScriptEnabled(true);
    const username = '/elonmusk';

    const requests = [];
    let map = {};
    page.on('request', request => {
        console.log(request.url());
        request.continue();
        if (request.url().includes('api.twitter.com/graphql') && request.url().includes('UserByScreenName')) {
            https.get(request.url(), {headers: request.headers()}, (res) => {
                res.on('data', (d) => {
                    process.stdout.write(d);
                });
                res.on('end', () => {
                    browser.close();
                })
            });
        }
    });
    await page.goto('https://www.twitter.com' + username);
})();