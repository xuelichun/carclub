var club_id=0;
var u_id=0;
$(function(){
	var strHref=decodeURI(this.location.href).replace("#","");;
	club_id=strHref.getQuery("club_id");
	if(club_id==null){
		club_id=0;
	}
	isMember();
	//isExistClub();
	isLogin();
	if(club_id!=0){
		$("input[name=u_id]").val(u_id);
		$("input[name=club_id]").val(club_id);
		showClub(club_id);
		showNotice(club_id);
		showPresident(club_id);
		if(u_id!=0){
			insertClubVisitor();
		}
		selectClubVisitor();
	}
	setUrl(club_id);
	
});

function setUrl(club_id){
	$("#carClub").attr("href","carClub.html?club_id="+club_id);
	$("#carClubActivity").attr("href","carClubActivity.html?club_id="+club_id);
	$("#carClubMember").attr("href","carClubMember.html?club_id="+club_id);
	$("#carClubPhoto").attr("href","carClubPhoto.html?club_id="+club_id);
}
function showNotice(club_id){
	$.getJSON("../noticef.do",{"club_id":club_id},function(data){
		if(data!=null){
			var content="<div class='info'>公告</div><div class='content1'>"+data.noti_content+"</div>";
			$("#notice").html(content);
		}
	});
	
}

function showPresident(club_id){
	var content="";
	$.ajax({
		url:'../clubHomeb.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			for(var i=0;i<data.length;i++){
				if(i==0){
					content+=" <div class='divcss'><div class='tip11'><a href='friendsShow.html?u_id="+data[i].u_id+"'><img src=../"+data[i].u_head+" width='50px' height='50px'></a></div><div class='scrt11'><div class='zt11'><a href='#'>"+data[i].u_nick+"</a></div><div class='rq11'>会长</div></div></div>";
				}else{
					content+=" <div class='divcss'><div class='tip11'><a href='friendsShow.html?u_id="+data[i].u_id+"'><img src=../"+data[i].u_head+" width='50px' height='50px'></a></div><div class='scrt11'><div class='zt11'><a href='#'>"+data[i].u_nick+"</a></div><div class='rq11'>副会长</div></div></div>";
				}
			}
			$("#president").html(content);
		}
	});
}

function appliReshow(u_id){
	$.getJSON("../clubHomek.do",{"u_id":u_id},function(data){
		$("input[name=u_name").val(data.u_name);
		var u_sex=$("input[name=u_sex]");
		for(var i=0;i<u_sex.length;i++){
			if(u_sex[i].value==data.u_sex){
				u_sex[i].checked="checked";
			}
		}
		$("#u_pro").val(data.u_pro);
		var objC = document.getElementById("u_city");
		var pValue = document.getElementById("u_pro").value;
		for ( var i = objC.length - 1; i > 0; i--) {
			objC.remove(i);
		}
		var j=jQuery.inArray(pValue,pName);
		if (j >= 0) {
			for ( var i = 0; i < cName[j].length; i++) {
				var op = new Option(cName[j][i], cName[j][i]);
				objC.add(op);
			}
		}
		$("#u_city").val(data.u_city);
	});
}

$(document).ready(function() { 
    // bind 'myForm' and provide a simple callback function 
    $('#aplliForm').ajaxForm(function(data) { 
    	if(data==1){
    		alert("提交申请成功，等待处理!");
    	}else if(data==2){
    		alert("您要加入的车友会人数已满,换一个试试!");
    	}else if(data==3){
    		alert("您已经提交过申请了!");
    	}else if(data==4){
    		alert("您只能同时加入一个车友会!");
    	}
    });    
}); 

function showClub(club_id){
	$.getJSON("../clubHomes.do",{"club_id":club_id},function(data){
		$("#clubName").html(data.club_name);
		//$("#carClubName").attr("href","carClub.html?club_id="+club_id+"&isMember=1"+"&u_id="+u_id);
		$("#clubDesc").html("简介："+data.club_desc);
		$("#clubDomnam").html("域名："+data.club_domnam);
		$("#clubCd").html("车系："+data.club_cb+"&nbsp;"+data.club_cd);
		$("#clubPro").html("地区："+data.club_pro+"&nbsp;"+data.club_city);
		$("#clubPnum").html("人数："+data.club_pnum+"人");
	});
	$.getJSON("../clubHomel.do",{"club_id":club_id},function(data){
		$("#clubGrade").html("油值："+data+"L");
	});
}

function isMember(){
	$.ajax({
		url:'../clubHomem.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			if(data[0]==0&&data[1]==0){	//未登录情况下非法访问车友会
				location.href="index.html"; 
			}else if(data[0]==0&&data[1]==club_id){//未登录情况下访问其他车友会
				if(data[2]==1){//存在
					$("#signFunc").hide();
				}else{
					location.href="index.html";
				}
			}else if(data[0]==1&&data[1]==0){ //未加入任何车友会
				location.href="user.html";
			}else if(data[0]==1&&data[1]!=0&&data[2]==-1){ //登录情况下访问到个人所在车友会
				$("#appliFunc").hide();
			}else if(data[0]==1&&data[1]!=0&&data[2]==0){ //登录情况下访问其他车友会(不存在)
				location.href="user.html";
				data[1]=0;
			}else if(data[0]==1&&data[1]!=0&&data[2]==1){
				$("#signFunc").hide();	//登录情况下访问其他车友会
			}else{
				location.href="user.html";
				data[1]=0;
			}
			club_id=data[1];
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

function isLogin(){
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

function beforeAppli(){
	$.getJSON("../clubHomer.do",{},function(data){
		if(data==0){
			alert("请先登录");
		}else{
			showAppli();
			appliReshow(u_id);
		}
	})
}

function showAppli(){
		$("#TB_overlayBG").css({
			display:"block",height:$(document).height()
		});
		$(".box1").css({
			left:($("body").width()-$(".box1").width())/2-20+"px",
			top:($(window).height()-$(".box1").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	$(".close").click(function(){
		$("#TB_overlayBG").css("display","none");
		$(".box1 ").css("display","none");
	});
}

function sign(){
	$.getJSON("../clubHomet.do",{"u_id":u_id,"club_id":club_id},function(data){
		if(data==1){
			alert("签到成功");
		}else if(data==-1){
			alert("今日已签到，不能重复签!")
		}
	});
}

function insertClubVisitor(){
	$.getJSON("../clubHomev.do",{"cv_uid":u_id,"club_id":club_id},function(data){
		
	});
}

function countClubVisitor(){
	$.getJSON("../clubHomex.do",{"club_id":club_id},function(data){
		
	});
}

function selectClubVisitor(){
	var cv_uid=new Array();
	var content="";
	$.ajax({
		url:'../clubHomew.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			for(var i=0;i<data.length;i++){
				cv_uid[i]=data[i].cv_uid;
				content+=" <div class='divcss'>"+
		                       "<div class='tip11'><a href='friendsShow.html?u_id="+data[i].cv_uid+"'><img src='images/qq.jpg' width='50px' height='50px' id='ux"+i+"'></a></div>"+
		                     "<div class='scrt11'>"+
	                        	"<div class='zt11'>"+data[i].cv_time+"</div>"+
	                    	"</div>"+
	              		"</div>";
			}
			$("#clubVisitors").html(content);
			$.ajax({
				url:'../clubHomey.do',
				type:'GET',
				dataType:'json',
				async:false,
				data:"u_id="+cv_uid,
				success:function(data){
					for(var j=0;j<data.length;j++){
						$("#ux"+j).attr("src","../"+data[j].u_head);
					}
				}
			});
		}
	});
}


