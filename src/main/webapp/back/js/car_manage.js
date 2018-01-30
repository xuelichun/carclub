$(function(){
	var pageIndex=1;
	var selCB=$("#select3");
	var carBrand=$(selCB).find("option:selected").val();
	$("#selD1").hide();
	$("#selD2").hide();
	$("#selD3").show();
	selectAllCarDep(pageIndex,carBrand);
	selectAllCarBrand1();
});
/**
 * 页面加载时查询车系表
 * @param pageIndex
 * @param carBrand
 */
function selectAllCarDep(pageIndex,carBrand){
	//根据车的品牌查询车系列表
	if(carBrand!=-1){
		type2(pageIndex,carBrand);
	//默认无条件查询车系列表
	}else{
		type1(pageIndex);
	}
}
/**
 * 添加品牌超链接点击事件
 */
function insertCB(){
	$("#selD1").show();
	$("#selD2").hide();
	$("#selD3").hide();
}
/**
 * 查看车系列表超链接点击事件
 */
function selectCarList(){
	$("#selD1").hide();
	$("#selD2").hide();
	$("#selD3").show();
}
/**
 * 添加车系超链接点击事件
 */
function insertCD(){
	$("#selD1").hide();
	$("#selD2").show();
	$("#selD3").hide();
}
/**
 * 选择添加车的品牌数量内容改变事件
 */
function selectCBCount(){
	var cbN=$("#cbNum").val();
	var content="";
	if(cbN==1){
		content+="";
	}else{
		for(var i=0;i<cbN-1;i++){
			var content1="txt";
			content1+=(i+1);
			content+="<div class='font2' style='margin-left: 23px;'>汽车品牌" +(i+2)+
					"<input type='text' id="+content1+" name='fangyuanEntity.fyZldz'"+
					"class='ui_input_txt02' /></div>";
		}
	}
	$("#cbIndex").html(content);
}
/**
 * 确认添加车的品牌按钮点击事件
 */
function insertCarBrand(){
	var cbN=$("#cbNum").val();
	var arr = [];
	var text2="";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	for(var i=0;i<cbN;i++){
		var text="txt";
		text+=i;
		var text1=$("#"+text).val();
		if(text1==""||text1==null){
			text2="error";
		}
		arr.push(text1);
	}
	if(text2=="error"){
		var title="操作失败";
		var icon="face-sad";
		var id=9;
		var content="请将信息填写完整";
		opTips(icon,id,title,content,width,height,left,top);
	}else {
		$.ajax({  
	        type:'post',  
	        traditional :true,  
	        url:'../backCar/insertCB.do',  
	        data:"arr="+arr,  
	        success:function(data){ 
	        	if(data.length<=0){
	        		var id=11;
					var title="操作失败";
					var icon="face-sad";
					var content="添加失败，该品牌已被添加";
					opTips(icon,id,title,content,width,height,left,top);
				}else{
					var id=10;
	        		var title="操作成功";
	        		var icon="face-smile";
					var content="添加成功"+data[0]+"次，添加失败"+data[1]+"次";
					opTips(icon,id,title,content,width,height,left,top);
				}
	        }  
	    });
	}
}
/**
 * 选择车系数量下拉框内容改变事件
 */
function selectCDCount(){
	var cbC=$("#select2").val();
	var content="";
	if(cbC==1){
		content+="";
	}else{
		for(var i=0;i<cbC-1;i++){
			var content1="txtC";
			content1+=(i+1);
			content+="<div class='font2' style='margin-left: 23px;'>车系" +(i+2)+
					"<input type='text' id="+content1+" name='fangyuanEntity.fyZldz'"+
					"class='ui_input_txt02' /></div>";
		}
	}
	$("#cdIndex").html(content);
}
/**
 * 确认添加车系按钮点击事件
 */
function insertCarDep(){
	var cbC=$("#select2").val();
	var selPro=$("#select1");
	var cb_id=$(selPro).find("option:selected").val();
	var arr = [];
	var text2="";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	for(var i=0;i<cbC;i++){
		text2="";
		var text="txtC";
		text+=i;
		var text1=$("#"+text).val();
		if(text1==""||text1==null){
			text2+="error";
		}
		arr.push(text1);
	}
	if(cb_id==-1){
		var title="操作失败";
		var icon="face-sad";
		var id=12;
		var content="请先选择车的品牌";
		opTips(icon,id,title,content,width,height,left,top);
	}else if(text2=="error"){
		var title="操作失败";
		var icon="face-sad";
		var id=6;
		var content="请将信息填写完整";
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		$.ajax({  
	        type:'post',  
	        traditional :true,  
	        url:'../backCar/insertCD.do',  
	        data:"arr="+arr+"&cb_id="+cb_id,  
	        success:function(data){  
	        	if(data.length<=0){
	        		var id=8;
					var title="操作失败";
					var icon="face-sad";
					var content="添加失败，该品牌下的车系已被添加";
					opTips(icon,id,title,content,width,height,left,top);
				}else{
					var id=7;
	        		var title="操作成功";
	        		var icon="face-smile";
					var content="添加成功";
					opTips(icon,id,title,content,width,height,left,top);
				}
	        }  
	    });
	}
}
/**
 * 首页按钮点击事件
 */
function selectFirstCD(){
	var selCB=$("#select3");
	var carBrand=$(selCB).find("option:selected").val();
	selectAllCarDep(1,carBrand);
}
/**
 * 上一页按钮点击事件
 */
function selectLastCD(){
	var selCB=$("#select3");
	var carBrand=$(selCB).find("option:selected").val();
	var currentPage=parseInt($("#currentPage").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(currentPage-1<=0){
		var content="没有上一页了";
		var id=5;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		selectAllCarDep(currentPage-1,carBrand);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextCD(){
	var selCB=$("#select3");
	var carBrand=$(selCB).find("option:selected").val();
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var pageIndex=0;
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(currentPage-endPage>=0){
		var content="没有下一页了";
		var id=4;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		pageIndex=currentPage+1;
		$("#currentPage").html(pageIndex);
		selectAllCarDep(pageIndex,carBrand);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndCD(){
	var selCB=$("#select3");
	var carBrand=$(selCB).find("option:selected").val();
	var endPage=parseInt($("#endPage").html());
	selectAllCarDep(endPage,carBrand);
}
/**
 * 跳转至指定页面按钮点击事件
 */
function selectIndexCD(){
	var selCB=$("#select3");
	var carBrand=$(selCB).find("option:selected").val();
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(pageIndex==""||pageIndex==null){
		var content="页数索引不能为空";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex<=0){
		var content="页数索引无效";
		var id=2;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex-endPage>0){
		var content="页数索引超出范围";
		var id=3;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		selectAllCarDep(pageIndex,carBrand);
	}
}
/**
 * 操作结果提示对话框
 */
function opTips(icon,id,title,content,width,height,left,top){
	var list = art.dialog.list;
	for (var i in list) {
	    list[i].close();
	};
	art.dialog({
	icon:icon,
	id:id,
	title:title,
	content:content,
	width:width,
	height:height,
	left:left,
	top:top,
	fixed: true,
	drag: false,
	resize: false,
	ok: function () {
	    return true;
	}
	});
}
/**
 * 选择车的品牌下拉框内容改变事件
 */
function selectCDByCB2(){
	var pageIndex=1;
	var selCB=$("#select3");
	var carBrand=$(selCB).find("option:selected").val();
	selectAllCarDep(pageIndex,carBrand);
}
/**
 * 默认无条件查询车系列表
 * @param pageIndex 页数索引
 */
function type1(pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车系编号</th>"+
	"<th>车系名</th>"+
	"<th>品牌编号</th></tr>";
	$.getJSON("../backCar/selectAllCD.do",{"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].cd_id+
			"</td><td>"+data[0][i].cd_name+
			"</td><td>"+data[0][i].cb_id+
			"</td></tr>";
		}
		$("#countRecord").html(data[1][1]);
		$("#currentPage").html(pageIndex);
		$("#endPage").html(data[1][3]);
		content1+="</table>";
		$("#ui_tb").html(content1);
	});
}
/**
 * 车的品牌下拉框会显事件
 */
function selectAllCarBrand1(){
	var content="";
	content+="<option value='-1'>请选择</option>";
	$.getJSON("../backCar/selectAllCB.do",{},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<option value="+data[0][i].cb_id+
			">"+data[0][i].cb_name+"</option>";
		}
		content+="</select>";
		$("#select1").html(content);
		$("#select3").html(content);
	});
}
/**
 * 根据车的品牌查询车系列表
 * @param pageIndex 页数索引
 * @param carBrand 车的品牌
 */
function type2(pageIndex,carBrand){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车系编号</th>"+
	"<th>车系名</th>"+
	"<th>品牌编号</th></tr>";
	$.getJSON("../backCar/selectCDByCB.do",{"carBrand":carBrand,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].cd_id+
			"</td><td>"+data[0][i].cd_name+
			"</td><td>"+data[0][i].cb_id+
			"</td></tr>";
		}
		$("#countRecord").html(data[1][1]);
		$("#currentPage").html(pageIndex);
		$("#endPage").html(data[1][3]);
		content1+="</table>";
		$("#ui_tb").html(content1);
	});
}
/**
 * 表格单行鼠标移入事件触发，背景色改变
 * @param v tr的id
 */
function  aa(v){
	$("#"+v).css("background-color","#CDDAEB");
}
/**
 * 表格单行鼠标移入事件触发，背景色改变
 * @param p tr的id
 */
function bb(p){
	$("#"+p).css("background-color","#ffffff");
}





















