const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/postRoutes', postRoutes );

router.use('/userRoutes', userRoutes);



module.exports = router;

