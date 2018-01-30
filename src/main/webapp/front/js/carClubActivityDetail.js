var club_id=0;
var act_id=0;
var u_id=0;
$(function(){
	var strHref=this.location.href;
	act_id=strHref.getQuery("act_id");
	club_id=strHref.getQuery("club_id");
	isLoad();
	isMember();
	isExistClub();
	isExistAct();
	if(act_id!=null&&act_id!=0){
		showClub(club_id);
		showCarClubActivityDetail(act_id);
		showActivityCreator(club_id);
		showActivityAttendee(act_id);
	}else{
		location.href="index.html";
	}
	setUrl(club_id);
});

function setUrl(club_id){
	$("#carClub").attr("href","carClub.html?club_id="+club_id);
	$("#carClubActivity").attr("href","carClubActivity.html?club_id="+club_id);
	$("#carClubMember").attr("href","carClubMember.html?club_id="+club_id);
	$("#carClubPhoto").attr("href","carClubPhoto.html?club_id="+club_id);
}

String.prototype.getQuery = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = this.substr(this.indexOf("\?") + 1).match(reg);
    if (r != null)
   	  return unescape(r[2]);
    return null;
}

function showCarClubActivityDetail(act_id){
	$.getJSON("../clubAdminl.do",{"act_id":act_id},function(data){
		var content="<div class='biaoti'>"+
		"<h1>"+data.act_name+"</h1>"+
	"</div>"+
	"<div class='content'>"+
"<div class='m'>"+
    "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"+
     "<tr>"+
        "<td><a href='javascript:baoming()'><img src='images/img_22.jpg' width='206' height='61' /></a></td>"+
      "</tr>"+
      "<tr>"+
        "<td height='20'></td>"+
      "</tr>"+
      "<tr>"+
        "<td align='center' class='baomi'>活动地点："+data.act_pro+"&nbsp;"+data.act_city+"</td>"+
      "</tr>"+
      "<tr>"+
        "<td height='20'></td>"+
      "</tr>"+
      "<tr>"+
        "<td align='center' class='baomi'>报名人数：40人</td>"+
      "</tr>"+
      "<tr>"+
        "<td height='30'></td>"+
      "</tr>"+
      "<tr>"+
        "<td align='center' class='shuzi'>¥"+data.act_money+" </td>"+
      "</tr>"+
      "<tr>"+
        "<td>&nbsp;</td>"+
     "</tr>"+
    "</table>"+
    "</div>"+
    "<div class='n'><img src=../"+data.act_img+" width='458' height='279' /></div>"+
    "</div>";
		$("#clubActivities").html(content);
		content="<span style='font-size:20px'>活动时间："+data.act_starttime+"--"+data.act_stoptime+"</span><br/>" +
				"<span style='font-size:20px'>活动详情："+data.act_content+"</span>";
		$("#activityIntroduction").html(content);
	});
}

function showActivityCreator(club_id){
	$.getJSON("../clubHomee.do",{"club_id":club_id},function(data){
		var content="<div class='tip11'><a href='user.html'><img src=../"+data.u_head+" width='50px' height='50px'></a></div>"+
		                     "<div class='scrt11'>"+
	                        	"<div class='zt11'><a href='#'>"+data.u_nick+"</a></div>"+
	                    	"</div>";
		$("#activityCreator").html(content);
	});
}

function showActivityAttendee(act_id){
	var content="";
	$.getJSON("../clubHomef.do",{"act_id":act_id},function(data){
		for(var i=0;i<data.length;i++){
			content+=" <div class='divcss'>"+
		                        "<div class='tip11'><a href='user.html'><img src=../"+data[i].u_head+" width='50px' height='50px'></a></div>"+
		                    "<div class='scrt11'>"+
	                        	"<div class='zt11'><a href='#'>"+data[i].u_nick+"</a></div>"+
	                    	"</div>"+
	              		"</div>";
		}
		$("#clubActivityAttendee").html(content);
	});
}

function showClub(club_id){
	$.getJSON("../clubHomes.do",{"club_id":club_id},function(data){
		$("#clubName").html(data.club_name);
		//$("#carClubName").attr("href","carClub.html?club_id="+club_id+"&isMember=1"+"&u_id="+u_id);
		$("#clubDesc").html("简介:"+data.club_desc);
		$("#clubDomnam").html("域名:"+data.club_domnam);
		$("#carClubCb").html("车系:"+data.club_cb+"&nbsp;"+data.club_cd);
		$("#carClubPro").html("地区:"+data.club_pro+"&nbsp;"+data.club_city);
		$("#carClubPnum").html("人数:"+data.club_pnum+"人");
	});
	$.getJSON("../clubHomel.do",{"club_id":club_id},function(data){
		$("#clubGrade").html("油值:"+data+"L");
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

function isExistAct(){
	$.getJSON("../clubHomep.do",{"act_id":act_id},function(data){
		if(data==0){
			act_id=0;
			location.href="carClubActivity.html?club_id="+club_id;
		}
	});
}

function isLoad(){
	$.ajax({
		url:'../clubHomer.do',
		type:'GET',
		dataType:'json',
		async:false,
		success:function(data){
			u_id=data;
		}
	});
}

function baoming(){
	if(u_id==0){
		alert("请先登录")
	}else{
		/*$.getJSON("../clubHomead.do",{"u_id":u_id,"act_id":act_id},function(data){
			alert("报名成功");
		});*/
		isCanBaoming(u_id);
	}
}

function isCanBaoming(u_id){
	$.getJSON("../clubHomeaf.do",{"club_id":club_id,"act_id":act_id},function(data){
		if(data==-1){
			alert("只有会员才可以报名，快加入吧!");
		}else if(data==0){
			alert("不能重复报名!");
		}else{
			$.getJSON("../clubHomead.do",{"u_id":u_id,"act_id":act_id},function(data){
				alert("报名成功");
			});
		}
	});
}



