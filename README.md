# 🍎 Order Management System (OMS)

## 🔍 Objective

The **Order Management System (OMS)** enables users to procure infrastructure-related materials from the Infra Market at the best market prices. It offers a seamless and responsive experience for discovering, selecting, and ordering construction-related products.

---

## 🚀 Features

| ✅ Feature                      | 💬 Description                                        |
| ------------------------------ | ----------------------------------------------------- |
| 🏠 Product Listing             | Landing page displaying all available products.       |
| 🔍 Product Search              | Search across product names, categories, or keywords. |
| 📄 Product Details             | View in-depth information about selected products.    |
| ➕ Product Quantity             | Users can specify the number of units to purchase.    |
| 🛒 Checkout (Order Initiation) | Start the order process with selected products.       |
| 🧾 Address Selection           | Choose from saved billing and shipping addresses.     |
| 💳 Payment & Order Placement   | Select a payment method and finalize the order.       |
| 🔗 Related Products            | Suggested related items on the product detail page.   |
| 🧺 Cart Management             | Add, remove, and manage products before checkout.     |
| 🤭 Category Navigation         | Browse products by category for faster discovery.     |

---

## 🧱 Tech Stack

### 💻 Frontend

* **Framework**: React Native (v0.75.4)
* **Language**: TypeScript (v5.0.4)

#### 📦 State Management

* Redux Toolkit
* Redux-Observable
* React-Redux

#### 📲 Navigation

* `@react-navigation/native`
* `@react-navigation/stack`
* `@react-navigation/material-top-tabs`

#### 🎨 UI Components

* React Native Elements
* React Native Gesture Handler
* React Native Reanimated
* React Native SVG
* React Native Pager View

#### 🌐 HTTP Client

* Axios

#### 🛠️ Utility Libraries

* Lodash
* date-fns

#### 🧪 Dev Tools

* ESLint
* Prettier
* Jest
* Babel

### 🔧 Backend

* **Language**: Go (Golang)
* **Framework**: Gin
* **ORM**: GORM
* **Architecture**: Clean Architecture
* **Database**: PostgreSQL
* **Structure**:

  * Modular internal packages: `handlers`, `services`, `models`, `repositories`
  * DB Migrations: GORM AutoMigrate or external tool
  * `.env` config support

### 📦 Deployment & DevOps

* **Containers**: Docker, Docker Compose
* **Reverse Proxy**: NGINX
* **Metro Bundler**: Used for RN builds
* **Env Management**: `.env` for local and production

---

## 📂 Project Structure

```bash
siddhant-oms/
├── backend/
│   ├── DBmigration/
│   └── internal/
│       ├── config/
│       ├── core/
│       ├── database/
│       ├── models/
│       │   ├── address_model.go
│       │   ├── categories_model.go
│       │   ├── getCartItems.go
│       │   ├── postCartItems.go
│       │   ├── postOrder.go
│       │   ├── productByCategoryID.go
│       │   ├── productSpecifications_model.go
│       │   └── product_model.go
│       ├── repo/
│       │   ├── address_repo.go
│       │   ├── categories.go
│       │   ├── delCartItems.go
│       │   ├── getCartItems.go
│       │   ├── postCartItem.go
│       │   ├── postOrder.go
│       │   ├── productSpecifications.go
│       │   ├── products.go
│       │   ├── productsByCategoryId.go
│       │   └── search.go
│       └── server/
│           └── server.go
│   └── main.go
└── frontend/
    ├── __tests__/
    ├── android/
    ├── ios/
    ├── src/
    │   ├── @types/
    │   ├── assets/svg/{Checkout, Items, cart, categoriesIcon, products}/
    │   ├── components/globalHeader/
    │   ├── constants/
    │   │   ├── apiEndpoints.ts
    │   │   ├── screen.ts
    │   │   └── string.ts
    │   ├── errorAndLoading/
    │   ├── feature/{ProductList, ProductView, cart, checkout, homePage}/
    │   │   └── checkout/{PaymentMethod, billingAddress, shippingAddress, successfulOrder}/
    │   ├── navigation/
    │   ├── redux/
    │   ├── store/
    │   ├── theme/
    │   ├── utils/error.ts
    │   └── App.tsx
    ├── .eslintrc.js
    ├── .prettierrc.js
    ├── babel.config.js
    ├── package.json
    └── tsconfig.json
```

---
