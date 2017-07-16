<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sign Up</title>

	<style></style>
</head>
<body class="hack">
	<div style="display:none" id="hint" class="alert alert-error"></div>
	<!-- sign up -->
	<div class="form container">
		<div class="form-group">
			<label for="username">username</label>
			<input class="form-control" id="username" name="username" type="text">
		</div>
		<div class="form-group">
			<label for="password">password</label>
			<input class="form-control" id="password" type="password">
		</div>
		<div class="form-actions">
			<button id="signup" class="btn btn-primary btn-block">Create an Account</button>
		</div>
	</div>
</body>
<script>
	const byId = (id) => document.getElementById(id)
	var username = byId('username');
	var password = byId('password');
	var hint = byId('hint');

	// fetch 灵活但是需要很多配置, 还有HTTP知识
	document.getElementById('signup').onclick = () => {
		fetch('/signup', {
			method: 'POST',
			headers: {
				// 告诉服务端我传数据的格式
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
			},	
			credentials: 'include',
			body: `username=${username.value}&password=${password.value}`
		}).then(res => {
			var contentType = res.headers.get('Content-Type');
			if(res.ok && contentType.indexOf('application/json') !== -1) {
				return res.json()
			}
		}).then(json => {
			if(!json.success) {
				hint.innerText = json.error;
				hint.style.display = 'block';
				setTimeout(() => {
					hint.style.display = 'none';
				}, 2000)
			}else {
				window.location.href = json.redirect;
			}
		}).catch(err => console.log(err))
	}
</script>
</html>