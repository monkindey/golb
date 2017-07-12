const model = require('../models');

exports.createByGet = (req, res) => {
  res.render('create');
};

exports.createByPost = (req, res) => {
  const { title, content } = req.body;

  const posts = {
    title,
    content,
    author: req.session.user.username
  };

  model.article.save(posts).then(post => {
    res.json({
      success: true,
      id: post._id
    });
  });
};

exports.postsByGet = (req, res) => {
  model.article.getAllArticle().then(posts => {
    res.render('posts', {
      posts
    });
  });
};

exports.deletePost =  (req, res) => {
  const id = req.body.id;
  model.article.remove(id).then(function(ret) {
    res.json({
      success: true
    });
  });
}

// id 不太了解, 标记下
exports.postIdByGet = (req, res) => {
  const id = req.params.id;
  model.article.getArticleById(id).then(post => {
    res.render('post', {
      post
    });
  });
}