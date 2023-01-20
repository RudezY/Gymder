const router = require('express').Router();
const { Post } = require('../../models/');

// do I want to pass some data or render a page <- Nick's comment
router.post('/', async (req, res) => {
  try {
    const postData = Post.findAll();
    const posts = postData.map((Post) => Post.get({ plain: true }));
    res.status(200).json(posts);
  } catch (err) { /* empty */ }
});