var nows=1;
var counts=0;
var a=1;
$(function(){
	selectNewAddFriendsMsg(nows);
	countNewAddFriendsMsgPage();
	$("#sss").html("第"+nows+"页");
});

function selectNewAddFriendsMsg(pageIndex){
	$.getJSON("../user/selectNewAddFriendsMsg.do",{"pageIndex":pageIndex},function(data){
		
		if(data.length>0){
			$("#div1").show();
			var context="";
			for(var i=0;i<data.length;i++){
				context+="<li><div style='height:100px;margin-left:30px;margin-top:30px;background-color:#ebf7ff;'>" +
						"<p style='font-size:17px;'>时间："+data[i].ad_time+"</p><p style='font-size:17px;'>内容：" +
						"<a href='javascript:jump("+data[i].ad_uid+")'>"+data[i].ad_unick+"</a>&nbsp;&nbsp;请求加你为好友</p>" ;
				if(data[i].ad_agree==1){
					context+="<p style='font-size:17px;'>你已同意对方的好友申请</p></div></li>";
				}else if(data[i].ad_agree==0){
					context+="<p style='font-size:17px;'>你已拒绝对方的好友申请</p></div></li>";
				}else {
					context+="<p style='font-size:17px;'>操作：<a class='login' href='javascript:agreeMsg("+data[i].ad_uid+","+data[i].ad_fid+","+data[i].ad_id+")'>同意</a> " +
					" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='login' href='javascript:noMsg("+data[i].ad_id+")'>不同意</a></p></div></li>";
				}
			}
			$("#ul").html(context);
		}else{
			$("#ul").html("<h1>当前没有未读的好友申请信息</h1>");
			$("#div1").hide();
		}
	});
}

function selectAllAddFriendsMsg(pageIndex){
$.getJSON("../user/selectAllAddFriendsMsg.do",{"pageIndex":pageIndex},function(data){
		
		if(data.length>0){
			$("#div1").show();
			//alert(1);
			var context="";
			for(var i=0;i<data.length;i++){
				context+="<li><div style='height:100px;margin-left:30px;margin-top:30px;background-color:#ebf7ff;'>" +
						"<p style='font-size:17px;'>时间："+data[i].ad_time+"</p><p style='font-size:17px;'>内容：" +
						"<a href='javascript:jump("+data[i].ad_uid+")'>"+data[i].ad_unick+"</a>&nbsp;&nbsp;请求加你为好友</p>" ;
				
				if(data[i].ad_agree==1){
					context+="<p style='font-size:17px;'>你已同意对方的好友申请</p></div></li>";
				}else if(data[i].ad_agree==0){
					context+="<p style='font-size:17px;'>你已拒绝对方的好友申请</p></div></li>";
				}else {
					context+="<p style='font-size:17px;'>操作：<a class='login' href='javascript:agreeMsg("+data[i].ad_uid+","+data[i].ad_fid+","+data[i].ad_id+")'>同意</a> " +
					" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='login' href='javascript:noMsg("+data[i].ad_id+")'>不同意</a></p></div></li>";
				}
			}
			$("#ul").html(context);
		}else{
			$("#ul").html("<h1>当前没有好友申请信息</h1>");
			$("#div1").hide();
		}
	});
	
}
function selectNewAddFriendsReply(pageIndex){
$.getJSON("../user/selectNewAddFriendsReply.do",{"pageIndex":pageIndex},function(data){
		
		if(data.length>0){
			$("#div1").show();
			//alert(1);
			var context="";
			for(var i=0;i<data.length;i++){
				context+="<li><div style='height:100px;margin-left:30px;margin-top:30px;background-color:#ebf7ff;'>" +
						"<p style='font-size:17px;'>时间："+data[i].ad_time+"</p><p style='font-size:17px;'>内容：" +
						"<a href='javascript:jump("+data[i].ad_fid+")'>"+data[i].ad_fnick+"</a>&nbsp;&nbsp;" ;				
				if(data[i].ad_agree==1){
					context+="同意加你为好友</p></div></li>";
				}else if(data[i].ad_agree==0){
					context+="拒绝加你为好友</p></div></li>";
				}
			}
			$("#ul").html(context);
		}else{
			$("#ul").html("<h1>你的好友申请，还没有等到回复，请耐心等待</h1>");
			$("#div1").hide();
		}
	});
}

function selectAllAddFriendsMsgReply(pageIndex){
	$.getJSON("../user/selectAllAddFriendsMsgReply.do",{"pageIndex":pageIndex},function(data){
			
			if(data.length>0){
				$("#div1").show();
				//alert(1);
				var context="";
				for(var i=0;i<data.length;i++){
					context+="<li><div style='height:100px;margin-left:30px;margin-top:30px;background-color:#ebf7ff;'>" +
							"<p style='font-size:17px;'>时间："+data[i].ad_time+"</p><p style='font-size:17px;'>内容：" +
							"<a href='javascript:jump("+data[i].ad_fid+")'>"+data[i].ad_fnick+"</a>&nbsp;&nbsp;" ;				
					if(data[i].ad_agree==1){
						context+="同意加你为好友</p></div></li>";
					}else if(data[i].ad_agree==0){
						context+="拒绝加你为好友</p></div></li>";
					}
				}
				$("#ul").html(context);
			}else{
				$("#ul").html("<h1>你的好友申请，还没有等到回复，请耐心等待</h1>");
				$("#div1").hide();
			}
		});
	}

/**
 * 所有通知
 */
function countAddFriendsMsgPage(){
	
	$.getJSON("../user/countAddFriendsMsgPage.do",{},function(data){	
		counts=data.rs;
		$("#ss").html("总"+counts+"页");
		
	});
}
/**
 * 未读通知
 */
function countNewAddFriendsMsgPage(){
	
	$.getJSON("../user/countNewAddFriendsMsgPage.do",{},function(data){	
		counts=data.rs;
		$("#ss").html("总"+counts+"页");
		
	});
}
/**
 * 所有未读回复
 */
function countAddFriendsMsgReplyPage(){
	
	$.getJSON("../user/countAddFriendsMsgReplyPage.do",{},function(data){	
		counts=data.rs;
		$("#ss").html("总"+counts+"页");
		
	});
}
/**
 * 未读回复
 */
function countNewAddFriendsReplyPage(){
	
	$.getJSON("../user/countNewAddFriendsReplyPage.do",{},function(data){	
		counts=data.rs;
		$("#ss").html("总"+counts+"页");
		
	});
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
function showMessages(nows){
	if(a==1){
		selectNewAddFriendsMsg(nows);
	}else if(a==2){
		selectAllAddFriendsMsg(nows);
	}else if(a==3){
		selectNewAddFriendsReply(nows);
	}else if(a==4){	
		selectAllAddFriendsMsgReply(nows)
	}
}
/**
 * 新的通知
 */
function newMessage(){
	a=1;
	nows=1;
	counts=0;
	countNewAddFriendsMsgPage();
	selectNewAddFriendsMsg(nows);
	$("#sss").html("第"+nows+"页");

}
/**
 * 总的通知
 */
function allMessage(){
	a=2;
	nows=1;
	counts=0;
	//alert(1);
	countAddFriendsMsgPage();
	selectAllAddFriendsMsg(nows);
	$("#sss").html("第"+nows+"页");	
}

/**
 * 新的回复
 */
function newMessageReply(){
	a=3;
	nows=1;
	counts=0;
	
	countNewAddFriendsReplyPage();
	//alert(1);
	selectNewAddFriendsReply(nows);
	
	$("#sss").html("第"+nows+"页");	
}
/**
 * 总的回复
 */
function allMessageReply(){
	a=4;
	nows=1;
	counts=0;
	//alert(1);
	countAddFriendsMsgReplyPage();
	selectAllAddFriendsMsgReply(nows);
	$("#sss").html("第"+nows+"页");
	
}

function noMsg(ad_id){
	$.getJSON("../user/noMsg.do",{"ad_id":ad_id},function(data){
		
		if(data.rs=='ok'){
			if(a==2){
				selectAllAddFriendsMsg(nows);
			}else{
				selectNewAddFriendsMsg(nows);
			}
		}else{
			alert("服务器繁忙，请稍后再试！！");
		}
	});
}




function agreeMsg(u_id,fu_id,ad_id){
	
	$.getJSON("../user/addFriends.do",{"u_id":u_id,"fu_id":fu_id,"ad_id":ad_id},function(data){
		if(data.rs=='ok'){
			if(a==2){
				selectAllAddFriendsMsg(nows);
			}else{
				selectNewAddFriendsMsg(nows);
			}
		}else{
			alert("服务器繁忙，请稍后再试！！");
		}
	});
}
function jump(u_id){
	var id=$("#u_id").val();
	var u_nick=$("#u_nick").val();
		var url="friendsShow.html?u_id="+u_id+"&u_nick="+u_nick+"&user_id="+id;
		window.location.assign(encodeURI(url));	
	
}