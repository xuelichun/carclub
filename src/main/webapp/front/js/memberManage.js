var club_id=0;
var u_id=0;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		showMembers(club_id,1);
		countClubMemberTotal(club_id);
		yanzhenPre();
	}
});


function showMembers(club_id,page){
	var content="<ul>";
	var content1="";
	var j=0;
	var k=0;
	$.ajax({
		url:'../clubAdminy.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id+"&page="+1,
		success:function(data){
			if(page==1){
				for(var i=0;i<data.length;i++){
					if(data[i]==null){
						break;
					}else{
						if(i==0){
							content+="<li>"+
									      "<div class='layout recListLeft f14'>"+
									        "<div class='recDes'>"+
										        "<div class='vm bold c999'>"+
										        	"<table border='0'>"+
										        		"<tr>"+
										        			"<td width='200px'><img src=../"+data[i].u_head+" alt='' width='50px' height='50px'/></td>"+
										        			"<td width='200px'>"+data[i].u_nick+"</td>"+
										        			"<td width='200px'>"+data[i].u_level+"</td>"+
										        			"<td width='200px'>会长</td>"+
										        			"<td width='200px'>&nbsp;</td>"+
										        		"</tr>"+
										        	"</table>"+
										       	"</div>"+
									        "</div>"+
									      "</div>"+
									    "</li>";
						}else{
							content+="<li>"+
						      "<div class='layout recListLeft f14'>"+
						        "<div class='recDes'>"+
							        "<div class='vm bold c999'>"+
							        	"<table border='0'>"+
							        		"<tr>"+
							        			"<td width='200px'><img src=../"+data[i].u_head+" alt='' width='50px' height='50px'/></td>"+
							        			"<td width='200px'>"+data[i].u_nick+"</td>"+
							        			"<td width='200px'>"+data[i].u_level+"</td>"+
							        			"<td width='200px'>副会长</td>"+
							        			"<td width='200px'><a class='setVicePreFunc' href='javascript:cancelVicePre("+data[i].club_id+","+data[i].u_id+")'>取消副会长</a></td>"+
							        		"</tr>"+
							        	"</table>"+
							       	"</div>"+
						        "</div>"+
						      "</div>"+
						    "</li>";
						}
						j++;
					}
				}
				for(var i=j+1;i<data.length;i++){
					content+="<li>"+
				      "<div class='layout recListLeft f14'>"+
				        "<div class='recDes'>"+
					        "<div class='vm bold c999'>"+
					        	"<table border='0'>"+
					        		"<tr>"+
					        			"<td width='200px'><img src=../"+data[i].u_head+" alt='' width='50px' height='50px'/></td>"+
					        			"<td width='200px'>"+data[i].u_nick+"</td>"+
					        			"<td width='200px'>"+data[i].u_level+"</td>"+
					        			"<td width='200px'>成员</td>"+
					        			"<td width='200px'><a class='setVicePreFunc' href='javascript:setVicePre("+data[i].club_id+","+data[i].u_id+")'>设为副会长</a></td>"+
					        		"</tr>"+
					        	"</table>"+
					       	"</div>"+
				        "</div>"+
				      "</div>"+
				    "</li>";
				}
			}else{
				for(var i=0;i<data.length;i++){
					content+="<li>"+
				      "<div class='layout recListLeft f14'>"+
				        "<div class='recDes'>"+
					        "<div class='vm bold c999'>"+
					        	"<table border='0'>"+
					        		"<tr>"+
					        			"<td width='200px'><img src=../"+data[i].u_head+" alt='' width='50px' height='50px'/></td>"+
					        			"<td width='200px'>"+data[i].u_nick+"</td>"+
					        			"<td width='200px'>"+data[i].u_level+"</td>"+
					        			"<td width='200px'>成员</td>"+
					        			"<td width='200px'><a class='setVicePreFunc' href='javascript:setVicePre("+data[i].club_id+","+data[i].u_id+")'>设为副会长</a></td>"+
					        		"</tr>"+
					        	"</table>"+
					       	"</div>"+
				        "</div>"+
				      "</div>"+
				    "</li>";
				}
			}
			$("#allMember").html(content);
			selectClubMemberPage(club_id,page);
		}
	});
}

function selectClubMemberPage(club_id,page){
	var content="";
	$.getJSON("../clubAdminz.do",{"club_id":club_id},function(data){
			content+="<div class='digg'><a href='javascript:pageUpAndDown("+club_id+","+(page-1)+","+data+")'>&lt;</a>";
			for(var i=0;i<data;i++){
				content+="<a href=javascript:showMembers("+1+","+(i+1)+")>"+(i+1)+"</a>";
			}
			content+="<a href='javascript:pageUpAndDown("+club_id+","+(page+1)+","+data+")'>&gt;</a></div>";
		$("#clubMemberPage").html(content);
	});
}

function pageUpAndDown(club_id,page,allPage){
	if(page<=0){
		alert("没有上一页了");
	}else if(page>allPage){
		alert("没有下一页了")
	}else{
		showMembers(club_id,page);
		selectClubMemberPage(club_id,page);
	}
}

function cancelVicePre(club_id,vp_id){
	$.getJSON("../clubAdminf.do",{"club_id":club_id,"vp_id":vp_id},function(data){
		showMembers(club_id,1);
	});
}

function setVicePre(club_id,vp_id){
	$.getJSON("../clubAdmine.do",{"club_id":club_id,"vp_id":vp_id},function(data){
		showMembers(club_id,1);
	});
}

function countClubMemberTotal(club_id){
	var content="";
	$.getJSON("../clubAdminaa.do",{"club_id":club_id},function(data){
		content+="<div class='title1'>所有会员("+data+")人</div>";
		$("#clubMemberTotal").html(content);
	});
}

function yanzhenPre(){
	$.ajax({
		url:'../clubAdminai.do',
		type:'GET',
		dataType:'json',
		async:false,
		success:function(data){
			if(data[0]==2){
				u_id=data[1];
			}else if(data[0]==3){
				u_id=data[1];
				$("#clubFeeLi").hide();
				$(".setVicePreFunc").hide();
				$("#yearFeeLi").hide();
			}else{
				location.href="index.html";
				u_id=data[1];
			}
		}	
	});
	if(u_id==0){
		club_id=0;
	}else{
		$.ajax({
			url:'../clubAdminah.do',
			type:'GET',
			dataType:'json',
			async:false,
			data:"u_id="+u_id,
			success:function(data){
				club_id=data;
			}
		});
	}
}