var club_id=0;
var u_id=0;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		selectClubAlbum(club_id,1);
	}
});


function expressClubAlbum(){
	var ca_name=$("#ca_name").val();
	var ca_desc=$("#ca_desc").val();
	$.getJSON("../clubAlbuma.do",{"ca_name":ca_name,"ca_desc":ca_desc,"club_id":club_id,"u_id":u_id},function(data){
		if(data==1){
			$("#msg").html(alert("创建成功"));
			$("#yincangClubAlbumBtn").hide();
			$("#TB_overlayBG").hide();
		}else{
			$("#msg").html(alert("创建失败"));
		}
	});
}

function selectClubAlbum(club_id,page){
	var content="";
	$.getJSON("../clubAlbumb.do",{"club_id":club_id,"page":page},function(data){
		for(var i=0;i<data.length;i++){
			content+="<div class='prod'>" +
					 	  "<div class='tip'>" +
					 	  		"<a href='clubAlbumDetail.html?ca_id="+data[i].ca_id+"'><img src=../"+data[i].ca_main+" width='205' height='180'></a>" +
					 	  "</div> " +
					 	  "<div class='scrt'>" +
					 	  		"<div class='zt'>" +
					 	  			 "<a href='#'>"+data[i].ca_name+"</a>" +
								"</div>" +
								"<div class='rq'>" +
									"<a href='javascript:deleteClubAlbum("+data[i].ca_id+","+data[i].ca_count+")'>删除</a>" +
								"</div>" +
								"<div class='rq'>"+data[i].ca_count+"张</div>" +
							"</div>" +
						"</div>";
		}
		$("#clubAlbums").html(content);
		showClubAlbumPage(club_id,page);
	});
}

function deleteClubAlbum(ca_id,ca_count){
	var flag=confirm("确定删除该相册？相册中有"+ca_count+"张照片");
	if(flag){
		$.getJSON("../clubAlbumg.do",{"ca_id":ca_id},function(data){
			selectClubAlbum();
		});
	}
}

function showClubAlbumPage(club_id,page){
	var content="";
	$.getJSON("../clubAlbumj.do",{"club_id":club_id},function(data){
		content+="<div class='digg'><a href='javascript:pageUpAndDown("+club_id+","+(page-1)+","+data+")'>&lt;</a>";
		for(var i=0;i<data;i++){
			content+="<a href=javascript:selectClubAlbum("+club_id+","+(i+1)+")>"+(i+1)+"</a>";
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
		selectClubAlbum(club_id,page);
		showClubAlbumPage(club_id,page);
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
