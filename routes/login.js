const model = require('../models');

exports.loginByGet = (req, res) => {
  res.render('login');
};

exports.loginByPost = (req, res) => {
  model.user.login(req.body).then(m => {
    // 找不到
    if (m.length === 0) {
      res.json({
        success: false,
        result: 'not found'
      });
    } else {
      req.session.user = m[0];
      res.json({
        success: true,
        redirect: '/'
      });
    }
  });
};

exports.loginOut = (req, res) => {
  req.session.destroy(err => {
    if (err) throw err;

    res.redirect('/');
  });
};
