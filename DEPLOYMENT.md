# Deployment Guide for damichha.com/admin

## Prerequisites
1. cPanel access to damichha.com
2. Node.js version 14+ installed on the server
3. MongoDB database connection string

## Deployment Steps

### 1. Build the Frontend
```bash
cd frontend
npm install
npm run build
```

### 2. Upload Files to cPanel
1. Log in to your cPanel account
2. Navigate to File Manager
3. Create a new directory called `admin` in the public_html folder
4. Upload the contents of the `frontend/dist` directory to the `public_html/admin` folder
5. Upload the `.htaccess` file to the `public_html` directory
6. Create a new directory called `backend` outside of `public_html`
7. Upload all backend files to the `backend` directory

### 3. Set Up Node.js Application
1. In cPanel, go to "Setup Node.js Application"
2. Create a new Node.js application:
   - Node.js version: 14.x or higher
   - Application mode: Production
   - Application root: /backend
   - Application URL: damichha.com/api
   - Application startup file: server.js
   - Passenger start-up file: server.js

### 4. Configure Environment Variables
1. In the backend directory, create/edit the `.env` file:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=production
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 5. Install Backend Dependencies
```bash
cd backend
npm install
```

### 6. Start the Application
1. In cPanel's Node.js Application manager, start your application
2. The application should now be accessible at:
   - Admin Panel: https://damichha.com/admin
   - API Endpoint: https://damichha.com/api

### 7. Verify Redirects
1. Verify that damichha.com redirects to bipinxetry.com
2. Verify that damichha.com/admin shows the admin panel
3. Verify that damichha.com/auth/login redirects to damichha.com/admin

## Troubleshooting
1. Check Node.js application logs in cPanel
2. Verify MongoDB connection
3. Check .htaccess file permissions (should be 644)
4. Ensure all API endpoints are properly configured
5. Check SSL certificate configuration if using HTTPS

## Security Notes
1. Ensure MongoDB connection string is secure and not publicly accessible
2. Keep all API keys and secrets in the .env file
3. Set up proper CORS configuration in production
4. Configure SSL certificate for HTTPS
5. Set up proper file permissions for security 