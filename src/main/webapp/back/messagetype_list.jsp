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
<title>编辑推送信息</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="<%=basePath%>back/style/authority/style2.css"
	rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/mystyle.css"
	rel="stylesheet" type="text/css" />
<link href="<%=basePath%>back/style/authority/style2.css"
	rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/basic_layout.css" rel="stylesheet" type="text/css">
<link href="<%=basePath%>back/style/authority/common_style.css" rel="stylesheet" type="text/css">	
<script type="text/javascript" src="<%=basePath%>back/scripts/jquery/jquery-1.7.1.js"></script>
<script type="text/javascript" src="<%=basePath%>/front/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/authority/commonAll.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/fancybox/jquery.fancybox-1.3.4.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath%>back/style/authority/jquery.fancybox-1.3.4.css" media="screen"></link>
<script type="text/javascript" src="<%=basePath%>back/scripts/artDialog/artDialog.js?skin=default"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/myjs/laydate/laydate.js"></script>
<script type="text/javascript" src="<%=basePath%>/back/js/index.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/jquery/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<%=basePath%>back/js/messagetype.js" charset="utf-8"></script>	
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
		
	<div class="main">
		<div class="contact-form">
				类型管理：<select name="fangyuanEntity.fyXqCode" id="fyXq1"
					class="ui_select01" onchange="change(this.value)" style="height:38px;width:130px;">
					
					<option value="1">查看消息类型</option>
					
					<option value="0">添加消息类型</option>
				</select>
				
			</div>
		
			<div id="d2" class="ui_content" style="display:none">
				<div id="d3" class="ui_tb">
			
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
						
							<input type="button" value="首页" class="ui_input_btn01"   onclick="selectStartAn()" />
							<input type="button" value="上一页" class="ui_input_btn01"  onclick="selectFrontAn()"/>
							<input type="button" value="下一页" class="ui_input_btn01"
								onclick="selectNextAn()" />
							<input type="button" value="尾页" class="ui_input_btn01"
								onclick="selectEndAn()" />
						
						
						
						<!--     如果是最后一页，则只显示首页、上一页 -->
						
						转到第<input type="text" id="text1" class="ui_input_txt01" />页
							 <input type="button" class="ui_input_btn01" value="跳转" onclick="selectIndexAn()" />
					</div>
				</div>
			</div>
				<div class="contact-form"  id="addmessagetype" style="display:none" >
			<div>
				<span>类型标题：<input id="mt_title" name="userName" type="text" class="textbox" onBlur="checkTitle()" maxlength="8"></span><span id="mttitle" ></span>
			</div>
			<div class="box">
				<span>消息内容：<textarea id="mt_con"name="userMsg" > </textarea></span><br>
				
			</div>
			
			<div>
				<span>
					<input type="button" class="" value="添加" onclick="addmessagetype()">
				</span>
			</div>
		</div>
		</div>
	
</body>
</html>