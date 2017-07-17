{% extends "./include/common.tpl" %}

{% block title %}
<title>登录页面</title>
{% endblock %} 

{% block style %}
<link rel="stylesheet" href="assets/css/login.css"> 
{% endblock %}

{% block content %}

<div class="flipper-wrapper center">
	<div class="flipper">
		<div class="login sh">
			<div class="sh-hd">
				<span class="sh-icon sh-icon-close">×</span>
				<span class="sh-icon sh-icon-minimize"></span>
				<span class="sh-icon sh-icon-full-screen"></span>
				<div class="url">localhost</div>
			</div>
			<div class="sh-bd">
				<p>
					<span>
						<i class="cicle"></i> ~/ $ Please Enter Your Name
					</span>
					<br>
					<input id="username" name="username" type="text" class="username">
				</p>

				<p class="input-pwd-step" style="display: none">
					<span>
						<i class="cicle"></i> ~/ $ And Enter Your Password</span>
					</span>
					<br>
					<input id="password" type="password" name="password" class="password">
				</p>
			</div>
		</div>

		<div class="sign sh sh-dark">
			<div class="sh-hd">
				<span class="sh-icon sh-icon-close">×</span>
				<span class="sh-icon sh-icon-minimize"></span>
				<span class="sh-icon sh-icon-full-screen"></span>
			</div>
			<div class="sh-bd">
				<p>
					<span>
						<i class="cicle"></i> ~/ $ Please Enter Your Name
					</span>
					<br>
					<input id="sign-username" name="username" type="text" class="username">
				</p>

				<p class="input-pwd-step" style="display: none">
					<span>
						<i class="cicle"></i> ~/ $ And Enter Your Password</span>
					</span>
					<br>
					<input id="sign-password" type="password" name="password" class="password">
				</p>
			</div>
		</div>
	</div>
</div>
{% endblock %}

{% block script %}
<script src="assets/js/login.js"></script>
{% endblock %}