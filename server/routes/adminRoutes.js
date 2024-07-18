const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

// Import controllers (you'll need to create these)
const {
  getDashboardStats,
  getAllUsers,
  updateUser,
  deleteUser,
  getAllComics,
  createComic,
  updateComic,
  deleteComic
} = require('../controllers/adminController');

// Admin dashboard stats
router.get('/dashboard', protect, authorize('admin'), getDashboardStats);

// User management routes
router.get('/users', protect, authorize('admin'), getAllUsers);
router.put('/users/:id', protect, authorize('admin'), updateUser);
router.delete('/users/:id', protect, authorize('admin'), deleteUser);

// Comic management routes
router.get('/comics', protect, authorize('admin'), getAllComics);
router.post('/comics', protect, authorize('admin'), createComic);
router.put('/comics/:id', protect, authorize('admin'), updateComic);
router.delete('/comics/:id', protect, authorize('admin'), deleteComic);

module.exports = router;