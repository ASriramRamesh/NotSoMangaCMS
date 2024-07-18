const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  pages: [{ type: String }], // Array of image paths
  uploadDate: { type: Date, default: Date.now }
});

const ComicSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  artist: { type: String },
  coverImage: { type: String },
  genres: [{ type: String }],
  status: { 
    type: String, 
    enum: ['ongoing', 'completed', 'hiatus'],
    default: 'ongoing'
  },
  chapters: [ChapterSchema],
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comic', ComicSchema);