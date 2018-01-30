$(function(){
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	selectAllCB()
	$("#submit1").click(function(){
		if(($("#clubname").html().trim()=="名称合法")&&($("#clubdomnam").html().trim()=="域名合法")){
			if($("#club_pro").val()==-1){
				$("#clubcity").html("请选择省份");
				$("#clubcity").prop("style","color:#f00;");
				return;
			}else{
				$("#clubcity").html("");
			}
			if($("#club_city").val()==-1){
				$("#clubcity").html("请选择城市");
				$("#clubcity").prop("style","color:#f00;");
				return;
			}else{
				$("#clubcity").html("");
			}
			if($("#cb").val()==-1){
				$("#clubseries").html("请选择车牌");
				$("#clubseries").prop("style","color:#f00;");
				return;
			}else{
				$("#clubseries").html("");
			}
			if($("#cd").val()==-1){
				$("#clubseries").html("请选择车系");
				$("#clubseries").prop("style","color:#f00;");
				return;
			}else{
				$("#clubseries").html("");
			}
			$("#createCarClubForm").submit();
		}
	});
	
	$("#createCarClubForm").form({
		success:function(data) {
			var rss = $.parseJSON(data);
			if(rss.result=='ok'){
				location.href="./createCarClub2.html";
				$("#club_name").val("");
				$("#club_domnam").val("");
				$("#clubname").html("");
				$("#clubdomnam").html("");
			}
		}
	});
});
function selectBefore(){
	$.getJSON("../user/islogin.do",{},function(data){
		if(data!=null){
			$.getJSON("../user/isCreateClub.do",{"u_id":data.u_id},function(data){
				if(data==1){
					location.href="createCarClub.html";
				}else if(data==2){
					location.href="createCarClub4.html";
				}
			});
		}else{
			alert("请先登录");
		}
	});
}

function checkName11(){
	var club_name=$("#club_name").val();
	var reg=/^([A-Za-z0-9]|[\u4e00-\u9fa5]){5,15}$/;
	if(reg.test(club_name)){
		$.getJSON("../club/unameIsExit.do",{"club_name":club_name},function(data){
			if(data.result=="uIsE"){
				$("#clubname").prop("style","color:#f00;");
				$("#clubname").html("该名称已被注册");
				return false;
			}else{
				$("#clubname").prop("style","color:#0f0;");
				$("#clubname").html("名称合法");
				return true;
			}
		});
	}else{
		$("#clubname").prop("style","color:#f00;");
		$("#clubname").html("请填5-15位的数字、字母、汉字");
		return false;
	}
}

function checkDomnam(){
	var club_domnam=$("#club_domnam").val();
	var reg=/^[A-Za-z0-9]{3,10}$/;
	if(reg.test(club_domnam)){
		$.getJSON("../club/domnamIsExit.do",{"club_domnam":club_domnam},function(data){
			if(data.result=="dIsE"){
				$("#clubdomnam").prop("style","color:#f00;");
				$("#clubdomnam").html("该域名已被注册");
				return false;
			}else{
				$("#clubdomnam").prop("style","color:#0f0;");
				$("#clubdomnam").html("域名合法");
				return true;
				
			}
		});
	}else{
		$("#clubdomnam").prop("style","color:#f00;");
		$("#clubdomnam").html("请填3-10位的数字和字母");
		return false;
	}
}

/**
 * 页面加载时车的品牌下拉框会显事件 
 */
function selectAllCB(){
	var content="";
	content+="<option value='-1'>请选择</option>";
	$.getJSON("../backCar/selectAllCB.do",{},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<option value="+data[0][i].cb_name+
			">"+data[0][i].cb_name+"</option>";
		}
		content+="</select>";
		$("#cb").html(content);
	});
}
/**
 * 车的品牌下拉框内容改变事件
 */
function selectCD(){
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var content="<option value='-1'>请选择</option>";
	$.getJSON("../backCar/selectCDListByCB.do",{"carBrand":carBrand},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<option value="+data[0][i].cd_name+
			">"+data[0][i].cd_name+"</option>";
		}
		content+="</select>";
		$("#cd").html(content);
	});
}
