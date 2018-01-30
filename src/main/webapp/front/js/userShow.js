$(function (){
	var context="<ul id='lo'><li class='top22' ><a href='javascript:void(0)' class='showbox'>登录</a>" +
	"<span>|</span><a href='regUser.html' >注册</a><span>|</span></li></ul><ul id='log'></ul>";
	$("#top11").html(context);
	//showdenglu();
	$.getJSON("../user/islogin.do",{},function(data){
		if(data!=null){
			var context="<li class='top25'>" +
			"<a href=''>"+data.u_nick+"</a>" +"&nbsp;&nbsp;&nbsp;"+
			"<a href='user.html'>个人中心</a>" +"&nbsp;&nbsp;&nbsp;"+
			"<a href='chat.jsp' target='_blank'>聊天室</a>" +"&nbsp;&nbsp;&nbsp;"+
			"<a href='javascript:congzi("+data.u_id+")'>充值账户</a>" +"&nbsp;&nbsp;&nbsp;"+
			"<a href='javascript:exit()'> 退出</a></li>";
			loginsuccess();
			$("#log").html(context);
			//alert(context);
			$("#log").show();
			$("#u_head").prop("src","../"+data.u_head);
			$("#u_id").val(data.u_id);
			var u_id=data.u_id;
			$.getJSON("../user/isPresident.do",{"u_id":u_id},function(data){
				if(data.rs=='2'){
					//alert(1);
					$("#hui").show();
				}else if(data.rs=='3'){
					$("#fu").show();
				}
			});
		}else{
			
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
function show(){
	$('#h2').form('load',"../user/islogin.do");
	$.getJSON("../user/islogin.do",{},function(data){
		if(data==null){
			alert("请先登录");
			location.href="./index.html";
		}
	});
}

function loginsuccess(){
	$("#span").html("");
	$("#TB_overlayBG").css("display","none");
	$(".box ").css("display","none");
	$("#lo").hide();	
}
function exit(){
	$.getJSON("../user/exit.do",{},function(data){
			$("#log").hide();
			$("#lo").show();
			//alert("请先登录");
			location.href="./index.html";
	});
	
}
function checkName(){
	var name=$("#u_name").val();
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
	var name=$("#u_name").val();
	var u_pwd=$("#u_pwd").val();
	var msg=$("#span").html();
	if(msg=="邮箱格式正确"){
		$.getJSON("../user/loginbyemail.do",{"u_email":name,"u_pwd":u_pwd},function(data){
			//alert(data);
			if(data!=null){
				loginsuccess();
				var context="<li class='top25'>" +
				"<a href=''>"+data.u_nick+"</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='user.html'>个人中心</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='chat.jsp' target='_blank'>聊天室</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='javascript:congzi("+data.u_id+")'>充值账户</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='javascript:exit()'> 退出</a></li>";
				$("#log").html(context);
				$("#log").show();
			}else{
				$("#span").prop("style","color:#f00;");
				$("#span").html("邮箱或密码错误");
			}		
		});
	}else if(msg=="电话格式正确"){
		$.getJSON("../user/loginbyphone.do",{"u_phone":name,"u_pwd":u_pwd},function(data){
			if(data!=null){		
				loginsuccess();
				var context="<li class='top25'>" +
				"<a href=''>"+data.u_nick+"</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='user.html'>个人中心</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='chat.jsp' target='_blank'>聊天室</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='javascript:congzi("+data.u_id+")'>充值账户</a>" +"&nbsp;&nbsp;&nbsp;"+
				"<a href='javascript:exit()'> 退出</a></li>";
				$("#log").html(context);
				$("#log").show();
				
			}else{
				$("#span").prop("style","color:#f00;");
				$("#span").html("电话号或密码错误");
			}	
		});
	}else{
		$("#span").prop("style","color:#f00;");
		$("#span").html("用户名或密码错误");
	}
}
function congzis(id){
	if(checkMoney()&&checkAlipy()){
		var u_money=$("#u_money").val().trim();
		var u_alipy=$("#u_alipy").val().trim();
		$.getJSON("../user/addMoney.do",{"u_id":id,"u_money":u_money},function(data){		
			if(data.rs=='ok'){
				alert("充值成功");
				$("#span").html("");
				$("#TB_overlayBG").css("display","none");
				$(".box ").css("display","none");
			}else{
				alert("充值失败");
			}
		});
	}
}
function checkMoney(){
	var u_money=$("#u_money").val().trim();
	var reg=/^\d{1,}$/;
	if(reg.test(u_money)){
		
		return true;
	}else{
		$("#span").prop("style","color:#f00;");
		$("#span").html("请输入正确的金额");
		return false;
	}
}
function checkAlipy(){
	var u_alipy=$("#u_alipy").val().trim();
	var reg=/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
	
	if(reg.test(u_alipy)){
		return true;
		$("#span").html("支付宝正确");
	}else{
		$("#span").prop("style","color:#f00;");
		$("#span").html("请输入正确的支付宝账号");
		return false;
	}
	
}
function congzi(id){
	var co="<div id='TB_overlayBG'></div><div class='box' id='login' ><h2>用户充值<a href='#' class='close'>关闭</a></h2><div class='mainlist'>"+
	"<table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td width='6%'>&nbsp;</td><td width='21%' align='right' style='color:#000; font-size:14px; line-height:50px; line-height:50px;'>支付宝账号</td><td width='67%'><input type='text' name='u_alipy' id='u_alipy'  class='yanse' onblur='checkAlipy()'></td>"+
	"<td width='6%'>&nbsp;</td></tr><tr> <td>&nbsp;</td><td align='right' style='color:#000; font-size:14px; line-height:50px; line-height:50px;'>金额</td><td><input type='text' name='u_money' id='u_money' class='yanse' onblur='checkMoney()'></td><td>&nbsp;</td></tr><tr>"+
	"<td>&nbsp;</td><td>&nbsp;</td><td><span id='span' ></span></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td><table width='205' border='0' cellspacing='0' cellpadding='0'><tr><td width='41'>" +
	"<div class='login'><a href='javascript:congzis("+id+")'>充值</a></div></td>"+
	"<td width='17'>&nbsp;</td> </tr></table></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td><label"+
	 "for='checkbox'></label></td><td>&nbsp;</td><td>&nbsp;</td></tr></table></div></div>";
	$("#cc").html(co);
	$("#TB_overlayBG").css({
		display:"block",height:$(document).height()
	});
	$(".box").css({
		left:($("body").width()-$(".box").width())/2-20+"px",
		top:($(window).height()-$(".box").height())/2+$(window).scrollTop()+"px",
		display:"block"
	});
	$(".close").click(function(){
		$("#TB_overlayBG").css("display","none");
		$(".box ").css("display","none");
	});
}
function tiaozhuan(){
	location.href="noticeManage.html";
	
}
function tiaozh(){
	location.href="noticeManage.html";
}
function myclub(){
	
//	var u_id=$("#u_id").val();
//	var u_nick=$("#u_nick").val();
//	var url="myCarClub.html?u_id="+u_id+"&u_nick="+u_nick;
//	window.location.assign(encodeURI(url));	
	location.href="myCarClub.html";
}
