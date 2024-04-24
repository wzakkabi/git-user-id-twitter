const puppeteer = require('puppeteer');
const https = require('https');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' // Replace this with your actual path
      });  
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    await page.setJavaScriptEnabled(true);
    
    const username = '/zakkabi';

    const requests = [];
    let map = {};
    page.on('request', request => {
        request.continue();
        if (request.url().includes('api.twitter.com/graphql') && request.url().includes('UserByScreenName')) {
            https.get(request.url(), {headers: request.headers()}, (res) => {
                res.on('data', (d) => {
                    const data = d.toString();
                    try {
                        // Parse the JSON data into a JavaScript object
                        const jsonData = JSON.parse(data);
                        // Check if the parsed data not contains 'errors' property
                        if (!jsonData.errors) {
                          const restId = jsonData.data.user.result.rest_id;
                          console.log('user_id:', restId);
                        }
                      } catch (error) {
                        console.error('user_id not found');
                      }
                });
                res.on('end', () => {
                    browser.close();
                })
            });
        }
    });
    await page.goto('https://www.twitter.com' + username);
})();