$(function(){
	var pageIndex=1;
	var club_name=$("#club_name").val();
	var club_id=$("#club_id").val();
	selectAllPI(pageIndex,club_id,club_name);
});
/**
 * 页面加载时查询会主列表
 * @param pageIndex 页数索引
 * @param club_id 车友会编号
 * @param club_name 车友会名
 */
function selectAllPI(pageIndex,club_id,club_name){
	//根据车友会编号查询会主列表
	if(club_id!=""&&club_id!=null){
		type3(club_id,pageIndex);
	}else{
		//根据车友会名查询会主列表
		if(club_name!=""&&club_name!=null){
			type2(club_name,pageIndex);
		//默认无条件查询会主列表
		}else{
			type1(pageIndex);
		}
	}
}
/**
 * 默认倒序查询会主列表
 * @param pageIndex 页数索引
 */
function type1(pageIndex){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>会主编号</th>"+
	"<th>副会主1编号</th>"+
	"<th>副会主2编号</th>"+
	"<th>车友会编号</th>"+
	"<th>车友会名</th></tr>";
	$.getJSON("../backPreInfo/selectAllPIByTime.do",{"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].pri_pi+
			"</td><td>"+data[0][i].pri_vp1+
			"</td><td>"+data[0][i].pri_vp2+
			"</td><td>"+data[0][i].pri_cid+
			"</td><td>"+data[0][i].pri_cname+
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
 * 根据车友会名查询会主列表
 * @param club_name 车友会名
 * @param pageIndex 页数索引
 */
function type2(club_name,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>会主编号</th>"+
	"<th>副会主1编号</th>"+
	"<th>副会主2编号</th>"+
	"<th>车友会编号</th>"+
	"<th>车友会名</th></tr>";
	$.getJSON("../backPreInfo/selectAllPIByCname.do",{"club_name":club_name,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].pri_pi+
			"</td><td>"+data[0][i].pri_vp1+
			"</td><td>"+data[0][i].pri_vp2+
			"</td><td>"+data[0][i].pri_cid+
			"</td><td>"+data[0][i].pri_cname+
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
 * 根据车友会编号查询会主列表
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type3(club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>会主编号</th>"+
	"<th>副会主1编号</th>"+
	"<th>副会主2编号</th>"+
	"<th>车友会编号</th>"+
	"<th>车友会名</th></tr>";
	$.getJSON("../backPreInfo/selectAllPIByCId.do",{"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].pri_pi+
			"</td><td>"+data[0][i].pri_vp1+
			"</td><td>"+data[0][i].pri_vp2+
			"</td><td>"+data[0][i].pri_cid+
			"</td><td>"+data[0][i].pri_cname+
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
 * 首页按钮点击事件
 */
function selectFirstPresent(){
	var club_name=$("#club_name").val();
	var club_id=$("#club_id").val();
	selectAllPI(1,club_id,club_name);
}
/**
 * 上一页按钮点击事件
 */
function selectLastPresent(){
	var club_name=$("#club_name").val();
	var club_id=$("#club_id").val();
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
		selectAllPI(currentPage-1,club_id,club_name);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextPresent(){
	var club_name=$("#club_name").val();
	var club_id=$("#club_id").val();
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
		selectAllPI(pageIndex,club_id,club_name);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndPresnt(){
	var club_name=$("#club_name").val();
	var club_id=$("#club_id").val();
	var endPage=parseInt($("#endPage").html());
	selectAllPI(endPage,club_id,club_name);
}
/**
 * 跳到指定页面按钮点击事件
 */
function selectIndexPresent(){
	var club_name=$("#club_name").val();
	var club_id=$("#club_id").val();
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
		selectAllPI(pageIndex,club_id,club_name);
	}
}
/**
 * 搜索超链接点击事件
 */
function selectPIByParam(){
	var pageIndex=1;
	var club_name=$("#club_name").val();
	var club_id=$("#club_id").val();
	selectAllPI(pageIndex,club_id,club_name);
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