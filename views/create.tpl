{% extends "./include/common.tpl" %}
{% block title %}
<title>写文章</title>
{% endblock %}

{% block style %}
<link rel="stylesheet" href="assets/css/write.css">
{% endblock %}

{% block content %}
	{% include "./include/header.tpl" %}

	<div class="edit-eara">
		<p class="title-area">
			<label for="title">Title:</label>
			<input class="form-control" id="title" type="text">
		</p>
		<p>
			<textarea class="form-control content" id="content"></textarea>
		</p>
		<button class="btn" id="write">提交</button>
	</div>

{% endblock %}

{% block script %}
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
{% endblock %}