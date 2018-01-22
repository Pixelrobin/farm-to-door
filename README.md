# Farm to Door
FBLA E-Business website

## Structure
The entire site is built on top of the `js-buy-sdk` from Shopify and `vue.js` for the most part. The html is written in Pug, and the css is written without a pre-processor. The Shopify backend is a developer site, so it doesn't actually allow making purchases unless enabled and moved to a payed account.

Because of time limitaitons, the site currently doesn't function correctly on internet explorer. That will change soon.

## Files
At the moment, the site is hosted straight from the root. However, The html files are compiled from Pug files and not written by hand. Here is a brief overview of the repository:
* The `css` folder contains all the css
* The `dist` folder is currently being un-used. Eventually it will be where the site is hosted from instead of the root
* The `font` folder contains web fonts that the site uses (namely Bebas Neue and Font Awesome)
* The `js` folder contains the site javascript `js/client` is the global javascript file, while every page has it's own local file (for instance, the shop page usesu `js/shop.js`.
* The `res` folder contains misc. resources (images, etc) used by the site.
* The `views` folder contains all the `.pug` files that are rendered as the `.html` files in the root. `views/deps/layout.pug` is the master site layout, while every site page is located as `views/*.pug` and extend off the layout.

## Setting up the site for editing
Requires `gulp-cli` npm package installed globally
Requires `http-server` package too if you decide to use `npm run start` to run the static development server.

```
git clone https://github.com/Pixelrobin/pixelrobin.github.io.git farm-to-door
cd farm-to-door
npm install
```
To start building the views and css, use `npm run build` or `gulp`
To start building the javascript, use `gulp js` (This will be eventually be merged with the standard build task)
To start a development server, use whatever static hosting you'd like. `npm run start` uses `http-server`

## FBLA 2018 Topic
Develop an e-business website for your new “fresh food” (i.e. prepared meals, ingredients to make meals, natural foods, etc.) home delivery service for your community of 250,000 residents. Since it is a delivery service, there is room to expand your geographic delivery area. Give your business a name and a logo. Your service will have a variety of delivery options to meet the needs of different types of customers (i.e. meat, vegetarian, vegan, family, couples, gluten-free, etc.). The website should clearly identify the target market locations and its product availability. The website should allow customers to check availability of products, place and pay for orders online as a one-time customer, or become a member and set up plans for a calendar year. The site should also contain a contact page.

## FBLA 2018 Guidelines
* Websites must be available for viewing on the Internet at the time of judging.
* No changes may be made to the website after the official entry date.
* Sites should be designed to allow for viewing on as many different platforms as possible.
* If using a shopping cart, it does not need to be activated.
* Explanations should include development and design process, use and implementation of innovative *technology, and use and development of media elements.
* The website should be shown to the judges.
