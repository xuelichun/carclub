
$(function(){
alert("1");
selectmessage(1);
	yeshu();
	
});





 
	

	 




/**
 * 显示页数事件
 */
function yeshu(){
	var countRecorgd=0;
	$.getJSON("../messageh.do",function(data){
		
	countRecorgd=data;
	$("#countRecord").html(countRecorgd);

	$("#endPage").html(parseInt((data-1)/10)+1);
});
}


/**
 * 首页按钮点击事件
 */
function selectStartAn(){
	selectmessage(1);
}
/**
 * 上一页按钮点击事件
 */
function selectFrontAn(){
	var currentPage=parseInt($("#currentPage").html());
	if(currentPage-1<=0){
		alert("没有上一页了");
	}else{
		selectmessage(currentPage-1);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAn(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var pageIndex=0;
	if(currentPage-endPage>=0){
		alert("没有下一页了");
	}else{
		pageIndex=currentPage+1;
		$("#currentPage").html(pageIndex);
		selectmessage(pageIndex);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndAn(){
	var endPage=parseInt($("#endPage").html());
	selectmessage(endPage);
}
/**
 * 跳转指定页面按钮点击事件
 */
function selectIndexAn(){
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
	if(pageIndex==""||pageIndex==null){
		alert("页数索引不能为空");
	}else if(pageIndex<=0){
		alert("页数索引无效");
	}else if(pageIndex-endPage>0){
		alert("页数索引超出范围");
	}else{
		selectmessage(pageIndex);
	}
}
function selectmessage(pageIndex){

	var context="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>消息编号</th>"+
	"<th>发送时间</th>"+
	"<th>消息类型</th>"+
	"<th>接收对象</th>"+
	"<th>消息详情</th>"+
	"<th>删除</th>";
	$.getJSON("../messagec.do",{"pageIndex":pageIndex},function(data){
		
		for(var i=0;i<data.length;i++){
			context+="<tr><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[i].m_id+
			"</td><td>"+data[i].m_time+
			"</td><td>"+data[i].mt_id+
			"</td><td>"+data[i].mu_id+
			"</td><td><a href='javascript:viewmessage(\""+data[i].m_con+"\")'>详情</a>"+
			"</td><td><a href='javascript:deletemessage("+data[i].m_id+")'>删除</a>"
			"</td></tr>";
			
		}
		
		$("#currentPage").html(pageIndex);
		
		context+="</table>";
		$("#d3").html(context);
		
	});
}
function viewmessage(s){
	
	
	alert(s);
}
function deletemessage(id){
	if(confirm("確定要刪除么？？")){
		alert(id)
		$.getJSON("../messageb.do",{"m_id":id},function(data){
			alert(data=="1");
			if(data==1){
				alert("刪除成功");
			}else{
				alert("刪除失敗");
			}
			selectmessage(1);
			yeshu();
		});
/*  $.getJSON("./FnetAntb.do",{"pageIndex":pageIndex},function(data){
			if(data.length==0){
				if(page-1==0){
					alert("没有公告");
				}else{
					page=page-1;
					selectAll(page);
					yeshu();
				}
			}
				
			selectAllAn(1);
				yeshu();
		});*/	
	}
	
}

