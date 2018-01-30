var head="";
var nick="";
var u_id=-1;
$(function(){
	$.getJSON("../user/islogin.do",{},function(data){
		if(data==null){
			alert("请先登录");
			location.href="./index.html";
		}else{
			$("#u_head").prop("src","../"+data.u_head);
			head="../"+data.u_head;
			nick=data.u_nick;
			u_id=data.u_id;
			showNewComments(data.u_id);
			nows=1;
			$("#sss").html("第"+nows+"页");
		
		}
		
	});
});
function shows(){
	$('#h2').form('load',"../user/islogin.do");
}
function showNewComments(u_id){
	var context="";
//		$.getJSON("../userDyn/showFriendsDyn.do",{"u_id":u_id,"indexPage":indexPage},function(data){
			$.ajax({
				type:'post',
				url:'../userDyn/showNewComments.do',
				data:'u_id='+u_id,
				async:false,
				success:function(data){
					
					if(data!=null){
						
						for(var p in data){
							context+=" <li> <div class='layout recListLeft f14'><a class='fLeft' target='_blank' >" +
									"<img width='48' height='48' " ;
							//var u_id=data[p][0].u_id;
							//$.getJSON("../user/selectHeadAndNick.do",{"u_id":data[p][0].u_id},function(data){
							
								context+="alt='"+nick+"' src='"+head+"'/></a><div class='recDes'>"+
								"<div class='vm bold c999'><a class='c4095ce'  href='javascript:jump("+u_id+")'>"+nick+"</a>";
								
									
									//"alt='"+nick+"' src='"+head+"'>" 
									//"</a><div class='recDes'>" +
							context+="&nbsp;&nbsp;&nbsp;<span style='color:#ffa07a'>"+data[p][0].pd_time+"</span></div> " +
									"<p class='recBox'>"+data[p][0].pd_msg+"</p>";
							//alert(context);
							var pd_id=data[p][0].pd_id;
							$.ajax({
								type:'post',
								url:'../userDyn/showPic.do',
								data:'pd_id='+pd_id,
								async:false,
								success:function(data){
									if(data.length>0){
										for(var i=0;i<data.length;i++){
											if(i==2||i==5){
												context+=" 	<img src='../"+data[i].dp_msg+"' class='a'/><br/>";
											}else{
											context+=" 	<img src='../"+data[i].dp_msg+"' class='a'/>";
											}
										}
									}
								}
							});
							for(var i=1;i<data[p].length;i++){
								context+="<div><div  onmousemove='showdelete(a"+data[p][i].com_id+")' onmouseout='hidedelete(a"+data[p][i].com_id+")' >" +
								"<a href='javascript:jump("+data[p][i].u_id+")'>"+data[p][i].u_nick+"</a>: "+data[p][i].com_msg+"&nbsp;&nbsp;&nbsp;<span style='color:#f08080'>"+data[p][i].com_time+"</span>" +
									"<a id='a"+data[p][i].com_id+"' href='javascript:deleteCom(\""+data[p][i].com_id+"\")' style='display:none; padding-left:30px;'>删除</a>" +
								"<br/></div>"+
								//alert(3);
								//alert(data[p][i].u_nick);
								//var h=data[p][i];
								"<a href='javascript:showReply("+data[p][i].com_id+")'>回复</a><br/>"+
								
								"<div style='display:none' id="+data[p][i].com_id+"> " +
								
								"<textarea rows='' cols='' id='re"+data[p][i].com_id+"'>" +
								"</textarea><br/><a  href='javascript:Reply(\""+data[p][i].u_id+"\",\""+data[p][i].u_nick+"\",\""+data[p][i].com_id+"\")'>提交回复</a></div></div>";
							
								//alert(1);
							}
							//alert(1);
								context+="<div class='mblFunc mt10 f12 downWh'><a  style='color:#4095ce' id='click"+data[p][0].pd_id+"' href='javascript:click("+data[p][0].pd_id+","+data[p][0].pd_num+")'>点赞("+data[p][0].pd_num+")</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
										"<a  style='color:#4095ce' href='javascript:com("+data[p][0].pd_id+")'>评论</a>&nbsp;&nbsp;&nbsp;&nbsp;" ;
									context+="<a  style='color:#4095ce' href='javascript:deletedyn("+data[p][0].pd_id+")'>删除</a>";
								context+="</div></div></div><div style='display:none' id='s"+data[p][0].pd_id+"'> " +
										"<textarea rows='' cols='' id='t"+data[p][0].pd_id+"'></textarea><br/>" +
									"<a  href='javascript:comments(\""+data[p][0].pd_id+"\",\""+data[p][0].u_id+"\")'>评论</a></div></li>";
						}
							
					if(context==''){
						context="<h1>没有动态</h1>";
					}	
					}else{
						context="没有动态";
					}
					$("#ul").html(context);	
					//alert(context);
				}
			});			
}

var o=1;
function com(pd_id){
	
	if(o%2==0){
		$("#s"+pd_id).hide();
	}else{
		$("#s"+pd_id).show();
	}
	o++;
}
var k=1;
function showReply(id){
	if(k%2==0){
		$("#"+id).hide();
	}else{
		$("#"+id).show();
	}
	k++;
}
function click(pd_id,num){
	var u_id=$("#u_id").val();
	var u_nick=$("#u_nick").val();
	$.getJSON("../userDyn/click.do",{"pd_id":pd_id,"u_id":u_id,"u_nick":u_nick},function(data){
		if(data.rs=='ok'){
			num=parseInt(num);
			var a=num+1;
			$("#click"+pd_id).html("点赞("+a+")");
			
		}else if(data.rs=='ch'){
			alert("不能重复点赞！");
		}else if(data.rs=='no'){
			alert("点赞失败");
		}
	});
	
}
function deleteCom(com_id){
	$.getJSON("../userDyn/deleteCom.do",{"com_id":com_id},function(data){
		var u_id=$("#u_id").val();
		if(data.rs=='ok'){
			showNewComments(u_id);
		}else{
			alert("删除失败");
		}
		
	});
}
function comments(pd_id,user_id){
	var com_msg=$("#t"+pd_id).val();
	if(com_msg.trim()==''){
		alert("评论内容不能为空");
		return ;
	}else{
		var u_id=$("#u_id").val();
		var u_nick=$("#u_nick").val();
		//alert($("#u_nick").val());
		$.getJSON("../userDyn/comments.do",{"pd_id":pd_id,"u_id":u_id,"u_nick":u_nick,"com_msg":com_msg,"user_id":user_id},function(data){
			if(data.rs=='ok'){
				//alert("评论成功");
				var u_id=$("#u_id").val();
				showNewComments(u_id);
				
			}else{
				alert("评论失败");
			}
			
		});
	}
	
	
}
function deletedyn(pd_id){
	//$.getJSON("../userDyn/deletedyn.do",{"pd_id":pd_id},function(data){
	$.ajax({
		type:'post',
		url:'../userDyn/deletedyn.do',
		data:'pd_id='+pd_id,
		async:false,
		success:function(data){
			var rss = $.parseJSON(data);
			if(rss.rs=='ok'){
			//alert("删除成功");
			var u_id=$("#u_id").val();
			showNewComments(u_id);
			
		}else{
			alert("删除失败");
		}
		}
	});
}

function showdelete(id){
	$(id).show();
}
function hidedelete(id){
	$(id).hide();
}

function jump(u_id){
	var id=$("#u_id").val();
	var u_nick=$("#u_nick").val();
	if(u_id!=id){
		var url="friendsShow.html?u_id="+u_id+"&u_nick="+u_nick+"&user_id="+id;
		window.location.assign(encodeURI(url));	
	}
//跳转到好友的个人中心
}
//rp_rpid  被回复人的id   rp_rnick 被回复人的昵称    com_id 评论的id
function Reply(rp_rpid,rp_rnick,com_id){
	var rp_pid=$("#u_id").val();
	var rp_nick=$("#u_nick").val();
	var rp_text=$("#re"+com_id).val();
	$.getJSON("../userDyn/reply.do",{"rp_rpid":rp_rpid,"rp_rnick":rp_rnick,"com_id":com_id,"rp_pid":rp_pid,"rp_nick":rp_nick,"rp_text":rp_text},function(data){
		if(data.rs=='ok'){
			var u_id=$("#u_id").val();
			showNewComments(u_id);
		}else{
			alert("回复失败");
		}
	});
}












