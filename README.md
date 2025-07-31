# Simple-Product-Inventory-API


A simple RESTful API built with Node.js and Express.js that allows CRUD operations on an in-memory list of products. This was developed as part of a backend developer assignment.

---

## 🚀 Features

- Create, Read, Update, Delete products
- In-memory data storage (no database)
- Input validation (name required, price must be a number)
- Search by keyword (`GET /products/search?q=term`)
- Pagination (`GET /products?page=1&limit=5`)

---

## 📦 Product Schema

```json
{
  "id": 1,
  "name": "Sample Product",
  "price": 100,
  "description": "A product description"
}
