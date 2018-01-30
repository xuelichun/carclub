var now=1;
var count=0;
$(function (){
	$.getJSON("../user/islogin.do",{},function(data){
		if(data==null){
			alert("请先登录");
			location.href="./index.html";
		}else{
			showCar(1);
			countCar();
			$("#sss").html("第"+now+"页");
		}
	});
	
	//保存按钮事件
	//alert($("#u_id").val());
	$("#submit").click(function(){
		if($("#c_brand").val().trim()==''){
			$("#sp").html("品牌不能为空");
			return;
		}
		if($("#c_model").val().trim()==''){
			$("#sp").html("型号不能为空");
			return;
		}
		if($("#c_pic").val().trim()==''){
			$("#sp").html("请选择图片");
			return;
		}			
		$("#f1").submit();
	});
	//表单提交成功后		
	$('#f1').form({
		success:function(data) {
			var rss = $.parseJSON(data);
			if (rss.rs == 'ok') {
				$.messager.alert('提示信息','添加成功');
				$("#TB_overlayBG").css("display","none");
				$(".box ").css("display","none");
				showCar(1);
				countCar();
			}else{
				$.messager.alert('提示','添加失败！');
			}
		}
	}); 
	
});
function openCar(){
	$("#f1").show();
	$("#tabl").hide();
}
//function sonok(){
//	if($("#c_brand").val().trim()==''){
//		$("#sp").html("品牌不能为空");
//		return;
//	}
//	if($("#c_model").val().trim()==''){
//		$("#sp").html("型号不能为空");
//		return;
//	}
//	if($("#c_pic").val().trim()==''){
//		$("#sp").html("请选择图片");
//		return;
//	}			
//	$("#f1").submit();
//}
function showCar(pageIndex){
	$.getJSON("../usercar/showcar.do",{"pageIndex":pageIndex},function(data){
		var context="";		
		if(data.length==0){
			context="没有爱车";
			$("#div1").hide();
		}else{
			//alert(data.length);
		for(var i=0;i<data.length;i++){
			context+="<div class='r_name001'></div><div class='r_name007' style='height:170px;'><div class='r_name007_left' " +
			" style='height:170px; width:170px;'><div class='r_name007_left001' style='border:none;'>"+
			"<img src='../"+data[i].c_pic+"' width='130px' height='130px'/></div>" +
					"</div><div class='r_name007_right' style='height:170px;'>" +
					"<p style='font-size:15px;margin-top:30px;'>品牌:"+data[i].c_brand+"</p><p style='font-size:15px;'> 车系:"+data[i].c_model+"</p> " +
					"&nbsp;&nbsp;&nbsp;<a href='javascript:deletecar("+data[i].c_id+")'>删除</a> | " +
					"</div></div>";
		}
		$("#div1").show();
		}
		$("#div").html(context);
	});
}

function deletecar(c_id){
	//$.getJSON("../usercar/deletecar.do",{"c_id":c_id},function(data){
	$.ajax({
		type:'post',
		url:'../usercar/deletecar.do',
		data:'c_id='+c_id,
		async:false,
		success:function(data){
			countCar();
			var rss = $.parseJSON(data);
		if(rss.rs=='ok'){
			alert("删除成功");
			
			//alert(count);
			if(count==0){
				now=0;
				//alert(count);
				$("#div").html("没有爱车");	
			}else if(count>now){
				showCar(now);
			}else if(count<now){
				showCar(count);
				now=count;
				$("#sss").html("第"+now+"页");
			}else{
				showCar(count);
				$("#sss").html("第"+now+"页");
			}
		}else{
			alert("删除失败")
		}
		}
	});
}
function goback(){
	if(now==1){
		alert("没有上一页");
	}else{
		now=parseInt(now);
		now=now-1;
		showCar(now);
	}
	$("#sss").html("第"+now+"页");
}

function gofont(){
	if(now==count){
		alert("没有下一页");
	}else{
		now=parseInt(now);
		now=now+1;
		showCar(now);
	}
	$("#sss").html("第"+now+"页");
}
function countCar(){
	$.ajax({
		type:'post',
		url:'../usercar/countCar.do',
		async:false,
		success:function(data){
			var rss = $.parseJSON(data);
			count=rss.rs;
			//alert(count);
			$("#ss").html("总"+count+"页");
	}
	});
}