$(function(){
	$("#name").val("");
	$("#pwd").val("");
});
/**
 * 用户名文本框失去焦点事件
 */
function verName(){
	var name=$("#name").val();
	if(name==""||name==null){
		$("#s1").html("不能为空");
	}else{
		$("#s1").html("");
	}
}
/**
 * 密码文本框失去焦点事件
 */
function verPwd(){
	var pwd=$("#pwd").val();
	if(pwd==""||pwd==null){
		$("#s2").html("不能为空");
	}else{
		$("#s2").html("");
	}
}
/**
 * 登录按钮点击事件
 */
function admLogin(){
	var adm_name=$("#name").val();
	var adm_pwd=$("#pwd").val();
	var adm_level=$('input:radio:checked').val();
	var title="登录失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(adm_name==""||adm_name==null||adm_pwd==""||adm_pwd==null){
		var content="用户名或密码不能为空";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		$.getJSON("../adm/login.do",{"adm_name":adm_name,"adm_pwd":adm_pwd,"adm_level":adm_level},function(data){
			if(data.result=="notOwn"){
				var content="您的身份选择有错，请重新选择身份";
				var id=2;
				opTips(icon,id,title,content,width,height,left,top);
			}else if(data.result=="ok"){
				location.href="../back/index.jsp";
			}else{
				var content="用户名或密码错误，请重新登录";
				var id=3;
				opTips(icon,id,title,content,width,height,left,top);
			}
	});
	}
}
/**
 * 操作结果提示对话框
 */
function opTips(icon,id,title,content,width,height,left,top){
	var list = art.dialog.list;
	for (var i in list) {
	    list[i].close();
	};
	art.dialog({
	icon:icon,
	id:id,
	title:title,
	content:content,
	width:width,
	height:height,
	left:left,
	top:top,
	fixed: true,
	drag: false,
	resize: false,
	ok: function () {
	    return true;
	}
	});
}