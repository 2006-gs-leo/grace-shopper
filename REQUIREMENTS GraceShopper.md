## Requirements

The requirements below are broken into separate **tiers**

#### Tier 1: MVP Shopping Experience

<details>

### Frontend

* [ ] Write a component to display a list of all available products so a user can pick from a variety. (at least their names and images)
* [ ] Write a component to display a single product so that a user can see more details.

### ToBeLoggedInOrNOTtoBeThat

* [ ] create an account so that a user can have a logged-in versus non-logged in experience.

### logged-in customer

* [ ] have a persistent cart so that a user can revisit and pick up where they left off.
* [ ] Logged-in-user across multiple devices:

- [ ] If logged in on their mobile device and add some items to their cart. When they open the browser on their laptop and log in, they should see those items in their cart.

* [ ] No one else should be able to edit a user's cart except a user

### Adminisstrator Role

* [ ] have validated data to ensure reliability. I.E. each customer that creates an account should only be able to do so once with a single email address.
* [ ] have full rights to make baceknd requests to add, edit, and remove products. No one else should have access.
* [ ] view user information. No one else should have access.

### As an engineer

* [ ] have a well-seeded database so that I am able to simulate a number of different scenarios for the user stories below. By doing this, you really set yourselves up to tackle many of the points throughout the tiers. In the long run, this will save you, potentially, tons of time.
* [ ] have a well-seeded database so that For example, seed hundreds of products with dummy data so that when you get to the “pagination” user story, you won’t have to worry about adding more products.
* [ ] Likewise, add a bunch of users with products in their carts so editing the cart can be worked on without already having the “add to cart” functionality built out.
* [ ] user data to be secure so that no one can unrightfully manipulate information.

### TheCart

* [ ] The cart should be editable
* [ ] add a product to a user's cart so that he/she can collect their desired products in one place.
* [ ] remove a product in the cart.
* [ ] have a persistent cart so that a user can revisit and pick up where they left off.
* [ ] change the quantity of a product the cart.
* [ ] No one else should be able to edit a user's cart except the user. Cart is unique

### TheCheckout

* [ ] "checkout" the items in the cart so that a user can purchase their desired goods
* [ ] Think of a typical user experience on popular websites from a guest user and logged-in user perspective.
* [ ] You can just start with by simulating the experience of checking out with a simple confirmation page.

### Deployment

* [ ] access a deployed version of the website so that a user can browse and purchase products.

### Backend

* [ ] Write a route to serve up all products
* [ ] Write a route to serve up all users

* Write a `cars` models with the following information:

  * [ ] name - not empty or null
  * [ ] model - with a default value
  * [ ] description - extremely large text
  * [ ] year - number

* Write a `users` models with the following information:

  * [ ] name - not empty or null
  * [ ] email - not empty or null
  * [ ] imageUrl -

### TIER 2: E-Commerce Essentials

### As a customer

* [ ] see all products that belong to a certain category. Keep this simple. For example, a product can only belong to one category
* [ ] explore an aesthetically pleasing website so I can easily navigate around and enjoy the experience (UI/UX)
  * [ ] This includes front-end data validations. For example, if certain fields of a form are required and must be in a specific format, this is obvious to the user.
* [ ] FRONT END STORAGE - Guest-only: if a user doesnt want to create an account, but they want their cart to persist between browser refreshes.
* [ ] Guest-to-logged-in-user: Initially, a user is not logged in, and they add items to their cart. When they eventually log in, they want to see those same items they added when they were logged in still in their cart, in addition to the items they may have had in their cart from a previous logged in session.

### As a logged-in customer

* [ ] see their order history so that a user can remember their previously purchased items and their prices at the time of purchase.
* [ ] view and edit their user profile so they can update their information when necessary.
* [ ] log in through third-party authentication so they can avoid creating an account specific to the website. - Google OAuth

### As an administrator

* [ ] allow customers to have a variety of payment method options in order to increase checkout conversion
* [ ] Begin by integrating Stripe, and, if interested, dive into integrating PayPal, Venmo, Braintree, or Bitcoin
* [ ] edit products and manage users through a dashboard so I can easily make changes and assessments as necessary

### As an engineer

* [ ] continuous integration and delivery (deployment) of the codebase so that there are lower rates of release failure. Follow link that was given - https://www.atlassian.com/continuous-delivery/continuous-integration

#### TIER 3: Extra Features & Flair

<details>

### As an administrator

* [ ] ensure accurate product inventory so that we can be sure only available products are sold. For example, integrating Facebook to create a post of a product's name, description, photo and link.
* [ ] Likewise, if a customer attempts to purchase a higher quantity of an item that is available, they will be alerted/notified that there isn't enough inventory.
* [ ] offer customers discounts through promo codes so that we can incentivize purchases.

### As a customer,

## Receive Notifications

* [ ] receive an email confirmation when placing an order so that I can easily reference it when needed without visiting my account.
* [ ] be notified when certain events occur so that I am informed of my actions. For example, when I add a product to my cart, there is a toast notification that pops up in the corner of the page with an appropriate message for that action

## Have A Seamless Experience

* [ ] navigate the website successfully regardless of whether or not I am handicapped so that my experience isn't hampered. This is a great opportunity to dive into ADA Compliance (screen-reader friendliness, keyboard navigation, colorblind-friendly, etc.).
* [ ] view a display to know when content is loading or there is an error so that I can manage my expectations.
  * [ ] For example, loading spinners while the frontend is waiting for a backend response.
  * [ ] As a customer, if I visit a product page that doesn't exist, notify me that it doesn't and bring me to all products. Likewise, if I visit a page that outright doesn't exist, navigate me to the landing page.

## Have A User-Friendly Experience

* [ ] filter through all products. This is an opportunity to dive into a "search" input field. You can filter all products using vanilla JavaScript, or look into Algolia (search-as-a-service).
* [ ] browse through all products in a digestible way so that the user is not overwhelmed with an endless list of products.
* [ ] Dive into pagination here! This goes back to the initial seed in Tier 1. If you have a database seeded with thousands of products, there shouldn't be any blockers in order to tackle this user story. It also begs the question of whether we should fetch all of the products from the database or limit the response in intervals (e.g. 25 at a time) and show more only through a user action (e.g. clicking a “Next”/”Show More” button)
* [ ] Keep in mind, if you already have the product filter feature built out, can you get pagination to work on the results as well?
* [ ] view featured products so that I can get inspiration. For example, display the five most purchased products within a given period of time (i.e. yesterday or last week), or the most recently added products.
* [ ] add products to a wishlist so that I can differentiate products I would like to purchase now (cart) versus products I might be interested in purchasing in the future (wishlist).

</details>

#### TIER 4: S Tier

<details>

### As a customer

* [ ] post products to my social media accounts so that I can share with my friends/followers. For example, integrating Facebook to create a post of a product's name, description, photo and link.
* [ ] receive recommended products so that I can have a customized user experience and get inspiration. For example, based on products viewed (similar products; matching "tags").
* [ ] feel like the website experience is customized for my native language.
* [ ] Internationalization (i19n). The process of designing and building an application to facilitate localization. The main concern is that applications can be adapted to various languages and regions without engineering changes
* [ ] Localization (i10n). The cultural and linguistic adaptation of an internationalized application to two or more culturally-distinct markets. For example, the website while the main language of the United States and United Kingdom is English, the currency (\$ vs. £) and date format (12/31/2020 vs. 31/12/2020) vary.

### As an administrator

* [ ] visualize relevant KPIs (key performance indicators) in the admin dashboard so that I can make educated business decisions. For example, a line graph of total sales over time

### As a CEO/CTO

* [ ] the website to allow for multi tenancy so that we can potentially white label the application and allow users to create "shops." Think Etsy and Amazon, where the sellers can have their own "shops" within the platforms.

</details>
