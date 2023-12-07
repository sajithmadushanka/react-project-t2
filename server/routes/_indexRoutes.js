const express = require('express');
const userRouters = require('./userRoutes');
const router  = express.Router();
const taskRoutes = require('./taskRoutes');

router.use('/user', userRouters);
router.use('/task', taskRoutes);

module.exports = router;