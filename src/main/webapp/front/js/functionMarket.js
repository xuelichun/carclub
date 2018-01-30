var club_id=0;
var fun_idArray=new Array();
$(function(){
	yanzhenPre();
	if(club_id!=0){
		showAllFunc();
		yearFeeIsOutOfDate();
		yincangfun();
	}
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


function showAllFunc(){
	var content="<ul>";
	$.ajax({
		url:'../clubAdminak.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			for(var i=0;i<data.length;i++){
				fun_idArray[i]=data[i].fun_id;
				//content+="<li><div class='layout recListLeft f14'><div class='recDes'><div class='vm bold c999'><span class='c4095ce'>"+data[i].fun_name+"</span><span style='float:right'>"+mattime+"</span></div></div></div></li>";
				content+="<li>" +
				"<div class='layout recListLeft f14'>" +
					"<div class='recDes'>" +
						"<div class='vm bold c999'>" +
							"<table>"+
								"<tr>"+
									"<td width='400px;'><span class='c4095ce'></span>"+data[i].fun_name+"</td>" +
									"<td width='400px' ><span style='float:right' ><a href='javascript:kaitong("+data[i].fun_id+")' id='kaitong"+i+"'>开通</a></span></td>" +
								"</tr>"+
							"</table>"+
						"</div>" +
					"</div>" +
				"</div>" +
			"</li>";
			}
			content+="</ul>";
			$("#functionMarket").html(content);
		}
	});
}

function kaitong(fun_id){
	$.getJSON("../clubAdminao.do",{"fun_id":fun_id,"club_id":club_id},function(data){
		if(data==1){
			alert("开通成功");
		}
	});
}

function yearFeeIsOutOfDate(){
	$.ajax({
		url:'../clubAdminal.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			if(data==1){
				for(var i=0;i<fun_idArray.length;i++){
					$("#kaitong"+i).hide();
				}
			}
		}
	});
}

function yincangfun(){
	$.ajax({
		url:'../clubAdminam.do.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			for(var i=0;i<data.length;i++){
				$("#kaitong"+i).hide();
			}
		}
	});
}