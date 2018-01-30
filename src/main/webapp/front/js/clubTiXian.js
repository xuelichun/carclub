var club_id=0;
var er_money_temp=0;
var er_grade_temp=0;
$(function(){
	yanzhenPre();
	/*var strHref=this.location.href;
	club_id=strHref.getQuery("club_id");*/
	ecashRecordReShow(club_id);	
	//setUrl(club_id);
});


function expressEcashRecord(){
	var er_money=$("#er_money").val();
	var er_grade=$("#er_grade").val();
	var er_money_ck=/^[0-9]*$/;
	var er_grade_ck=/^[0-9]*$/;
	if(!er_money_ck.test(er_money)){
		$("#msg").html(alert("金额应为整数"));
	}else if(!er_grade_ck.test(er_grade)){
		$("#msg").html(alert("积分应为整数"));
	}else if(er_money_temp<er_money){
		$("#msg").html(alert("金额大于原有积分"));
	}else if(er_grade_temp<er_grade){
		$("#msg").html(alert("积分大于原有积分"));
	}else{
		$.getJSON("../clubAdminr.do",{"er_money":er_money,"er_grade":er_grade,"club_id":club_id},function(data){
			if(data==1){
				$("#msg").html(alert("提现成功"));
			}else{
				$("#msg").html(alert("提现失败"));
			}
		});
	}
}


function ecashRecordReShow(club_id){
	$.getJSON("../clubAdminh.do",{"club_id":club_id},function(data){
		$("#er_money").val(data.cf_money);
		$("#er_grade").val(data.cf_grade);
		er_money_temp=data.cf_money;
		er_grade_temp=data.cf_grade;
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
				$(".setVicePreFunc").hide();
				$("#yearFeeLi").hide();
			}else{
				location.href="index.html";
			}
		}	
	});
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


