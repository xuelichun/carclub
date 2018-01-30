var now=1;
var count=0;
$(function(){
	$.getJSON("../user/islogin.do",{},function(data){
		//alert(data);
		if(data==null){
			alert("请先登录");
			location.href="./index.html";
		}
		$("#u_head").prop("src","../"+data.u_head);
		
		showVisitor(data.u_id,1);
		now=1;
		$("#sss").html("第"+now+"页");
		countVisitorPage(data.u_id);	
	});
});

function showVisitor(v_uid2,pageIndex){
	//$.getJSON("../user/showVisitor.do",{"u_id":v_uid2,"pageIndex":pageIndex},function(data){
	//$.getJSON("../user/selectHeadAndNick.do",{"u_id":u_id},function(data){
	$.ajax({
		type:'post',
		url:'../user/showVisitor.do',
		data:'u_id='+v_uid2+'&pageIndex='+pageIndex,
		async:false,
		success:function(data){
		var context="";
		
		for(var i=0;i<data.length;i++){
			var u_id=data[i].v_uid1;
			
			if(u_id!=-1){
				$.ajax({
					type:'post',
					url:'../user/selectHeadAndNick.do',
					data:'u_id='+u_id,
					async:false,
					success:function(data){
					
						context+="<li><img src='../"+data.u_head+"' style='width:30px;height:30px;'/>"+
						"<a href='javascript:jump("+data.u_id+")' style='font-size:15px;'>"+data.u_nick+"</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
				}});
			}else{
				
				context+="<li><img src='../1' style='width:30px;height:30px;'/>"+
				"<a href='javascript:jump(-1)' style='font-size:15px;'>匿名访问</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			}
			context+="<span >"+data[i].v_time+"</span>  </li>";                	                    
		}
		
		$("#ul").html(context);
	}});
}
function jump(id){
	if(id!=-1){
		var url="friendsShow.html?u_id="+id;
		window.location.assign(encodeURI(url));	
	}
}

function countVisitorPage(v_uid2){
	$.getJSON("../user/countVisitorPage.do",{"v_uid2":v_uid2},function(data){
		count=data.rs;
		$("#ss").html("总"+count+"页");
	});
}

function goback(){
	var u_id=$("#u_id").val();
	if(now==1){
		alert("没有上一页");
	}else{
		now=parseInt(now);
		now=now-1;
		showVisitor(u_id,now);
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
		showVisitor(u_id,now);
		
	}
	
	$("#sss").html("第"+now+"页");
}