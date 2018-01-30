<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>  
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>个人信息管理</title>
<link href="<%=basePath %>back/style/authority/mystyle.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=basePath %>back/scripts/jquery/jquery-1.7.1.js"></script>
<script type="text/javascript" src="<%=basePath %>back/scripts/myjs/pinfo_manage.js"></script>
</head>
<body>
	<div>
		<input type="button" value="添加二级管理员"/>
		<input type="button" value="查询二级管理员"/>
		<input type="button" value="删除二级管理员"/>
	</div>
	<div id="d1">
		<div id="d2" class="erd1">
			超级管理员账户：<input type="text"/>
		</div>
		<div id="d3" class="erd1">
			超级管理员密码：<input type="password"/>
		</div>
		<div id="d4" class="erd1">
			重复管理员密码：<input type="password"/>
		</div>
		<div id="d5" class="erd1">
			<input type="button" value="修改"/>
		</div>
	</div>
	<div></div>
</body>
</html>