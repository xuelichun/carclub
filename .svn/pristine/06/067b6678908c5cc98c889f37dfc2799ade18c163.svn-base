var now=1;
var count=0;
$(function(){
	showActivity(1);
	selectChaEventPage();
	$("#sss").html("第"+now+"页");
});
function showActivity(pageIndex){
	$.getJSON("../user/selectChaEventByUId.do",{"pageIndex":pageIndex},function(data){
		var context="";
		
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				context+="<div class='a01' ><div class='biaoti'><h1>"+data[i].ce_name+"</h1><h1>"+data[i].ce_goal+"</h1></div><div class='content'><div class='m'>"+
			"<table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td height='10'></td></tr> <tr> <td align='center' >地点："+data[i].ce_place+"</td></tr> <tr><td height='10'></td> " +
			"</tr><tr><td align='center'>报名时间："+data[i].ce_startime+"至"+data[i].ce_endtime+"</td></tr>  " +
			"<tr><td height='10'></td></tr> <tr><td align='center' >截止时间："+data[i].ce_endtime+"</td></tr>"+	
			" <tr><td height='10'></td> </tr>  <tr> <td align='center' >报名人数：" ;
				var ce_id=data[i].ce_id;
				
				$.ajax({
					type:'post',
					url:'../user/countNum.do',
					data:'ce_id='+ce_id,
					async:false,
					success:function(data){
						var rss = $.parseJSON(data);
						context+=rss.rs;
						
			}});
			
			context+="</td></tr> <tr> <td height='10'></td></tr>   <tr><td>&nbsp;</td></tr></table></div> <div ><img src='../"+data[i].ce_img+"' width='400' height='190' /></div> </div> </div> ";
			}
			
			$("#div2").html(context);
			$("#div3").show();
		}else{
			$("#div3").hide();
			$("#div2").html("<h1>你还没参加活动，快去参加吧</h1>");	
		}	
	});	
}
function showzoji(pageIndex){
	var u_id=$("#u_id").val();
	$.getJSON("../user/selectDraTravelBuUId.do",{"pageIndex":pageIndex,"u_id":u_id},function(data){
		var context="";
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				context+="<div class='a01' ><div class='biaoti'><h1>"+data[i].dt_msg+"</h1></div><div class='content'><div class='m'>"+
			"<table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td height='10'></td></tr> <tr> <td align='center' >地点："+data[i].dt_place+"</td></tr> <tr><td height='10'></td> " +
			"</tr><tr><td align='center'>报名时间："+data[i].dt_startime+"至"+data[i].dt_endtime+"</td></tr>  " +
			"<tr><td height='10'></td></tr> <tr><td align='center' >截止时间："+data[i].dt_endtime+"</td></tr>"+	
			" <tr><td height='10'></td> </tr>  <tr> <td align='center' >报名人数：" ;
				var ts_id=data[i].ts_id;
			//$.getJSON("../user/countNumhis.do",{"ts_id":ts_id},function(data){
				$.ajax({
					type:'post',
					url:'../user/countNumhis.do',
					data:'ts_id='+ts_id,
					async:false,
					success:function(data){
						var rss = $.parseJSON(data);
						context+=rss.rs;	
			}});
			
			context+="</td></tr> <tr> <td height='10'></td></tr>   <tr><td>&nbsp;</td></tr></table></div> <div ><img src='../"+data[i].dt_img+"' width='400' height='190' /></div> </div> </div> ";
			}
			$("#div2").html(context);
			$("#div3").show();
		}else{
			$("#div3").hide();
			$("#div2").html("<h1>你还没参加活动，快去参加吧</h1>");	
		}	
		
	});
	
}
function goback(){
	var u_id=$("#u_id").val();
	if(now==1){
		alert("没有上一页");
	}else{
		now=parseInt(now);
		now=now-1;
		showMessages(nows);
	}
	$("#sss").html("第"+now+"页");
}
function gofont(){
	var u_id=$("#u_id").val();
	if(now==count){
		alert("没有下一页");
	}else{
		now=parseInt(now);
		now=now+1;
		showMessages(nows);
		
	}
	
	$("#sss").html("第"+now+"页");
}

function selectChaEventPage(){
	$.getJSON("../user/selectChaEventPage.do",{},function(data){
		count=data.rs;
		$("#ss").html("总"+count+"页");
	});
}

function selectDraTravelPage(){
	var u_id=$("#u_id").val();
	$.getJSON("../user/selectDraTravelPage.do",{"u_id":u_id},function(data){
		count=data.rs;
		$("#ss").html("总"+count+"页");
	});
}
function cishan(){
	a=1;
	now=1;
	count=0;
	selectChaEventPage();
	showActivity(now);
	$("#sss").html("第"+nows+"页");
}

function histor(){
	a=2;
	now=1;
	count=0;
	showzoji(now);
	selectDraTravelPage();
	$("#sss").html("第"+nows+"页");
}

function showMessages(nows){
	if(a==1){
		showActivity(now);
	}else if(a==2){
		showzoji(now);
	}
}


