$(function (){
	getType();
	$("#next").click (function(){
		if($("#advertiserName").val()==''){
			$("#sname").prop("style","color:#ff0000;");
			$("#sname").html("广告商名不能为空");
			return;
		}if($("#advertiserAdress").val()==''){
			$("#sadress").prop("sytle","color:#ff0000;");
			$("#sadress").html("广告商地址不能为空");
			return;
		}if($("#myimg").val()==$("#file").val()){
			$("#aimg").html("请添加图片");
			return;
		}else{
			$("#aimg").html("");
		}
		$("#a1").submit();	
	});
	
	$('#a1').form({
		success:function(data){
			var rss = $.parseJSON(data);
			if (rss.rs=='ok') {
				$.messager.alert('提示信息','添加成功！');
				$("#advertiserName").val("");
				$("#advertiserAdress").val("");
				$("#sname").html();
				$("#sadress").html();
			}else{
				$.messager.alert('提示','添加失败！');
			}
		}
	});
//	advType();
	$("#end").click(function(){
//		if($("#at_name").val()==-1){
//			$("#satname").html("请选择广告类型");
//			$("#satname").prop("style","color:#f00;");
//			return;
//		}else{
//			$("#satname").html("");
//		}
		if($("#ad_price").val()==''){
			$("#sprice").html("广告费用不能为空");
			return;
		}if($("#ad_web").val()==''){
			$("#address").html("请输入广告网址");
			return;
		}if($("#img").val()==''){
			$("#simg").html("请添加图片");
			return;
		}else{
			$("#simg").html("");
		}
		$("#b1").submit();
	});
	
	$('#b1').form({
		success:function(data){	
			var rss1 = $.parseJSON(data);
			if (rss1.rs=='ok') {
				$.messager.alert('提示信息','添加成功！');
				$("at").val();
				$("ad").val();
//				$("#at_name").val("");
				$("#ad_price").val("");
				$("#ad_content").val("");
				$("#ad_web").val("");
				$("sat").html
				$("sad").html
//				$("#satname").html();
				$("#sprice").html();
				$("#scontent").html();
				$("#address").html();
			}else{
				$.messager.alert('提示','添加失败！');
			}
		}
	});
});

//function advType(){
//	var text="<select id='at_name' name='aaas' class='ui_select01' onchange='abc(this.value)'>";
//	text+="<option value='-1' selected='selected'>--请选择--</option>";
//	$.getJSON("../advertiser/selectAllType.do",{},function(data){
//		for(var i=0;i<data.length;i++){
//			text+="<option value="+data[i].at_id+">"+data[i].at_name+"</option>"
//		}
//		text+="</select>";
//		$("#advType").html(text);
//	});
//}


//function adv(){
//var text="<select id='adv_name' name='aaas' class='ui_select01' onchange='abc(this.value)'>";
//text+="<option value='-1' selected='selected'>--请选择--</option>";
//$.getJSON("../advertiser/selectAllType.do",{},function(data){
//	for(var i=0;i<data.length;i++){
//		text+="<option value="+data[i].at_id+">"+data[i].at_name+"</option>"
//	}
//	text+="</select>";
//	$("#advType").html(text);
//});
//}
function abc(valuse){
	 $.getJSON("../advertiser/showAdvType.do",{"at_id":valuse},function(data){
 });
}

function getType(){
	var s=$("#at_name").val();
}
function checkNick(){
	var adv_name=$("#advertiserName").val();
	if($("#advertiserName").val().trim()==''){
		$("#sname").html("广告商不能为空");
		$("#sname").prop("style","color:#ff0000;");
		return false;
	}else{
		$.getJSON("../advertiser/countAdvName.do",{"adv_name":adv_name},function(data){
			if(data.rs=="ok"){
				$("#sname").html("广告商名可用");
				$("#sname").prop("style","color:#0f0;");
				return true;
			}else{
				$("#sname").html("广告商名已被使用");
				$("#sname").prop("style","color:#ff0000;");
				return false;
			}
		});
		$("#sname").html("");
		return true;
	}
}
function checkAdr(){
	if($("#advertiserAdress").val().trim()==''){
		$("#sadress").html("广告商地址不能为空");
		$("#sadress").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#sadress").html("广告商网址可用");
		$("#sadress").prop("style","color:#0f0;");
		return true;
	}
}





function checkPrice(){
	if($("#ad_price").val().trim()==''){
		$("#sprice").html("广告费用不能为空");
		$("#sprice").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#sprice").html("");
		return true;
	}
}
function checkImg(){
	if($("#ad_web").val().trim()==''){
		$("#address").html("请输入广告网址");
		$("#address").prop("style","color:#ff0000;");
		return false;
	}else{
		$("#address").html("");
		return true;
	}
}
function checkContent(){
	var ad_content=$("#ad_content").val();
	if(ad_content.length>50&&ad_content.lengh<1){
		alert(ad_content.length);
		$("#scontent").html("广告内容须1~50字");
		$("#scontent").prop("style","color:#ff0000;");
	}
}
//定义id选择器
function Id(id){
return document.getElementById(id);
}
function changeToop(){
	var file = Id("file");
	if(file.value==''){
		//设置默认图片
	Id("myimg").src='http://sandbox.runjs.cn/uploads/rs/72/huvtowwn/zanwu.png';
	}else{
		preImg("file","myimg");
	}
}
//获取input[file]图片的 url Important
function getFileUrl(fileId) {
	var url; 
	var file = Id(fileId);
	var agent = navigator.userAgent;
	if (agent.indexOf("MSIE")>=1) {
	url = file.value; 
	} else if(agent.indexOf("Firefox")>0) {
	url = window.URL.createObjectURL(file.files.item(0)); 
	} else if(agent.indexOf("Chrome")>0) {
	url = window.URL.createObjectURL(file.files.item(0)); 
	} 
	return url; 
} 
//读取图片后预览
function preImg(fileId,imgId) { 
var imgPre =Id(imgId);
imgPre.src = getFileUrl(fileId); 
}
