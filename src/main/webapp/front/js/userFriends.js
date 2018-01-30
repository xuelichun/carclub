$(function (){
	$.getJSON("../user/islogin.do",{},function(data){
		//alert(data.u_id);
		showFriends(data.u_id,1);
	});
});

function showFriends(u_id,pageIndex){
	
	$.getJSON("../friends/show.do",{"u_id":u_id,"pageIndex":pageIndex},function(data){
		var context="";
		if(data!=null){
			if(data.length>0){
				for(var i=0;i<data.length;i++){
					context+="<div class='r_name002'><div class='r_name002_left'><div class='r_name002_left001'>" +
							"<img src='../"+data[i].u_head+"' width='80px' height='80px'/></div></div>" +
							"<div class='r_name002_right'><div style='margin-top:7.5px;'>昵称:<a href='javascript:jumps("+data[i].u_id+")'>"+data[i].u_nick+"</a><br/>" +
									"等级:"+data[i].u_level+"<br/>积分:"+data[i].u_grade+"<br/>总访问量:"+data[i].u_total+"<br/>" +
											"个性签名:";
											if(data[i].u_sign==null){
												context+="<br/></div></div></div>";
											}else{
												context+=data[i].u_sign+"<br/></div></div></div>";
											}
				}
				$("#friend").html(context);
			}else{
				$("#friend").html("没有好友");
			}
			
		}else{
			$("#friend").html("没有好友");
		}
		//alert(context);
	});
}
function jumps(u_id){

	var url="friendsShow.html?u_id="+u_id;
	window.location.assign(encodeURI(url));
}