var club_id=0;
var u_id=0;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		showMemberAddMsg(club_id,1);
	}
});

function showMemberAddMsg(club_id,page){
	countMemberAddMsgTotal(1);
	var content="";
	$.ajax({
		url:'../clubAdminb.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id+"&page="+page,
		success:function(data){
			var u_idArray=new Array();
			for(var i=0;i<data.length;i++){
				u_idArray[i]=data[i].u_id;
			}
			for(var i=0;i<data.length;i++){
				content+="<li>"+
			      "<div class='layout recListLeft f14'>"+
			        "<div class='recDes'>"+
				        "<div class='vm bold c999'>"+
				        	"<table border='0'>"+
				        		"<tr>"+
				        			"<td width='200px'><input type='checkbox' name='addMembers' value="+data[i].u_id+" /></td>"+
				        			"<td width='200px'><img src='' alt='' width='50px' height='50px' id='m_img"+i+"'/></td>"+
				        			"<td width='200px'><div id='m_nick"+i+"'></div></td>"+
				        			"<td width='200px'>"+data[i].ja_applitime+"</td>"+
				        			"<td width='200px'><a href='javascript:addMember("+data[i].u_id+","+data[i].club_id+",\"同意\")'>同意</a>&nbsp;&nbsp;<a href='javascript:addMember("+data[i].u_id+","+data[i].club_id+",\"拒绝\")'>拒绝</a></td>"+
				        		"</tr>"+
				        	"</table>"+
				       	"</div>"+
			        "</div>"+
			      "</div>"+
			    "</li>";
			}
			$("#allMemberAdd").html(content);
			$.ajax({
				url:'../clubHomed.do',
				type:'GET',
				dataType:'json',
				async:false,
				data:"u_id="+u_idArray,
				success:function(data){
					for(var i=0;i<data.length;i++){
						$("#m_nick"+i).html(data[i].u_nick);
						$("#m_img"+i).attr("src","../"+data[i].u_head);
					}
				}
			});
		}
	});
	memberAddMsgPage(club_id,page);
}

function addMember(u_id,club_id,ja_status){
	var u_idArray=new Array();
	u_idArray[0]=u_id;
	$.ajax({
		url:'../clubAdminc.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"u_id="+u_idArray+"&club_id="+club_id+"&ja_status="+ja_status,
		success:function(data){
			alert("成功:"+data[0]+",失败:"+data[1]);
		}
	});	
	showMemberAddMsg(club_id,1);
}

function addMembers(ja_status){
	var club_id=1;
	var u_idArray=new Array();
	var j=0;
	var addMembers=$("input[name=addMembers]");
	for(var i=0;i<addMembers.length;i++){
		if(addMembers[i].checked){
			u_idArray[j]=addMembers[i].value;
			j++;
		}
	}
	$.ajax({
		url:'../clubAdminc.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"u_id="+u_idArray+"&club_id="+club_id+"&ja_status="+ja_status,
		success:function(data){
			alert("成功:"+data[0]+";失败:"+data[1]);
		}
	});
	showMemberAddMsg(club_id,1);	
}

function selectAll(){
	var addMembers=$("input[name=addMembers]");
	for(var i=0;i<addMembers.length;i++){
		if(!addMembers[i].checked){
			addMembers[i].checked=true;
		}
	}
}

function countMemberAddMsgTotal(club_id){
	var content="";
	$.getJSON("../clubAdminag.do",{"club_id":club_id},function(data){
		content+="<div class='title1'>申请通知("+data+")条</div>";
		$("#memberAddMsgTotal").html(content);
	});
}
 
function memberAddMsgPage(club_id){
	$.getJSON("../clubAdminaf.do",{"club_id":club_id},function(data){
		
	});
}

function memberAddMsgPage(club_id,page){
	var content="";
	$.getJSON("../clubAdminad.do",{"club_id":club_id},function(data){
		content+="<div class='digg'><a href='javascript:pageUpAndDown("+club_id+","+(page-1)+","+data+")'>&lt;</a>";
		for(var i=0;i<data;i++){
			content+="<a href=javascript:showMemberAddMsg("+1+","+(i+1)+")>"+(i+1)+"</a>";
		}
		content+="<a href='javascript:pageUpAndDown("+club_id+","+(page+1)+","+data+")'>&gt;</a></div>";
		$("#memberAddPage").html(content);
	});
}

function pageUpAndDown(club_id,page,allPage){
	if(page<=0){
		alert("没有上一页了");
	}else if(page>allPage){
		alert("没有下一页了")
	}else{
		showMemberAddMsg(club_id,page);
		memberAddMsgPage(club_id,page);
	}
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
