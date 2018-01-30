
var u_id=-1;
var user_id=-1;
var user_nick="";
var now=1;
var count=0;
var a=-1;
$(function (){
	var url=decodeURI(window.location.search);
	var b=url.split("&");
	var c=b[0].split("=")
	u_id=c[1];
	//alert(u_id);
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
	
	$('#h2').form('load',"../user/selectHeadAndNick.do?u_id="+u_id);
	$.ajax({
		type:'post',
		url:'../user/selectHeadAndNick.do',
		data:'u_id='+u_id,
		async:false,
		success:function(data){
			$("#u_head").prop("src","../"+data.u_head);
			head="../"+data.u_head;
			nick=data.u_nick;
			//alert(u_id);
			//now=1;
			//$("#sss").html("第"+now+"页");
			//countPyn(data.u_id);
		}
	});
	showfriendCar(1,u_id);
	countFriendsCar();
	$("#sss").html("第"+now+"页");
});
function showfriendCar(pageIndex,u_id){
	$.getJSON("../usercar/showfriendCar.do",{"pageIndex":pageIndex,"u_id":u_id},function(data){
		var context="";
		if(data.length==0){
			context="<h1>没有爱车</h1>";
			$("#div1").hide();
		}else{
		for(var i=0;i<data.length;i++){
			context+="<div class='r_name001'></div><div class='r_name007' style='height:170px;'><div class='r_name007_left' " +
			" style='height:170px; width:170px;'><div class='r_name007_left001' style='border:none;'>"+
			"<img src='../"+data[i].c_pic+"' width='130px' height='130px'/></div>" +
					"</div><div class='r_name007_right' style='height:170px;'>" +
					"<p style='font-size:15px;margin-top:30px;'>品牌:"+data[i].c_brand+"</p><p style='font-size:15px;'> 车系:"+data[i].c_model+"</p> " +
					"</div></div>";
		}
		$("#div1").show();
		}
		$("#div").html(context);
	});
}
function goback(){
	if(now==1){
		alert("没有上一页");
	}else{
		now=parseInt(now);
		now=now-1;
		showfriendCar(now,u_id);
	}
	$("#sss").html("第"+now+"页");
}

function gofont(){
	if(now==count){
		alert("没有下一页");
	}else{
		now=parseInt(now);
		now=now+1;
		showfriendCar(now,u_id);
	}
	$("#sss").html("第"+now+"页");
}
function countFriendsCar(){
	$.ajax({
		type:'post',
		url:'../usercar/countFriendsCar.do',
		data:'u_id='+u_id,
		async:false,
		success:function(data){
			var rss = $.parseJSON(data);
			count=rss.rs;
			//alert(count);
			$("#ss").html("总"+count+"页");
	}
	});
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
