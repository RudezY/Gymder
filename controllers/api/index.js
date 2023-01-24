const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const gymRoutes = require('./gymRoutes');

router.use('/post', postRoutes );

router.use('/user', userRoutes);

router.use('/gym', gymRoutes);

module.exports = router;

