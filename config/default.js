module.exports = {
  port: 3010,
  session: {
    resave: true,
    // saveUninitialized: false,
    secret: 'myblog',
    name: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/blog'
};
