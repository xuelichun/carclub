$(function(){
	$("#ddd1").hide();
});
/**
 * 修改个人密码超链接点击事件
 */
function updatePIPwd(){
	$("#ddd1").show();
	$("#adm_pwd").val("");
	$("#rePIPwd").val("");
}
/**
 * 新密码框焦点失去事件
 */
function verNewPwd(){
	var pwd1=$("#adm_pwd").val();
	var reg1=/^[A-Za-z0-9_$].{5,17}$/;
	if(pwd1==""||pwd1==null){
		$("#s1").html("密码不能为空");
	}else if(!reg1.test(pwd1)){
		$("#s1").html("请填写6-13位数字、字母、$或者下划线");
	}else if(reg1.test(pwd1)){
		$("#s1").html("填写正确");
	}
}
/**
 * 重复密码框焦点失去事件
 */
function verRePwd(){
	var pwd1=$("#adm_pwd").val();
	var pwd2=$("#rePIPwd").val();
	var reg1=/^[A-Za-z0-9_$].{5,17}$/;
	if(pwd2==""){
		$("#s2").html("重复密码不能为空");
	}else if(!reg1.test(pwd2)){
		$("#s2").html("请填写6-13位数字、字母、$或者下划线");
	}else if(pwd1!=pwd2){
		$("#s2").html("两次密码填写不一致");
	}else if(reg1.test(pwd2)){
		$("#s2").html("填写正确");
	}
}
/**
 * 确认修改按钮点击事件
 */
function updateAdmPwd(){
	var adm_pwd=$("#adm_pwd").val();
	var pwd2=$("#rePIPwd").val();
	if(adm_pwd==""||adm_pwd==null||pwd2==""||pwd2==null){
		$("#s3").html("请将信息填写完整");
	}else if(adm_pwd!=pwd2){
		$("#s3").html("两次密码填写不一致");
	}else{
		$.getJSON("../adm/updatePwd.do",{"adm_pwd":adm_pwd},function(data){
			if(data.result=="identi"){
				$("#s3").html("修改失败，新密码不能和旧密码相同");
			}else if(data.result=="ok"){
				$("#s3").html("修改成功");
			}else{
				$("#s3").html("修改失败");
			}
		});
	}
}
