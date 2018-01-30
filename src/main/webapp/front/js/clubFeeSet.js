var club_id=0;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		selectMemFee(club_id);	
	}
});


function expressMemFee(){
	var mf_money=$("#mf_money").val();
	var mf_grade=$("#mf_grade").val();
	var mf_money_ck=/^[0-9]*$/;
	var mf_grade_ck=/^0\.[1-9]\d*$/;
	if(!mf_money_ck.test(mf_money)){
		$("#msg").html(alert("会费应为整数"));
	}else if(!mf_grade_ck.test(mf_grade)){
		$("#msg").html(alert("折扣须在0~1之间"));
	}else{
		$.getJSON("../clubAdmint.do",{"mf_money":mf_money,"mf_grade":mf_grade,"club_id":club_id},function(data){
			if(data==1){
				$("#msg").html(alert("设置成功"));
			}else{
				$("#msg").html(alert("设置失败"));
			}
		});
	}
}

function selectMemFee(club_id){
	$.getJSON("../clubAdminu.do",{"club_id":club_id},function(data){
		$("#mf_money").val(data.mf_money);
		$("#mf_grade").val(data.mf_grade);
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


