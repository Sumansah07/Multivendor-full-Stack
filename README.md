# Multivendor E-commerce Platform

![Multivendor E-commerce](https://img.shields.io/badge/Multivendor-E--commerce-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A comprehensive full-stack e-commerce solution that supports multiple vendors, with separate modules for food and grocery delivery. This platform includes admin panels, point-of-sale systems, and customer-facing interfaces.

## 🌟 Features

### 🛒 Multi-Module Support
- **Food Delivery Module**: Complete management system for restaurants and food delivery
- **Grocery Module**: Comprehensive grocery store management and delivery system

### 👨‍💼 Admin Panel
- **Dashboard**: Real-time analytics and statistics
- **Vendor Management**: Onboard and manage multiple vendors
- **Product Management**: Add, edit, and organize products with categories
- **Order Management**: Track and process orders with status updates
- **User Management**: Manage customers, delivery personnel, and admin users

### 💰 Point of Sale (POS)
- **Store Selection**: Choose from multiple store locations
- **Product Catalog**: Browse products with search and filters
- **Customer Management**: Create and manage customer profiles
- **Order Processing**: Calculate totals and create orders
- **Payment Integration**: Support for multiple payment methods

### 📱 Customer Features
- **Multi-vendor Shopping**: Browse products from different vendors
- **Order Tracking**: Real-time updates on order status
- **User Profiles**: Manage addresses, payment methods, and preferences
- **Reviews & Ratings**: Rate products and vendors

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.1.4 (React 19)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **UI Components**: Headless UI, Heroicons
- **Maps Integration**: Google Maps API
- **HTTP Client**: Axios
- **Toast Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Uploads**: Multer with Cloudinary integration
- **Validation**: Express Validator
- **Data Export**: CSV generation

## 📋 Project Structure

```
Multivendor E-comm/
├── frontend/                 # Next.js frontend application
│   ├── app/                  # App router pages and layouts
│   ├── components/           # Reusable React components
│   ├── public/               # Static assets
│   ├── services/             # API service integrations
│   └── utils/                # Utility functions
│
├── backend/                  # Express.js backend API
│   ├── controllers/          # Request handlers
│   ├── middleware/           # Custom middleware
│   ├── models/               # Mongoose data models
│   ├── routes/               # API route definitions
│   ├── scripts/              # Utility scripts
│   ├── uploads/              # File upload directory
│   └── utils/                # Helper functions
│
├── .htaccess                 # Apache configuration
├── DEPLOYMENT.md             # Deployment instructions
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

#### Clone the repository
```bash
git clone https://github.com/Sumansah07/Multivendor-full-Stack.git
cd Multivendor-full-Stack
```

#### Backend Setup
```bash
cd backend
npm install

# Create .env file with the following variables:
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# CLOUDINARY_CLOUD_NAME=your_cloudinary_name
# CLOUDINARY_API_KEY=your_cloudinary_key
# CLOUDINARY_API_SECRET=your_cloudinary_secret

# Start the development server
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install

# Create .env file with the following variables:
# NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Start the development server
npm run dev
```

The frontend will be available at http://localhost:2000 and the backend API at http://localhost:5000.

## 📚 API Documentation

### Authentication APIs
- `POST /api/auth/login` - Login with email and password
- `GET /api/auth/profile` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Food Module APIs
- `GET /api/fooddashboard/statistics` - Get food dashboard statistics
- `GET /api/foodpos/stores` - Get food stores list
- `POST /api/foodpos/order` - Create new food order
- `GET /api/foodorders` - Get food orders list

### Grocery Module APIs
- `GET /api/grocerydashboard/statistics` - Get grocery dashboard statistics
- `GET /api/grocerypos/stores` - Get grocery stores list
- `POST /api/grocerypos/order` - Create new grocery order
- `GET /api/groceryorders` - Get grocery orders list

## 🔒 Security Features

- JWT-based authentication
- Input validation
- File upload validation
- Error handling
- Password hashing

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- **Suman Sah** - [GitHub Profile](https://github.com/Sumansah07)

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
