# Admin Panel Backend

This is the backend API for the Grocery Admin Panel, providing endpoints for Dashboard, POS, and Order Management.

## Features

### Authentication
- Login with email and password
- Profile management
- Password change functionality

### Dashboard
- Overview statistics (products, orders, stores, customers)
- Sales data visualization
- User statistics
- Top performing items and stores
- User listing with pagination

### POS (Point of Sale)
- Store selection
- Product listing with search and filters
- Customer management
- Order calculation
- Order creation

### Order Management
- Order listing with advanced filters
- Order details view
- Order status updates
- Order export functionality

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` file

3. Create required directories:
   ```bash
   mkdir uploads
   ```

4. Start the server:
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## Security Features

- JWT-based authentication
- Input validation
- File upload validation
- Error handling
- Rate limiting (TODO)
- Request logging (TODO)

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Express Validator for input validation
- Multer for file uploads

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
