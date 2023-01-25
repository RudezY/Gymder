const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const gymRoutes = require('./gymRoutes');
// const commentRoutes = require('./commentRoutes');

router.use('/post', postRoutes );

router.use('/user', userRoutes);

router.use('/gym', gymRoutes);

// router.use('/comment', commentRoutes);

module.exports = router;

