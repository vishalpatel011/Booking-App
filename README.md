# Booking App

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to search, locate hotels, and make reservations.

## 🌐 Live Demo
Visit the deployed application at: [Booking App](https://booking-app-frontend-6b7p.onrender.com/)

## 🚀 Features
- User authentication and authorization
- Hotel search and filtering
- Room availability checking
- Secure payment processing
- Booking management
- Admin dashboard for hotel management
- Responsive design for all devices

## 🛠️ Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Styling**: CSS/SCSS

## 📁 Project Structure
```
booking-app/
├── client/          # Frontend React application
├── api/             # Backend Node.js/Express server
├── admin/           # Admin dashboard
└── node_modules/    # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/booking-app.git
cd booking-app
```

2. Install dependencies
```bash
# Install backend dependencies
cd api
npm install

# Install frontend dependencies
cd ../client
npm install

# Install admin dashboard dependencies
cd ../admin
npm install
```

3. Set up environment variables
Create a `.env` file in the api directory with the following variables:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the application
```bash
# Start backend server
cd api
npm start

# Start frontend application
cd client
npm start

# Start admin dashboard
cd admin
npm start
```

## 🔒 Environment Variables
Make sure to set up the following environment variables:
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication
- `PORT`: Server port (default: 5000)

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors
- Your Name - Initial work

## 🙏 Acknowledgments
- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community
