{% extends "./include/common.tpl" %}

{% block title %}
<title>{{ post.title }}</title>
{% endblock %}

{% block style %}
<link rel="stylesheet" href="/assets/css/post.css">
{% endblock %}

{% block content %}
	{% include "./include/header.tpl" %}
	<div class="post">
		<h2>
			{{ post.title }} 	
		</h2>
		<p class="post-content">
			{{ post.content }} 	
		</p>
	</div>
{% endblock %}