/**
 * {
 * 	 error: '',
 * 	 success: true|false,
 * 	 data: {},
 * 	 redirect: 'xxx'
 * }
 * 记录
 * 1. post redirect 307 
 * http://stackoverflow.com/questions/38810114/node-js-with-express-how-to-redirect-a-post-request
 *
 * 2. post redirect ajax json解释错误, 因为你用json去解析它重定向的html
 * 3. post express session redirect can not store, because you not send cookie
 * and the redirect should let client to do it rather than the server.
 */

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const model = require('./models');

const config = require('./config/default');
const app = express();

app.locals.title = 'hello express';

const urlencodedParser = bodyParser.urlencoded({
  extended: true
});

var sess = {};

app.use('/assets', express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(urlencodedParser);
app.use(session(config.session));

app.use((req, res, next) => {
  res.locals.errors = req.session.error;
  next();
});

app.get('/', (req, res) => {
  if (sess.user) {
    res.render('index');
  } else {
    res.redirect('login');
  }
});

app.get('/create', (req, res) => {
  res.render('create');
});

app.get('/posts', (req, res) => {
  model.article.getAllArticle().then(posts => {
    res.render('posts', {
      posts
    });
  });
});

app.post('/posts/delete', (req, res) => {
  const id = req.body.id;
  model.article.remove(id).then(function(ret) {
    res.json({
      success: true
    });
  });
});

// id 不太了解, 标记下
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  model.article.getArticleById(id).then(post => {
    res.render('post', {
      post
    });
  });
});

app.post('/create', (req, res) => {
  const { title, content } = req.body;

  const posts = {
    title,
    content,
    // author: sess.user.username
    author: 'admin'
  };

  model.article.save(posts).then(post => {
    res.json({
      success: true,
      id: post._id
    });
    // res.redirect(`/posts/${post._id}`);
  });
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', (req, res) => {
  // get the username password
  const { password, username } = req.body;

  const user = {
    password,
    username
  };

  return model
    .signup(user)
    .then(res => {
      res.json({
        success: true,
        redirect: '/'
      });
    })
    .catch(err => {
      res.json({
        success: false,
        error: 'duplicate username'
      });
    });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  return model.login(req.body).then(m => {
    // 找不到
    if (m.length === 0) {
      res.json({
        success: false,
        result: 'not found'
      });
    } else {
      sess = req.session;
      req.session.user = sess.user = m[0];
      res.json({
        success: true,
        redirect: '/'
      });
    }
  });
});

app.listen(config.port, function() {
  console.log(`The server have started at http://localhost:${config.port}`);
});
