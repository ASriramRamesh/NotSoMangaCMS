const Comic = require('../models/Comic');

// Add a new chapter
exports.addChapter = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.comicId);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    comic.chapters.push(req.body);
    await comic.save();
    res.status(201).json(comic);
  } catch (error) {
    res.status(400).json({ message: 'Error adding chapter', error: error.message });
  }
};

// Get a specific chapter
exports.getChapter = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.comicId);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    const chapter = comic.chapters.id(req.params.chapterId);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    res.json(chapter);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chapter', error: error.message });
  }
};

// Update a chapter
exports.updateChapter = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.comicId);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    const chapter = comic.chapters.id(req.params.chapterId);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    Object.assign(chapter, req.body);
    await comic.save();
    res.json(chapter);
  } catch (error) {
    res.status(400).json({ message: 'Error updating chapter', error: error.message });
  }
};

// Delete a chapter
exports.deleteChapter = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.comicId);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    comic.chapters.id(req.params.chapterId).remove();
    await comic.save();
    res.json({ message: 'Chapter deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting chapter', error: error.message });
  }
};

// Upload chapter pages
exports.uploadPages = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.comicId);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    const chapter = comic.chapters.id(req.params.chapterId);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    chapter.pages = req.files.map(file => file.path);
    await comic.save();
    res.json({ message: 'Chapter pages uploaded successfully', chapter });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading chapter pages', error: error.message });
  }
};