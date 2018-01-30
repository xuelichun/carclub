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
<link href="style/authority/basic_layout.css" rel="stylesheet" type="text/css">
<link href="style/authority/common_style.css" rel="stylesheet" type="text/css">	
<script type="text/javascript" src="scripts/jquery/jquery-1.7.1.js"></script>
<script type="text/javascript" src="<%=basePath%>/front/js/jquery.js"></script>
<script type="text/javascript" src="scripts/authority/commonAll.js"></script>
<script type="text/javascript" src="scripts/fancybox/jquery.fancybox-1.3.4.js"></script>
<script type="text/javascript" src="scripts/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="style/authority/jquery.fancybox-1.3.4.css" media="screen"></link>
<script type="text/javascript" src="scripts/artDialog/artDialog.js?skin=default"></script>
<script type="text/javascript" src="scripts/myjs/laydate/laydate.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/jquery/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/message_list.js"></script>	
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
		
			<div id="d2" class="ui_content">
				<div id="d3" class="ui_tb">
					<!--<table class="table" cellspacing="0" cellpadding="0" width="100%" align="center" border="0">
						<tr>
							<th width="30"><input type="checkbox" id="all" onclick="selectOrClearAllCheckbox(this);" />
							</th>
							<th>管理员编号</th>
							<th>管理员账号</th>
							<th>管理员级别</th>
							<th>上级管理员账号</th>
							<th>操作</th>
						</tr>
							
						
							<tr>
								<td><input type="checkbox" name="IDCheck" value="14458592537463" class="acb" /></td>
								<td>城中区</td>
								<td>瑞景河畔16号楼2-121</td>
								<td>65.97㎡</td>
								<td>65.97㎡</td>
								<td>一室一厅一卫</td>
								<td>混凝土</td>
								<td>公租房</td>
								<td>建成待租</td>
								<td>
									<a href="house_edit.html?fyID=14458592537463" class="edit">编辑</a> 
									<a href="javascript:del('14458592537463');">删除</a>
								</td>
							</tr>					
					</table>
					-->
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
		</div>
	
</body>
</html>