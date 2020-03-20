const express = require('express');

const router = express.Router();

const { handleGetStatsByLocationId } = require('../controllers/statistics.controller');

router.get('/api/stats/:locationId', handleGetStatsByLocationId);

module.exports = router;