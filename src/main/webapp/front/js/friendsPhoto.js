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
	showAlbum(u_id,1);
	countPage(u_id);
	$("#sss").html("第"+now+"页");
	
});
function showAlbum(u_id,pageIndex){
	$.getJSON("../album/showPhotoFenye.do",{"u_id":u_id,"pageIndex":pageIndex},function(data){
		if(data.length>0){
			$("#div1").show();
			var context="";
			for(var i=0;i<data.length;i++){
				context+="<div class='prod'><div class='tip'><a href='javascript:showdetail("+data[i].a_id+")'>" +
						"<img src='../"+data[i].a_main+"' width='205' height='180'></a></div><div class='scrt'>" +
						"<div class='zt'><a href='#'>"+data[i].a_title+"("+data[i].a_num+")</a></div>" +
						"<div class='rq'>"+data[i].a_time+"</div></div></div>";
			}
			$("#d3").html(context);
		}else{
			$("#div1").hide();
			$("#d3").html("没有相册");
		}
		$("#td").html(context);
	});	
}
function goback(){
	if(now==1){
		alert("没有上一页");
	}else{
		now=parseInt(now);
		now=now-1;
		showAlbum(u_id,now);
		
	}
	$("#sss").html("第"+now+"页");
}
function gofont(){
	if(now==count){
		alert("没有下一页");
	}else{
		now=parseInt(now);
		now=now+1;
		showAlbum(u_id,now);
	}
	$("#sss").html("第"+now+"页");
}
function countPage(u_id){
	$.getJSON("../album/countPage.do",{"u_id":u_id},function(data){
		count=data.rs;
		$("#ss").html("总"+data.rs+"页");
		if(now>count){
			now=count;
			$("#sss").html("第"+now+"页");
		}
	});
}

function showdetail(a_id){
	$("#a1").hide();
	$("#a2").show();
	var context="";
	$.getJSON("../album/selectAllAlbumPic.do",{"a_id":a_id},function(data){
		context+="<div class='r_name'>他的相册>>"+data[0].a_title+"</div><div class='matter2'><div class='choose'>" +
				"<div class='r_name'>描述:"+data[0].a_desc+"<br/>创建时间:"+data[0].a_time+"</div></div><div class='content'>";
		if(data.length>1){
			for(var i=1;i<data.length;i++){
				context+="<div class='prod1'><div class='tip1'>" +
						"<img src='../"+data[i].ap_img+"' width='200px' height='160px'></a></div>" +
						"<div class='scrt1'><div class='zt1'>"+data[i].ap_time+"</div><div class='rq1'>" +
						"</div></div></div>"
			}
		}else{
			context+="<div class='r_name'>该相册没有图片</div>";
		}
		context+="</div></div></div>";
		$("#a2").html(context);
	});
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













