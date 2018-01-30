<%@page import="com.zeepn.bean.AdvType"%>
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
<title>广告管理</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="<%=basePath%>back/style/authority/style2.css" rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/mystyle.css" rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/easyui.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="<%=basePath%>back/scripts/jquery/jquery-1.7.2.min.js"></script>
<script src="js/jquery.easyui.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/easyui-lang-zh_CN.js" type="text/javascript" charset="utf-8"></script>
<!--<script type="text/javascript" src="js/index.js"></script>  -->
<script type="text/javascript" src="js/advertiser.js"></script>

<%@page import="java.util.*"%>
<script type="text/javascript"></script>
<script>
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
			<form action="../advertiser/adv.do" id="a1" method="post" enctype="multipart/form-data">
		<div class="contact-form">
			<h2>填写商家信息</h2>
			<div>
				<span>商家名称：<input name="adv_name" id="advertiserName" type="text" class="textbox" onblur="checkNick()"></span>
				<span id="sname"></span>
			</div>
			<div>
				<span>商家地址：<input name="adv_adress" id="advertiserAdress" type="text" class="textbox" onblur="checkAdr()"></span>
				<span id="sadress"></span>
			</div>
			<div class="box">
				<td>商家图片：</td>
				<input type="button" value="选择图片"  id="mybutton" class="mybtn"  onclick="Id('file').click();" />
				<input type="file" name="pic" accept="image/png,image/jpg,image/jpeg" 	id="file" onchange="changeToop();" style="display:none;" />
				 <span id="aimg"></span>
			</div>
			<td>
				<span><img id="myimg" name="myimg" src="http://sandbox.runjs.cn/uploads/rs/72/huvtowwn/zanwu.png"/></span>
			</td>
			<div>
				<span>
					<input type="button" class="" value="上一步">
					<input type="button" id="next" class="" value="下一步">
				</span>
			</div>
		</div>
		</form>
		</div>

		<div class="clear"></div>
		<form action="../advertiser/desc.do" id="b1" method="post" enctype="multipart/form-data">
		<div class="contact-form">
			<h2>填写广告信息</h2>
			<!-- 
			<div>
				广告类型：<div id="advType">
				<select id="at_name" name="at_id" class="ui_select01" onchange="initC()">
					<option value="-1">--请选择--</option>
					<option value="6">4s店广告</option>
					<option value="77">汽车零件广告</option>
					<option value="83">汽车饰品广告</option>
						</select>
				
						</div>
				<span id="satname"></span>
			</div>
			 -->
			<div>
				<span>广告类型ID：<input type="text" class="textbox" id="at" name="at_id"></span>
				<span id="sat"></span>
			</div>
			<div>
				<span>广告商ID：<input type="text" class="textbox" id="ad" name="adv_id"></span>
				<span id="sad"></span>
			</div>
			<div>
				<span>费用数目：<input type="text" class="textbox" id="ad_price" name="ad_price" onblur="checkPrice()"></span>
				<span id="sprice"></span>
			</div>
			<div>
					广告内容：<span><textarea name="ad_content" id="ad_content" onblur="checkContent()"> </textarea></span>
				<span id="scontent"></span>
			</div>
			<div>
				<span>广告网址:<input name="ad_web" id="ad_web" class="textbox" type="text" onblur="checkImg()"/></span>
				<span id="address"></span>
			</div>
			<div class="box">
				<span>广告图片:
					<input type="file"  name="pict" id="img"/>
					<span id="simg"></span>
				</span>
			</div>
			<div>
				<span>
					<input type="button" class="" value="上一步">
					<input type="button" class="" id="end" value="下一步">
				</span>
			</div>
		</div>
		</form>
		<div class="clear"></div>
</body>
</html>