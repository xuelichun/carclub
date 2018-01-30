$(function(){
	//保存按钮事件
	$("#submit").click(function(){
		if(checkNick()&& checkPwd()){
			if($("#u_pro").val()==-1){
				$("#scity").html("请选择省份");
				$("#scity").prop("style","color:#f00;");
				return;
			}else{
				$("#scity").html("");
			}
			if($("#u_city").val()==-1){
				$("#scity").html("请选择城市");
				$("#scity").prop("style","color:#f00;");
				return;
			}else{
				$("#scity").html("");
			}
			if($("#u_email").val()==''){
				$("#semail").prop("style","color:#f00;");
				$("#semail").html("邮箱不能为空");
				return;
			}		
			
			if($("#semail").html()!="邮箱合法"&&$("#semail").html()!=''){
				return;
			}
			
			$("#f3").submit();
		}
	});
	//表单提交成功后		
	$('#f3').form({
		success:function(data) {
			var rss = $.parseJSON(data);
			if (rss.rs == 'ok') {
				location.href="user.html";
				
			}else{
				$.messager.alert('提示','修改失败！');
			}
		}
	}); 
});

function showUser(){
	$('#h2').form('load',"../user/islogin.do");
	$('#f3').form('load',"../user/islogin.do");
	initP();
	//alert(1);
	$.getJSON("../user/islogin.do",{},function(data){	
		if(data!=null){
			$("#u_pro").val(data.u_pro);
			var objC = document.getElementById("u_city");
			var pValue = document.getElementById("u_pro").value;
			for ( var i = objC.length - 1; i > 0; i--) {
				objC.remove(i);
			}
			var j=jQuery.inArray(pValue,pName);
			if (j >= 0) {
				for ( var i = 0; i < cName[j].length; i++) {
					var op = new Option(cName[j][i], cName[j][i]);
					objC.add(op);
				}
			}
			$("#u_city").val(data.u_city);
			if(data.cd_id==''){
				$("#cd_id").val("");
			}			
		}else{
			alert("请先登录");
			location.href="./index.html";
		}
		
	});
	
}
function checkNick(){
	if($("#u_nic").val().trim()==''){
		$("#snick").html("昵称不能为空");
		$("#snick").prop("style","color:#f00;");
		return false;
	}else{
		$("#snick").html("");
		return true;
	}
}
function checkPwd(){
	if($("#u_pwd").val().trim()==''){
		$("#spwd").html("密码不能为空");
		$("#spwd").prop("style","color:#f00;");
		return false;
	}else{
		$("#spwd").html("");
		return true;
	}
}
function checkEmail(){
	var u_email=$("#u_email").val();
	var reg=/^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
	if(reg.test(u_email)){
		$.getJSON("../user/cEmail.do",{"u_email":u_email},function(data){
			if(data.rs=="ok"){
				$("#semail").prop("style","color:#0f0;");
				$("#semail").html("邮箱合法");
			}else{
				$("#semail").prop("style","color:#f00;");
				$("#semail").html("该邮箱已被注册");
			}
		});
	}else{
		$("#semail").prop("style","color:#f00;");
		$("#semail").html("邮箱格式错误");
	}
}

