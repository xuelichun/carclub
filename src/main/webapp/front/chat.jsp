<%@page import="com.zeepn.bean.UserInfo"%>
<%@page import="javax.websocket.WebSocketContainer"%>
<%@ page language="java" pageEncoding="UTF-8" import="com.zeepn.utils.WebSocketMessageServlet"%>
<%
	UserInfo user = (UserInfo)session.getAttribute("user");
	
	String userNick=(String)session.getAttribute("userNick");
	if(user != null){
		userNick = user.getU_nick();
		WebSocketMessageServlet.ONLINE_USER_COUNT ++;
		session.setAttribute("userNick", userNick);
		pageContext.setAttribute("userNick", userNick);
	}else{
		pageContext.removeAttribute("userNick");
		session.removeAttribute("userNick");
		%>
		<script>
			alert("请先登录！！");
			location.href="index.html"
		</script>
		
		<% 
	}
	
%>
<html>
<head>
	<title>WebSocket 聊天室</title>
	<!-- 引入CSS文件 -->
	<link rel="stylesheet" type="text/css" href="./ext4/resources/css/ext-all.css">
	<link rel="stylesheet" type="text/css" href="./ext4/shared/example.css" />
	<link rel="stylesheet" type="text/css" href="./css/websocket.css" />
	
	<!-- 映入Ext的JS开发包，及自己实现的webscoket. -->
	<script type="text/javascript" src="./ext4/ext-all-debug.js"></script>
	<script type="text/javascript" src="./js/websocket.js"></script>
	<script type="text/javascript">
		var userNick = "${userNick}";
	</script>
</head>

<body>
	<div id='websocket_button'></div>
	
</body>
</html>
