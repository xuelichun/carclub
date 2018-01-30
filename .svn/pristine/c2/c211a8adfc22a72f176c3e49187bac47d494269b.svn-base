var club_id=0;
$(function(){
	var strHref=decodeURI(this.location.href);
	club_id=strHref.getQuery("club_id");
	isMember();
	isExistClub();
	if(club_id!=0){
		showClub(club_id);
		showClubAlbum(club_id,1);
	}
	setUrl(club_id);
});

function setUrl(club_id){
	$("#carClub").attr("href","carClub.html?club_id="+club_id);
	$("#carClubActivity").attr("href","carClubActivity.html?club_id="+club_id);
	$("#carClubMember").attr("href","carClubMember.html?club_id="+club_id);
	$("#carClubPhoto").attr("href","carClubPhoto.html?club_id="+club_id);
}
function showClubAlbum(club_id,page){
	var content="";
	var uIdArray=new Array();
	$.ajax({
		url:'../clubAlbumb.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id+"&page="+page,
		success:function(data){
			for(var i=0;i<data.length;i++){
				uIdArray[i]=data[i].u_id;
				content+="<div class='prod'>"+
	                       "<div class='tip'><a href='carClubPhotoDetail.html?ca_id="+data[i].ca_id+"&club_id="+club_id+"'><img src=../"+data[i].ca_main+" width='205' height='180'></a></div>"+
	                        "<div class='scrt'>"+
	                        	"<div class='zz' id='creator"+i+"'></div>"+
								"<div class='rq'>2016-05-02</div>"+
	                    	"</div>"+
	                       "<div class='scrt'>"+
	                        	"<div class='zt'><a href='#'>"+data[i].ca_name+"</a></div>"+
								"<div class='rq'>"+data[i].ca_count+"张</div>"+
	                    	"</div>"+
	              		"</div>";
			}
			$("#clubAlbum").html(content);
			showClubAlbumPage(club_id,page);
			$.ajax({
				url:'../clubHomed.do',
				type:'GET',
				dataType:'json',
				async:false,
				data:"u_id="+uIdArray,
				success:function(data){
					for(var j=0;j<data.length;j++){
						$("#creator"+j).html("<a href='#'><img alt='' src=../"+data[j].u_head+" width='30' height='30'/></a>");
					}
				}
			});
		}
	});
}

function showClubAlbumPage(club_id,page){
	var content="";
	$.getJSON("../clubAlbumj.do",{"club_id":club_id},function(data){
		content+="<div class='digg'><a href='javascript:pageUpAndDown("+club_id+","+(page-1)+","+data+")'>&lt;</a>";
		for(var i=0;i<data;i++){
			content+="<a href=javascript:showClubAlbum("+club_id+","+(i+1)+")>"+(i+1)+"</a>";
		}
		content+="<a href='javascript:pageUpAndDown("+club_id+","+(page+1)+","+data+")'>&gt;</a></div>";
		$("#clubAlbumPage").html(content);
	});
}

function pageUpAndDown(club_id,page,allPage){
	if(page<=0){
		alert("没有上一页了");
	}else if(page>allPage){
		alert("没有下一页了")
	}else{
		showClubAlbum(club_id,page);
		showClubAlbumPage(club_id,page);
	}
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

