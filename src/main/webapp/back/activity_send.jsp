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
<title>活动推送</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="<%=basePath%>back/style/authority/style2.css" rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/mystyle.css" rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/easyui.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/jquery/jquery-1.7.2.min.js"></script>
<script src="js/jquery.easyui.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/easyui-lang-zh_CN.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/myjs/laydate/laydate.js"></script>
<script type="text/javascript" src="<%=basePath%>back/js/activity.js"></script>
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
<script type="text/javascript">
    
    var i=0;
    var sd=2;
    var time;
    function abc()
    {        
        time=setTimeout("abc()",10);
        if(i<50)
        {
            document.getElementById("a").style.marginTop=document.getElementById("a").style.marginTop.replace("px","")-0+2+"px";
            i=i+sd;
        }
        else
        {
            clearTimeout(time);
            i=0;
        }    
    }
</script>

</head>
<body>
	<div class="main">
		<form action="../chaEvent/insertchaEvent.do" id="a1" method="post" enctype="multipart/form-data">
		<div class="contact-form">
			<h2>填写慈善活动信息</h2>
			<br/>
			<div>
				<span>活动名称：<input name="ce_name" id="cha_name" type="text" class="textbox" onblur="checkName();"></span>
				<span id="cname"></span>
			</div>
			<div>
				<span>活动地点：<input name="ce_place" id="cha_place" type="text" class="textbox" onblur="checkPlace();"></span>
				<span id="cplace"></span>
			</div>
			<div>
				<span>活动目标：<input name="ce_goal" id="cha_goal" type="text" class="textbox" onblur="checkGoal();"></span>
				<span id="cgoal"></span>
			</div>
			<div>
				活动时间：从&nbsp;&nbsp;<input type="text"  class="laydate-icon span1-1 ui_input_txt02" id="Calendar" name="ce_startime" value="2015-08-25"  style="width:130px;"/><span id="cc"></span>
					&nbsp;&nbsp;到&nbsp;&nbsp;<input type="text"  class="laydate-icon span1-1 ui_input_txt02" id="Calendar2" name="ce_endtime" value="2015-08-25" style="width:130px;" onblur="checkT();"/><span id="dd"></span>
					&nbsp;&nbsp;结束
			</div>
			<script>
				!function(){
					laydate.skin('molv');
							laydate({elem: '#Calendar'});
							laydate.skin('molv');
							laydate({elem: '#Calendar2'});
					}();
				</script>
			<div>
				活动内容：<span><textarea name="ce_content" id="cha_content" onblur="checkContent();"> </textarea></span>
				<span id="ccontent"></span>
			</div>
			<div class="box">
				<span>活动图片：<input type="file" class="file" name="picture" id="cha_img"/>
								<span id="cimg"></span>
				</span>
			</div>
			<div>
				<span>
					<input type="button" class="" value="上一步">
					<input type="button" id="next2" class="" value="下一步">	
				</span>
			</div>
		
		</div>
			</form>
		<div class="clear"></div>
		<form action="../draTravel/insertdraTravel.do" id="b1" method="post" enctype="multipart/form-data">
		<div class="contact-form">
			<h2>填写旅游活动信息</h2>
			<br/>
			<div>
				<span>活动项目：<input name="dt_content" id="draContent" type="text" class="textbox" onblur="checkContent();"></span>
				<span id="dcontent"></span>
			</div>
			<div>
				<span>活动地点：<input name="dt_place" id="draPlace" type="text" class="textbox" onblur="checkP();"></span>
				<span id="dplace"></span>
			</div>
	
			<div>
				活动时间：从&nbsp;&nbsp;<input type="text"  class="laydate-icon span1-1 ui_input_txt02" id="Calendar3" value="2015-08-25" name="dt_startime" style="width:130px;"/><span id="ee"></span>
					&nbsp;&nbsp;到&nbsp;&nbsp;<input type="text"  class="laydate-icon span1-1 ui_input_txt02" id="Calendar4" value="2015-08-25" name="dt_endtime" style="width:130px;" onblur="checkT();"/><span id="ff"></span>
					&nbsp;&nbsp;结束
					<span id="time2"></span>
			</div>
			<script>
				!function(){
					laydate.skin('molv');
							laydate({elem: '#Calendar3'});
							laydate.skin('molv');
							laydate({elem: '#Calendar4'});
					}();
				</script>
			<div>
				活动内容：<span><textarea name="dt_msg" id="draMsg" onblur="checkM();"> </textarea></span>
				<span id="dmsg"></span>
			</div>
			<div class="box">
				<span>活动图片：<input type="file" class="file" name="pictures" id="dt_img"/>
								<span id="dimg"></span>
				</span>
			</div>
			<div>
				<span>
					<input type="button" class="" value="上一步">
					<input type="button" class="" id="next3" value="下一步">	
				</span>
			</div>
		</div>
		</form>
		<div class="clear"></div>
	</div>
</body>
</html>