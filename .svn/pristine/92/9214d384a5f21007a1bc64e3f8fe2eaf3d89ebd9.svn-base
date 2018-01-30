$(function(){
	
});
function checkPhone(){
	var u_phone=$("#u_phone").val();
	var reg=/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
	if(reg.test(u_phone)){
		$.getJSON("../user/countPhone.do",{"u_phone":u_phone},function(data){
			if(data.rs=="no"){
				$("#sphone").prop("style","color:#0f0;");
				$("#sphone").html("电话号码合法");
				return true;
			}else{
				$("#sphone").prop("style","color:#f00;");
				$("#sphone").html("请输入注册时的手机号");
			}
		});
	}else{
		$("#sphone").prop("style","color:#f00;");
		$("#sphone").html("电话格式错误");
	}
}
var cod="";
function checkCode(){
	var code=$("#code").val();
		if(cod==code&&code!=''){
			$("#scode").prop("style","color:#0f0;");
			$("#scode").html("验证码正确");
			return true;
		}else{
			$("#scode").prop("style","color:#f00;");
			$("#scode").html("验证码错误");
			return false;
		}	
}
function getPhoto(){
		checkPhone();
		if($("#sphone").html().trim()=="电话号码合法"){
			load();
			var u_phone=$("#u_phone").val();
			$.getJSON("../note.do",{"u_phone":u_phone},function(data){
				cod=data.rs;
			});
		}else{
			return;
		}
}
var time=60;
function load(){
	var btn=document.getElementById("btn");
	if(time>0){
	btn.value=time+"s后重新获取";
	btn.disabled=true;
	time--;
	setTimeout("load()",1000);
	}else{
		btn.value="免费获取短信验证码";
		btn.disabled=false;
		time=60;
	}
}
function locat(){
	checkPhone();
	checkCode();
	if(($("#sphone").html().trim()=="电话号码合法")&&($("#scode").html().trim()=="验证码正确")){
		var u_phone=$("#u_phone").val();
		location.href="./findPwd2.html?u_phone="+u_phone;
	}
}
