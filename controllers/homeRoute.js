const router = require('express').Router();
const { Post, Gym } = require('../models/');
const withAuth = require('../utils/auth');
// Get all the Gym User Information, and render it to a handlebars template
//Gets the gymDataBase specifically by the parameters
router.get('/', withAuth, async (req, res) => {
  try {
    const gymData = await Gym.findAll({
    });
    console.log(gymData);
    const gyms = gymData.map((gym) => gym.get({ plain : true }));
    res.render('homepage', {
      gyms,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// The below is for the postRoute that is linked to the homepage - need to find out which file it specifically belongs to
// This calls all of the posts from the database
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    console.log(postData);
    const posts = postData.map((post) => post.get({ plain: true }));
    //Is rendering into the homepage right now
    res.render('homepage', {posts, username: 'testing'});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// This route renders the login page, which has been completed for you
router.get('/login', (req, res) => {
  //if users has an existing valid session, they will be redirected to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  //render the login view otherwise, refer to login.handlebars
  res.render('login');
});



// This route renders the signup page, which has been completed for you
router.get('/signup', (req, res) => {
  //if users has an existing valid session, they will be redirected to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  //render the login view otherwise, refer to signup.handlebars
  res.render('signup');
});
module.exports = router;