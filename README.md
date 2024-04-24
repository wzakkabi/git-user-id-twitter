# Twitter User ID Finder

## Description
The Twitter User ID Finder is a Node.js script that uses Puppeteer to scrape a Twitter user's profile page and retrieve their unique user ID using the Twitter API. The script extracts the user ID from the GraphQL response obtained by intercepting network requests made by the page.
## mac
<img width="955" alt="Screen Shot 2024-04-24 at 1 53 55 AM" src="https://github.com/wzakkabi/git-user-id-twitter/assets/114888333/2a57a83c-7f55-4703-b3cf-f7bcf7e1321c">

## kali-lunix

![lin](https://github.com/wzakkabi/git-user-id-twitter/assets/114888333/57f73748-b321-4bd1-a108-ec8b0b2fce62)

## Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager) installed on your machine
- Basic knowledge of JavaScript and asynchronous programming
- Google Chrome browser installed on your machine

## Installation
To use the Twitter User ID Finder, follow these steps:

1. Clone the repository to your local machine:
```shell
git clone https://github.com/wzakkabi/git-user-id-twitter.git
```
3. Install dependencies using npm:
```shell
npm install puppeteer
```
## Usage
To use the Twitter User ID Finder, run the following command in your terminal:
```shell
node MAC_git_user_id_twitter.js
```

## How it Works
1. The script launches a headless Chromium browser using Puppeteer, enabling JavaScript execution.
2. It creates a new page and intercepts network requests to capture API calls made by the page.
3. Upon visiting a Twitter user's profile page, it captures network requests to the Twitter GraphQL API.
4. It extracts the user ID from the JSON response received from the API.
5. Finally, it closes the browser and logs the user ID to the console.

## Customization
- Replace the `username` variable with the Twitter username of the user whose ID you want to find.
- Modify the `executablePath` option in the `puppeteer.launch()` function to match the path to your Google Chrome executable.

## Credits
This script was created by [walid zakkabi](https://github.com/wzakkabi).
## Contact
If you have any questions, suggestions, or issues regarding this script, feel free to contact [wzakkabi@gmail.com].
