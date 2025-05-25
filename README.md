# Learnable 24 Frontend Standardisation Test Exercise

## Task Theme  
**E-Commerce Web App Design**

---

## Overview  
This project involves designing and integrating the **shopping cart page** of an e-commerce web app. The main focus areas are:

- Full **mobile responsiveness**  
- Clean, maintainable, and well-architected code  
- Accurate implementation of the provided design and API integration

---

## Resources  

- **Figma Design File:**  
  [Learnable 24 Front End Standardisation Test Design](https://www.figma.com/design/HUkzK1qW7yP9rgX95P42dw/Product-card-task?node-id=0-1&t=qRfVR0ZE9ZwCRyGW-0)  

- **API Endpoint for Products:**  
  https://dummyjson.com/products  

- **API Documentation:**  
  https://dummyjson.com/docs/products  

---

## Technology Stack  

- **React** with **Vite** for fast development  
- **TypeScript** for type safety  
- **CSS Modules** for scoped and modular styles  
- **Redux Toolkit** for state management  
- **Redux Toolkit Query (RTK Query)** for API data fetching  

---

## Features Implemented  

- **Product Listing:** Fetch and display products dynamically from the DummyJSON API  
- **Shopping Cart UI:** Responsive layout matching the Figma design  
- **Load More Button:** Paginate product listing with a “Load More” button  
- **Mobile Responsiveness:** Fully responsive UI working smoothly on mobile and desktop screens  
- **Clean Code Practices:** Modular components, consistent naming, and adherence to design patterns  

---

## Deployment  

The project is deployed and accessible online via Netlify:  


---

## How to Run Locally  

1. Clone the repo  
2. Run `npm install` to install dependencies  
3. Run `npm run dev` to start the development server  
4. Open `http://localhost:3000` in your browser to view the app  

---

## Notes  

- The product cards use data fetched live from DummyJSON API.  
- The “Load More” button fetches more products dynamically without page reload.  
- Mobile CSS is optimized with media queries for screen widths ≤ 768px.  
- Clean and maintainable CSS is handled via CSS Modules scoped to components.  

---
