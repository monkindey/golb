<ul>
	{% for post in posts %}
		<li data-id="{{ post._id }} ">
			<h5>
				<a href="posts/{{ post._id }} ">{{ post.title }} </a>
			</h5>
			<p>
				{{ post.content }} 
			</p>
			<button class="delete-btn">删除</button>
		</li>
	{% endfor %}
</ul>

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
				console.log(423423);
				if (json.success) {
					console.log('成功');
					window.location.reload();
				}
			})
		})
	})

</script>