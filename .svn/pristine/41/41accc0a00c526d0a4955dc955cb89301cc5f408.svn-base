$(function (){
	var pageIndex=1;
	selectClubRank(pageIndex);
});
/**
 * 首页按钮点击事件
 */
function selectFirstClub(){
	selectClubRank(1);
}
/**
 * 上一页按钮点击事件
 */
function selectLastClub(){
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
		selectClubRank(currentPage-1);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextClub(){
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
		selectClubRank(pageIndex);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndClub(){
	var endPage=parseInt($("#endPage").html());
	selectClubRank(endPage);
}
/**
 * 跳到指定页面按钮点击事件
 */
function selectIndexClub(){
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
		selectClubRank(pageIndex);
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
 * 页面加载时查询车友会列表
 * @param pageIndex 页数索引
 */
function selectClubRank(pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>"+
	"<th>排行</th>";
	$.getJSON("../club/selectClubRank.do",{"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var m=(parseInt(pageIndex)-1)*10+(i+1);
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
			"</td><td>"+m+
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