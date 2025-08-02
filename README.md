# 🛒 Order Management System (OMS)

## 🔍 Objective
The **Order Management System (OMS)** enables users to procure infrastructure-related materials from the Infra Market at the best market prices. It offers a seamless and responsive experience for discovering, selecting, and ordering construction-related products.

🚀 Features
✅ Feature	💬 Description
🏠 Product Listing	Landing page displaying all available products.
🔍 Product Search	Search across product names, categories, or keywords.
📄 Product Details	View in-depth information about selected products.
➕ Product Quantity	Users can specify the number of units to purchase.
🛒 Checkout (Order Initiation)	Start the order process with selected products.
🧾 Address Selection	Choose from saved billing and shipping addresses.
💳 Payment & Order Placement	Select a payment method and finalize the order.
🔗 Related Products 	Suggested related items on the product detail page.
🧺 Cart Management 	Add, remove, and manage products before checkout.
🧭 Category Navigation 	Browse products by category for faster discovery.


## 🧱 Tech Stack

### 🖥️ Frontend

- **Framework**: React Native (v0.75.4)
- **Language**: TypeScript (v5.0.4)

#### 📦 State Management
- Redux Toolkit  
- Redux-Observable (for async side effects)
- React-Redux

#### 📲 Navigation
- `@react-navigation/native`  
- `@react-navigation/stack`  
- `@react-navigation/material-top-tabs`

#### 🎨 UI Components
- React Native Elements  
- React Native Gesture Handler  
- React Native Reanimated  
- React Native SVG  
- React Native Pager View

#### 🌐 HTTP Client
- Axios

#### 🛠️ Utility Libraries
- Lodash  
- date-fns

#### 🧪 Dev Tools
- ESLint  
- Prettier  
- Jest (for unit testing)  
- Babel

### 🔧 Backend

- **Language**: Go (Golang)
- **Web Framework**: Gin
- **ORM**: GORM
- **Architecture**: Clean Architecture  
- **Database**: PostgreSQL
- **Project Structure**:
  - Internal packages for business logic (`handlers`, `services`, `models`, `repositories`)
  - DB Migrations using GORM AutoMigrate or external migration tool
  - Environment configuration with `.env` and config package

### 📦 Deployment & DevOps

- **Containerization**: Docker, Docker Compose
- **Reverse Proxy**: NGINX
- **Metro Bundler**: Used for React Native build and development
- **Environment Files**: `.env` files for both backend and frontend

This is excellent! Providing a clear folder structure like this is incredibly helpful for anyone looking at your GitHub repository. It immediately gives them an understanding of how your project is organized and where to find specific parts of the codebase.

Here's how you can integrate this into your README.md to make it even more valuable:

Add a "Project Structure" Section: Place this section after "Tech Stack" and before "Getting Started."

Use a Clear Heading: Make it easy to find.

Provide a Brief Explanation: Explain why this structure is used (e.g., "to promote modularity and maintainability").

Use the Tree View: The format you've provided is perfect for direct inclusion.

Here's how you can add it to your existing README.md:

🛒 Order Management System (OMS)
🌟 Overview
The Order Management System (OMS) is a robust platform designed to revolutionize the procurement of infrastructure-related materials. It empowers users to seamlessly acquire items from the Infra Market at the most competitive prices, ensuring a smooth, secure, and highly efficient ordering experience.

✨ Features
This system covers the entire procurement journey, from initial product discovery to final order placement.

✅ Feature	💬 Description
🏠 Product Listing	Users land on a clean, intuitive page showcasing all available products.
🔍 Product Search	Powerful search functionality lets users find items by name, category, or keywords.
📄 Product Details	Detailed product pages provide comprehensive information for informed decisions.
➕ Product Quantity	Easily specify the desired number of units for any product.
🛒 Checkout	A streamlined process to initiate and manage orders for selected items.
🧾 Address Selection	Conveniently choose from pre-saved billing and shipping addresses.
💳 Payment & Order	Securely select a payment method and finalize your order with ease.

Export to Sheets
💡 Good to Have (Future Enhancements)
We're constantly looking to improve! Here are some features planned for future iterations:

🔗 Related Products: Intelligent suggestions for related items on product detail pages.

🧺 Cart Management: A comprehensive shopping cart to manage multiple items before checkout.

🧭 Category Navigation: Enhanced Browse experience by navigating through well-defined product categories.

🛠️ Tech Stack
This project is built with a modern, scalable, and high-performance technology stack:

🖥️ Frontend
React Native: Powers a seamless cross-platform mobile application experience.

Redux Toolkit: Manages application state efficiently for predictable data flow.

Axios: Handles robust and efficient API communication.

🚀 Backend
Go (Golang): Provides a highly performant and concurrent foundation for our RESTful APIs.

Gin: A lightweight web framework in Go, chosen for building fast and reliable HTTP services.

🗃️ Database
PostgreSQL: A powerful, open-source relational database, ideal for managing complex data like users, products, and orders.

📦 DevOps & Deployment
Docker: Ensures consistent and isolated environments for easy development and deployment through containerization.

NGINX: Acts as a high-performance reverse proxy and load balancer, enhancing system reliability and speed.

Docker Compose: Orchestrates multi-container Docker applications, simplifying local development and cloud deployments.

.env: Manages environment-specific configurations securely and efficiently.

📂 Project Structure
The project follows a modular and organized structure to enhance readability, maintainability, and scalability.

siddhant-oms/
│
├── backend/                # Backend server (Go)
│   ├── DBmigration/        # Database migration files (e.g., SQL scripts, Go migration code)
│   └── internal/           # Internal Go packages, encapsulating core logic
│       ├── config/         # Application configuration management
│       ├── core/           # Core business logic and use cases
│       ├── database/       # Database connection setup and utility functions
│       ├── models/         # Data models and structures (Go structs for database entities, request/response payloads)
│       │   ├── address_model.go
│       │   ├── categories_model.go
│       │   ├── getCartItems.go     # Likely DTOs or specific query models
│       │   ├── postCartItems.go    # Likely DTOs or specific command models
│       │   ├── postOrder.go        # Likely DTOs or specific command models
│       │   ├── productByCategoryID.go # Specific query model for products by category
│       │   ├── productSpecifications_model.go
│       │   └── product_model.go
│       ├── repo/           # Repository layer for database interactions (data access logic)
│       │   ├── address_repo.go
│       │   ├── categories.go
│       │   ├── delCartItems.go     # Repository methods for cart item deletion
│       │   ├── getCartItems.go     # Repository methods for fetching cart items
│       │   ├── postCartItem.go     # Repository methods for adding cart items
│       │   ├── postOrder.go        # Repository methods for creating orders
│       │   ├── productSpecifications.go
│       │   ├── products.go
│       │   ├── productsByCategoryId.go
│       │   └── search.go
│       └── server/         # HTTP server setup, routing, and middleware
│           └── server.go
│   └── main.go             # Application entry point for the Go backend
│
└── frontend/               # React Native frontend application
    ├── __tests__/          # Unit and integration test files for the frontend
    ├── android/            # Android-specific native code and build configurations
    ├── ios/                # iOS-specific native code and build configurations
    ├── src/                # Source code for the React Native application
    │   ├── @types/         # TypeScript custom type definitions
    │   ├── assets/         # Static assets like images, fonts, and SVGs
    │   │   └── svg/        # Organized SVG icons and illustrations
    │   │       ├── Checkout/
    │   │       ├── Items/
    │   │       ├── cart/
    │   │       ├── categoriesIcon/
    │   │       └── products/
    │   │
    │   ├── components/     # Reusable and generic UI components
    │   │   └── globalHeader/ # Component for the application's global header
    │   │
    │   ├── constants/      # Application-wide constants and configurations
    │   │   ├── apiEndpoints.ts # API endpoint definitions
    │   │   ├── screen.ts       # Screen size or layout constants
    │   │   └── string.ts       # String literals or messages
    │   │
    │   ├── errorAndLoading/ # Components for displaying error states and loading indicators
    │   │   ├── error.tsx
    │   │   └── loading.tsx
    │   │
    │   ├── feature/        # Feature-based modules, encapsulating screens and logic for specific functionalities
    │   │   ├── ProductList/ # Module for displaying and managing product listings
    │   │   ├── ProductView/ # Module for viewing individual product details
    │   │   ├── cart/        # Module for shopping cart management
    │   │   ├── checkout/    # Module for the checkout process
    │   │   │   ├── PaymentMethod/
    │   │   │   ├── billingAddress/
    │   │   │   ├── shippingAddress/
    │   │   │   └── successfulOrder/
    │   │   └── homePage/    # Module for the application's home screen
    │   │
    │   ├── navigation/     # React Navigation configuration and navigators
    │   ├── redux/          # Redux slices and actions related to specific features
    │   ├── store/          # Redux store configuration and setup
    │   ├── theme/          # Application-wide styling, colors, and typography
    │   ├── utils/          # Generic utility functions
    │   │   └── error.ts
    │   └── App.tsx         # The root component of the React Native application
    │
    ├── .eslintrc.js        # ESLint configuration for code linting
    ├── .prettierrc.js      # Prettier configuration for code formatting
    ├── babel.config.js     # Babel configuration for JavaScript transpilation
    ├── package.json        # Project metadata and frontend dependencies
    └── tsconfig.json       # TypeScript configuration for the frontend


## 🚀 Getting Started

To get the Order Management System (OMS) up and running on your local machine for development and testing, follow the steps below.


### 🖥️ System Requirements & Prerequisites

Ensure your development environment meets the following specifications:

#### ✅ General Requirements

- **Operating System**: macOS, Windows 10/11, or Linux  
- **Git**: Latest stable version – [Download Git](https://git-scm.com/)  
- **Docker & Docker Compose**: For containerized development – [Get Docker](https://www.docker.com/products/docker-desktop/)  
- **Node.js**: v18 or higher – [Download Node.js](https://nodejs.org/)  
- **npm**: v9.x or higher *(comes with Node.js)* or **Yarn**  
- **Go**: 1.20 or higher – [Install Go](https://go.dev/dl/)  
- **PostgreSQL**: Local or remote database instance

#### 📱 Mobile Development Environment

##### iOS (macOS only)

- **Xcode** 14.0 or later – Install via App Store  
- **CocoaPods** – Install via:

  ``` 
  sudo gem install cocoapods
iOS Simulator or physical device (iOS 14.0+)

Android
Android Studio – Download

Android SDK & Build Tools – Installed via Android Studio

JDK: 11 or higher

Android Emulator or physical device (USB debugging enabled)

🛠️ Installation & Setup
1. Clone the Repository
 
git clone https://github.com/YourUsername/siddhant-oms.git
cd siddhant-oms
2. Configure Environment Variables
Create a .env file in the project root:

 
cp .env.example .env
Then populate it with your configuration:

env
# Database Configuration
DB_HOST=db
DB_PORT=5432
DB_USER=oms_user
DB_PASSWORD=oms_password
DB_NAME=oms_db

# Backend Configuration
BACKEND_PORT=8080

# Frontend Configuration
REACT_APP_API_URL=http://localhost:8080
# Or if frontend runs inside Docker: http://backend:8080
🐳 Run with Docker Compose (Recommended)
 
docker-compose up --build -d
This will:

Build Docker images for backend and frontend

Start the PostgreSQL database container

Launch the Go backend API

Run the React Native Metro bundler in development mode

Note: If running the mobile app outside the Docker network, update REACT_APP_API_URL to your host IP, e.g.:

env
REACT_APP_API_URL=http://192.168.1.100:8080
⚙️ Manual Setup & Running (Alternative)
Use this if you want more control or are not using Docker.

🔧 Backend Setup
 
cd backend
go mod download
Run database migrations
(Adjust the command based on your migration tool):

 
# Example (with migrate CLI):
migrate -path ./DBmigration -database "postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=disable" up
Start the backend server:

 
go run main.go
Backend will be available at:

arduino
http://localhost:8080
📱 Frontend Setup
 
cd frontend
npm install
# or
yarn install
Install CocoaPods (iOS only):

 
cd ios && pod install && cd ..
Run the app:

iOS
 
npx react-native run-ios
Android
 
npx react-native run-android
Make sure the emulator is running or your device is connected via USB.

🧰 Additional Tools (Recommended)
Tool	Purpose
VS Code	Code editing (with Go + React Native extensions)
Postman / Insomnia	API testing
React Native Debugger	Advanced debugging
Android Studio	Android SDK management, emulator setup
Xcode	iOS debugging and simulator (macOS only)

🔁 Troubleshooting
🧩 Native Module Issues
 
cd frontend
cd ios && pod install && cd ..
npx react-native run-ios
🛠️ Android Build Issues
 
cd android
./gradlew clean
Ensure SDK paths are correct in android/local.properties

Check Android Studio > SDK Manager for updates

🔌 Backend Connection Issues
Ensure PostgreSQL is running

Verify .env values for:

DB_USER

DB_PASSWORD

DB_NAME

Confirm BACKEND_PORT is free

🐳 Docker Issues
Check Docker is running and ports are not in use:

 
docker-compose logs

