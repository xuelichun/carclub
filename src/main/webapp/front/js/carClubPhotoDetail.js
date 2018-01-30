var club_id=0;
var ca_id=0;;
$(function(){
	var strHref=decodeURI(this.location.href);
	club_id=strHref.getQuery("club_id");
	ca_id=strHref.getQuery("ca_id");
	isMember();
	isExistClub();
	isExistClubAlbum();
	if(ca_id){
		showClub(club_id);
		showClubPhoto(ca_id,1);
		showPhotoAlbumPage(ca_id,1);
		setUrl(club_id);
	}
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

function showClubPhoto(ca_id,page){
	var content="";
	$.getJSON("../clubAlbume.do",{"ca_id":ca_id,"page":page},function(data){
		for(var i=0;i<data.length;i++){
			content+="<div class='prod1'>"+
	                   "<div class='tip1'><a href='myPhotoDetail.html'><img src=../"+data[i].pa_img+" width='200px' height='160px'></a></div>"+
	                	"<div class='scrt1'>"+
	                   		"<div class='zt1'>"+data[i].pa_name+"</div>"+
							"<div class='rq1'><a href='#'>删除</a></div>"+
	               		"</div>"+
	         		"</div>";
		}
		$("#clubPhoto").html(content);
	});
}

function showPhotoAlbumPage(ca_id,page){
	var content="";
	$.getJSON("../clubAlbumi.do",{"ca_id":ca_id},function(data){
		content+="<div class='digg'><a href='javascript:pageUpAndDown("+ca_id+","+(page-1)+","+data+")'>&lt;</a>";
		for(var i=0;i<data;i++){
			content+="<a href=javascript:showClubPhoto("+ca_id+","+(i+1)+")>"+(i+1)+"</a>";
		}
		content+="<a href='javascript:pageUpAndDown("+ca_id+","+(page+1)+","+data+")'>&gt;</a></div>";
		$("#photoAlbumPage").html(content);
	});
}

function pageUpAndDown(ca_id,page,allPage){
	if(page<=0){
		alert("没有上一页了");
	}else if(page>allPage){
		alert("没有下一页了")
	}else{
		showClubPhoto(ca_id,page);
		showPhotoAlbumPage(ca_id,page);
	}
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

function isExistClubAlbum(){
	$.ajax({
		url:'../clubHomeq.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"ca_id="+ca_id,
		success:function(data){
			if(data==0){
				ca_id=0;
				location.href="carClubPhoto.html?club_id="+club_id;
			}
		}
	});
}

function showClub(club_id){
	$.getJSON("../clubHomes.do",{"club_id":club_id},function(data){
		$("#clubName").html(data.club_name);
	//	$("#carClubName").attr("href","carClub.html?club_id="+club_id+"&isMember=1"+"&u_id="+u_id);
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
