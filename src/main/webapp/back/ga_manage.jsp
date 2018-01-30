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
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="<%=basePath %>back/scripts/jquery/jquery-1.7.1.js"></script>
<link href="<%=basePath %>back/style/authority/basic_layout.css" rel="stylesheet" type="text/css">
<link href="<%=basePath %>back/style/authority/common_style.css" rel="stylesheet" type="text/css">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="<%=basePath%>back/style/authority/style2.css"
	rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/mystyle.css"
	rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="<%=basePath %>back/scripts/authority/commonAll.js"></script>
<script type="text/javascript" src="<%=basePath %>back/scripts/fancybox/jquery.fancybox-1.3.4.js"></script>
<script type="text/javascript" src="<%=basePath %>back/scripts/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath %>back/style/authority/jquery.fancybox-1.3.4.css" media="screen"></link>
<script type="text/javascript" src="<%=basePath %>back/scripts/artDialog/artDialog.js?skin=default"></script>
<script type="text/javascript" src="<%=basePath %>back/scripts/myjs/laydate/laydate.js"></script>
<script type="text/javascript"
	src="<%=basePath%>back/scripts/jquery/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/index.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/addAdm.js"></script>
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
<title>车辆管理</title>
</head>
<body>
	<div style="margin-bottom: 10px;margin-top: 20px;">
		<a href="javascript:admListClick()" style="text-decoration: none;padding-left: 25px;padding-bottom: 10px;" ><font style="font-size: 17px;">查看二级管理员列表</font></a> 
		&nbsp;&nbsp;&nbsp;<a href="javascript:addAdmClick()" style="text-decoration: none;"><font style="font-size: 17px;">添加管理员</font></a>
	</div>
	<div class="main" id="addAdm">
		<span id="s4" style="color: #ff0000"></span>
		<div class="contact-form">
			<div>
				<span>管理员账号：<input name="userName" type="text" class="textbox" id="name" onblur="verName()" /></span>
				<span id="s1" style="color: #ff0000"></span>
			</div>
			<div>
				<span>管理员密码：<input name="userName" type="password" class="textbox mypwd" id="pwd" onblur="verPwd()" /></span>
				<span id="s2" style="color: #ff0000"></span>
			</div>
			<div>
				<span>重&nbsp;复&nbsp;密&nbsp;码：<input name="userName" type="password" class="textbox mypwd" onblur="verRePwd()" id="rePwd" /></span>
				<span id="s3" style="color: #ff0000"></span>
			</div>
			<div class="box">
				<span>管理员级别：<input type="radio" name="ga_grade" checked="checked" value="1"/>超级管理员
				<input type="radio" name="ga_grade" value="2"/>普通管理员
				</span>
			</div>
			<div>
				<span>
					<input type="button" class="" value="确认添加" onclick="conAddAdm()">	
				</span>
			</div>
		</div>
		<div class="clear"></div>
	</div>
	<div id="admList">
		<form id="submitForm" name="submitForm" action="" method="post">
		<div id="container">
			<div class="ui_content">
				<div class="ui_tb" id="ui_tb">
				</div>
				<div class="ui_tb_h30">
					<div class="ui_flt" style="height: 30px; line-height: 30px;">
						共有
						<span class="ui_txt_bold04" id="countRecord"></span>
						条记录，当前第
						<span class="ui_txt_bold04" id="currentPage"></span>
						/
						<span class="ui_txt_bold04" id="endPage"></span>
						页
					</div>
					<div class="ui_frt">
						<!--    如果是第一页，则只显示下一页、尾页 -->
						
							<input type="button" value="首页" class="ui_input_btn01" onclick="selectFirstGA()" />
							<input type="button" value="上一页" class="ui_input_btn01" onclick="selectLastGA()"/>
							<input type="button" value="下一页" class="ui_input_btn01"
								onclick="selectNextGA()" />
							<input type="button" value="尾页" class="ui_input_btn01"
								onclick="selectEndGA()" />
						
						
						
						<!--     如果是最后一页，则只显示首页、上一页 -->
						
						转到第<input type="text" id="text1" class="ui_input_txt01" />页
							 <input type="button" class="ui_input_btn01" value="跳转" onclick="selectIndexGA()" />
					</div>
				</div>
			</div>
		</div>
	</form>
	</div>
</body>
</html>