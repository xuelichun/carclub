$(function(){
	var strHref=this.location.href;
	var u_phone=strHref.getQuery("u_phone");
	$("#sphone").val(u_phone);
	$("#submit3").click(function(){
		if($("#newpwd2").html().trim()=="两次密码输入一致"){
			$("#f3").submit();
		}
	});
	
	$('#f3').form({
		success:function(data) {
			var rss = $.parseJSON(data);
			if (rss.rs == 'ok') {
				alert("成功找回密码，请重新登录");
				location.href="./index.html";
				$("#u_pwd1").val("");
				$("#new_pwd2").val("");
				$("#newpwd1").html("");
				$("#newpwd2").html("");
			}else{
				alert("找回密码失败！");
			}
		}
	}); 
});
String.prototype.getQuery = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = this.substr(this.indexOf("\?") + 1).match(reg);
    if (r != null)
   	  return unescape(r[2]);
    return null;
}
function checkPwd1(){
	var u_pwd=$("#u_pwd1").val();
	if(u_pwd==''){
		$("#newpwd1").prop("style","color:#f00;");
		$("#newpwd1").html("密码不能为空");
	}else{
		$("#newpwd1").html("");
	}
}
function checkPwd2(){
	var u_pwd=$("#u_pwd1").val();
	var new_pwd2=$("#new_pwd2").val();
	if(u_pwd==new_pwd2&&new_pwd2!=''){
		$("#newpwd2").prop("style","color:#0f0;");
		$("#newpwd2").html("两次密码输入一致");
	}else{
		$("#newpwd2").prop("style","color:#f00;");
		$("#newpwd2").html("两次密码输入不一致");
		
	}
}