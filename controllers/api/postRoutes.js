const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
// do I want to pass some data or render a page <- Nick's comment
router.post('/', async (req, res) => {
  try {
    const postData = Post.findAll();
    const posts = postData.map((Post) => Post.get({ plain: true }));
    res.status(200).json(posts);
  } catch (err) {
    console.log('Something went wrong while posting this', err);
    res.status(500).json(err);
  }
});

router.post('/delete/:id', withAuth, async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletePost = await Post.destroy({
      where : {
        id: req.params.id
      }
    });

    if (!deletePost) {
      res.status(404).json({ message: 'There is no post with this id. Please try again!' });
      return;
    }
    res.redirect('/dashboard');

  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
