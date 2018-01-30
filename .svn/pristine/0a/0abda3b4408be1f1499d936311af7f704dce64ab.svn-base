$(function (){
	var pageIndex=1;
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
	selectAllAT();
	selectAllAd();
	selectAllAdv(pageIndex,advType,advser,adv_id);
});
/**
 * 页面加载时默认查询广告列表
 * @param pageIndex 页数索引
 * @param advType 广告类型
 * @param advser 广告商
 * @param adv_id 广告编号
 */
function selectAllAdv(pageIndex,advType,advser,adv_id){
	//根据广告编号查询广告列表
	if(adv_id!=""&&adv_id!=null){
		type4(pageIndex,adv_id);
	}else{
		if(advType!=-1){
			//根据广告类型和广告商查询广告列表
			if(advser!=-1){
				type5(pageIndex,advType,advser);
			//根据广告类型查询广告列表
			}else{
				type2(pageIndex,advType);
			}
		}else{
			//根据广告商查询广告列表
			if(advser!=-1){
				type3(pageIndex,advser);
			//默认无条件查询广告列表
			}else{
				type1(pageIndex);
			}
		}
	}
}
/**
 * 页面加载时广告类型下拉框的回显 
 */
function selectAllAT(){
	var content="";
	content+="<option value='-1'>请选择</option>";
	$.getJSON("../backAdv/selectAllAT.do",{},function(data){
		for(var i=0;i<data.length;i++){
			content+="<option value="+data[i].at_name+
			">"+data[i].at_name+"</option>";
		}
		content+="</select>";
		$("#advType").html(content);
	});
}
/**
 * 页面加载时广告商下拉框的回显
 */
function selectAllAd(){
	var content="";
	content+="<option value='-1'>请选择</option>";
	$.getJSON("../backAdv/selectAllAD.do",{},function(data){
		for(var i=0;i<data.length;i++){
			content+="<option value="+data[i].adv_name+
			">"+data[i].adv_name+"</option>";
		}
		content+="</select>";
		$("#advser").html(content);
	});
}
/**
 * 首页按钮点击事件
 */
function selectFirstAdv(){
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
	selectAllAdv(1,advType,advser,adv_id);
}
/**
 * 上一页按钮点击事件
 */
function selectLastAdv(){
	var currentPage=parseInt($("#currentPage").html());
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
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
		selectAllAdv(currentPage-1,advType,advser,adv_id);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAdv(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var pageIndex=0;
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
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
		selectAllAdv(pageIndex,advType,advser,adv_id);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndAdv(){
	var endPage=parseInt($("#endPage").html());
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
	selectAllAdv(endPage,advType,advser,adv_id);
}
/**
 * 跳到指定页面按钮点击事件
 */
function selectIndexAdv(){
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
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
		selectAllAdv(pageIndex,advType,advser,adv_id);
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
 * 广告类型下拉框内容改变事件
 */
function selectActByType(){
	var pageIndex=1;
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
	selectAllAdv(pageIndex,advType,advser,adv_id);
}
/**
 * 广告商下拉框内容改变事件
 */
function selectActByType(){
	var pageIndex=1;
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
	selectAllAdv(pageIndex,advType,advser,adv_id);
}
/**
 * 搜索超链接点击事件
 */
function selectAdvByParam(){
	var pageIndex=1;
	var selAdvType=$("#advType");
	var advType=$(selAdvType).find("option:selected").val();
	var selAdvser=$("#advser");
	var advser=$(selAdvser).find("option:selected").val();
	var adv_id=$("#adv_id").val();
	selectAllAdv(pageIndex,advType,advser,adv_id);
}
/**
 * 默认无条件查询广告排行列表
 * @param pageIndex 页数索引
 */
function type1(pageIndex){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>广告编号</th>"+
	"<th>广告商</th>"+
	"<th>广告费用</th>"+
	"<th>广告内容</th>"+
	"<th>广告类型</th>"+
	"<th>广告点击量</th>"+
	"<th>排行</th></tr>";
	$.getJSON("../backAdv/selectAdvRank.do",{"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var m=(parseInt(pageIndex)-1)*10+(i+1);
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].av_id+
			"</td><td>"+data[0][i].av_a+
			"</td><td>"+data[0][i].av_price+
			"</td><td>"+data[0][i].av_content+
			"</td><td>"+data[0][i].av_an+
			"</td><td>"+data[0][i].av_click+
			"</td><td>"+m+
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
 * 根据广告类型查询广告排行
 * @param pageIndex 页数索引
 * @param advType 广告类型
 */
function type2(pageIndex,advType){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>广告编号</th>"+
	"<th>广告商</th>"+
	"<th>广告费用</th>"+
	"<th>广告内容</th>"+
	"<th>广告类型</th>"+
	"<th>广告点击量</th>"+
	"<th>排行</th></tr>";
	$.getJSON("../backAdv/selectAdvRankByAT.do",{"pageIndex":pageIndex,"advType":advType},function(data){
		for(var i=0;i<data[0].length;i++){
			var m=(parseInt(pageIndex)-1)*10+(i+1);
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].av_id+
			"</td><td>"+data[0][i].av_a+
			"</td><td>"+data[0][i].av_price+
			"</td><td>"+data[0][i].av_content+
			"</td><td>"+data[0][i].av_an+
			"</td><td>"+data[0][i].av_click+
			"</td><td>"+m+
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
 * 根据广告商查询广告排行
 * @param pageIndex 页数索引
 * @param advser 广告商
 */
function type3(pageIndex,advser){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>广告编号</th>"+
	"<th>广告商</th>"+
	"<th>广告费用</th>"+
	"<th>广告内容</th>"+
	"<th>广告类型</th>"+
	"<th>广告点击量</th>"+
	"<th>排行</th></tr>";
	$.getJSON("../backAdv/selectAdvRankByAD.do",{"pageIndex":pageIndex,"advser":advser},function(data){
		for(var i=0;i<data[0].length;i++){
			var m=(parseInt(pageIndex)-1)*10+(i+1);
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].av_id+
			"</td><td>"+data[0][i].av_a+
			"</td><td>"+data[0][i].av_price+
			"</td><td>"+data[0][i].av_content+
			"</td><td>"+data[0][i].av_an+
			"</td><td>"+data[0][i].av_click+
			"</td><td>"+m+
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
 * 根据广告编号查询广告排行
 * @param pageIndex 页数索引
 * @param adv_id 广告编号
 */
function type4(pageIndex,adv_id){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>广告编号</th>"+
	"<th>广告商</th>"+
	"<th>广告费用</th>"+
	"<th>广告内容</th>"+
	"<th>广告类型</th>"+
	"<th>广告点击量</th>"+
	"<th>排行</th></tr>";
	$.getJSON("../backAdv/selectAdvRankByADId.do",{"pageIndex":pageIndex,"adv_id":adv_id},function(data){
		for(var i=0;i<data[0].length;i++){
			var m=(parseInt(pageIndex)-1)*10+(i+1);
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].av_id+
			"</td><td>"+data[0][i].av_a+
			"</td><td>"+data[0][i].av_price+
			"</td><td>"+data[0][i].av_content+
			"</td><td>"+data[0][i].av_an+
			"</td><td>"+data[0][i].av_click+
			"</td><td>"+m+
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
 * 根据广告类型和广告商查询广告排行
 * @param pageIndex 页数索引
 * @param advType 广告类型
 * @param advser 广告商
 */
function type5(pageIndex,advType,advser){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>广告编号</th>"+
	"<th>广告商</th>"+
	"<th>广告费用</th>"+
	"<th>广告内容</th>"+
	"<th>广告类型</th>"+
	"<th>广告点击量</th>"+
	"<th>排行</th></tr>";
	$.getJSON("../backAdv/selectAdvRankByAA.do",{"pageIndex":pageIndex,"advType":advType,"advser":advser},function(data){
		for(var i=0;i<data[0].length;i++){
			var m=(parseInt(pageIndex)-1)*10+(i+1);
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].av_id+
			"</td><td>"+data[0][i].av_a+
			"</td><td>"+data[0][i].av_price+
			"</td><td>"+data[0][i].av_content+
			"</td><td>"+data[0][i].av_an+
			"</td><td>"+data[0][i].av_click+
			"</td><td>"+m+
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





