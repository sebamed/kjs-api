const express = require('express');

const router = express.Router();

const { handleGetTips } = require('../controllers/tips.controller');

router.get('/api/tips', handleGetTips);

module.exports = router;