const router = require('express').Router();
const { Post, User } = require('../../models/');
const withAuth = require('../../utils/auth');


router.get('/:id', withAuth, async (req, res) => {
  try {
    const allPost = await Post.findAll({

      include: {
        model : User,
      }
    });
    const post = allPost.map((post) => post.get({ plain: true }));
    console.log('POSTEY', post);
    res.render('single-gym-post', { posts: post, id: req.params.id });
  } catch (err) {
    console.log('MAYBE', err),
    res.status(500).json(err);
  }
});
// router.get('/:id/create', withAuth, async (req, res) => {
//   res.redirect('admin-create-post', {layout: 'dashboard',});
// });

router.post('/:id', withAuth, async (req, res) => {
  const body = req.body;
  console.log(body);
  console.log(req.session);
  try{
    const submitpost = await Post.create(
      {
        userId : req.session.userId,
        title: body.title,
        body: body.body
      });
    console.log('here is the post', submitpost);
    res.redirect(`/api/gym/${body.gymId}`);
  }catch(err){
    res.status(500).json(err);
  }
});



module.exports = router;