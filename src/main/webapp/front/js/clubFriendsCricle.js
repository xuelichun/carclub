var nows=1;
var counts=0;
//var club_id=0;
$(function(){
//	var strHref=decodeURI(this.location.href);//
//	club_id=strHref.getQuery("club_id");//
	showClubDyn(club_id,1);
	nows=1;
	$("#sss").html("第"+nows+"页");
	countClubDyn(club_id);
});
function shows(){
	$('#h2').form('load',"../user/islogin.do");
}
function showClubDyn(club_id,pageIndex){
	var context="";
	
//		$.getJSON("../userDyn/showFriendsDyn.do",{"u_id":u_id,"indexPage":indexPage},function(data){
		if(club_id==0){
			context="你还没有加入车友会";
			$("#ul").html(context);	
			$("#div1").hide();
		}else{	
		$.ajax({
				type:'post',
				url:'../userDyn/showClubDyn.do',
				data:'club_id='+club_id+'&pageIndex='+pageIndex,
				async:false,
				success:function(data){
					if(data!=null){
						for(var p in data){
							
							context+=" <li> <div class='layout recListLeft f14'><a class='fLeft' target='_blank' >" +
									"<img width='48' height='48' " ;
							var u_id=data[p][0].u_id;
							//$.getJSON("../user/selectHeadAndNick.do",{"u_id":data[p][0].u_id},function(data){
							$.ajax({
								type:'post',
								url:'../user/selectHeadAndNick.do',
								data:'u_id='+u_id,
								async:false,
								success:function(data){
								context+="alt='"+data.u_nick+"' src='../"+data.u_head+"'/></a><div class='recDes'>"+
								"<div class='vm bold c999'><a class='c4095ce'  href='javascript:jump("+data.u_id+")'>"+data.u_nick+"</a>";
								}
							});
									
									//"alt='"+nick+"' src='"+head+"'>" 
									//"</a><div class='recDes'>" +
							context+="&nbsp;&nbsp;&nbsp;<span style='color:#ffa07a'>"+data[p][0].pd_time+"</span></div> " +
									"<p class='recBox'>"+data[p][0].pd_msg+"</p>";
							//alert(context);
							if(data[p].length>1){
								for(var i=1;i<data[p].length;i++){
									if(i==3||i==6){
										context+=" 	<img src='../"+data[p][i].dp_msg+"' class='a'/><br/>";
									}else{
									context+=" 	<img src='../"+data[p][i].dp_msg+"' class='a'/>";
									}
								}
							}
							var pd_id=data[p][0].pd_id;
							var u_id=data[p][0].u_id;
							$.ajax({
								type:'post',
								url:'../userDyn/showAllCommentsAndReply.do',
								data:'pd_id='+pd_id,
								async:false,
								success:function(data){
//									alert(1);
									if(data!=null){
										for(var s in data){
											context+="<div><div  onmousemove='showdelete(a"+data[s][0].com_id+")' onmouseout='hidedelete(a"+data[s][0].com_id+")' >" +
													"<a href='javascript:jump("+data[s][0].u_id+")'>"+data[s][0].u_nick+"</a>: "+data[s][0].com_msg+"&nbsp;&nbsp;&nbsp;<span style='color:#f08080'>"+data[s][0].com_time+"</span>" ;
													
													if($("#u_id").val()==u_id){
														context+="<a id='a"+data[s][0].com_id+"' href='javascript:deleteCom(\""+data[s][0].com_id+"\")' style='display:none; padding-left:30px;'>删除</a>" ;
													}
													context+="<br/></div>";
															
							
											for(var j=1;j<data[s].length;j++){
												context+="<a href='javascript:jump("+data[s][j].rp_pid+")'>"+data[s][j].rp_nick+"</a> 回复  <a href='javascript:jump("+data[s][j].rp_rpid+")'>"+data[s][j].rp_rnick+"</a>:"+data[s][j].rp_text+"<br/>";
											}
											var h=data[s].length-1;
											if(h==0){
												context+="<a href='javascript:showReply("+data[s][0].com_id+")'>回复</a><br/>"+
												"<div style='display:none' id="+data[s][0].com_id+"> " +
												"<textarea rows='' cols='' id='re"+data[s][0].com_id+"'>" +
												"</textarea><br/><a  href='javascript:Reply(\""+data[s][h].u_id+"\",\""+data[s][h].u_nick+"\",\""+data[s][0].com_id+"\")'>提交回复</a></div>"
											}else{
												context+="<a href='javascript:showReply("+data[s][0].com_id+")'>回复</a><br/>"+
												"<div style='display:none' id="+data[s][0].com_id+"> " +
												"<textarea rows='' cols='' id='re"+data[s][0].com_id+"'>" +
												"</textarea><br/><a  href='javascript:Reply(\""+data[s][h].rp_pid+"\",\""+data[s][h].rp_nick+"\",\""+data[s][0].com_id+"\")'>提交回复</a></div>"
											}
											//alert(data[s].length);
											
											context+="</div>";							
										}
									}

								}});
								context+="<div class='mblFunc mt10 f12 downWhclub'><a  style='color:#4095ce' id='click"+data[p][0].pd_id+"' href='javascript:click("+data[p][0].pd_id+","+data[p][0].pd_num+")'>点赞("+data[p][0].pd_num+")</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
										"<a  style='color:#4095ce' href='javascript:com("+data[p][0].pd_id+")'>评论</a>&nbsp;&nbsp;&nbsp;&nbsp;" ;
								if($("#u_id").val()==u_id){
									context+="<a  style='color:#4095ce' href='javascript:deletedyn("+data[p][0].pd_id+")'>删除</a>";
								}
										 
								context+="</div></div></div><div style='display:none' id='s"+data[p][0].pd_id+"'> " +
										"<textarea rows='' cols='' id='t"+data[p][0].pd_id+"'></textarea><br/>" +
									"<a  href='javascript:comments(\""+data[p][0].pd_id+"\",\""+data[p][0].u_id+"\")'>评论</a></div></li>";
						}	
					}else{
						context="没有动态";
					}
					$("#ul").html(context);			
				}
			});
		}
}
//计算总页数
function countClubDyn(club_id){
	//$.getJSON("../userDyn/countSparePyn.do",{"u_id":u_id},function(data){
	$.ajax({
		type:'post',
		url:'../userDyn/countClubDyn.do',
		data:'club_id='+club_id,
		async:false,
		success:function(data){
			var rss = $.parseJSON(data);
			counts=rss.rs;
			$("#ss").html("总"+counts+"页");
		}
	});
}
function goback(){
	var u_id=$("#u_id").val();
	if(nows==1){
		alert("没有上一页");
	}else{
		nows=parseInt(nows);
		nows=nows-1;
		showClubDyn(club_id,nows);
		
	}
	$("#sss").html("第"+nows+"页");
}
function gofont(){
	var u_id=$("#u_id").val();
	if(nows==counts){
		alert("没有下一页");
	}else{
		nows=parseInt(nows);
		nows=nows+1;
		showClubDyn(club_id,nows);
		
	}
	
	$("#sss").html("第"+nows+"页");
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
	var u_id=$("#myid").val();
	var u_nick=$("#mynick").val();
	if(u_id!=null){
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
	}else{
		alert("请先登录");
	}
	
}
function deleteCom(com_id){
	$.getJSON("../userDyn/deleteCom.do",{"com_id":com_id},function(data){
		if(data.rs=='ok'){
			showClubDyn(club_id,nows);
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
		var u_id=$("#myid").val();
		var u_nick=$("#mynick").val();
		//alert($("#u_nick").val());
		if(u_id!=null){
			$.getJSON("../userDyn/comments.do",{"pd_id":pd_id,"u_id":u_id,"u_nick":u_nick,"com_msg":com_msg,"user_id":user_id},function(data){
				if(data.rs=='ok'){
					//alert("评论成功");
					showClubDyn(club_id,nows);
					
				}else{
					alert("评论失败");
				}
				
			});
		}else{
			alert("请先登录");
		}
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
				countClubDyn(club_id);
			if(counts==0){
				nows=0;
				$("#ul").html("没有动态");	
			}else if(counts>nows){
				showClubDyn(club_id,now);
			}else if(counts<nows){
				showClubDyn(club_id,counts);
				nows=counts;
				$("#sss").html("第"+nows+"页");
			}else{
				//alert(counts+"---"+nows);
				showClubDyn(club_id,counts);
				$("#sss").html("第"+nows+"页");
			}
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
	var rp_text=$("#re"+com_id).val();
	var rp_pid=$("#myid").val();
	var rp_nick=$("#mynick").html();
	if(rp_pid!=null){
		$.getJSON("../userDyn/reply.do",{"rp_rpid":rp_rpid,"rp_rnick":rp_rnick,"com_id":com_id,"rp_pid":rp_pid,"rp_nick":rp_nick,"rp_text":rp_text},function(data){
			if(data.rs=='ok'){
				showClubDyn(club_id,nows);
			}else{
				alert("回复失败");
			}
		});
	}else{
		alert("请先登录!")
	}
	
}
