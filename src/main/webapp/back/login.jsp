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
<title>车友会后台管理系统管理员登录</title>
<link href="<%=basePath %>back/style/authority/login_css.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath %>back/style/authority/mystyle.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="scripts/jquery/jquery-1.7.1.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/login.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$("#login_sub").click(function(){}
	);
});
	
	/*回车事件*/
	function EnterPress(e){ //传入 event 
		var e = e || window.event; 
		if(e.keyCode == 13){ 
			$("#submitForm").attr("action", "index.html").submit();
		} 
	} 
</script>
<script type="text/javascript">
	// skin demo
	(function() {
	var _skin, _jQuery;
	var _search = window.location.search;
	if (_search) {
	_skin = _search.split('demoSkin=')[1];
	_jQuery = _search.indexOf('jQuery=true') !== -1;
	if (_jQuery) document.write('<scr'+'ipt src="jquery-1.6.2.min.js"></sc'+'ript>');
	};
		document.write('<scr'+'ipt src="<%=basePath %>artDialog/artDialog.source.js?skin=' + (_skin || 'default') +'"></sc'+'ript>');
		window._isDemoSkin = !!_skin;
	})();
</script>
<script type="text/javascript" src="<%=basePath %>artDialog/artDialog.js"></script>
		<script type="text/javascript" src="<%=basePath %>artDialog/basic/jquery.artDialog.basic.js" ></script>
		<script type="text/javascript" src="<%=basePath %>artDialog/jquery.artDialog.js"></script>
		<script type="text/javascript" src="<%=basePath %>artDialog/jquery.artDialog.source.js"></script>
		<link rel="stylesheet" href="<%=basePath %>artDialog/_doc/highlight/styles/magula.css" />	
</head>
<body>
	<div id="login_center">
		<div id="login_area">
			<div id="login_box">
				<div id="login_form">
						<div id="login_tip">
							<span id="login_err" class="sty_txt2"></span>
						</div>
						<div>
							 用&nbsp;户&nbsp;名：<input type="text" name="adm_name" class="username" id="name" onblur="verName()" />
							<span id="s1" style="color: #ff0000"></span>
						</div>
						<div>
							密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" name="adm_pwd" class="pwd" id="pwd" onkeypress="EnterPress(event)" onkeydown="EnterPress()" onblur="verPwd()" />
							<span id="s2" style="color: #ff0000"></span>
						</div>
						<div class="shenfen">
							选择身份:
							<input type="radio" name="adm_level" checked="checked" value="1"/>超级管理员
							<input type="radio" name="adm_level" value="2"/>二级管理员
						</div>
						<div id="btn_area">
							<input type="button" class="login_btn" id="login_sub"  value="登  录" onclick="admLogin()" >
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" class="login_btn" id="login_ret" value="重 置">
						</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>