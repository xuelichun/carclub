$(function(){
	showCarClubActivityDetail(20);
	selectAllAn(1);
	
});
function showCarClubActivityDetail(dt_id){
	$.getJSON("../draTravel/draTravelb.do",{"dt_id":dt_id},function(data){
		var content="<div class='biaoti'>"+
		"<h1>"+data.dt_content+"</h1>"+
	"</div>"+
	"<div class='content'>"+
"<div class='m'>"+
    "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"+
     "<tr>"+
        "<td><a href='javascript:haha("+data.dt_id+")'><img src='images/img_22.jpg' width='206' height='61' /></a></td>"+
      "</tr>"+
      "<tr>"+
        "<td height='30'></td>"+
      "</tr>"+
      "<tr>"+
        "<td align='center' class='baomi'>活动地点："+data.dt_place+"</td>"+
      "</tr>"+
      "<tr>"+
        "<td height='20'></td>"+
      "</tr>"+
      "<tr>"+
        "<td align='center' class='shuzi'></td>"+
      "</tr>"+
      "<tr>"+
        "<td>&nbsp;</td>"+
     "</tr>"+
    "</table>"+
    "</div>"+
    "<div class='n'><img src=../"+data.dt_img+" width='458' height='279' /></div>"+
    "</div>";
		$("#act").html(content);
	});
}

function selectAllAn(pageIndex){
	$.getJSON("../chaEvent/showChaIndex.do",{"pageIndex":pageIndex},function(data){
		var content=""
		for(var i=0;i<data.length;i++){
			content+="<div class='biaoti'>"+
		"<h1>"+data[i].ce_content+"</h1>"+
	"</div>"+
	"<div class='content'>"+
"<div class='m'>"+
    "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"+
     "<tr>"+
        "<td><a href='javascript:jump("+data[i].ce_id+")'><img src='images/img_22.jpg' width='206' height='61' /></a></td>"+
      "</tr>"+
      "<tr>"+
        "<td height='30'></td>"+
      "</tr>"+
      "<tr>"+
        "<td align='center' class='baomi'>活动地点："+data[i].ce_place+"</td>"+
      "</tr>"+
      "<tr>"+
        "<td height='20'></td>"+
      "</tr>"+
      "<tr>"+
        "<td align='center' class='shuzi'></td>"+
      "</tr>"+
      "<tr>"+
        "<td>&nbsp;</td>"+
     "</tr>"+
    "</table>"+
    "</div>"+
    "<div class='n'><img src=../"+data[i].ce_img+" width='458' height='279' /></div>"+
    "</div>";
		}
		$("#actt").html(content);
		
	});
	
}


function jump(ce_id){
	$.getJSON("../user/islogin.do",{},function(data){
		if(data==null){
			alert("请先登录");
			location.href="./index.html";
		}else{
			var u_id=data.u_id;
			$.getJSON("../chaEvent/addTour2.do",{"u_id":u_id,"ce_id":ce_id},function(data){
				if(data.rs=='no'){
					alert("你已经报名，不能重复报名");
				}else if(data.rs=='ok'){
					alert("报名成功");
				}else{
					alert("报名");
				}
			});
		}
	});
}

function haha(ce_id){
	var id=$("#ce_id").val();
		var url="draDetail.html?ce_id="+ce_id;
		window.location.assign(encodeURI(url));
}
