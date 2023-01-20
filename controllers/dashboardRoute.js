const router = require('express').Router();
// const { request } = require("express");
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');


// TODO - create logic for the GET route for / that renders the dashboard homepage
// It should display all of the posts created by the logged in user
router.get('/', withAuth, async (req, res) => {
  const postsData = await Post.findAll({
    where: { userId: req.session.userId },
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ],
  });
  const posts = postsData.map((post) => post.get({ plain: true}));

  res.render('admin-all-posts', { layout: 'dashboard', posts });
  // refer to admin-all-posts.handlebars write the code to display the posts
});

router.get('/create', withAuth, async (req, res) => {
  res.render('admin-create-post', { layout: 'dashboard' });
});

router.post('/create', withAuth, async (req, res) => {
  try {
    await Post.create({
      title: req.body.title,
      body: req.body.body,
      userId: req.session.userId,
    });

    res.status(200).json({ message: 'Post created successfully'});
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO - create logic for the GET route for /new that renders the new post page
// It should display a form for creating a new post

// TODO - create logic for the GET route for /edit/:id that renders the edit post page
// It should display a form for editing an existing post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const userPost = await Post.findOne({
      where:
    {
      id: req.params.id,
    }
    });
    if (userPost) {
      const post = userPost.get({ plain: true });
      console.log(post);
      res.render('edit-post',
        {
          layout: 'dashboard', post
        });
    }else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;