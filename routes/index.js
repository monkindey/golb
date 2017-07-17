const {
  createByGet,
  createByPost,
  postsByGet,
  deletePost,
  postIdByGet
} = require('./post');

const { loginByGet, loginByPost, loginOut, signUp } = require('./login');

module.exports = makeRoutes = app => {
  // index
  app.get('/', (req, res) => {
    if (req.session.user) {
      res.render('index');
    } else {
      res.redirect('login');
    }
  });

  // login
  app.get('/login', loginByGet);
  app.post('/login', loginByPost);

  // login out
  app.get('/loginout', loginOut);

  // sign up
  app.post('/signup', signUp);

  // posts
  app.get('/create', createByGet);
  app.post('/create', createByPost);
  app.get('/posts', postsByGet);
  app.post('/posts/delete', deletePost);
  app.get('/posts/:id', postIdByGet);
};
