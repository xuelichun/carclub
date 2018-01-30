<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="<%=basePath%>/back/js/index.js"></script>
<script type="text/javascript" src="<%=basePath%>/front/js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=basePath%>/back/js/fnetAnt.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>公告和话题发布</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="<%=basePath%>back/style/authority/style2.css"
	rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/mystyle.css"
	rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript"
	src="<%=basePath%>back/scripts/jquery/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop : $(this.hash).offset().top
			}, 1200);
		});
	});
</script>
</head>
<body>
	<div style="margin-bottom: 10px;margin-top: 20px;">
		<a href="#" style="text-decoration: none;padding-left: 25px;padding-bottom: 10px;" ><font style="font-size: 20px;">发布公告</font></a> 

	</div>
	<div class="main">
		<div class="contact-form">
			<div>
				<span>公告标题：<input id="fa_title" name="userName" type="text" class="textbox" onBlur="checkTitle()" maxlength="8"></span><span id="title" ></span>
			</div>
			<div class="box">
				<span>公告内容：<textarea id="fa_msg"name="userMsg" onBlur="checkMsg()"> </textarea></span><span id="msg" ></span><br>
			</div>
			
			<div>
				<span>
					<input type="button" class="" value="发布" onclick="addFnetAnt()">
				</span>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</body>
</html>