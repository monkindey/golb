## 论坛

### 功能

* 注册 
	* 注册页 GET /signup
	* 注册 POST /signup
* 登录
	* 登录页 GET /signin
	* 注册 POST /signin
* 登出
	* 登录 POST /signout
* 查看文章
	* 所有最新的文章 GET /articles
	* 某人 /article?author=xxx
	* 文章留言 /articles/:articleId
* 发表文章
	* 发表文章页 GET /posts/create
	* 发表 POST /posts/create
* 删除文章
	* 删除 POST /posts/:articleID/delete


### 问题

1. fetch不会带上cookie, 导致session不一致

