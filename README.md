
A React-Redux application that lists different status pages and shows particular values from those pages. Automatic refresh once every 10 minutes. Is is deployed at [Github]([https://duyanh3110.github.io/scraper-app/](https://duyanh3110.github.io/scraper-app/)).

 
## Why did you do what you did?

There are 2 websites to get data. Based on a kind of website: static/ dynamic, I have 2 ways to get the data.

 1. Static website: https://status.datadoghq.com/
	- I using `axios` to create a `GET` request to this website to get html.
	- `cheerio` package is used to get element value of DOM elements.
2. Dynamic website: https://azure.microsoft.com/en-us/status/
	- It is impossible to get data from dynamic website without using server. At this situation, I write a [JS script]([https://github.com/duyanh3110/azure-scaper/blob/master/index.js](https://github.com/duyanh3110/azure-scaper/blob/master/index.js)) and deploy into [Cloud Functions Google Clouds Platform]([https://us-central1-azure-data-258522.cloudfunctions.net/function-1](https://us-central1-azure-data-258522.cloudfunctions.net/function-1)). This script has using `puppeteer` to scrape and `cheerio` to get element's value of DOM elements.

## When someone wants to add a new status page, how would the be done?
1. They should discover the website they want to scrape data. After knowing kind of this website, they can choose the way to scrape data that has been written above.
2. Create reducer file and add it to `index.js` in `reducers` folder.
3. Add type in `types.js` and create action file( has a function to get data and put to Redux) in `actions` folder.
4. Create new component at `components` folder and display all the data.

## How much time did you spend with this task
I have done this task after 10 hours.
