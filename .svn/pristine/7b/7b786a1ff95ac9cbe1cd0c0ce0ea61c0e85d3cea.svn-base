var club_id=0;
var yearFeeFlag=1;
var mattime="";
$(function(){
	yanzhenPre();
	if(club_id!=0){
		yearFeeIsOutOfDate();
		if(yearFeeFlag==1){
			showYearFee();
			showAllFunc();
		}else{
			var content10="";
			content10+="<ul><li>"+
			"<table border='0'>"+
		        "<tr>"+
		        	"<td width='300px'><span style='text-align: center;'>您目前没有开通年费服务</span></td>"+
		        	"<td width='300px'><a href='javascript:kaiTongYearFee()'>开通</a></td>"+
		        "</tr>"+
		 	"</table>" +
		  "</li></ul>";
			$("#yearFeeShow").html(content10);
			someFunction();
		}
	}
});

function showYearFee(){
	var content="<ul>";
	$.ajax({
		url:'../clubAdminaj.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			mattime=data.af_mattime;
			content+="<li>"+
			"<table border='0'>"+
		        "<tr>"+
		        	"<td width='300px'><span style='text-align: center;'>年费到期日期:"+data.af_mattime+"</span></td>"+
		        	"<td width='300px'><a href='javascript:kaiTongYearFee()'>续费</a></td>"+
		        "</tr>"+
		 	"</table>" +
		  "</li></ul>";
			$("#yearFeeShow").html(content);
		}
	});
}

function showAllFunc(){
	var content="<ul>";
	$.getJSON("../clubAdminak.do",{"club_id":club_id},function(data){
		for(var i=0;i<data.length;i++){
			//content+="<li><div class='layout recListLeft f14'><div class='recDes'><div class='vm bold c999'><span class='c4095ce'>"+data[i].fun_name+"</span><span style='float:right'>"+mattime+"</span></div></div></div></li>";
			content+="<li>" +
			"<div class='layout recListLeft f14'>" +
				"<div class='recDes'>" +
					"<div class='vm bold c999'>" +
						"<table>"+
							"<tr>"+
								"<td width='400px;'><span class='c4095ce'></span>"+data[i].fun_name+"</td>" +
								"<td width='400px'><span style='float:right' >"+mattime+"</span></td>" +
							"</tr>"+
						"</table>"+
					"</div>" +
				"</div>" +
			"</div>" +
		"</li>";
		}
		content+="</ul>";
		$("#yearFeeFunction").html(content);
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
			yearFeeFlag=data;
		}
	});
	/*$.getJSON("../clubAdminal.do",{"club_id":club_id},function(data){
		yearFeeFlag=data;
	});*/
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
		//alert("/"+club_id);
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

function someFunction(){
	var fun_idArray=new Array();
	var content="<ul>";
	$.ajax({
		url:'../clubAdminam.do.do',
		type:'GET',
		dataType:'json',
		async:false,
		data:"club_id="+club_id,
		success:function(data){
			for(var i=0;i<data.length;i++){
				fun_idArray[i]=data[i].fun_id;
				content+="<li>" +
							"<div class='layout recListLeft f14'>" +
								"<div class='recDes'>" +
									"<div class='vm bold c999'>" +
										"<table>"+
											"<tr>"+
												"<td width='400px;'><span class='c4095ce' id='fun_name"+i+"'></span></td>" +
												"<td width='400px'><span style='float:right' >"+data[i].fc_mattime+"</span></td>" +
											"</tr>"+
										"</table>"
									"</div>" +
								"</div>" +
							"</div>" +
						"</li>";
			}
			content+="</ul>";
			$("#yearFeeFunction").html(content);
			$.ajax({
				url:'../clubAdminan.do',
				type:'GET',
				dataType:'json',
				async:false,
				data:"fun_id="+fun_idArray,
				success:function(data){
					for(var j=0;j<data.length;j++){
						$("#fun_name"+j).html(data[j].fun_name);
					}
				}
			});
		}
	});
}

function kaiTongYearFee(){
	$.getJSON("../clubAdminap.do",{"u_id":u_id},function(data){
		if(data==1){
			alert("开通成功");
		}else{
			alert("开通失败");
		}
	});
}