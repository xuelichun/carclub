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
<title>车友会排行</title>
<style type="text/css">
#canvas{
	position: relative;
}
#show_num{
	position: absolute;
	z-index: 111;
}
.show_num{
	border: 1px solid #bfbfbf;
	background-color: #fff;
	width: 90px;
	height: 24px;
	line-height: 24px;
	text-indent: 5px;
	position: relative;
	z-index: 0;
}
#show_num em{
	position:absolute;
	bottom:-7px;
	left:4px;
	overflow:hidden;
	width:13px;
	height:13px;
	background:#fff;
	border-bottom:1px solid #bfbfbf;
	border-right:1px solid #bfbfbf;
	-webkit-transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-o-transform:rotate(45deg);
	transform:rotate(45deg);
	z-index: -2;
}
</style>
</head>
<body>
<div style="margin-left:19px;">
	<a href="#" style="text-decoration: none;">更新欠费情况</a>
	<a href="#" style="text-decoration: none;">查看欠费情况列表</a>
</div>
<canvas id="canvas"></canvas>
<div id="show_num"></div>
<script type="text/javascript" src="<%=basePath %>back/scripts/jquery/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<%=basePath %>back/scripts/myjs/stafee_rank.js"></script>
<div style="text-align:center;">
</div>
</body>
</html>