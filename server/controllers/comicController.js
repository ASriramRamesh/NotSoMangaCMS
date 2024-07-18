const Comic = require('../models/Comic');

// Get all comics
exports.getComics = async (req, res) => {
  try {
    const comics = await Comic.find();
    res.json(comics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comics', error: error.message });
  }
};

// Get a single comic
exports.getComic = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.json(comic);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comic', error: error.message });
  }
};

// Create a new comic
exports.createComic = async (req, res) => {
  try {
    const newComic = new Comic(req.body);
    const savedComic = await newComic.save();
    res.status(201).json(savedComic);
  } catch (error) {
    res.status(400).json({ message: 'Error creating comic', error: error.message });
  }
};

// Update a comic
exports.updateComic = async (req, res) => {
  try {
    const updatedComic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedComic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.json(updatedComic);
  } catch (error) {
    res.status(400).json({ message: 'Error updating comic', error: error.message });
  }
};

// Delete a comic
exports.deleteComic = async (req, res) => {
  try {
    const deletedComic = await Comic.findByIdAndDelete(req.params.id);
    if (!deletedComic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.json({ message: 'Comic deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comic', error: error.message });
  }
};

// Upload comic cover
exports.uploadCover = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    comic.coverImage = req.file.path;
    await comic.save();
    res.json({ message: 'Cover uploaded successfully', comic });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading cover', error: error.message });
  }
};