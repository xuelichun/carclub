$(function (){
	var context="<ul id='lo'><li class='top22' ><a href='javascript:void(0)' class='showbox'>登录</a>" +
	"<span>|</span><a href='regUser.html' >注册</a><span>|</span></li></ul><ul id='log'></ul>";
	$("#top11").html(context);
	//showdenglu();
	$.getJSON("../user/islogin.do",{},function(data){
		if(data!=null){
			var context="<li class='top22'>" +
			"<input type='text' id='myid' value="+data.u_id+" hidden='hidden'/>"+
			"<a href='' id='mynick'>"+data.u_nick+"</a>" +"&nbsp;&nbsp;&nbsp;"+
			"<a href='user.html'>个人中心</a>" +"&nbsp;&nbsp;&nbsp;"+
			"<a href='javascript:exit()'> 退出</a></li>"
			loginsuccess();
			$("#log").html(context);
			$("#log").show();
			//$("#u_head").prop("src","../"+data.u_head);
			//$("#u_id").val(data.u_id);
			//var u_id=data.u_id;
			/*$.getJSON("../user/isPresident.do",{"u_id":u_id},function(data){
				if(data.rs=='2'){
					//alert(1);
					$("#hui").show();
				}else if(data.rs=='3'){
					$("#fu").show();
				}
			});*/
		}
		
	});
$(".showbox").click(function(){
		$("#TB_overlayBG").css({
			display:"block",height:$(document).height()
		});
		$(".box").css({
			left:($("body").width()-$(".box").width())/2-20+"px",
			top:($(window).height()-$(".box").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	
	$(".close").click(function(){
		$("#TB_overlayBG").css("display","none");
		$(".box ").css("display","none");
	});
});

function loginsuccess(){
	$("#span").html("");
	$("#TB_overlayBG").css("display","none");
	$(".box ").css("display","none");
	$("#lo").hide();
}
function checkName(){
	var name=$("#u_account").val();
	var re=/^\w*@\w*.{0,}$/;
	if(re.test(name)){
		var reg=/^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
		if(reg.test(name)){
			$("#span").prop("style","color:#0f0;");
			$("#span").html("邮箱格式正确");
		}else{
			$("#span").prop("style","color:#f00;");
			$("#span").html("邮箱格式错误");
		}
	}else{
		var reg=/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
		if(reg.test(name)){
			$("#span").prop("style","color:#0f0;");
			$("#span").html("电话格式正确");
		}else{
			$("#span").prop("style","color:#f00;");
			$("#span").html("电话格式错误");
		}
	}
}

function login(){
	var name=$("#u_account").val();
	var u_pwd=$("#u_pwd").val();
	var msg=$("#span").html();
	if(msg=="邮箱格式正确"){
		$.getJSON("../user/loginbyemail.do",{"u_email":name,"u_pwd":u_pwd},function(data){
			//alert(data);
			if(data!=null){
				loginsuccess();
				location.reload();
			}else{
				$("#span").prop("style","color:#f00;");
				$("#span").html("邮箱或密码错误");
			}		
		});
	}else if(msg=="电话格式正确"){
		$.getJSON("../user/loginbyphone.do",{"u_phone":name,"u_pwd":u_pwd},function(data){
			if(data!=null){		
				loginsuccess();
				var context="<li class='top22'>" +
				"<a href=''>"+data.u_nick+"</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='user.html'>个人中心</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='javascript:exit()'> 退出</a></li>"
				$("#log").html(context);
				$("#log").show();
				location.reload();
			}else{
				$("#span").prop("style","color:#f00;");
				$("#span").html("电话号或密码错误");
			}	
		});
	}
}

function exit(){
	$.getJSON("../user/exit.do",{},function(data){
			$("#log").hide();
			$("#lo").show();
			//alert("请先登录");
			location.reload();
			//location.href="./index.html";
	});
	
}

