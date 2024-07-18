const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./utils/errorHandler');
const adminRoutes = require('./routes/adminRoutes');
const comicRoutes = require('./routes/comicRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/comics', comicRoutes);
app.use('/api/users', userRoutes);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      // Log environment variables (remove in production)
      console.log('Environment variables:', {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI
      });
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();