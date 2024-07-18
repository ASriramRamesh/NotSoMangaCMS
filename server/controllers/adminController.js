const User = require('../models/User');
const Comic = require('../models/Comic');

// Get dashboard statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const comicCount = await Comic.countDocuments();
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5);
    const recentComics = await Comic.find().sort({ createdAt: -1 }).limit(5);

    res.status(200).json({
      success: true,
      data: {
        userCount,
        comicCount,
        recentUsers,
        recentComics
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get all comics
exports.getAllComics = async (req, res) => {
  try {
    const comics = await Comic.find();
    res.status(200).json({
      success: true,
      count: comics.length,
      data: comics
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new comic
exports.createComic = async (req, res) => {
  try {
    const comic = await Comic.create(req.body);
    res.status(201).json({
      success: true,
      data: comic
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update comic
exports.updateComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!comic) {
      return res.status(404).json({
        success: false,
        error: 'Comic not found'
      });
    }

    res.status(200).json({
      success: true,
      data: comic
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete comic
exports.deleteComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);

    if (!comic) {
      return res.status(404).json({
        success: false,
        error: 'Comic not found'
      });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};