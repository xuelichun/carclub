
$(function (){
			countNewAddFriendsMsg();
			countNewAddFriendsReply();
	$.getJSON("../user/countNewMsg.do",{},function(data){
			if(data!=null){
				$("#allMag").html("消息("+data[0]+")");
				$("#newComments").html("未读的评论("+data[1]+")");
				$("#newReply").html("未读的回复("+data[2]+")");
				$("#newAddFriends").html("好友申请("+data[3]+")");
			}else{
				alert("请先登录");
				location.href="./index.html";
			}
			
		});
	
});

function countNewAddFriendsMsg(){
	$.getJSON("../user/countNewAddFriendsMsg.do",{},function(data){
		var b=parseInt(data.rs);
		$("#newAddFriendsMsg").html("好友申请通知("+b+")");
	});
}
function countNewAddFriendsReply(){
	$.getJSON("../user/countNewAddFriendsReply.do",{},function(data){
		var b=parseInt(data.rs);
		$("#newfriendsReply").html("好友请求回复("+b+")");
		
	});	
}


