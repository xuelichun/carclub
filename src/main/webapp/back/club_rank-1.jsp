<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="<%=basePath %>back/scripts/jquery/jquery-1.7.1.js"></script>
<link href="<%=basePath %>back/style/authority/basic_layout.css" rel="stylesheet" type="text/css">
<link href="<%=basePath %>back/style/authority/common_style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=basePath %>back/scripts/authority/commonAll.js"></script>
<script type="text/javascript" src="<%=basePath %>back/scripts/fancybox/jquery.fancybox-1.3.4.js"></script>
<script type="text/javascript" src="<%=basePath %>back/scripts/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath %>back/style/authority/jquery.fancybox-1.3.4.css" media="screen"></link>
<script type="text/javascript" src="<%=basePath %>back/scripts/artDialog/artDialog.js?skin=default"></script>
<script type="text/javascript" src="<%=basePath %>back/scripts/myjs/laydate/laydate.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/index.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/club_rank.js"></script>
<title></title>
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
<style>
	.alt td{ background:black !important;}
</style>
</head>
<body>
	<form id="submitForm" name="submitForm" action="" method="post">
		<input type="hidden" name="allIDCheck" value="" id="allIDCheck"/>
		<input type="hidden" name="fangyuanEntity.fyXqName" value="" id="fyXqName"/>
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
						
							<input type="button" value="首页" class="ui_input_btn01" onclick="selectFirstClub()" />
							<input type="button" value="上一页" class="ui_input_btn01" onclick="selectLastClub()" />
							<input type="button" value="下一页" class="ui_input_btn01"
								onclick="selectNextClub();" />
							<input type="button" value="尾页" class="ui_input_btn01"
								onclick="selectEndClub();" />
						<!--     如果是最后一页，则只显示首页、上一页 -->
						
						转到第<input type="text" id="text1" class="ui_input_txt01" />页
							 <input type="button" class="ui_input_btn01" value="跳转" onclick="selectIndexClub();" />
					</div>
				</div>
			</div>
		</div>
	</form>
</body>
</html>
