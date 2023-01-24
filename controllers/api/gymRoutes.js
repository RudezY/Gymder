const router = require('express').Router();
const { Post, UserAttributes, User } = require('../../models/');
const withAuth = require('../../utils/auth');


router.get('/:id', withAuth, async (req, res) => {
  try {
    const userPost = await Post.findAll({
      where: { id: req.params.id},
      order : [['created_at', 'DESC']],
      include: {
        model : Post, UserAttributes, User,
        attributes: ['username']
      }
    });
    const post = userPost.map((post) => post.get({ plain: true }));
    console.log(post);
    res.render('single-gym-post', { layout: 'dashboard', post});
  } catch (err) {
    res.redirect('/login');
  }
});
router.get('/:id/create', withAuth, async (req, res) => {
  res.redirect('admin-create-post', {layout: 'dashboard',});
});

router.post('/:id/create', withAuth, async (req, res) => {
  try{
    await Post.create({
      title: req.body.title,
      body: req.body.body,
      userId: req.session.userId
    });
    res.redirect('/dashboard');
  }catch(err){
    res.status(500).json(err);
  }
});



module.exports = router;