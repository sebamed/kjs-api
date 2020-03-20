const express = require('express');

const router = express.Router();

const { handleGetNews } = require('../controllers/news.controller');

router.get('/api/news', handleGetNews);

module.exports = router;