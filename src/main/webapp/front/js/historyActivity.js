var club_id=0;
var u_id=0;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		showHistoryActivity(club_id,1);
	}
});


function showHistoryActivity(club_id,page){
	var content="";
	$.getJSON("../clubHomeh.do",{"club_id":club_id,"page":page},function(data){
		for(var i=0;i<data.length;i++){
			if(data[i].act_stoptime>dateFormat(new Date())){
				content+="<div class='a01' >" +
						"<div class='biaoti'>"+
                	"<h1>"+data[i].act_name+"</h1>"+
				data[i].act_content+
                "</div>"+
                "<div class='content'>"+
               	 "<div class='m'>"+
                    "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"+
                      "<tr>"+
                        "<td><a href='carClubActivityDetail.html'><img src='images/act_jinxingzhong.jpg' width='166' height='40' /></a></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td height='5'></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td align='center' class='baomi'>地点："+data[i].act_pro+"&nbsp;"+data[i].act_city+"</td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td height='5'></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td align='center' class='baomi'>活动时间："+data[i].act_starttime+"至"+data[i].act_stoptime+"</td>"+
                      "</tr>"+
                       "<tr>"+
                        "<td height='5'></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td align='center' class='baomi'>报名截止时间："+data[i].act_applitime+"</td>"+
                      "</tr>"+
                     "<tr>"+
                        "<td height='5'></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td align='center' class='baomi'>报名人数：40人</td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td height='5'></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td align='center' class='shuzi'>¥"+data[i].act_money+" </td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td>&nbsp;</td>"+
                      "</tr>"+
                    "</table>"+
                    "</div>"+
                    "<div class='n'><img src=../"+data[i].act_img+" width='472' height='179' /></div>"+
              "</div>"+
              "</div>";
			}else{
				content+="<div class='a01'>"+
					"<div class='biaoti'>"+
            	"<h1>"+data[i].act_name+"</h1>"+
			data[i].act_content+
            "</div>"+
            "<div class='content'>"+
           	 "<div class='m'>"+
                "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"+
                  "<tr>"+
                    "<td><a href='carClubActivityDetail.html'><img src='images/act_jiesu.jpg' width='166' height='40' /></a></td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td height='5'></td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td align='center' class='baomi'>地点："+data[i].act_pro+"&nbsp;"+data[i].act_city+"</td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td height='5'></td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td align='center' class='baomi'>活动时间："+data[i].act_starttime+"至"+data[i].act_stoptime+"</td>"+
                  "</tr>"+
                   "<tr>"+
                    "<td height='5'></td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td align='center' class='baomi'>报名截止时间："+data[i].act_applitime+"</td>"+
                  "</tr>"+
                 "<tr>"+
                    "<td height='5'></td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td align='center' class='baomi'>报名人数：40人</td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td height='5'></td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td align='center' class='shuzi'>¥"+data[i].act_money+" </td>"+
                  "</tr>"+
                  "<tr>"+
                    "<td>&nbsp;</td>"+
                  "</tr>"+
                "</table>"+
                "</div>"+
                "<div class='n'><img src=../"+data[i].act_img+" width='472' height='179' /></div>"+
                "<a href='javascript:deleteActivity("+data[i].act_id+")'>删除</a>"+
          "</div>"+
          "</div>";
			}
		}
		$("#historyActivity").html(content);
		selectActivityPage(club_id,page);
	});
}

function deleteActivity(act_id){
	$.getJSON("../clubAdminn.do",{"act_id":act_id},function(data){
		showHistoryActiity(club_id,1);
	});
}

function pageUpAndDown(club_id,page,allPage){
	if(page<=0){
		alert("没有上一页了");
	}else if(page>allPage){
		alert("没有下一页了")
	}else{
		showHistoryActivity(club_id,page);
		selectActivityPage(club_id,page);
	}
}

function selectActivityPage(club_id,page){
	var content="";
	$.getJSON("../clubHomei.do",{"club_id":club_id},function(data){
			content+="<div class='digg'><a href='javascript:pageUpAndDown("+club_id+","+(page-1)+","+data+")'>&lt;</a>";
			for(var i=0;i<data;i++){
				content+="<a href=javascript:showHistoryActivity("+1+","+(i+1)+")>"+(i+1)+"</a>";
			}
			content+="<a href='javascript:pageUpAndDown("+club_id+","+(page+1)+","+data+")'>&gt;</a></div>";
		$("#activityPage").html(content);
		//$("#noticePage1").html(content);
	});
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