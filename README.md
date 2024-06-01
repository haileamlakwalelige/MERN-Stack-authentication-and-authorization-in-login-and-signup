# MERN-Stack Authentication and Authorization in Login and Signup

## Project Overview

This project is a full-stack application built using the MERN stack (MongoDB, Express, React, Node.js) that demonstrates authentication and authorization functionalities in a login and signup system. The application includes features such as user registration, login, and access control to certain parts of the application based on user roles. Only admin users can access the dashboard, while regular users have restricted access.

## Project Structure

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React.js

## Features

- User Registration
- User Login
- Password Encryption
- JWT Authentication
- Role-Based Authorization
- Protected Routes

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/haileamlakwalelige/MERN-Stack-authentication-and-authorization-in-login-and-signup.git
   cd MERN-Stack-authentication-and-authorization-in-login-and-signup
   ```

2. **Install backend dependencies**:
   ```sh
   cd server
   npm install
   ```

3. **Install frontend dependencies**:
   ```sh
   cd client
   npm install
   ```

### Configuration

1. **MongoDB Connection**:
   Ensure MongoDB is running. The backend will connect to MongoDB using the URL `MONGO_URI.

2. **JWT Secret**:
   Ensure you have a secret key for JWT. In the code, it is set as `'jwt-secret-key'`.

### Running the Application

1. **Start the Backend**:
   ```sh
   cd server
   npm run dev
   ```
   The backend server will run on `http://localhost:4000`.

2. **Start the Frontend**:
   ```sh
   cd client
   npm run dev
   ```
   The frontend server will run on `http://localhost:5173`.

## API Endpoints

### Register User

- **URL**: `/register`
- **Method**: POST
- **Description**: Registers a new user.
- **Body**: 
  ```json
  {
      "name": "User Name",
      "email": "user@example.com",
      "password": "password123"
  }
  ```

### Login User

- **URL**: `/login`
- **Method**: POST
- **Description**: Logs in an existing user.
- **Body**: 
  ```json
  {
      "email": "user@example.com",
      "password": "password123"
  }
  ```

### Access Dashboard

- **URL**: `/dashboard`
- **Method**: GET
- **Description**: Access the admin dashboard (requires admin role).
- **Headers**: 
  - `Cookie`: `token=JWT_TOKEN`

## Frontend Pages

### Login Page

- URL: `/login`
- Description: Allows users to log in to their account.

### Signup Page

- URL: `/register`
- Description: Allows new users to register an account.

### Home Page

- URL: `/`
- Description: The main landing page of the application.

### Dashboard Page

- URL: `/dashboard`
- Description: Accessible only to admin users. Regular users will receive an authorization error.

## Middleware

### verifyUser

- **Description**: Middleware to verify JWT and check if the user has admin privileges.
- **Usage**: Applied to the `/dashboard` route to restrict access to admin users only.

## Conclusion

This project serves as a foundational example of how to implement authentication and authorization in a MERN stack application. You can extend and customize this application to fit the specific needs of your project.

## License

This project is licensed under the MIT License.

---

Feel free to contribute to this project by submitting pull requests or opening issues. Your feedback and suggestions are always welcome!
