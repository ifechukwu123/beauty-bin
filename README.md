# Project Title

Beauty Bin

## Overview

Beauty Bin is formulated to aid organizing and tracking makeup products. It displays an online inventory of the products you own & notifies you when it's time to throw them out.

### Problem Space

Many people accumulate a large collection of makeup products, making it challenging to keep track of when items were opened and when they expire. Using expired makeup can result in skin issues, eye irritations and decreased product effectiveness. Additionally, there is no law that requires cosmetics to have a specific expiration date on their packaging so it becomes quite normal to hold onto old products. Beauty Bin simplifies these challenges by allowing users log their makeup details, including opening dates, and providing timely notifications when products approach their expiration. This helps users prioritize safety, reduce waste, and maintain an organized beauty routine with minimal effort & more energy to have fun! :blush:

### User Profile

- Mostly makeup enthusiasts with busy lifestyles & many products. However, anyone who uses makeup can use the app including less experienced users with a few products.

### Features

- As a user, I want to add makeup products to my inventory by inputting details like name, brand, product category, open date & batch number so that I an keep track of them effectively
- As a user, I want to be able to update product details or delete products from my inventory so that my collection stays up to date & accurate
- As a user, I want the app to calculate the expiry date based on product type and input details so that I know when to stop using it
- As a user, I want to be able to organize and/or sort my products by expiration date or category so I can easily find what I need
- As a user, I want to be able to manually set expiration dates for certain products so that I can account for unique items
- As a user, I want to be notified when my product nears expiration & when it expires
- As a user, I want to be able to add products to a wishlist so that I know what I need to restock

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- Javascript
- Client libraries

  - React
  - React Router
  - Formik
  - Axios
  - Framer Motion
  - React Calendar
  - Netlify

- Server libraries
  - MySQL with knex.js
  - Express
  - Firebase Cloud Messaging
  - Heroku

### APIs

Not sure yet :confounded:

### Sitemap

- Home page : Main landing page of the app introducing features
- Bin page: Page displaying expired or soon-to-be expired products
- Add Product page : includes a form to collect details about a product
- Inventory page : Displays all user's makeup products
- Product details page : Displays information about a specific product
- WishList page : Displays products the user wants to get

### Mockups

#### Home Page

![](/assets/images/homepage.png)

#### Bin Page

![](/src/assets/images/binPage.png)

#### Add Product Page

![](/src/assets/images/addProductPage.png)

#### Inventory Page

![](/src/assets/images/inventoryPage.png)

#### Product Details Page

![](/src/assets/images/productDetail.png)

#### WishList Page

![](/src/assets/images/wishlistPage.png)

### Data

![](/src/assets/images/data.png)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

**GET /products**
Gets all makeup products from the inventory

Response:

```
[
  {
    "id": 1,
    "name": "Setting Powder",
    "brand": "Laura Mercier",
    "batchNumber": "7229MM",
    "category": "Face",
    "dateOpened": "1732123918253",
    "expirationDate": "1752124458253",
  },
  ...
]
```

**GET /products/expiring-soon**
Gets all makeup products from the inventory that are expiring soon

Response:

```
[
  {
    "id": 1,
    "name": "Setting Spray",
    "brand": "Charlotte Tilbury",
    "batchNumber": "7229MM",
    "category": "Face",
    "dateOpened": "1732123918253",
    "expirationDate": "1752124458253",
  },
  ...
]
```

**GET /products/expired**
Gets all makeup products from the inventory that are expired

Response:

```
[
  {
    "id": 1,
    "name": "Lip Stick",
    "brand": "Lip Bar",
    "batchNumber": "7229MM",
    "category": "Lips",
    "dateOpened": "1732123918253",
    "expirationDate": "1752124458253",
  },
  ...
]
```

**GET /products/:id**
Gets a specific makeup product

Parameter:

- id: Product id as a number

Response:

```
{
  "id": 5,
  "name": "Blush",
  "brand": "Pat Mcgrath",
  "batchNumber": "7229MM",
  "category": "Face",
  "dateOpened": "1732123918253",
  "expirationDate": "1752124458253",
}
```

**POST /products/**
Adds a new makeup product to the inventory

Response:

```
{
  "id": 15,
  "name": "Contour",
  "brand": "Fenty",
  "batchNumber": "7229MM",
  "category": "Face",
  "dateOpened": "1732123918253",
  "expirationDate": "1752124458253",
}
```

**DELETE /products/:id**
Deletes a specific makeup product from the inventory

Parameter:

- id: Product id as a number

Response:

```
Status code 204
```

**PUT /products/:id**
Edits a specific makeup product

Parameter:

- id: Product id as a number

Response:

```
{
  "id": 5,
  "name": "Blush",
  "brand": "Elf",
  "batchNumber": "7229MM",
  "category": "Face",
  "dateOpened": "1732123918253",
  "expirationDate": "1752124458253",
}
```

**GET /categories**
Gets all categories of makeup products

Response:

```
[
  {
    "id": 1,
    "name": "Face",
  },
  {
    "id": 2,
    "name": "Lips",
  },
  {
    "id": 3,
    "name": "Eyes",
  },
  ...
]
```

**GET /wishlist**
Fetch all items in the wishlist

Response:

```
[
  {
    "id": 1,
    "name": "Setting Spray",
    "brand": "Elf",
  },
  {
    "id": 2,
    "name": "Lip Liner",
    "brand": "Charlotte Tilbury",
  },
  {
    "id": 3,
    "name": "Concealer",
    "brand": "Too Faced",
  },
  ...
]
```

**POST /wishlist/**
Adds a new makeup product to the wishlist

```
{
  "id": 15,
  "name": "Contour",
  "brand": "Fenty",
}
```

**DELETE /wishlist/:id**
Deletes a specific makeup product from the wishlist

Parameter:

- id: Wishlist id as a number

Response:

```
Status code 204
```

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

- Set up Development Environment

  - Initialize the React frontend, Express backend, and database

- Set up Product CRUD

  - Initialize API endpoints for adding, updating, and deleting products.
  - Set up mock data

- Feature: Homepage

  - Set up react routes, create hompage & navigation links

- Feature: List products

  - Create GET /products endpoint
  - Display product list

- Feature: Bin page

  - Create GET /products/expiring-soon , /products/expired endpoints
  - Display products on the page

- Feature: Add Product Page

  - Create POST /products/:id
  - Implement Product form on frontend
  - Test that it creates product & displays on product page

- Feature: Product details page

  - Create GET /products/:id , DELETE /products/:id & PUT /products/:id
  - Create page to view product details
  - Implement Edit & Delete Modals

- Feature: Wishlist

  - Create GET /wishlist, POST /wishlist & DELETE /wishlist/:id
  - Create page to display pages

- Feature: Notifications

  - Set up web notifications and time range to do so

- Style all pages

- Feature: Sorting

  - Implement ability to sort products on inventory page by category or expiration dates

- Add animations

- Test site

- Demo

---

## Future Implementations

#### Additional Features

- About page
  - Explains how the app works
  - Provides additional detail about how to find batch number or other info needed to add a product
  - Provide access tips and information on product shelf life and hygiene
- Login & Sign up setup
- Create personalized notifications setting
- Email notifications
- Barcode scanning to automatically add product input
- User profile page
