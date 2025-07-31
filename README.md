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
```

---

## 📡 API Endpoints

| Method | Endpoint               | Description                       |
|--------|------------------------|-----------------------------------|
| GET    | `/products`            | Get all products (supports pagination) |
| GET    | `/products/:id`        | Get a single product by ID        |
| POST   | `/products`            | Add a new product                 |
| PUT    | `/products/:id`        | Update an existing product        |
| DELETE | `/products/:id`        | Delete a product by ID            |
| GET    | `/products/search?q=term` | Search products by name or description |


## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/product-api.git
cd product-api
```
