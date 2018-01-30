var club_id=0;
var u_id=0;
$(function(){
	var strHref=decodeURI(this.location.href);
	club_id=strHref.getQuery("club_id");
	if(club_id==null){
		club_id=0;
	}else{
		club_id=club_id.replace("#","");
	}
	isMember();
	isExistClub();
	if(club_id!=0){
		showClub(club_id);
		showMembers(club_id,1);
		showRank(club_id);
	}
	setUrl(club_id);
});

function setUrl(club_id){
	$("#carClub").attr("href","carClub.html?club_id="+club_id);
	$("#carClubActivity").attr("href","carClubActivity.html?club_id="+club_id);
	$("#carClubMember").attr("href","carClubMember.html?club_id="+club_id);
	$("#carClubPhoto").attr("href","carClubPhoto.html?club_id="+club_id);
}
function showMembers(club_id,page){
	var content="";
	var j=0;
	var k=0;
	$.getJSON("../clubHomea.do",{"club_id":club_id,"page":page},function(data){
		if(page==1){
			for(var i=0;i<data.length;i++){
				if(data[i]==null){
					break;
				}else{
					if(i==0){
						content+="<div class='divcss22'><div class='tip22'><a href='friendsShow.html?u_id="+data[i].u_id+"'><img src=../"+data[i].u_head+" width='100px' height='100px'></a></div><div class='scrt22'><div class='zt22'><a href='#'>"+data[i].u_nick+"</a></div><div class='rq22'>会长</div></div></div>";
					}else{
						content+="<div class='divcss22'><div class='tip22'><a href='friendsShow.html?u_id="+data[i].u_id+"'><img src=../"+data[i].u_head+" width='100px' height='100px'></a></div><div class='scrt22'><div class='zt22'><a href='#'>"+data[i].u_nick+"</a></div><div class='rq22'>副会长</div></div></div>";
					}
					j++;
				}
			}
			for(var i=j+1;i<data.length;i++){
				content+="<div class='divcss22'><div class='tip22'><a href='friendsShow.html?u_id="+data[i].u_id+"'><img src=../"+data[i].u_head+" width='100px' height='100px'></a></div><div class='scrt22'><div class='zt22'><a href='#'>"+data[i].u_nick+"</a></div><div class='rq22'>成员</div></div></div>";
			}
		}else{
			for(var i=0;i<data.length;i++){
				content+="<div class='divcss22'><div class='tip22'><a href='friendsShow.html?u_id="+data[i].u_id+"'><img src=../"+data[i].u_head+" width='100px' height='100px'></a></div><div class='scrt22'><div class='zt22'><a href='#'>"+data[i].u_nick+"</a></div><div class='rq22'>成员</div></div></div>";
			}
		}
		$("#member").html(content);
		countClubMemberTotal(club_id);
		selectClubMemberPage(club_id,page);
	});
}

function showRank(club_id){
	var content="";
	$.getJSON("../clubHomec.do",{"club_id":club_id},function(data){
		for(var i=0;i<data.length;i++){
			if(i<=2){
				content+="<li>"+
		           	  		"<span class='sp sp"+(i+1)+"'>"+(i+1)+"</span>"+
		           	  		"<span class='name'><a href='friendsShow.html?u_id="+data[i].u_id+"'>"+data[i].u_nick+"</a></span>"+
		           	  		"<span class='oil'>"+data[i].u_grade+"L</span>"+
		           	  	"</li>";
			}else{
				content+="<li>"+
       	  		"<span class='sp sp'>"+(i+1)+"</span>"+
       	  		"<span class='name'><a href='#'>"+data[i].u_nick+"</a></span>"+
       	  		"<span class='oil'>"+data[i].u_grade+"L</span>"+
       	  	"</li>";
			}
		}
		$("#Rank").html(content);
	});
}

function selectClubMemberPage(club_id,page){
	var content="";
	$.getJSON("../clubHomej.do",{"club_id":club_id,"page":page},function(data){
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

function countClubMemberTotal(club_id){
	var content="";
	$.getJSON("../clubAdminaa.do",{"club_id":club_id},function(data){
		content+="<div class='title1'>所有会员("+data+")人</div>";
		$("#clubMemberTotal").html(content);
	});
}


function showClub(club_id){
	$.getJSON("../clubHomes.do",{"club_id":club_id},function(data){
		$("#clubName").html(data.club_name);
		$("#carClubName").attr("href","carClub.html?club_id="+club_id+"&isMember=1"+"&u_id="+u_id);
		$("#clubDesc").html("简介:"+data.club_desc);
		$("#clubDomnam").html("域名:"+data.club_domnam);
		$("#carClubCb").html("车系:"+data.club_cb+"&nbsp;"+data.club_cd);
		$("#carClubPro").html("地区:"+data.club_pro+"&nbsp;"+data.club_city);
		$("#carClubPnum").html("人数:"+data.club_pnum+"人");
	});
	$.getJSON("../clubHomel.do",{"club_id":club_id},function(data){
		$("#clubGrade").htnl("油值:"+data+"L");
	});
}

function isMember(){
	if(club_id==null){
		club_id=0;
	}
	$.ajax({
		url:'../clubHomem.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			if(data[0]==0&&data[1]==0){
				location.href="index.html";
			}else if(data[0]==0&&data[1]==club_id){
				$("#signFunc").hide();
			}else if(data[0]==1&&data[1]==0){
				ensureClubId();
				$("#appliFunc").hide();
			}else if(data[0]==1&&data[1]==club_id){
				$("#appliFunc").hide();
			}else{
				$("#signFunc").hide();
			}
		}
	});
}

function ensureClubId(){
	if(club_id==0){
		$.ajax({
			url:'../clubHomen.do',
			type:'GET',
			dataType:'json',
			async:false,
			success:function(data){
				club_id=data;
			}
		});
	}
}

function isExistClub(){
	$.ajax({
		url:'../clubHomeo.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			if(data==0){
				club_id=0;
				location.href="index.html";
			}
		}
	});
}
