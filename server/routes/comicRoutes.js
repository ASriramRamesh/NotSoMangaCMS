const express = require('express');
const router = express.Router();
const comicController = require('../controllers/comicController');
const chapterController = require('../controllers/chapterController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Comic routes
router.get('/', comicController.getComics);
router.get('/:id', comicController.getComic);
router.post('/', protect, comicController.createComic);
router.put('/:id', protect, comicController.updateComic);
router.delete('/:id', protect, comicController.deleteComic);
router.post('/:id/cover', protect, upload.single('cover'), comicController.uploadCover);

// Chapter routes
router.post('/:comicId/chapters', protect, chapterController.addChapter);
router.get('/:comicId/chapters/:chapterId', chapterController.getChapter);
router.put('/:comicId/chapters/:chapterId', protect, chapterController.updateChapter);
router.delete('/:comicId/chapters/:chapterId', protect, chapterController.deleteChapter);
router.post('/:comicId/chapters/:chapterId/pages', protect, upload.array('pages', 50), chapterController.uploadPages);

module.exports = router;