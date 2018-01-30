var nows=1;
var counts=0;
var a=1;
$(function(){
	//alert(1);
	showMessage(1);
	countMessage();
	$("#sss").html("第"+nows+"页");
});

function showMessage(pageIndex){
	$.getJSON("../usermessage/userSelectAllmessage.do",{"pageIndex":pageIndex},function(data){
		if(data.length>0){
			var context="";
			$("#div1").show();
			for(var i=0;i<data.length;i++){
				context+="<li><div style='height:100px;margin-left:30px;margin-top:30px;background-color:#ebf7ff;'>" +
						"<p style='font-size:17px;'>标题："+data[i].mt_title+"</p><p style='font-size:17px;'>内容："+data[i].fm_msg+"</p>" +
								"<p style='font-size:17px;'>时间："+data[i].fm_date+"</p></div></li>";
			}
			$("#ul").html(context);
		}else{
			$("#div1").hide();
			$("#ul").html("没有系统消息");
		}
	});	
}

function showPersonMessage(pageIndex){
	var u_id=$("#u_id").val();
	$.getJSON("../usermessage/selectNewMessage.do",{"u_id":u_id,"pageIndex":pageIndex},function(data){
		if(data.length>0){
			var context="";
			$("#div1").show();
			for(var i=0;i<data.length;i++){
				context+="<li><div style='height:100px;margin-left:30px;margin-top:30px;background-color:#ebf7ff;'>" +
						"<p style='font-size:17px;'>标题："+data[i].mt_title+"</p><p style='font-size:17px;'>内容："+data[i].m_con+"</p>" +
								"<p style='font-size:17px;'>时间："+data[i].m_time+"</p></div></li>";
			}
			$("#ul").html(context);
			
		}else{
			$("#div1").hide();
			$("#ul").html("没有系统个人消息");
		}
		
	});
	
}
function showMessages(nows){
	if(a==1){
		showMessage(nows);
	}else if(a==2){
		showPersonMessage(nows);
	}
}
function goback(){
	if(nows==1){
		alert("没有上一页");
	}else{
		nows=parseInt(nows);
		nows=nows-1;
		showMessages(nows);	
	}
	$("#sss").html("第"+nows+"页");
}
function gofont(){
	if(nows==counts){
		alert("没有下一页");
	}else{
		nows=parseInt(nows);
		nows=nows+1;
		showMessages(nows);
		
	}
	$("#sss").html("第"+nows+"页");
}

function countMessage(){
	$.getJSON("../usermessage/countMessage.do",{},function(data){
		counts=data.rs;
		$("#ss").html("总"+counts+"页");
	});
	
}

function countNewMessage(){
	var u_id=$("#u_id").val();
	$.getJSON("../usermessage/countNewMessage.do",{"u_id":u_id},function(data){
		counts=data.rs;
		$("#ss").html("总"+counts+"页");
	});
}
function AllMessage(){
	a=1;
	nows=1;
	counts=0;
	showMessage(1);
	countMessage();
	$("#sss").html("第"+nows+"页");
}
function personMessage(){
	a=2;
	nows=1;
	counts=0;
	showPersonMessage(1);
	countNewMessage();
	$("#sss").html("第"+nows+"页");
}
