{% extends "./include/common.tpl" %}

{% block title %}
<title>登录页面</title>
{% endblock %} 

{% block style %}
<link rel="stylesheet" href="assets/css/login.css"> 
{% endblock %}

{% block content %}
<div class="center login">
	<div class="header">
		<span class="icon close"></span>
		<span class="icon minimize"></span>
		<span class="icon full-screen"></span>
		<div class="url">localhost</div>
	</div>
	<div class="body">
		<p id="step-1">
			<span>
				<i class="cicle"></i> ~/ $ Please Enter Your Name
			</span>
			<br>
			<input id="username" name="username" type="text" class="username">
		</p>

		<p id="step-2" style="display: none">
			<span>
				<i class="cicle"></i> ~/ $ And Enter Your Password</span>
			</span>
			<br>
			<input id="password" type="password" name="password" class="password">
		</p>
	</div>
</div>
{% endblock %}

{% block script %}
<script src="assets/js/login.js"></script>
{% endblock %}