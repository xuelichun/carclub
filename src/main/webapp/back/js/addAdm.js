$(function(){
	$("#addAdm").hide();
	var pageIndex=1;
	selectAllAdm(pageIndex);
});
/**
 * 添加管理员超链接点击事件
 */
function addAdmClick(){
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	$.getJSON("../adm/admAuthority.do",{},function(data){
		if(data.result=="error"){
			var content="对不起，您还没有登录";
			var id=7;
			opTips(icon,id,title,content,width,height,left,top);
		}else if(data.result=="ok"){
			$("#addAdm").show();
			$("#admList").hide();
			$("#name").val("");
			$("#pwd").val("");
			$("#rePwd").val("");
		}else{
			var content="对不起，您不具有添加管理员权限";
			var id=6;
			opTips(icon,id,title,content,width,height,left,top);
		}
	});
}
/**
 * 查看二级管理员列表超链接点击事件
 */
function admListClick(){
	$("#addAdm").hide();
	$("#admList").show();
}
/**
 * 管理员账号文本框失去焦点事件
 */
function verName(){
	var adm_name=$("#name").val();
	var reg1=/^[A-Za-z0-9_$].{5,17}$/;
	if(adm_name==""||adm_name==null){
		$("#s1").html("账号不能为空");
	}else if(!reg1.test(adm_name)){
		$("#s1").html("请填写6-13位数字、字母、$或者下划线");
	}else if(reg1.test(adm_name)){
		verNameIsExit(adm_name);
	}
}
/**
 * 判断管理员账号是否存在
 * @param adm_name 管理员账号 
 */
function verNameIsExit(adm_name){
	$.getJSON("../adm/nameIsExist.do",{"adm_name":adm_name},function(data){
		if(data.result=="sorry"){
			$("#s1").html("该账号已存在");
		}else{
			$("#s1").html("填写正确");
		}
	});
}
/**
 * 管理员密码文本框失去焦点事件
 */
function verPwd(){
	var pwd=$("#pwd").val();
	var reg1=/^[A-Za-z0-9_$].{5,17}$/;
	if(pwd==""||pwd==null){
		$("#s2").html("密码不能为空");
	}else if(!reg1.test(pwd)){
		$("#s2").html("请填写6-13位数字、字母、$或者下划线");
	}else if(reg1.test(pwd)){
		$("#s2").html("填写正确");
	}
}
/**
 * 重复密码文本框失去焦点事件
 */
function verRePwd(){
	var pwd=$("#pwd").val();
	var rePwd=$("#rePwd").val();
	var reg1=/^[A-Za-z0-9_$].{5,17}$/;
	if(rePwd==""||rePwd==null){
		$("#s3").html("重复密码不能为空");
	}else if(!reg1.test(rePwd)){
		$("#s3").html("请填写6-13位数字、字母、$或者下划线");
	}else if(pwd!=rePwd){
		$("#s3").html("两次密码填写不一致");
	}else if(reg1.test(rePwd)){
		$("#s3").html("填写正确");
	}
}
/**
 * 确认添加按钮点击事件
 */
function conAddAdm(){
	var adm_name=$("#name").val();
	var adm_pwd=$("#pwd").val();
	var rePwd=$("#rePwd").val();
	var adm_level=$('input:radio:checked').val();
	if(adm_name==""||adm_name==null||adm_pwd==""||adm_pwd==null||rePwd==""||rePwd==null){
		$("#s4").html("请将信息填写完整");
	}else if(adm_pwd!=rePwd){
		$("#s4").html("两次密码不一致");
	}else{
		$.getJSON("../adm/addAdm.do",{"adm_name":adm_name,"adm_pwd":adm_pwd,"adm_level":adm_level},function(data){
			if(data.result=="exit"){
				$("#s4").html("该账号已存在");
			}else if(data.result=="ok"){
				$("#s4").html("添加成功");
			}else{
				$("#s4").html("添加失败");
			}
		});
	}
}
/**
 * 首页按钮点击事件
 */
function selectFirstGA(){
	selectAllAdm(1);
}
/**
 * 上一页按钮点击事件
 */
function selectLastGA(){
	var currentPage=parseInt($("#currentPage").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(currentPage-1<=0){
		var content="没有上一页了";
		var id=5;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		selectAllAdm(currentPage-1);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextGA(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var pageIndex=0;
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(currentPage-endPage>=0){
		var content="没有下一页了";
		var id=4;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		pageIndex=currentPage+1;
		$("#currentPage").html(pageIndex);
		selectAllAdm(pageIndex);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndGA(){
	var endPage=parseInt($("#endPage").html());
	selectAllAdm(endPage);
}
/**
 * 跳到指定页数索引页面按钮点击事件
 */
function selectIndexGA(){
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(pageIndex==""||pageIndex==null){
		var content="页数索引不能为空";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex<=0){
		var content="页数索引无效";
		var id=2;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex-endPage>0){
		var content="页数索引超出范围";
		var id=3;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		selectAllAdm(pageIndex);
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
/**
 * 默认无条件查询二级管理员列表
 * @param pageIndex
 */
function selectAllAdm(pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>二级管理员编号编号</th>"+
	"<th>二级管理员账号</th>"+
	"<th>二级管理员等级</th>"+
	"<th>上级管理员编号</th></tr>";
	$.getJSON("../adm/selectAllGa.do",{"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ga_id+
			"</td><td>"+data[0][i].ga_name+
			"</td><td>"+data[0][i].ga_level+
			"</td><td>"+data[0][i].sa_id+
			"</td></tr>";
		}
		$("#countRecord").html(data[1][1]);
		$("#currentPage").html(pageIndex);
		$("#endPage").html(data[1][3]);
		content1+="</table>";
		$("#ui_tb").html(content1);
	});
}
/**
 * 表格单行鼠标移入事件触发，背景色改变
 * @param v tr的id
 */
function  aa(v){
	$("#"+v).css("background-color","#CDDAEB");
}
/**
 * 表格单行鼠标移入事件触发，背景色改变
 * @param p tr的id
 */
function bb(p){
	$("#"+p).css("background-color","#ffffff");
}