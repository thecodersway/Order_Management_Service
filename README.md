# 🛒 Order Management System (OMS)

## 🔍 Objective

The **Order Management System (OMS)** enables users to procure infrastructure-related materials from the app at the best market prices. It offers a seamless and responsive experience for discovering, selecting, and ordering construction-related products.

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
| 🧭 Category Navigation         | Browse products by category for faster discovery.     |

## 🧱 Tech Stack

### 🖥️ Frontend

* **Framework**: React Native (v0.75.4)
* **Language**: TypeScript (v5.0.4)

#### 📦 State Management

* Redux Toolkit
* Redux-Observable (for async side effects)
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
* Jest (for unit testing)
* Babel

### 🔧 Backend

* **Language**: Go (Golang)
* **Web Framework**: Gin
* **ORM**: GORM
* **Architecture**: Clean Architecture
* **Database**: PostgreSQL

### 📦 Deployment & DevOps

* Docker & Docker Compose
* Reverse Proxy: NGINX
* Metro Bundler for React Native
* Environment Configuration via `.env`

## 📂 Project Structure

```bash
siddhant-oms/
│
├── backend/                # Backend server (Go)
│   ├── DBmigration/        # Database migration files
│   └── internal/           # Internal Go packages
│       ├── config/         # Configuration management
│       ├── core/           # Core business logic
│       ├── database/       # DB connection setup
│       ├── models/         # Data models/entities
│       ├── repo/           # Database repositories
│       └── server/         # HTTP server setup
│   └── main.go             # Entry point
│
└── frontend/               # React Native frontend
    ├── __tests__/          # Unit/integration tests
    ├── android/            # Android platform code
    ├── ios/                # iOS platform code
    ├── src/
    │   ├── @types/         # TypeScript definitions
    │   ├── assets/         # Static assets (SVGs, icons)
    │   ├── components/     # Reusable UI components
    │   ├── constants/      # API endpoints, strings
    │   ├── errorAndLoading/ # Error/loading states
    │   ├── feature/        # Modules by feature
    │   ├── navigation/     # Navigation config
    │   ├── redux/          # Redux slices
    │   ├── store/          # Redux store setup
    │   ├── theme/          # Theming
    │   ├── utils/          # Utility functions
    │   └── App.tsx         # Root component
    ├── .eslintrc.js
    ├── .prettierrc.js
    ├── babel.config.js
    ├── package.json
    └── tsconfig.json
```

## 🚀 Getting Started

To get the Order Management System (OMS) up and running on your local machine for development and testing, follow the steps below.

### 🖥️ System Requirements & Prerequisites

#### ✅ General Requirements

* **Operating System**: macOS, Windows 10/11, or Linux
* **Git**: [Install Git](https://git-scm.com/)
* **Docker & Docker Compose**: [Install Docker](https://www.docker.com/products/docker-desktop/)
* **Node.js**: v18+ – [Install Node.js](https://nodejs.org/)
* **npm** (v9+) or **Yarn**
* **Go**: 1.20+ – [Install Go](https://go.dev/dl/)
* **PostgreSQL**: local/remote instance

#### 📱 Mobile Development

##### iOS (macOS only)

* Xcode 14.0+
* CocoaPods (Install using `sudo gem install cocoapods`)
* iOS Simulator or device (iOS 14.0+)

##### Android

* Android Studio
* Android SDK + Build Tools
* Android Emulator or USB-connected device
* JDK 11+

---

### ⚙️ Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/YourUsername/siddhant-oms.git
cd siddhant-oms
```

#### 2. Configure Environment Variables

Create a `.env` file in both `backend/` and `frontend/` (or in project root if using Docker Compose):

```env
# Backend .env
DB_HOST=db
DB_PORT=5432
DB_USER=oms_user
DB_PASSWORD=oms_password
DB_NAME=oms_db
BACKEND_PORT=8080

# Frontend .env
REACT_APP_API_URL=http://localhost:8080
```

#### 🐳 3. Run with Docker Compose (Recommended)

```bash
docker-compose up --build -d
```

This command will:

* Build backend & frontend containers
* Start PostgreSQL
* Start Go backend
* Launch Metro Bundler (React Native)

> 📌 **Note**: For mobile devices not inside Docker, update `REACT_APP_API_URL` to point to your host IP.

---

### 🧰 Manual Setup (Alternative)

#### 🔧 Backend

```bash
cd backend
go mod download
```

Run database migrations (adjust as per tool):

```bash
migrate -path ./DBmigration -database "postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=disable" up
```

Start server:

```bash
go run main.go
```

#### 📱 Frontend

```bash
cd frontend
npm install  # or yarn install
```

For iOS:

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

For Android:

```bash
npx react-native run-android
```

---

## 🧰 Developer Tools (Recommended)

| Tool             | Purpose                            |
| ---------------- | ---------------------------------- |
| VS Code          | IDE with React Native & Go plugins |
| Postman/Insomnia | API testing                        |
| RN Debugger      | React Native debugging             |
| Xcode            | iOS development & simulator        |
| Android Studio   | Android emulator & SDK manager     |

---

## 🔁 Troubleshooting

#### 🧩 Native Module Issues

```bash
cd frontend
cd ios && pod install && cd ..
npx react-native run-ios
```

#### 🛠️ Android Build Issues

```bash
cd android
./gradlew clean
```

Ensure `local.properties` SDK path is valid.

#### 🔌 Backend Connection Issues

* Check PostgreSQL is running
* Validate `.env` DB values
* Ensure `BACKEND_PORT` is not blocked

#### 🐳 Docker Issues

```bash
docker-compose logs
```
