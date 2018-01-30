var ca_id=0;
var club_id=0;
var u_id=0;
var flag=2;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		$("#u_id2").val(u_id);
		var strHref=this.location.href;
		ca_id=strHref.getQuery("ca_id");
		selectClubAlbum();
		$("#club_id").attr("value",club_id);
		$("#ca_id2").val(ca_id);
	//	$("#ca_id").attr("value",ca_id);
	}
});
function selectClubAlbum(){
	var content="上传到：<select id='p' style='width: 150px' size='1' onchange='changeClubAlbum()'>";
/*	$.getJSON("../clubAlbumk.do",{"club_id":club_id},function(data){
		for(var i=0;i<data.length;i++){
			content+="<option value="+data[i].ca_id+">"+data[i].ca_name+"</option>";
			if(i==0){$("input[name=ca_id]").val(data[i].ca_id);}
		}
		content+="</select>";
		$("#clubAlbumOption").html(content);
		dacideClubAlbum();
	});*/
	$.ajax({
		url:'../clubAlbumk.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			for(var i=0;i<data.length;i++){
				content+="<option value="+data[i].ca_id+">"+data[i].ca_name+"</option>";
				if(i==0){$("input[name=ca_id]").val(data[i].ca_id);}
			}
			content+="</select>";
			$("#clubAlbumOption").html(content);
			dacideClubAlbum();
		}
	});
}

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

function addFileButton(){
	var content="<div style='float: left'><div id='preview"+flag+"' class='preview'></div>"+  
						"<input type='file' id='preview"+flag+"' name='pa_img' onchange='preview(this)' /> </div> ";
	flag++;
	/*var content=$("#clubPictures").html();
	content+="<input type='file' name='pa_img'/>";
	$("#clubPictures").html(content);*/
	$("#dysn").append(content);
}

$(document).ready(function() { 
    // bind 'myForm' and provide a simple callback function 
    $('#myForm').ajaxForm(function(data) { 
    	alert("成功:"+data[0]+";失败:"+data[1]);
    	//location.href="uploadClubAlbum.html";
    });    
}); 

function changeClubAlbum(){
	var ca_id=$("#p option:selected").val();
	$("input[name=ca_id]").val(ca_id);
}

function dacideClubAlbum(){
	if(ca_id!=0||ca_id!=null){
		$("#p").val(ca_id);
	}
}

function preview(file){  
	var prevDiv = document.getElementById(file.id);  
	if(file.files && file.files[0]){  
		var reader = new FileReader();  
		reader.onload = function(evt){  
			prevDiv.innerHTML = '<img src="' + evt.target.result + '" width="200px" height="200px" />';  
		}    
		reader.readAsDataURL(file.files[0]); 
		addFileButton();
	}else{  
		prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';  
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