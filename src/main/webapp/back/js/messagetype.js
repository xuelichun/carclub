
$(function(){
  
	selectmessagetype(1);
	yeshu();	
	document.getElementById("d2").style.display="";
});
/**
 * 下拉框改变事件
 * @param valuse
 */
function change(valuse){


	if (valuse=="1"){
		selectmessagetype(1);
	       yeshu();
		document.getElementById("addmessagetype").style.display="none";
		document.getElementById("d2").style.display="";
			
	}
	if(valuse=="0")
	{    
		document.getElementById("addmessagetype").style.display="";
		document.getElementById("d2").style.display="none";
		
	}
};

/**
 * 显示页数事件
 */
function yeshu(){
	var countRecorgd=0;
	$.getJSON("../messager.do",function(data){
		
	countRecorgd=data;
	$("#countRecord").html(countRecorgd);

	$("#endPage").html(parseInt((data-1)/10)+1);
});
}

/**
 * 首页按钮点击事件
 */
function selectStartAn(){

	selectmessagetype(1)
	yeshu();

}
/**
 * 上一页按钮点击事件
 */
function selectFrontAn(){
	var currentPage=parseInt($("#currentPage").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if(currentPage-1<=0){
		var content="没有上一页了";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		
			selectmessagetype(currentPage-1);
		
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAn(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var pageIndex=0;
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if(currentPage-endPage>=0){
		var content="没有下一页了";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		pageIndex=currentPage+1;
		$("#currentPage").html(pageIndex);
		
		selectmessagetype(pageIndex);

		
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndAn(){
	var endPage=parseInt($("#endPage").html());
	
	selectmessagetype(endPage);

	
}
/**
 * 跳转指定页面按钮点击事件
 */
function selectIndexAn(){
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if(pageIndex==""||pageIndex==null){
		var content="页数索引不能为空";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex<=0){
		var content="页数索引无效";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex-endPage>0){
		var content="页数索引超出范围";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		
		selectmessagetype(pageIndex);
	
	}
}
/**
 *分页查询消息类型 
 */
function selectmessagetype(pageIndex){
	var context="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>类型编号</th>"+
	"<th>类型标题</th>"+
	
	"<th>内容详情</th>"+
	"<th>删除</th>";
	$.getJSON("../messageg.do",{"pageIndex":pageIndex},function(data){
		
		for(var i=0;i<data.length;i++){
			context+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[i].mt_id+
			"</td><td>"+data[i].mt_title+
			"</td><td><lable onmouseover=viewmessage("+data[i].mt_id+")>详情</lable>"+
		
			"</td><td><a href='javascript:deletemessage("+data[i].mt_id+")'>删除</a>"
			"</td></tr>";
			
		}
		
		$("#currentPage").html(pageIndex);
		
		context+="</table>";
		$("#d3").html(context);
		
	});
}


/**
 * 删除全网消息
 */
function deletemessage(id){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){
		
		$.getJSON("../messagee.do",{"mt_id":id},function(data){
			if(data=="1"){
				var title="操作成功";
				var icon="face-smile";
				var content="删除成功";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			}else{
				var title="操作失败";
				var icon="face-sad";
				var content="该消息类型不能删除";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			}
			selectmessagetype(1);
			yeshu();
		});
	}
}

/**
 * 添加消息类型
 */
function addmessagetype(){

	var width=170;
	var height=40;
	var left=780;
	var top=300;
	
	if($("#mt_title").val().trim()==''){
		var title="操作失败";
		var icon="face-sad";
		var content="消息类型标题不能为空！";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}
	else{
		if($("#mt_con").val().length>100){
			var title="操作失败";
			var icon="face-sad";
				var content="字数不能多于100";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
		}
		else{
	var mt_title=$("#mt_title").val();
	var mt_con=$("#mt_con").val();
	

	$.getJSON("../messaged.do",{"mt_title":mt_title,"mt_con":mt_con},function(data){

		if(data=="1"){
			var title="操作成功";
			var icon="face-smile";
			var content="添加成功";
			var id=1;
			opTips(icon,id,title,content,width,height,left,top);
		}else{
			var title="操作失败";
			var icon="face-sad";
			var content="添加失敗";
			var id=1;
			opTips(icon,id,title,content,width,height,left,top);
		}
	});
	};
	}
}
/**
 * 验证标题
 * @returns {Boolean}
 */
function checkTitle(){
	if($("#mt_title").val().trim()==''){
		$("#mttitle").html("信息不能为空");
		$("#mttitle").prop("style","color:#f00;");
		return false;
	}else{
		$("#mttitle").html("");
		return true;
	}
}
/**
 * 根据消息类型id查询消息类型内容
 * @param mt_id
 */
function viewmessage(mt_id){
	$.getJSON("../messagek.do",{"mt_id":mt_id},function(data){
	var title=data.mt_con;
	var content=data.mt_con;
	var width=300;
	var height=200;
	var left=750;
	var top=300;
	anDetail(mt_id,title,content,width,height,left,top,2);
	});
}

/**
* 弹出活动内容对话框
* @param id 唯一标识对话框，防止点击链接产生多个相同的对话框
* @param title 对话框标题
* @param content 对话框内容
* @param width 对话框宽度
* @param height 对话框高度
* @param left 对话框距离屏幕左侧的距离
* @param top 对话框距离屏幕上方的距离
* @param time 对话框显示的最长时间
*/
function anDetail(id,title,content,width,height,left,top,time){
var list = art.dialog.list;
for (var i in list) {
list[i].close();
};
art.dialog({
id:id,
title:title,
width:  width,
height: height,
left:left,
top:top,
content: content,
fixed: true,
drag: false,
resize: false,
init: function () {
	var that = this, i = time;
    var fn = function () {
        that.title(i + '秒后关闭');
        !i && that.close();
        i --;
    };
    timer = setInterval(fn, 1000);
    fn();
},
close: function () {
	clearInterval(timer);
}
});
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


function aa(v){
	$("#"+v).css("background-color","#CDDAEB");
	
}
function bb(p){
	$("#"+p).css("background-color","#ffffff")
}