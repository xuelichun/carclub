var head="";
var nick="";
var now=0;
var count=0;
$(function (){
	$("#submit").click(function(){	
			$("#f1").submit();	
			
	});
	$("#submit2").click(function(){
			var img=document.getElementsByName("img");
			var j=0;
			for( var i=0;i<img.length;i++){
				if(img[i].value==''){
					alert("请添加图片");
					break;
				}else{
					j++;
				}
			}
			if(j==img.length){
				$("#f2").submit();
				
			}
});
	//表单提交成功后		
	$('#f1').form({
		success:function(data) {
			var rss = $.parseJSON(data);
			if (rss.rs == 'ok') {
				$.messager.alert('提示信息','发表成功！');
				var u_id=$("#u_id").val();
				countPyn(u_id);
				selectPyn(u_id,1);
				$('#h2').form('load',"../user/islogin.do");
			}else{
				$.messager.alert('提示','发表失败！');
			}
		}
	}); 
	//表单提交成功后		
	$('#f2').form({
		success:function(data) {
			var rss = $.parseJSON(data);
			if (rss.rs == 'ok') {
				$.messager.alert('提示信息','发表成功！');
				var u_id=$("#u_id").val();
				countPyn(u_id);
				selectPyn(u_id,1);
				$('#h2').form('load',"../user/islogin.do");
			}else if(rss.rs == 'no'){
				$.messager.alert('提示信息','发表失败！');
			}else{
				$.messager.alert('提示信息','图片上传失败！');
			}
		}
	}); 
	$.getJSON("../user/islogin.do",{},function(data){
		//alert(data);
		if(data==null){
			alert("请先登录");
			location.href="./index.html";
		}
		$("#u_head").prop("src","../"+data.u_head);
		head="../"+data.u_head;
		nick=data.u_nick;
		selectPyn(data.u_id,1);
		now=1;
		$("#sss").html("第"+now+"页");
		countPyn(data.u_id);	
	});
	
});
function shows(){
	
	$('#h2').form('load',"../user/islogin.do");
}

function goback(){
	var u_id=$("#u_id").val();
	if(now==1){
		alert("没有上一页");
	}else{
		now=parseInt(now);
		now=now-1;
		selectPyn(u_id,now);
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
		selectPyn(u_id,now);
		
	}
	
	$("#sss").html("第"+now+"页");
}
function countPyn(u_id){
	
	//$.getJSON("../userDyn/countDyn.do",{"u_id":u_id},function(data){
	$.ajax({
		type:'post',
		url:'../userDyn/countDyn.do',
		data:'u_id='+u_id,
		async:false,
		success:function(data){
			var rss = $.parseJSON(data);
			count=rss.rs;
			$("#ss").html("总"+count+"页");
	}
	});
}
function indyn(){
	if($("#pd_msg1").val().trim()=="说点什么吧"){
		$("#pd_msg1").val("");
	}
	if($("#pd_msg2").val().trim()=="说点什么吧"){
		$("#pd_msg2").val("");
	}
}
function outdyn(){
	if($("#pd_msg1").val().trim()==''){
		$("#pd_msg1").val("说点什么吧");
	}
	if($("#pd_msg2").val().trim()==''){
		$("#pd_msg2").val("说点什么吧");
	}
}

function pdyn(){
	$("#pdyn").show();
	$("#imag").hide();
			
}
function imag(){
	$("#imag").show();
	$("#pdyn").hide();
}
var shuli=0;
function addimg(){
	if(shuli<=4){
		var input2=document.createElement("input");
		input2.type="file";
		input2.name="img";
		input2.style.float="right";
		input2.style.width='100px';
		input2.style.border='none';
		var in1=document.getElementById("img");
		in1.appendChild(input2);
		shuli++;
	}else{
		alert("最多只能传6张图片");
	}
}

var a=a;
var b=b;
var w=0;
function selectPyn(u_id,indexPage){
	var context="";
//	$.getJSON("../userDyn/showDyn.do",{"u_id":u_id,"indexPage":indexPage},function(data){
		$.ajax({
			type:'post',
			url:'../userDyn/showDyn.do',
			data:'u_id='+u_id+'&indexPage='+indexPage,
			async:false,
			success:function(data){
				if(data!=null){
					for(var p in data){
						//alert(p.person_dyn.u_id);
//						alert($.parseJSON(p));
						//alert(data[p][0].pd_time);
						//alert(data[p].length);
						context+=" <li> <div class='layout recListLeft f14'><a class='fLeft' target='_blank' >" +
								"<img width='48' height='48' alt='"+nick+"' src='"+head+"'></a><div class='recDes'>" +
								"<div class='vm bold c999'><a class='c4095ce' target='_blank'>"+nick+"</a>&nbsp;&nbsp;&nbsp;<span style='color:#ffa07a'>"+data[p][0].pd_time+"</span></div> " +
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
						$.ajax({
							type:'post',
							url:'../userDyn/showAllCommentsAndReply.do',
							data:'pd_id='+pd_id,
							async:false,
							success:function(data){
//								alert(1);
								if(data!=null){
									for(var s in data){
										context+="<div><div  onmousemove='showdelete(a"+data[s][0].com_id+")' onmouseout='hidedelete(a"+data[s][0].com_id+")' >" +
												"<a href='javascript:jump("+data[s][0].u_id+")'>"+data[s][0].u_nick+"</a>: "+data[s][0].com_msg+"&nbsp;&nbsp;&nbsp;<span style='color:#f08080'>"+data[s][0].com_time+"</span>" +
												"<a id='a"+data[s][0].com_id+"' href='javascript:deleteCom(\""+data[s][0].com_id+"\")' style='display:none; padding-left:30px;'>删除</a><br/></div>";
										
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
							context+="<div class='mblFunc mt10 f12 downWh'><a  style='color:#4095ce' id='click"+data[p][0].pd_id+"' href='javascript:click("+data[p][0].pd_id+","+data[p][0].pd_num+")'>点赞("+data[p][0].pd_num+")</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
									"<a  style='color:#4095ce' href='javascript:com("+data[p][0].pd_id+")'>评论</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
									"<a  style='color:#4095ce' href='javascript:deletedyn("+data[p][0].pd_id+")'>删除</a>" +		
									"</div></div></div><div style='display:none' id='s"+data[p][0].pd_id+"'> " +
									"<textarea rows='' cols='' id='t"+data[p][0].pd_id+"'></textarea><br/>" +
								"<a  href='javascript:comments(\""+data[p][0].pd_id+"\",\""+data[p][0].u_id+"\")'>评论</a></div></li>";
					}	
				}else{
					context="没有动态";
				}
				$("#ul").html(context);			
			}
		});		
//	});	
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
			selectPyn(u_id,now);
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
				selectPyn(u_id,now);
				
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
				countPyn(u_id);
				if(count==0){
					now=0;
					$("#ul").html("没有动态");	
				}else if(count>now){
					selectPyn(u_id,now);
				}else if(count<now){
					selectPyn(u_id,count);
					now=count;
					$("#sss").html("第"+now+"页");
				}else{
					selectPyn(u_id,count);
					$("#sss").html("第"+now+"页");
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
	if(u_id!=id){
		var url="friendsShow.html?u_id="+u_id;
		window.location.assign(encodeURI(url));	
	}
	//location.href="friendsShow.html?u_id="+u_id;
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
			selectPyn(u_id,now);
		}else{
			alert("回复失败");
		}
	});
}