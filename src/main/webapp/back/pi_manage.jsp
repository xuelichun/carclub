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
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>个人信息管理</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="<%=basePath%>back/style/authority/style2.css"
	rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/mystyle.css"
	rel="stylesheet" type="text/css" media="all" />
<style type="text/css">
	.mypwd{
	font-family: 'Microsoft yahei', sans-serif;
	background: #FFFFFF;
	border: 1px solid #E7E7E7;
	color: rgba(85, 81, 81, 0.84);
	padding: 8px;
	width: 400px;
	outline: none;
	-webkit-appearance: none;
	text-transform: capitalize;
}
</style>
<script type="text/javascript" src="<%=basePath %>back/js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/index.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/ga_manage.js"></script>
</head>
<body>
	<div style="margin-bottom: 10px;margin-top: 20px;">
		<a href="javascript:updatePIPwd()" style="text-decoration: none;padding-left: 25px;padding-bottom: 10px;" ><font style="font-size: 17px;">修改个人密码</font></a> 
	</div>
	<span id="s3" style="color: #ff0000;padding-left: 24px;"></span>
	<div class="main" id="ddd1">
		<div class="contact-form">
			<div id="newPwd">
				<span>新&nbsp;密&nbsp;码&nbsp;：<input name="userName" type="password" class="textbox mypwd" id="adm_pwd" onblur="verNewPwd()"/></span>
				<span id="s1" style="color: #ff0000"></span>
			</div>
			<div id="rePwd">
				<span>重复密码：<input name="userName" type="password" class="textbox mypwd" id="rePIPwd" onblur="verRePwd()"/></span>
				<span id="s2" style="color: #ff0000"></span>
			</div>
			<div>
				<span>
					<input type="button"  value="确认修改" onclick="updateAdmPwd()"/>	
				</span>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</body>
</html>