module.exports = {
  port: 3010,
  session: {
    resave: false,
    saveUninitialized: true,
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/blog'
};
