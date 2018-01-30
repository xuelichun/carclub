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
<link href="<%=basePath %>back/style/authority/basic_layout.css" rel="stylesheet" type="text/css">
<link href="<%=basePath %>back/style/authority/common_style.css" rel="stylesheet" type="text/css">
<link href="<%=basePath %>back/style/authority/mystyle.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="<%=basePath %>back/style/authority/jquery.fancybox-1.3.4.css" media="screen"></link>
<script type="text/javascript" src="<%=basePath %>back/js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/index.js"></script>
<script type="text/javascript" src="<%=basePath %>back/js/car_manage.js"></script>
<title>车辆管理</title>
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
	<div style="margin-bottom: 10px;margin-top: 20px;">
		<a href="javascript:selectCarList()" style="text-decoration: none;padding-left: 25px;padding-bottom: 10px;" ><font style="font-size: 17px;">查看车系列表</font></a> 
		&nbsp;&nbsp;<a href="javascript:insertCB()" style="text-decoration: none;"><font style="font-size: 17px;">添加品牌</font></a>
		&nbsp;&nbsp;<a href="javascript:insertCD()" style="text-decoration: none;"><font style="font-size: 17px;">添加车系</font></a>
	</div>
	<!-- 添加品牌超链接点击事件显示的标签 -->
	<div id="selD1">
		<div class="font2" style="margin-bottom: 30px;" id="CB1">
			<font style="padding-left: 25px;font-size: 17px;">选择添加品牌数量：</font><select name="fangyuanEntity.fyHxCode" id="cbNum" class="ui_select01" onchange="selectCBCount()">
				<option value="1">1</option>
				<option value="3">3</option>
				<option value="5">5</option>
				<option value="9">9</option>
			</select>
		</div>
		<div class="font2" style="margin-left: 23px;" id="CB2">
			汽车品牌1<input type="text" id="txt0" name="fangyuanEntity.fyZldz" class="ui_input_txt02"/>
		</div>
		<div id="cbIndex"></div>
		<div class="font2" style="margin-left: 20px;margin-top: 30px;" id="CB3">
			<input type="button" value="确认添加" class="ui_input_btn01" onclick="insertCarBrand()"/>
		</div>
	</div>
	<!-- 添加车系点击事件要显示的标签 -->
	<div id="selD2">
		<div class="font2" style="margin-bottom: 30px;" id="CB4">
			<font style="padding-left: 25px;font-size: 17px;">选择品牌：</font>
			<select name="fangyuanEntity.fyHxCode"  class="ui_select01" onchange="selectCDByCB1()" id="select1">
				<option value="-1">请选择</option>
			</select>
		</div>
		<div class="font2" style="margin-bottom: 30px;" id="CB5">
			<font style="padding-left: 25px;font-size: 17px;">选择添加车系数量：</font><select name="fangyuanEntity.fyHxCode"  class="ui_select01" onchange="selectCDCount()" id="select2">
				<option value="1">1</option>
				<option value="3">3</option>
				<option value="5">5</option>
				<option value="9">9</option>
			</select>
		</div>
		<div class="font2" style="margin-left: 23px;" id="CB6">
		车系1<input type="text" id="txtC0" name="fangyuanEntity.fyZldz" class="ui_input_txt02"/>
		</div>
		<div id="cdIndex"></div>
		<div class="font2" style="margin-left: 20px;margin-top: 30px;" id="CB7">
			<input type="button" value="确认添加" class="ui_input_btn01" onclick="insertCarDep()"/>
		</div>
	</div>
	<div id="selD3">
		<div class="font2" id="CB8">
			<font style="padding-left: 25px;font-size: 17px;">选择品牌：</font>
			<select name="fangyuanEntity.fyHxCode"  class="ui_select01" onchange="selectCDByCB2()" id="select3">
				<option value="-1">请选择</option>
			</select>
		</div>
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
						
							<input type="button" value="首页" class="ui_input_btn01" onclick="selectFirstCD()" />
							<input type="button" value="上一页" class="ui_input_btn01" onclick="selectLastCD()"/>
							<input type="button" value="下一页" class="ui_input_btn01"
								onclick="selectNextCD()" />
							<input type="button" value="尾页" class="ui_input_btn01"
								onclick="selectEndCD()" />
						<!--     如果是最后一页，则只显示首页、上一页 -->
						转到第<input type="text" id="text1" class="ui_input_txt01" />页
							 <input type="button" class="ui_input_btn01" value="跳转" onclick="selectIndexCD()" />
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>