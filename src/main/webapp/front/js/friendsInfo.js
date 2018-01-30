var u_id=-1;
var user_id=-1;
var user_nick="";
$(function(){
	var url=decodeURI(window.location.search);
	var b=url.split("&");
	var c=b[0].split("=")
	u_id=c[1];
	$.getJSON("../user/islogin.do",{},function(data){
		if(data!=null){
			a=1;
			user_id=data.u_id;
			user_nick=data.u_nick;
			checkFriends(user_id,u_id);
		}else{
			a=-1;
		}
	});
	$.ajax({
		type:'post',
		url:'../user/selectHeadAndNick.do',
		data:'u_id='+u_id,
		async:false,
		success:function(data){
			$("#u_head").prop("src","../"+data.u_head);
			head="../"+data.u_head;
			nick=data.u_nick;
			//alert(data.u_sex);
			//alert(u_id);
			//now=1;
			//$("#sss").html("第"+now+"页");
			//countPyn(data.u_id);
		}
	});
	$('#h2').form('load',"../user/selectOneUser.do?u_id="+u_id);
	$('#f3').form('load',"../user/selectOneUser.do?u_id="+u_id);
	
});
function friendsCar(){
	var url="friendsCar.html?u_id="+u_id;
	window.location.assign(encodeURI(url));	
}
function friendsPhoto(){
	var url="friendsPhoto.html?u_id="+u_id;
	window.location.assign(encodeURI(url));	
}
function friendsInfo(){
	var url="friendsInfo.html?u_id="+u_id;
	window.location.assign(encodeURI(url));	
}
function friendsDyn(){
	var url="friendsShow.html?u_id="+u_id;
	window.location.assign(encodeURI(url));
}
function checkFriends(user_id,u_id){
//	alert(user_id);
//	alert(u_id);
	$.getJSON("../user/checkFriends.do",{"u_id":user_id,"fu_id":u_id},function(data){
		//alert(data.rs);
		if(data.rs=='ok'){
			$("#addfriends").show();
			//alert(1);
		}else{
			$("#addfriends").hide();
		}
	});
}
function addFriends(){
	//alert(user_id);
	var ad_fnick=$("#u_nick").val();
	if(a==1){
		$.getJSON("../user/addFriendMsg.do",{"ad_uid":user_id,"ad_unick":user_nick,"ad_fid":u_id,"ad_fnick":ad_fnick},function(data){
			if(data.rs=='ok'){
				alert("发送成功,等待用户审核通过");
			}else{
				alert("发送失败！，请稍后重试")
			}
		});
	}else{
		alert("请先登录");
	}
	
}