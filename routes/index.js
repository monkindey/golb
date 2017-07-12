const {
  createByGet,
  createByPost,
  postsByGet,
  deletePost,
  postIdByGet
} = require('./post');

const { loginByGet, loginByPost, loginOut } = require('./login');

module.exports = makeRoutes = app => {
  // login
  app.get('/login', loginByGet);
  app.post('/login', loginByPost);

  app.get('/loginout', loginOut);

  // posts
  app.get('/create', createByGet);
  app.post('/create', createByPost);
  app.get('/posts', postsByGet);
  app.post('/posts/delete', deletePost);
  app.get('/posts/:id', postIdByGet);
};