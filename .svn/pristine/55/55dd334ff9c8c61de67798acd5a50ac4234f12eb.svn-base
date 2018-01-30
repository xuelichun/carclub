var club_id=0;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		showClubFee(club_id);
		showPayCon(club_id,1);
		showPayConPage(club_id,1);
	}
});



function showClubFee(club_id){
	$.getJSON("../clubAdminh.do",{"club_id":club_id},function(data){
		var content="<span class='clubfeetixian'>账户余额:&nbsp;"+data.cf_money+"&nbsp;&nbsp;元</span><br/>"+
	        "<span class='clubfeetixian'>账户积分:&nbsp;"+data.cf_grade+"&nbsp;&nbsp;L</span><br/>"+
	        "<a href='clubTiXian.html' class='clubfeetixian'>提现</a>";
		$("#clubFeeAccount").html(content);
	});
}


function showPayCon(club_id,page){
	var content="<ul>";
	var pc_mattime=dateFormat(new Date());
	var uIdArray=new Array();
	$.ajax({
		url:'../clubAdminw.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id+"&pc_mattime="+pc_mattime+"&page="+page,
		success:function(data){
			for(var i=0;i<data.length;i++){
				uIdArray[i]=data[i].u_id;
				content+="<li>" +
							"<div class='layout recListLeft f14'>" +
								"<div class='recDes'>" +
									"<div class='vm bold c999'>" +
										"<table border='0'>" +
											"<tr>" +
												"<td width='180px'>"+data[i].pc_paytime.substring(0,10)+"</td>" +
												"<td rowspan='2' width='100px' id='payConUHead"+i+"'></td>" +
												"<td rowspan='2' width='100px' id='payConUNick"+i+"'>1</td>"+
												"<td rowspan='2' width='100px'>"+data[i].pc_money+"元</td>"+
												"<td rowspan='2' width='100px'>"+data[i].pc_grade+"L</td>"+
												"<td rowspan='2' width='200px'>"+data[i].pc_mattime+"</td>" +
											"</tr>" +
											"<tr>" +
												"<td>"+data[i].pc_paytime.substring(11,19)+"</td>" +
											"</tr>" +
										"</table>"+
									"</div>" +
								"</div>" +
							"</div>" +
						"</li>";
			}
			content+="</ul>";
			$("#payCon").html(content);
			$.ajax({
				url:'../clubHomed.do',
				type:'GET',
				dataType:'json',
				async:false,
				data:"u_id="+uIdArray,
				success:function(data){
					for(var j=0;j<data.length;j++){
						$("#payConUHead"+j).html("<a href='#'><img alt='' src=../"+data[j].u_head+" width='40px' height='40px' style='vertical-align:middle' /></a>");
						$("#payConUNick"+j).html(data[j].u_nick);
					}
				}
			});
		}
	});
}

function showPayConPage(club_id,page){
	var content="";
	var pc_mattime=dateFormat(new Date());
	$.getJSON("../clubAdminx.do",{"club_id":club_id,"pc_mattime":pc_mattime},function(data){
		content+="<div class='digg'><a href='javascript:pageUpAndDown("+club_id+","+(page-1)+","+data+")'>&lt;</a>";
		for(var i=0;i<data;i++){
			content+="<a href=javascript:showPayCon("+1+","+(i+1)+")>"+(i+1)+"</a>";
		}
		content+="<a href='javascript:pageUpAndDown("+club_id+","+(page+1)+","+data+")'>&gt;</a></div>";
		$("#payConPage").html(content);
	});
}

function pageUpAndDown(club_id,page,allPage){
	if(page<=0){
		alert("没有上一页了");
	}else if(page>allPage){
		alert("没有下一页了")
	}else{
		showPayCon(club_id,page);
		showPayConPage(club_id,page);
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
