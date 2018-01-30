var club_id=0;
var flag=1;
$(function(){
	isdenglu();
	if(flag!=0){
		showClub();
		isPre();
	}
});


function showClub(){
	$.ajax({
		url:'../clubHomez.do',
		type:'GET',
		dataType:'json',
		async:false,
		success:function(data){
			if(data!=null){
				$("#quitCarClub").html("<div class='login' id='quitCarClub'><a href='quitCarClub()'>退出</a></div>");
				$("#carClubImgDIV").html("<div class='r_name007_left001'><img id='carClubImg' src=''  width='160px' height='160px' /></div>");
				club_id=data.club_id;
				$("#carClubImg").attr("src","../"+data.club_img);
				$("#carClubName").html(data.club_name);
				$("#carClubName").attr("href","carClub.html");
				$("#carClubDesc").html("简介:"+data.club_desc);
				$("#carClubCb").html("车系:"+data.club_cb+"&nbsp;"+data.club_cd);
				$("#carClubPro").html("地区:"+data.club_pro+"&nbsp;"+data.club_city);
				$("#carClubPnum").html("人数:"+data.club_pnum+"人");
				$.ajax({
					url:'../clubHomel.do',
					type:'GET',
					dataType:'json',
					async:false,
					data:"club_id="+club_id,
					success:function(data){
						$("#carClubGrade").html("油值:"+data+"L");
					}
				});
			}else{
				$("#addMsg").html("<a href='join.html'><span style='font-size:24px;text-align:center'>您还没有加入任何车友会，快去看看吧</span></a>");
			}
		}
	});
}

function quitCarClub(){
	$.getJSON("../clubHomeaa.do",{},function(data){
		if(data==1){
			alert("退出成功");
		}else{
			alert("退出失败，请重新尝试!");
		}
	});
}

function isPre(){
	$.getJSON("../clubHomeab.do",{},function(data){
		if(data==1){
			$("#quitCarClub").hide();
		}
	});
}

function isdenglu(){
	$.ajax({
		url:'../clubHomeac.do',
		type:'GET',
		dataType:'json',
		async:false,
		success:function(data){
			if(data==0){
				flag=0;
			}else{
				flag=1;
			}
		}
	});
}

