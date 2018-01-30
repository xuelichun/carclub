var club_id=0;
var u_id=0;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		clubReShow();
		$("#club_id").val(club_id);
	}
});

$(document).ready(function() { 
    // bind 'myForm' and provide a simple callback function 
    $('#modifyClubForm').ajaxForm(function(data) { 
    	alert("修改成功");
    	clubReShow();
    	//location.href="uploadClubAlbum.html";
    });    
}); 

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


function clubReShow(){
	$.getJSON("../clubHomes.do",{"club_id":club_id},function(data){
		$("#club_name").val(data.club_name);
		$("#club_desc").val(data.club_desc);
		$("#clubImgReShow").attr("src","../"+data.club_img);
	});
}
