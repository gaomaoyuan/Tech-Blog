const router = require('express').Router();

// Import routes
const apiRoutes = require('./apiRoutes');
const viewRoutes = require('./viewRoutes');

// Use imported routes
router.use('/api', apiRoutes);
router.use('/', viewRoutes);

module.exports = router;
