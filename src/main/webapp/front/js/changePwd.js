$(function(){
	
});
var pwd="";
function checkpw(){
	var u_pw=$("#u_pw").val();
	if(u_pw!=pwd){
		$("#spw").prop("style","color:#f00;");
		$("#spw").html("密码不正确");
	}else{
		$("#spw").prop("style","color:#0f0;");
		$("#spw").html("密码正确");
	}
}
function checkpwd(){
	var u_pwd=$("#u_pwd").val();
	if(u_pwd==''){
		$("#spwd").prop("style","color:#f00;");
		$("#spwd").html("密码不能为空");
	}else{
		$("#spwd").html("");
	}
}
function checkpwds(){
	var u_pwd=$("#u_pwd").val();
	var u_pwds=$("#u_pwds").val();
	if(u_pwd!=u_pwds){
		$("#spwds").prop("style","color:#f00;");
		$("#spwds").html("两次密码输入不一致");
	}else{
		$("#spwds").prop("style","color:#0f0;");
		$("#spwds").html("两次密码输入一致");
	}
}
function shows(){
	$('#h2').form('load',"../user/islogin.do");
	$.getJSON("../user/islogin.do",{},function(data){
		if(data==null){
			alert("请先登录");
			location.href="./index.html";
		}else{
			pwd=data.u_pwd;
		}
	});
}
function changePwd(){
	var u_id=$("#u_id").val();
	var u_pwd=$("#u_pwd").val();
	$.getJSON("../user/changePwd.do",{"u_id":u_id,"u_pwd":u_pwd},function(data){
		if(data.rs=='ok'){
			alert("修改成功，请重新登录");
			location.href="./index.html";
		}else{
			alert("修改失败");
		}
	});
}



