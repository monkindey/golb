/**
 * {
 * 	 error: '',
 * 	 success: true|false,
 * 	 data: {},
 * 	 redirect: 'xxx'
 * }
 *
 * 1. post redirect ajax json解释错误, 因为你用json去解析它重定向的html
 * 2. post express session redirect can not store, because you not send cookie
 * and the redirect should let client to do it rather than the server.
 * 3. 修改nunjucks模版引擎的后缀名
 * 4. https://softwareengineering.stackexchange.com/questions/99894/why-doesnt-http-have-post-redirect
 */

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const MongoStore = require('connect-mongo')(session);
const nunjucks = require('nunjucks');

const model = require('./models');
const makeRoutes = require('./routes');
const config = require('./config/default');

const app = express();

const urlencodedParser = bodyParser.urlencoded({
  extended: true
});

app.use('/assets', express.static(__dirname + '/public'));
app.set('views', './views');

/**
 * 修改nunjucks模版引擎的后缀名
 */
app.engine('tpl', nunjucks.render);

nunjucks.configure('views', {
  autoescape: true,
  watch: true,
  express: app
});

app.set('view engine', 'tpl');

app.use(urlencodedParser);

app.use(
  session(
    Object.assign({}, config.session, {
      store: new MongoStore({
        mongooseConnection: model.mongoose.connection
      })
    })
  )
);

/**
 * exports module.exports区别
 * 与require的关系
 */
makeRoutes(app);

app.listen(config.port, function() {
  console.log(`The server have started at http://localhost:${config.port}`);
});
