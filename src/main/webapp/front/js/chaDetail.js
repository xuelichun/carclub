var ce_id=-1;
$(function(){
	var url=decodeURI(window.location.search);
	var b=url.split("&");
	var c=b[0].split("=")
	ce_id=c[1];
	selectAllAn(1);
	showCarClubActivityDetail(ce_id);
});

function selectAllAn(pageIndex){

	$.getJSON("../chaEvent/showChaIndex.do",{"pageIndex":pageIndex},function(data){
		var txt="";
		for(var i=0;i<data.length;i++){
			txt+="<div class='content001'><div><a href='#' title="+data[i].ce_name+"><img src=../"+data[i].ce_img+" width='230px;' height='150' /></a></div></div>";
		}
		$("#pic").html(txt);
	});
}

function showCarClubActivityDetail(ce_id){
	$.getJSON("../chaEvent/chatEventd.do",{"ce_id":ce_id},function(data){
		var content="<div class='biaoti'>"+
		"<h1>"+data.ce_name+"</h1>"+
	"</div>"+
	"<div class='content'>"+
"<div class='m'>"+
    "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"+
     "<tr>"+
        "<td><a href='javascript:haha();'><img src='images/img_22.jpg' width='206' height='61' /></a></td>"+
      "</tr>"+
      "<tr>"+
        "<td height='20'></td>"+
      "</tr>"+
      "<tr>"+
        "<td align='center' class='baomi'>活动地点："+data.ce_place+"</td>"+
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
    "<div class='n'><img src=../"+data.ce_img+" width='458' height='279' /></div>"+
    "</div>";
		$("#clubActivities").html(content);
		content="<span style='font-size:20px'>活动时间："+data.ce_startime+"--"+data.ce_endtime+"</span><br/>" +
				"<span style='font-size:20px'>活动详情："+data.ce_content+"</span>";
		$("#activityIntroduction").html(content);
	});
}


function haha(){
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