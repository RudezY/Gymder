//if there is no userId, the user is redirected to the login page
//use this middleware function on any routes that require a user to be logged in to access

const withAuth = (req, res, next) => {
  console.log('look here', req.session);
  if (!req.session.userId) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
