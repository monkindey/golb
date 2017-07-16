{% extends "./include/common.tpl" %}
{% block title %}
<title>所有文章</title>
{% endblock %}

{% block style%}
<link rel="stylesheet" href="assets/css/posts.css">
{% endblock%}

{% block content %}
	{% include "./include/header.tpl" %}
	<div class="posts">
		<ul>
			{% for post in posts %}
				<li class="post" data-id="{{ post._id }} ">
					<h4>
						<a href="posts/{{ post._id }} ">{{ post.title }} </a>
					</h4>
					<p class="post-content">
						{{ post.content }} 
					</p>
					<button class="btn delete-btn">删除</button>
				</li>
			{% endfor %}
		</ul>
		</div>
{% endblock %}

<script>
	var deleteBtns = document.querySelectorAll('.delete-btn');
	deleteBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const id = e.target.parentNode.getAttribute('data-id');
			fetch('/posts/delete', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
				},
				body: `id=${id}`
			}).then(res => {
				return res.json()
			}).then(json => {
				if (json.success) {
					console.log('成功');
					window.location.reload();
				}
			})
		})
	})

</script>