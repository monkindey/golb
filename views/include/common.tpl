<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	
	{% block title %}<title>博客系统</title>{% endblock %}
	{% block meta %}{% endblock %}

	<link rel="shortcut icon" href="/assets/favicon.ico">
	<link rel="stylesheet" href="/assets/css/normalize.css">
	<link rel="stylesheet" href="/assets/css/pur.css">
	<link rel="stylesheet" href="/assets/css/common.css">
	{% block style %}{% endblock %}
</head>
<body>
	{% block content %}
	{% endblock %}
</body>
{% block script %}
{% endblock %}
</html>