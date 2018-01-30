$(function (){

	$("#next").click(function(){
		check();
		var t=$("#fyXq").val();
		if(t==6){
		}
		if(t==77){
			addmessage();
		}else{
			alert("消息内容不能为空请重新填写")
		}
	});
});
function check(){
	if($("#fyXq").val().trim()==''){
		$("#changeName").prop("style","color:#ff0000;");
		$("#changeName").html("活动类型不能为空");
		return;
	}else{
		$("#changeName").html("");
		return;
	}
	if(check()){
		alert("adbcd");
	}
}
$(function (){
	$("#next2").click (function(){
		if($("#cha_name").val()==''){
			$("#cname").prop("style","color:#ff0000;");
			$("#cname").html("活动名不能为空");
			return;
		}if($("#cha_place").val()==''){
			$("#cplace").prop("sytle","color:#ff0000;");
			$("#cplace").html("活动地址不能为空");
			return;
		}if($("#cha_img").val()==''){
			$("#cimg").html("请添加图片");
			return;
		}else{
			$("#cimg").html("");
		}if($("#cha_content").val==''){
			$("#ccontent").html("请添加活动内容");
			return;
		}if($("#cha_goal").val==''){
			$("#cgoal").html("请添加活动目标");
			return;
		}
		$("#a1").submit();
	});
	
	$('#a1').form({
		success:function(data){
			var rss = $.parseJSON(data);
			if (rss.rs=='ok') {
				$.messager.alert('提示信息','添加成功！');
				$("#cha_name").val("");
				$("#cha_place").val("");
				$("#cha_content").val("");
				$("#Calendar1").val("");
				$("#Calendar2").val("");
				$("#cha_goal").val("");
				$("#cname").html();
				$("#cplace").html();
				$("#ccontent").html();
				$("#cc").html();
				$("#dd").html();
				$("#cgoal").html();
			}else{
				$.messager.alert('提示','添加失败！');
			}
		}
	});
});

function checkName(){
	if($("#cha_name").val().trim()==''){
		$("#cname").html("活动名称不能为空");
		$("#cname").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#cname").html("");
		return true;
	}
}
function checkPlace(){
	if($("#cha_place").val().trim()==''){
		$("#cplace").html("活动地址不能为空");
		$("#cplace").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#cplace").html("");
		return true;
	}
}
function checkContent(){
	if($("#cha_content").val().trim()==''){
		$("#ccontent").html("活动内容不能为空");
		$("#ccontent").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#ccontent").html("");
		return true;
	}
}
function checkGoal(){
	if($("#cha_goal").val().trim()==''){
		$("#cgoal").html("活动目标不能为空");
		$("#cgoal").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#cgoal").html("");
		return true;
	}
}

$(function (){
	$("#next3").click (function(){
		if($("#draContent").val()==''){
			$("#dcontent").prop("style","color:#ff0000;");
			$("#dcontent").html("请添加活动项目");
			return;
		}if($("#draPlace").val()==''){
			$("#dplace").prop("sytle","color:#ff0000;");
			$("#dplace").html("请添加活动地址");
			return;
		}if($("#draMsg").val()==''){
			$("#dmsg").html("请添加活动内容");
			return;
		}if($("#dt_img").val()==''){
			$("#dimg").html("请添加图片");
			return;
		}else{
			$("#dimg").html("");
		}
		r=$("#Calendar3").val();
		s=$("#Calendar4").val();
		$("#b1").submit();
	});
	
	$('#b1').form({
		success:function(data){
			var rss = $.parseJSON(data);
			if (rss.rs=='ok') {
				$.messager.alert('提示信息','添加成功！');
				$("#draContent").val("");
				$("#draPlace").val("");
				$("#draMsg").val("");
				$("#Calendar3").val("");
				$("#Calendar4").val("");
				$("#dcontent").html();
				$("#dplace").html();
				$("#dmsg").html();
				$("#ee").html();
				$("#ff").html();
			}else{
				$.messager.alert('提示','添加失败！');
			}
		}
	});
});

function checkT(){
	s=$("#Calendar").val();
	r=$("#Calendar4").val();
	if(s>r){
		$("#time2").html("请填写正确的时间");
		$("#time2").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#time2").html("");
		return true;
	}
}
function checkContent(){
	if($("#draContent").val().trim()==''){
		$("#dcontent").html("活动项目不能为空");
		$("#dcontent").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#dcontent").html("");
		return true;
	}
}

function checkP(){
	if($("#draPlace").val().trim()==''){
		$("#dplace").html("活动地点不能为空");
		$("#dplace").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#dplace").html("");
		return true;
	}
}

function checkM(){
	if($("#draMsg").val().trim()==''){
		$("#dmsg").html("活动内容不能为空");
		$("#dmsg").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#dmsg").html("");
		return true;
	}
}

