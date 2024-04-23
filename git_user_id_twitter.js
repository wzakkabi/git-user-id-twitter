const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setRequestInterception(true);

    const requests = [];
    page.on('request', request => {
        requests.push(request.url());
        request.continue();
    });

    const username = '/zakkabi';
    await page.goto('https://www.twitter.com' + username);

    await browser.close();
    const searchString = 'https://pbs.twimg.com/profile_banners/';
    const foundRequest = requests.find(url => url.includes(searchString));

    if (foundRequest) {
        const idStartIndex = foundRequest.indexOf(searchString) + searchString.length;
        const idEndIndex = foundRequest.indexOf('/', idStartIndex);
        const id = foundRequest.substring(idStartIndex, idEndIndex);
        console.log('Found:', id);
    } else {
        console.log('ID not found.');
    }
})();
