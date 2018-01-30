<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
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
<script type="text/javascript" src="<%=basePath %>back/js/arecord_list.js"></script>
<title>欠费管理</title>
<style>
	.alt td{ background:black !important;}
</style>
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
	<form id="submitForm" name="submitForm" action="" method="post">
		<input type="hidden" name="allIDCheck" value="" id="allIDCheck"/>
		<input type="hidden" name="fangyuanEntity.fyXqName" value="" id="fyXqName"/>
		<div id="container">
			<div class="ui_content">
				<div class="ui_text_indent">
					<div id="box_border">
						<div id="box_top">搜索</div>
						<div id="box_center">
							欠费类型
							<select name="fangyuanEntity.fyHxCode" id="fyHx" class="ui_select01" onchange="selectOpPay()">
                                <option value="1">年费</option>
                                <option value="2">功能费用</option>
                                <option value="3">人数级别费用</option>
                            </select>
							欠费日期
							<input type="text"  class="laydate-icon span1-1 ui_input_txt02" id="Calendar" value=""  />
							<script>
								!function(){
									laydate.skin('molv');
									laydate({elem: '#Calendar'});
									laydate.skin('molv');
									laydate({elem: '#Calendar2'});
								}();
							</script>
							欠费天数&nbsp;&nbsp;<input type="text" id="text2" name="fangyuanEntity.fyZldz" class="ui_input_txt02" />
							车友会编号&nbsp;&nbsp;<input type="text" id="text3" name="fangyuanEntity.fyZldz" class="ui_input_txt02" />
							<a href="javascript:selectArByParam()" style="padding-left: 12px;text-align: center"><img alt="" src="<%=basePath %>back/images/myImage/search.png"></a>
						</div>
						<div id="box_bottom">
							<input type="button" value="更新欠费列表" class="ui_input_btn01" onclick="updateAr()" /> 
							<input type="button" value="发送欠费消息" class="ui_input_btn01" onclick="sendArMsg();" /> 
						</div>
					</div>
				</div>
			</div>
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
						
							<input type="button" value="首页" class="ui_input_btn01" onclick="selectFirstAr()" />
							<input type="button" value="上一页" class="ui_input_btn01" onclick="selectLastAr()" />
							<input type="button" value="下一页" class="ui_input_btn01"
								onclick="selectNextAr();" />
							<input type="button" value="尾页" class="ui_input_btn01"
								onclick="selectEndAr()" />
						
						
						
						<!--     如果是最后一页，则只显示首页、上一页 -->
						
						转到第<input type="text" id="text1" class="ui_input_txt01" />页
							 <input type="button" class="ui_input_btn01" value="跳转" onclick="selectIndexAr();" />
					</div>
				</div>
			</div>
		</div>
	</form>
</body>
</html>
