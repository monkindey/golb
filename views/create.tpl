<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Articles</title>
</head>
<body>
	<h3>写下你的文章</h3>
	<label for="title">标题</label><input id="title" type="text">
	<textarea id="content" cols="30" rows="10"></textarea>
	<button id="write">提交</button>
</body>
<script>
	const byId = (id) => document.getElementById(id)	
	var write = byId('write');
	var title = byId('title');
	var content = byId('content');

	write.onclick = () => {
		fetch('/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
			},
			credentials: 'include',
			body: `title=${title.value}&content=${content.value}`
		})
		.then(res => {
			if(res.ok) {
				return res.json()
			}
		}).then(function(json) {
			if(!json.success) {
				throw new Error('xxx');
			} else {
				window.location.href = `posts/${json.id}`
			}
		})
	}
</script>
</html>