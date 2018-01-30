$(function(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var chargeTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var payId=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllPr(pageIndex,feeType,chargeTime,payId,club_id);
});
/**
 * 页面加载时的查询列表
 * @param pageIndex 页数索引
 */
function selectAllPr(pageIndex,feeType,chargeTime,payId,club_id){
	var payType="";
	if(feeType==1){
		payType+="年费";
	}else if(feeType==2){
		payType+="功能费用";
	}else{
		payType+="人数级别费用";
	}
	if(payId!=""&&payId!=null){
		//根据费用类型、缴费编号查询车友会列表
		if(feeType==1){
			type7(pageIndex,feeType,payType,payId);
		}else if(feeType==2){
			type8(pageIndex,feeType,payType,payId);
		}else{
			type9(pageIndex,feeType,payType,payId);
		}
	}else{
		if(chargeTime!=""&&chargeTime!=null){
			//根据费用类型、缴费时间和车友会编号查询车友会列表
			if(club_id!=""&&club_id!=null){
				if(feeType==1){
					type13(pageIndex,feeType,payType,chargeTime,club_id);
				}else if(feeType==2){
					type14(pageIndex,feeType,payType,chargeTime,club_id);
				}else{
					type15(pageIndex,feeType,payType,chargeTime,club_id);
				}
			//根据费用类型、缴费时间查询车友会列表
			}else{
				if(feeType==1){
					type4(pageIndex,feeType,payType,chargeTime);
				}else if(feeType==2){
					type5(pageIndex,feeType,payType,chargeTime);
				}else{
					type6(pageIndex,feeType,payType,chargeTime);
				}
			}
		}else{
			//根据费用类型和车友会编号查询车友会
			if(club_id!=""&&club_id!=null){
				if(feeType==1){
					type10(pageIndex,feeType,payType,club_id);
				}else if(feeType==2){
					type11(pageIndex,feeType,payType,club_id);
				}else{
					type12(pageIndex,feeType,payType,club_id);
				}
			//根据费用类型查询车友会列表
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
 * 首页按钮点击事件
 */
function selectFirstPr(){
	var selObject=$("#fyHx");
	var read_sign=$(selObject).find("option:selected").val();
	var chargeTime=$("#Calendar").val();
	var payId=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllPr(1,read_sign,chargeTime,payId,club_id);
}
/**
 * 上一页按钮点击事件
 */
function selectLastPr(){
	var currentPage=parseInt($("#currentPage").html());
	var selObject=$("#fyHx");
	var read_sign=$(selObject).find("option:selected").val();
	var chargeTime=$("#Calendar").val();
	var payId=$("#text2").val();
	var club_id=$("#text3").val();
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
		selectAllPr(currentPage-1,read_sign,chargeTime,payId,club_id);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextPr(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var pageIndex=0;
	var selObject=$("#fyHx");
	var read_sign=$(selObject).find("option:selected").val();
	var chargeTime=$("#Calendar").val();
	var payId=$("#text2").val();
	var club_id=$("#text3").val();
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
		selectAllPr(pageIndex,read_sign,chargeTime,payId,club_id);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndPr(){
	var selObject=$("#fyHx");
	var read_sign=$(selObject).find("option:selected").val();
	var endPage=parseInt($("#endPage").html());
	var chargeTime=$("#Calendar").val();
	var payId=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllPr(endPage,read_sign,chargeTime,payId,club_id);
}
/**
 * 跳转指定页面按钮点击事件
 */
function selectIndexPr(){
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
	var selObject=$("#fyHx");
	var read_sign=$(selObject).find("option:selected").val();
	var chargeTime=$("#Calendar").val();
	var payId=$("#text2").val();
	var club_id=$("#text3").val();
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
		selectAllPr(pageIndex,read_sign,chargeTime,payId,club_id);
	}
}
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
 * 缴费类型选择标签变化事件
 */
function selectOpFee(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var read_sign=$(selObject).find("option:selected").val();
	var chargeTime=$("#Calendar").val();
	var payId=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllPr(pageIndex,read_sign,chargeTime,payId,club_id);
}
/**
 * 查询年费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 付费类型
 */
function type1(pageIndex,feeType,payType){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>缴纳日期</th>"+
	"<th>车友会编号</th>"+
	"<th>费用</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllCharge.do",{"pageIndex":pageIndex,"feeType":feeType},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].af_id+
			"</td><td>"+data[0][i].af_paytime+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].af_price+
			"</td><td>"+data[0][i].af_mattime+
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
 * 查询功能收费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 付费类型
 */
function type2(pageIndex,feeType,payType){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>功能编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllCharge.do",{"pageIndex":pageIndex,"feeType":feeType},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fc_id+
			"</td><td>"+data[0][i].fun_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fc_paytime+
			"</td><td>"+data[0][i].fc_mattime+
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
 * 查询人数级别收费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 缴费类型
 */
function type3(pageIndex,feeType,payType){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>人数级别编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllCharge.do",{"pageIndex":pageIndex,"feeType":feeType},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].nlf_id+
			"</td><td>"+data[0][i].nl_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].nlf_paytime+
			"</td><td>"+data[0][i].nlf_mattime+
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
 * 按时间模糊查询年费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 收费类型
 * @param chargeTime 缴费时间
 */
function type4(pageIndex,feeType,payType,chargeTime){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>缴纳日期</th>"+
	"<th>车友会编号</th>"+
	"<th>费用</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllChargeByTime.do",{"pageIndex":pageIndex,"feeType":feeType,"chargeTime":chargeTime},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].af_id+
			"</td><td>"+data[0][i].af_paytime+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].af_price+
			"</td><td>"+data[0][i].af_mattime+
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
 * 按时间模糊查询功能费用列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 收费类型
 * @param chargeTime 缴费时间
 */
function type5(pageIndex,feeType,payType,chargeTime){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>功能编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllChargeByTime.do",{"pageIndex":pageIndex,"feeType":feeType,"chargeTime":chargeTime},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fc_id+
			"</td><td>"+data[0][i].fun_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fc_paytime+
			"</td><td>"+data[0][i].fc_mattime+
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
 * 按时间模糊查询人数级别费用列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 收费类型
 * @param chargeTime 缴费时间
 */
function type6(pageIndex,feeType,payType,chargeTime){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>人数级别编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllChargeByTime.do",{"pageIndex":pageIndex,"feeType":feeType,"chargeTime":chargeTime},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].nlf_id+
			"</td><td>"+data[0][i].nl_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].nlf_paytime+
			"</td><td>"+data[0][i].nlf_mattime+
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
 * 搜索超链接点击事件
 */
function selectPrByParam(){
	var pageIndex=1;
	var selObject=$("#fyHx");
	var chargeTime=$("#Calendar").val();
	var feeType=$(selObject).find("option:selected").val();
	var payId=$("#text2").val();
	var club_id=$("#text3").val();
	selectAllPr(pageIndex,feeType,chargeTime,payId,club_id);
}
/**
 * 根据缴费编号模糊查询年费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 收费类型
 * @param payId 缴费编号
 */
function type7(pageIndex,feeType,payType,payId){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>缴纳日期</th>"+
	"<th>车友会编号</th>"+
	"<th>费用</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllChargeByPId.do",{"pageIndex":pageIndex,"feeType":feeType,"payId":payId},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].af_id+
			"</td><td>"+data[0][i].af_paytime+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].af_price+
			"</td><td>"+data[0][i].af_mattime+
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
 * 按照缴费编号模糊查询功能费用列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 收费类型
 * @param payId 缴费编号
 */
function type8(pageIndex,feeType,payType,payId){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>功能编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllChargeByPId.do",{"pageIndex":pageIndex,"feeType":feeType,"payId":payId},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fc_id+
			"</td><td>"+data[0][i].fun_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fc_paytime+
			"</td><td>"+data[0][i].fc_mattime+
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
 * 根据缴费编号模糊查询人数级别费用列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 收费类型
 * @param payId 缴费编号
 */
function type9(pageIndex,feeType,payType,payId){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>人数级别编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectAllChargeByPId.do",{"pageIndex":pageIndex,"feeType":feeType,"payId":payId},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].nlf_id+
			"</td><td>"+data[0][i].nl_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].nlf_paytime+
			"</td><td>"+data[0][i].nlf_mattime+
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
 * 根据车友会编号查询年费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 付费类型
 * @param club_id 车友会编号
 */
function type10(pageIndex,feeType,payType,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>缴纳日期</th>"+
	"<th>车友会编号</th>"+
	"<th>费用</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectChargeByClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].af_id+
			"</td><td>"+data[0][i].af_paytime+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].af_price+
			"</td><td>"+data[0][i].af_mattime+
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
 * 根据车友会编号查询功能费用收费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 收费列表
 * @param club_id 车友会编号
 */
function type11(pageIndex,feeType,payType,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>功能编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectChargeByClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fc_id+
			"</td><td>"+data[0][i].fun_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fc_paytime+
			"</td><td>"+data[0][i].fc_mattime+
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
 * 根据车友会编号查询费用列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 付费类型
 * @param club_id 车友会编号
 */
function type12(pageIndex,feeType,payType,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>人数级别编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectChargeByClubId.do",{"pageIndex":pageIndex,"feeType":feeType,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].nlf_id+
			"</td><td>"+data[0][i].nl_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].nlf_paytime+
			"</td><td>"+data[0][i].nlf_mattime+
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
 * 根据缴费时间和车友会编号查询费用列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 付费类型
 * @param chargeTime 缴费时间
 * @param club_id 车友会编号
 */
function type13(pageIndex,feeType,payType,chargeTime,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>缴纳日期</th>"+
	"<th>车友会编号</th>"+
	"<th>费用</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectChargeByCidPtime.do",{"pageIndex":pageIndex,"feeType":feeType,"chargeTime":chargeTime,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].af_id+
			"</td><td>"+data[0][i].af_paytime+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].af_price+
			"</td><td>"+data[0][i].af_mattime+
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
 * 按照缴费时间和车友会编号查询功能费用收费列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 付费类型
 * @param chargeTime 缴费时间
 * @param club_id 车友会编号
 */
function type14(pageIndex,feeType,payType,chargeTime,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>功能编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectChargeByCidPtime.do",{"pageIndex":pageIndex,"feeType":feeType,"chargeTime":chargeTime,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].fc_id+
			"</td><td>"+data[0][i].fun_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].fc_paytime+
			"</td><td>"+data[0][i].fc_mattime+
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
 * 根据缴费时间和车友会编号查询人数级别费用列表
 * @param pageIndex 页数索引
 * @param feeType 费用类型
 * @param payType 付费类型
 * @param chargeTime 缴费时间
 * @param club_id 车友会编号
 */
function type15(pageIndex,feeType,payType,chargeTime,club_id){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>缴费编号</th>"+
	"<th>人数级别编号</th>"+
	"<th>车友会编号</th>"+
	"<th>缴费日期</th>"+
	"<th>到期日期</th>"+
	"<th>缴费类型</th>";
	$.getJSON("../charge/selectChargeByCidPtime.do",{"pageIndex":pageIndex,"feeType":feeType,"chargeTime":chargeTime,"club_id":club_id},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].nlf_id+
			"</td><td>"+data[0][i].nl_id+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].nlf_paytime+
			"</td><td>"+data[0][i].nlf_mattime+
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
