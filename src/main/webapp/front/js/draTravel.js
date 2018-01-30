
$(function(){
	yeshu();
	selectAllAn(1);
	
});

function selectAllAn(pageIndex){

	$.getJSON("../draTravel/showDraIndex.do",{"pageIndex":pageIndex},function(data){
		var txt="";
		for(var i=0;i<data.length;i++){
			txt+="<div class='one'><div style='float: left;'><a href='javascript:jump("+data[i].dt_id+")'><img alt='' src=../"+data[i].dt_img+" width='300' height='160'></a></div>" +
					"<div class='chat'><span><a href='javascript:jump("+data[i].dt_id+")'>"+data[i].dt_content+"</a></span></div>" +
					"<div style='float: left; width: 360px; height:140px; margin-top: 10px; margin-left: 20px; '><span>"+data[i].dt_msg+"</span></div></div>";
			
		}
		$("#currentPage").html(pageIndex);
		$("#aa").html(txt);
	});
}

function jump(dt_id){
	var id=$("#dt_id").val();
		var url="draDetail.html?dt_id="+dt_id;
		window.location.assign(encodeURI(url));
}
/**
 * 显示页数事件
 */
function yeshu(){
	var countRecorgd=0;
	$.getJSON("../draTravel/countDra.do",{},function(data){
	countRecorgd=data;
	$("#countRecord").html(countRecorgd);

	$("#endPage").html(parseInt((data-1)/3)+1);
});
}

/**
 * 首页按钮点击事件
 */
function selectStartAn(){
	selectAllAn(1);
}

/**
 * 上一页按钮点击事件
 */
function selectFrontAn(){
	var currentPage=parseInt($("#currentPage").html());
	if(currentPage-1<=0){
		alert("没有上一页了");
	}else{
		selectAllAn(currentPage-1);
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
		selectAllAn(pageIndex);
	}
}
function selectEndAn(){
	var endPage=parseInt($("#endPage").html());
	selectAllAn(endPage);
}

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
		selectAllAn(pageIndex);
	}
}