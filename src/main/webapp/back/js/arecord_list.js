$(function(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllAr(pageIndex,feeType,payTime,day,club_id);
});
/**
 * 页面加载查询的欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payTime 欠费时间
 * @param day 欠费天数
 * @param club_id 车友会编号
 */
function selectAllAr(pageIndex,feeType,payTime,day,club_id){
	var payType="";
	if(feeType==1){
		payType+="年费";
	}else if(feeType==2){
		payType+="功能费用";
	}else{
		payType+="人数级别费用";
	}
	if(payTime!=""&&payTime!=null){
		if(day!=""&&day!=null){
			//根据欠费时间、欠费天数和车友会编号查询欠费列表
			if(club_id!=""&&club_id!=null){
				if(feeType==1){
					type22(pageIndex,feeType,payType,payTime,day,club_id);
				}else if(feeType==2){
					type23(pageIndex,feeType,payType,payTime,day,club_id);
				}else{
					type24(pageIndex,feeType,payType,payTime,day,club_id);
				}
			//根据欠费时间、欠费天数查询欠费列表
			}else{
				if(feeType==1){
					type13(pageIndex,feeType,payType,payTime,day);
				}else if(feeType==2){
					type14(pageIndex,feeType,payType,payTime,day);
				}else{
					type15(pageIndex,feeType,payType,payTime,day);
				}
			}
		}else{
			//根据欠费时间和车友会编号查询欠费列表
			if(club_id!=""&&club_id!=null){
				if(feeType==1){
					type16(pageIndex,feeType,payType,payTime,club_id);
				}else if(feeType==2){
					type17(pageIndex,feeType,payType,payTime,club_id);
				}else{
					type18(pageIndex,feeType,payType,payTime,club_id);
				}
			//根据欠费时间查询欠费列表
			}else{
				if(feeType==1){
					type4(pageIndex,feeType,payType,payTime);
				}else if(feeType==2){
					type5(pageIndex,feeType,payType,payTime);
				}else{
					type6(pageIndex,feeType,payType,payTime);
				}
			}
		}
	}else{
		if(day!=""&&day!=null){
			//根据欠费天数和车友会编号查询欠费列表
			if(club_id!=""&&club_id!=null){
				if(feeType==1){
					type19(pageIndex,feeType,payType,day,club_id);
				}else if(feeType==2){
					type20(pageIndex,feeType,payType,day,club_id);
				}else{
					type21(pageIndex,feeType,payType,day,club_id);
				}
			//根据欠费天数查询车友欠费列表
			}else{
				if(feeType==1){
					type7(pageIndex,feeType,payType,day);
				}else if(feeType==2){
					type8(pageIndex,feeType,payType,day);
				}else{
					type9(pageIndex,feeType,payType,day);
				}
			}
		}else{
			//根据车友会编号查询欠费列表
			if(club_id!=""&&club_id!=null){
				if(feeType==1){
					type10(pageIndex,feeType,payType,club_id);
				}else if(feeType==2){
					type11(pageIndex,feeType,payType,club_id);
				}else{
					type12(pageIndex,feeType,payType,club_id);
				}
			//默认按照费用类型查询欠费列表
			}else{	
				if(feeType==1){
					type1(pageIndex,feeType,payType);
				}else if(feeType==2){
					type2(pageIndex,feeType,payType);
				}else{
					type3(pageIndex,feeType,payType);
				}
			}
		}
	}
}
/**
 * 欠费类型选择标签变化事件
 */
function selectOpPay(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllAr(pageIndex,feeType,payTime,day,club_id);
}
/**
 * 首页按钮点击事件
 */
function selectFirstAr(){
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllAr(1,feeType,payTime,day,club_id);
}
/**
 * 上一页按钮点击事件
 */
function selectLastAr(){
	var currentPage=parseInt($("#currentPage").html());
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(currentPage-1<=0){
		var content="没有上一页了";
		var id=12;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		selectAllAr(currentPage-1,feeType,payTime,day,club_id);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAr(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(currentPage-endPage>=0){
		var content="没有下一页了";
		var id=11;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		pageIndex=currentPage+1;
		$("#currentPage").html(pageIndex);
		selectAllAr(pageIndex,feeType,payTime,day,club_id);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndAr(){
	var endPage=parseInt($("#endPage").html());
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllAr(endPage,feeType,payTime,day,club_id);
}
/**
 * 跳转至指定页面按钮点击事件
 */
function selectIndexAr(){
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	var title="操作失败";
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var icon="face-sad";
	if(pageIndex==""||pageIndex==null){
		var content="页数索引不能为空";
		var id=8;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex<=0){
		var content="页数索引无效";
		var id=9;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex-endPage>0){
		var content="页数索引超出范围";
		var id=10;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		selectAllAr(pageIndex,feeType,payTime,day,club_id);
	}
}
/**
 * 搜索超链接点击事件
 */
function selectArByParam(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllAr(pageIndex,feeType,payTime,day,club_id);
}
/**
 * 更新欠费列表按钮点击事件
 */
function updateAr(){
	var selObject=$("#fyHx");
	var feeType=$(selObject).find("option:selected").val();
	if(feeType==1){
		updateAs();
	}else if(feeType==2){
		updateFs();
	}else{
		updateNs();
	}
}
function sendArMsg(){
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	var title="消息提示";
	var icon="face-smile";
	var content="请前往消息管理-推送消息发送欠费消息";
	var id=7;
	opTips(icon,id,title,content,width,height,left,top);
}
/**
 * 更新年费欠费列表
 */
function updateAs(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	$.getJSON("../pay/updatePay.do",{"feeType":feeType},function(data){
		if(data.result=="ok"){
			var title="操作成功";
			var icon="face-smile";
			var content="年费欠费列表更新成功";
			var id=5;
			opTips(icon,id,title,content,width,height,left,top);
		}else{
			var title="操作失败";
			var icon="face-sad";
			var content="年费欠费列表更新失败";
			var id=6;
			opTips(icon,id,title,content,width,height,left,top);
		}
		selectAllAr(pageIndex,feeType,payTime,day,club_id);
	});
}
/**
 * 更新功能费用欠费列表
 */
function updateFs(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	$.getJSON("../pay/updatePay.do",{"feeType":feeType},function(data){
		if(data.result=="ok"){
			var title="操作成功";
			var icon="face-smile";
			var content="功能费用欠费列表更新成功";
			var id=3;
			opTips(icon,id,title,content,width,height,left,top);
		}else{
			var title="操作失败";
			var icon="face-sad";
			var content="功能费用欠费列表更新失败";
			var id=4;
			opTips(icon,id,title,content,width,height,left,top);
		}
		selectAllAr(pageIndex,feeType,payTime,day,club_id);
	});
}
/**
 * 更新人数级别费用欠费列表
 */
function updateNs(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var payTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var day=$("#text2").val();
	var club_id=$("#text3").val();
	var width=170;
	var height=40;
	var left=480;
	var top=200;
	$.getJSON("../pay/updatePay.do",{"feeType":feeType},function(data){
		if(data.result=="ok"){
			var title="操作成功";
			var icon="face-smile";
			var content="人数级别费用欠费列表更新成功";
			var id=1;
			opTips(icon,id,title,content,width,height,left,top);
		}else{
			var title="操作失败";
			var icon="face-sad";
			var content="人数级别费用欠费列表更新失败";
			var id=2;
			opTips(icon,id,title,content,width,height,left,top);
		}
		selectAllAr(pageIndex,feeType,payTime,day,club_id);
	});
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
 * 默认按照费用费用类型查询年费欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 */
function type1(pageIndex,feeType,payType){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectAllPay.do",{"pageIndex":pageIndex,"feeType":feeType},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].as_id+
			"</td><td>"+data[0][i].as_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].as_day+
			"</td><td>"+payType+
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
 * 默认按照费用费用类型查询功能费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 */
function type2(pageIndex,feeType,payType){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectAllPay.do",{"pageIndex":pageIndex,"feeType":feeType},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fs_id+
			"</td><td>"+data[0][i].fs_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fs_day+
			"</td><td>"+payType+
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
 * 默认按照费用费用类型查询人数级别费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 */
function type3(pageIndex,feeType,payType){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectAllPay.do",{"pageIndex":pageIndex,"feeType":feeType},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ns_id+
			"</td><td>"+data[0][i].ns_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].ns_day+
			"</td><td>"+payType+
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
 * 根据欠费时间查询年费欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 */
function type4(pageIndex,feeType,payType,payTime){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTime.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].as_id+
			"</td><td>"+data[0][i].as_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].as_day+
			"</td><td>"+payType+
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
 * 根据欠费时间查询功能费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 */
function type5(pageIndex,feeType,payType,payTime){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTime.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fs_id+
			"</td><td>"+data[0][i].fs_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fs_day+
			"</td><td>"+payType+
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
 * 根据欠费时间查询人数级别费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 */
function type6(pageIndex,feeType,payType,payTime){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTime.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ns_id+
			"</td><td>"+data[0][i].ns_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].ns_day+
			"</td><td>"+payType+
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
 * 根据欠费天数查询年费欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param day 欠费天数
 */
function type7(pageIndex,feeType,payType,day){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByDay.do",{"pageIndex":pageIndex,"feeType":feeType,"day":day},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].as_id+
			"</td><td>"+data[0][i].as_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].as_day+
			"</td><td>"+payType+
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
 * 根据欠费天数查询功能费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param day 欠费天数
 */
function type8(pageIndex,feeType,payType,day){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByDay.do",{"pageIndex":pageIndex,"feeType":feeType,"day":day},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fs_id+
			"</td><td>"+data[0][i].fs_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fs_day+
			"</td><td>"+payType+
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
 * 根据欠费天数查询人数级别费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param day 欠费天数
 */
function type9(pageIndex,feeType,payType,day){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByDay.do",{"pageIndex":pageIndex,"feeType":feeType,"day":day},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ns_id+
			"</td><td>"+data[0][i].ns_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].ns_day+
			"</td><td>"+payType+
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
 * 根据车友会编号查询年费欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param club_id 车友会编号
 */
function type10(pageIndex,feeType,payType,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].as_id+
			"</td><td>"+data[0][i].as_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].as_day+
			"</td><td>"+payType+
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
 * 根据车友会编号查询功能费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param club_id 车友会编号
 */
function type11(pageIndex,feeType,payType,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fs_id+
			"</td><td>"+data[0][i].fs_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fs_day+
			"</td><td>"+payType+
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
 * 根据车友会编号查询人数级别费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param club_id 车友会编号
 */
function type12(pageIndex,feeType,payType,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ns_id+
			"</td><td>"+data[0][i].ns_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].ns_day+
			"</td><td>"+payType+
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
 * 根据欠费时间和欠费天数查询年费欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 * @param day 欠费天数
 */
function type13(pageIndex,feeType,payType,payTime,day){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeDay.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"day":day},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].as_id+
			"</td><td>"+data[0][i].as_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].as_day+
			"</td><td>"+payType+
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
 * 根据欠费时间和欠费天数查询功能费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 * @param day 欠费天数
 */
function type14(pageIndex,feeType,payType,payTime,day){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeDay.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"day":day},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fs_id+
			"</td><td>"+data[0][i].fs_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fs_day+
			"</td><td>"+payType+
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
 * 根据欠费时间和欠费天数查询人数级别费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 * @param day 欠费天数
 */
function type15(pageIndex,feeType,payType,payTime,day){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeDay.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"day":day},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ns_id+
			"</td><td>"+data[0][i].ns_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].ns_day+
			"</td><td>"+payType+
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
 * 根据欠费时间和车友会编号查询年费欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 * @param club_id 车友会编号
 */
function type16(pageIndex,feeType,payType,payTime,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeCId.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].as_id+
			"</td><td>"+data[0][i].as_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].as_day+
			"</td><td>"+payType+
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
 * 根据欠费时间和车友会编号查询功能费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 * @param club_id 车友会编号
 */
function type17(pageIndex,feeType,payType,payTime,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeCId.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fs_id+
			"</td><td>"+data[0][i].fs_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fs_day+
			"</td><td>"+payType+
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
 * 根据欠费时间和车友会编号查询人数级别费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 * @param club_id 车友会编号
 */
function type18(pageIndex,feeType,payType,payTime,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeCId.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ns_id+
			"</td><td>"+data[0][i].ns_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].ns_day+
			"</td><td>"+payType+
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
 * 根据欠费天数和车友会编号查询年费欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param day 欠费天数
 * @param club_id 车友会编号
 */
function type19(pageIndex,feeType,payType,day,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByDayClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"day":day,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].as_id+
			"</td><td>"+data[0][i].as_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].as_day+
			"</td><td>"+payType+
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
 * 根据欠费时间和车友会编号查询功能费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param day 欠费天数
 * @param club_id 车友会编号
 */
function type20(pageIndex,feeType,payType,day,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByDayClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"day":day,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fs_id+
			"</td><td>"+data[0][i].fs_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fs_day+
			"</td><td>"+payType+
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
 * 根据欠费天数和车友会编号查询人数级别费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param day 欠费天数
 * @param club_id 车友会编号
 */
function type21(pageIndex,feeType,payType,day,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByDayClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"day":day,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ns_id+
			"</td><td>"+data[0][i].ns_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].ns_day+
			"</td><td>"+payType+
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
 * 根据欠费时间、欠费天数和车友会编号查询年费欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 * @param day 欠费天数
 * @param club_id 车友会编号
 */
function type22(pageIndex,feeType,payType,payTime,day,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeDCId.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"day":day,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].as_id+
			"</td><td>"+data[0][i].as_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].as_day+
			"</td><td>"+payType+
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
 * 根据欠费时间、欠费天数和车友会编号查询功能费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param day 欠费天数
 * @param club_id 车友会编号
 */
function type23(pageIndex,feeType,payType,payTime,day,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeDCId.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"day":day,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fs_id+
			"</td><td>"+data[0][i].fs_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fs_day+
			"</td><td>"+payType+
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
 * 根据欠费时间、欠费天数和车友会编号查询人数级别费用欠费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 欠费类型
 * @param payTime 欠费时间
 * @param day 欠费天数
 * @param club_id 车友会编号
 */
function type24(pageIndex,feeType,payType,payTime,day,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>欠费编号</th>"+
	"<th>欠费日期</th>"+
	"<th>车友会编号</th>"+
	"<th>欠费天数</th>"+
	"<th>欠费类型</th>";
	$.getJSON("../pay/selectPayByTimeDCId.do",{"pageIndex":pageIndex,"feeType":feeType,"payTime":payTime,"day":day,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ns_id+
			"</td><td>"+data[0][i].ns_time+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].ns_day+
			"</td><td>"+payType+
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