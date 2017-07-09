const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String,
  date: Date
});

const Article = mongoose.model('Article', ArticleSchema);

function save(article) {
  return Article.create(article);
}

function remove(id) {
  return Article.remove({
    _id: id
  });
}

function getArticleById(id) {
  return Article.findOne({
    _id: id
  }).select('title content');
}

function getAllArticle() {
  return Article.find();
}

module.exports = {
  save,
  getArticleById,
  getAllArticle,
  remove
};
