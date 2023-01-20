const router = require('express').Router();
const GymDataBase = require('../models/');
const { Post, User } = require('../models');

// Get all the Gym User Information, and render it to a handlebars template
//Gets the gymDataBase specifically by the parameters
router.get('/GymDataBase', async (req, res) => {
  try {
    const GymDataBaseData = await GymDataBase.findByAll();
    console.log(GymDataBaseData);
    // Find which file to render the GymDataBase into, maybe Homepage?
    res.render('homepage', GymDataBaseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// The below is for the postRoute that is linked to the homepage - need to find out which file it specifically belongs to
// This calls all of the posts from the database
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    console.log(postData)
    const posts = postData.map((post) => post.get({ plain: true }));
    //Is rendering into the homepage right now
    res.render('homepage', {posts, username: 'testing'});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Make new JS file for post / user / gymDataBase to be linked to Homepage/Login/Signup
router.get('/User', (req, res) => {
  try {
    const userData = User.findByPk(req.params.id);
    console.log(userData);
    //Rendering into the login handlebars layout
    res.render('login', userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;