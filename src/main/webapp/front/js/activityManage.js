var club_id=0;
var u_id=0;
$(function(){
	yanzhenPre();
	if(club_id!=0){
		$("#club_id1").attr("value",club_id);
		inittime();
		addressReshow(club_id);
	}
});

$(document).ready(function() { 
    // bind 'myForm' and provide a simple callback function 
    $('#clubActivityForm').ajaxForm(function(data) { 
    	alert("发布成功!");
    	$("#act_name").val("");
    	$("#act_content").val("");
    	$("#act_money").val("");
    	$("#act_dis").val("");
    	$("#act_img").val("");
    	//location.href="uploadClubAlbum.html";
    });    
}); 


function getNextDay(){
	 var   today=new   Date();      
     var   yesterday_milliseconds=today.getTime()+1000*60*60*24;    
     var   yesterday=new   Date( yesterday_milliseconds); 
     return yesterday;
}

function dateFormat(time){
	var myYear = time.getFullYear();
	var myMonth = time.getMonth()+1;
	var myDay = time.getDate();
	var myHour=time.getHours();
	var myMinute=time.getMinutes();
	var mySecond=time.getSeconds();
	if(myMonth < 10){
		myMonth = "0" + myMonth;
	}
	if(myDay<10){
		myDay="0"+myDay;
	}
	if(myHour<10){
		myHour="0"+myHour;
	}
	if(myMinute<10){
		myMinute="0" + myMinute;;
	}
	if(mySecond<10){
		mySecond="0"+mySecond;
	}
	return myYear + "-" + myMonth + "-" + myDay+" "+myHour+":"+myMinute+":"+mySecond
}

function inittime(){
	$('#Calendar').val(dateFormat(new Date()));
	$('#Calendar1').val(dateFormat(new Date()));
	$('#Calendar2').val(dateFormat(getNextDay()));
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

function testActMoney(){
	var act_money=$("#act_money").val();
	var act_money_ck=/^[0-9]*$/;
	if(!act_money_ck.test(act_money)||act_money==""){
		$("#testActMoneyMsg").html("格式不正确");
	}else{
		$("#testActMoneyMsg").html("");
	}
}

function testActDis(){
	var act_dis=$("#act_dis").val();
	var act_dis_ck=/^0\.[1-9]\d*$/;
	if(!act_dis_ck.test(act_dis)){
		$("#testActDisMsg").html("折扣须在0~1之间");
	}else{
		$("#testActDisMsg").html("");
	}
}

function testActName(){
	var act_name=$("#act_name").val();
	if(act_name.length>0&&act_name.length<=30){
		$("#testActNameMsg").html("");
	}else{
		$("#testActNameMsg").html("标题须1~30个字符");
	}
}

function testActContent(){
	var act_desc=$("#act_content").val();
	if(act_desc.length>0&&act_desc.length<=100){
		$("#testActContentMsg").html("");
	}else{
		$("#testActContentMsg").html("内容须1~100个字符");
	}
}


function addressReshow(club_id){
	$.getJSON("../clubHomes.do",{"club_id":club_id},function(data){
		$("#act_pro").val(data.club_pro);
		var objC = document.getElementById("act_city");
		var pValue = document.getElementById("act_pro").value;
		for ( var i = objC.length - 1; i > 0; i--) {
			objC.remove(i);
		}
		var j=jQuery.inArray(pValue,pName);
		if (j >= 0) {
			for ( var i = 0; i < cName[j].length; i++) {
				var op = new Option(cName[j][i], cName[j][i]);
				objC.add(op);
			}
		}
		$("#act_city").val(data.club_city);
	});
}


function btnsubmit(){
	$("#yanzhenMsg").html("");
	var act_name=$("#act_name").val();
	var act_content=$("#act_content").val();
	var act_money=$("#act_money").val();
	var act_dis=$("#act_dis").val();
	var act_img=$("#act_img").val();
	var act_applitime=$("#Calendar").val();
	var act_starttime=$("#Calendar1").val();
	var act_stoptime=$("#Calendar2").val();
	var act_pro=$("#act_pro").val();
	var act_city=$("#act_city").val();
	if($("#testActNameMsg").html()!="标题须1~30个字符"){
		if($("#testActContentMsg").html()!="内容须1~100个字符"){
			if(act_img!=null){
				if(act_pro!=-1&&act_city!=-1){
					if(act_applitime!=""&&act_starttime!=""&&act_stoptime!=""){
						if($("#testActMoneyMsg").html()!="格式不正确"){
							if($("#testActDisMsg").html()!="折扣须在0~1之间"){
								if(act_name==""||act_content==""||act_money==""||act_dis==""){
									if(act_name==""){
										$("#yanzhenMsg").html("标题不能为空");
										return false;
									}else if(act_content==""){
										$("#yanzhenMsg").html("内容不能为空");
										return false;
									}else if(act_money==""){
										$("#yanzhenMsg").html("个人消费不能为空");
										return false;
									}else{
										$("#yanzhenMsg").html("活动折扣不能为空");
										return false;
									}
								}else{
									return true;
								}
							}else{
								return false;
							}
						}else{
							return false;
						}
					}else{return false;
					
					}
				}else{
					return false;
				}
			}else{
				return false;
			}
		}else{
			return false;
		}
	}else{
		return false;
	}  
}







