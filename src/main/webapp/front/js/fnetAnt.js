
$(function(){

	viewFnetAnt()
	
});


/**
 * 查询出最后添加的三条公告
 */

function viewFnetAnt(){


$.getJSON("../FnetAntg.do",{},function(data){
	
	for(var i=0;i<data.length;i++){
		
	
	var context="";
	$("#title0").prop("style","text-align:center;");
	$("#title1").prop("style","text-align:center;");
	$("#title2").prop("style","text-align:center;");
	context+="<div  class='content1'>"
	context+="<span class='red'>尊贵的客户:<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp您好!</span>";
	context+="<br>"
	context+="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
	context+=data[i].fa_msg;
	context+="<br>"
	context+="<span class='red'>发布日期:&nbsp&nbsp"+data[i].p_time+"</span>";
		context+="</div>"
	if(i==0){
		$("#title0").html(data[i].fa_title);
		$("#msg0").html(context);
	}

	if(i==1){
		$("#title1").html(data[i].fa_title);	
		$("#msg1").html(context);
	}
	if(i==2){
	$("#title2").html(data[i].fa_title);	
	$("#msg2").html(context);
	}	
	}
});



}
  