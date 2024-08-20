const puppeteer = require('puppeteer');

async function getUserId(username) {
    // proxy = '35.185.196.38:3128';
    const browser = await puppeteer.launch( {
        // headless: false,
        // args: [`--proxy-server=${proxy}`] 
    });
    const page = await browser.newPage();

    await page.setRequestInterception(true);

    const requests = [];
    page.on('request', request => {
        requests.push(request.url());
        request.continue();
    });

    // const username = '/IoQNqS8666';
    await page.goto('https://www.x.com/' + username);

    await browser.close();
    // const searchString = 'https://api.x.com/graphql/E3opETHurmVJflFsUBVuUQ/UserTweets?variables=%7B%22userId%22%3A%22';
    const searchString = 'https://api.x.com/graphql/E3opETHurmVJflFsUBVuUQ/UserTweets?variables=%7B%22userId%22%3A%22';
    const foundRequest = requests.find(url => url.includes(searchString));
    if (foundRequest) {
        const idStartIndex = foundRequest.indexOf(searchString) + searchString.length;
        const idEndIndex = foundRequest.indexOf('%22%', idStartIndex);
        const id = foundRequest.substring(idStartIndex, idEndIndex);
        console.log('Found:', id);
    } else {
        console.log('ID not found.');
    }
}

getUserId('IoQNqS8666');