$(function(){
	var pageIndex=1;
	var selObject=$("#act")
	var actType=$(selObject).find("option:selected").val();
	var startTime=$("#Calendar").val();
	var endTime=$("#Calendar2").val();
	var act_id=$("#act_id").val();
	selectAllAct(pageIndex,actType,startTime,endTime,act_id);
});
/**
 * 页面加载时查询活动列表
 * @param pageIndex 页数索引
 * @param actType 活动类型标记
 * @param startTime 开始时间
 * @param endTime 结束时间
 * @param act_id 活动编号
 */
function selectAllAct(pageIndex,actType,startTime,endTime,act_id){
	var actRe="";
	if(actType==1){
		actRe+="慈善";
	}else{
		actRe+="自驾游";
	}
	if(act_id!=""&&act_id!=null){
		//根据活动编号查询慈善活动列表
		if(actType==1){
			type7(actType,act_id,pageIndex,actRe);
		//根据活动编号查询自驾游活动列表
		}else{
			type8(actType,act_id,pageIndex,actRe);
		}
	}else{
		if(startTime!=""&&startTime!=null){
			if(endTime!=""&&endTime!=null){
				//根据活动开始日期和活动结束日期查询慈善活动列表
				if(actType==1){
					type9(actType,startTime,endTime,pageIndex,actRe);
				//根据活动开始日期和活动结束日期查询自驾游活动列表
				}else{
					type10(actType,startTime,endTime,pageIndex,actRe);
				}
			}else{
				//根据活动开始日期查询慈善活动列表
				if(actType==1){
					type3(actType,startTime,pageIndex,actRe);
				//根据活动开始日期查询自驾游活动列表
				}else{
					type4(actType,startTime,pageIndex,actRe);
				}
			}
		}else{
			if(endTime!=""&&endTime!=null){
				//根据活动结束日期查询慈善活动列表
				if(actType==1){
					type5(actType,endTime,pageIndex,actRe);
				//根据结束日期查询自驾游活动列表
				}else{
					type6(actType,endTime,pageIndex,actRe);
				}
			}else{
				//默认无条件查询慈善活动列表
				if(actType==1){
					type1(actType,pageIndex,actRe);
				//无条件查询自驾游活动列表
				}else{
					type2(actType,pageIndex,actRe);
				}
			}
		}
	}
}
/**
 * 首页按钮点击事件
 */
function selectFirstActivity(){
	var selObject=$("#act")
	var actType=$(selObject).find("option:selected").val();
	var startTime=$("#Calendar").val();
	var endTime=$("#Calendar2").val();
	var act_id=$("#act_id").val();
	selectAllAct(1,actType,startTime,endTime,act_id);
}
/**
 * 上一页按钮点击事件
 */
function selectLastActivity(){
	var selObject=$("#act")
	var actType=$(selObject).find("option:selected").val();
	var startTime=$("#Calendar").val();
	var endTime=$("#Calendar2").val();
	var act_id=$("#act_id").val();
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
		selectAllAct(currentPage-1,actType,startTime,endTime,act_id);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextActivity(){
	var selObject=$("#act")
	var actType=$(selObject).find("option:selected").val();
	var startTime=$("#Calendar").val();
	var endTime=$("#Calendar2").val();
	var act_id=$("#act_id").val();
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
		selectAllAct(pageIndex,actType,startTime,endTime,act_id);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndActivity(){
	var selObject=$("#act")
	var actType=$(selObject).find("option:selected").val();
	var startTime=$("#Calendar").val();
	var endTime=$("#Calendar2").val();
	var act_id=$("#act_id").val();
	var endPage=parseInt($("#endPage").html());
	selectAllAct(endPage,actType,startTime,endTime,act_id);
}
/**
 * 跳到指定页面按钮点击事件
 */
function selectIndexActivity(){
	var selObject=$("#act")
	var actType=$(selObject).find("option:selected").val();
	var startTime=$("#Calendar").val();
	var endTime=$("#Calendar2").val();
	var act_id=$("#act_id").val();
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
		selectAllAct(pageIndex,actType,startTime,endTime,act_id);
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
 * 搜索超链接点击事件
 */
function selectActByParam(){
	var pageIndex=1;
	var selObject=$("#act")
	var actType=$(selObject).find("option:selected").val();
	var startTime=$("#Calendar").val();
	var endTime=$("#Calendar2").val();
	var act_id=$("#act_id").val();
	selectAllAct(pageIndex,actType,startTime,endTime,act_id);
}
/**
 * 活动类型下拉框内容改变事件
 */
function selectActByType(){
	var pageIndex=1;
	var selObject=$("#act")
	var actType=$(selObject).find("option:selected").val();
	var startTime=$("#Calendar").val();
	var endTime=$("#Calendar2").val();
	var act_id=$("#act_id").val();
	selectAllAct(pageIndex,actType,startTime,endTime,act_id);
}
/**
 * 默认无条件查询慈善活动列表
 * @param actType 活动类型标记
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type1(actType,pageIndex,actRe){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>活动名称</th>"+
	"<th>活动内容</th>"+
	"<th>活动地点</th>"+
	"<th>活动时间</th>"+
	"<th>活动目的</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAllAct.do",{"actType":actType,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ce_id+
			"</td><td>"+data[0][i].ce_name+
			"</td><td>"+data[0][i].ce_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].ce_id+","+actType+")'><font style='clolor:red;'>详细</font></a></td><td>"+data[0][i].ce_place+
			"</td><td>"+data[0][i].ce_startime+"-"+data[0][i].ce_endtime+
			"</td><td>"+data[0][i].ce_goal+
			"</td><td>"+actRe+
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
 * 无条件查询自驾游活动列表
 * @param actType 活动类型标记
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type2(actType,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>旅游时间</th>"+
	"<th>旅游地点</th>"+
	"<th>旅游项目</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAllAct.do",{"actType":actType,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].dt_id+
			"</td><td>"+data[0][i].dt_startime+"-"+data[0][i].dt_endtime+
			"</td><td>"+data[0][i].dt_place+
			"</td><td>"+data[0][i].dt_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].dt_id+","+actType+")'><font style='clolor:red;'>详细</font></a></td><td>"+actRe+
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
 * 根据活动开始日期查询慈善活动
 * @param actType 活动类型标记
 * @param pageIndex 页数索引
 * @param startTime 活动开始日期
 * @param actRe 活动类型
 */
function type3(actType,startTime,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>活动名称</th>"+
	"<th>活动内容</th>"+
	"<th>活动地点</th>"+
	"<th>活动时间</th>"+
	"<th>活动目的</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAnBySTime.do",{"actType":actType,"startTime":startTime,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ce_id+
			"</td><td>"+data[0][i].ce_name+
			"</td><td>"+data[0][i].ce_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].ce_id+","+actType+")'><font style='clolor:red'>详细</font></a></td><td>"+data[0][i].ce_place+
			"</td><td>"+data[0][i].ce_startime+"-"+data[0][i].ce_endtime+
			"</td><td>"+data[0][i].ce_goal+
			"</td><td>"+actRe+
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
 * 根据活动开始日期查询自驾游活动
 * @param actType 活动类型标记
 * @param startTime 活动开始日期
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type4(actType,startTime,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>旅游时间</th>"+
	"<th>旅游地点</th>"+
	"<th>旅游项目</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAnBySTime.do",{"actType":actType,"startTime":startTime,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].dt_id+
			"</td><td>"+data[0][i].dt_startime+"-"+data[0][i].dt_endtime+
			"</td><td>"+data[0][i].dt_place+
			"</td><td>"+data[0][i].dt_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].dt_id+","+actType+")'><font style='clolor:red;'>详细</font></a></td><td>"+actRe+
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
 * 根据活动结束日期查询慈善活动列表
 * @param actType 活动类型标记
 * @param endTime 活动结束日期
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type5(actType,endTime,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>活动名称</th>"+
	"<th>活动内容</th>"+
	"<th>活动地点</th>"+
	"<th>活动时间</th>"+
	"<th>活动目的</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAnByETime.do",{"actType":actType,"endTime":endTime,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ce_id+
			"</td><td>"+data[0][i].ce_name+
			"</td><td>"+data[0][i].ce_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].ce_id+","+actType+")'><font style='clolor:red'>详细</font></a></td><td>"+data[0][i].ce_place+
			"</td><td>"+data[0][i].ce_startime+"-"+data[0][i].ce_endtime+
			"</td><td>"+data[0][i].ce_goal+
			"</td><td>"+actRe+
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
 * 根据活动结束日期查询自驾游活动
 * @param actType 活动类型标记
 * @param endTime 活动结束日期
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type6(actType,endTime,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>旅游时间</th>"+
	"<th>旅游地点</th>"+
	"<th>旅游项目</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAnByETime.do",{"actType":actType,"endTime":endTime,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].dt_id+
			"</td><td>"+data[0][i].dt_startime+"-"+data[0][i].dt_endtime+
			"</td><td>"+data[0][i].dt_place+
			"</td><td>"+data[0][i].dt_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].dt_id+","+actType+")'><font style='clolor:red;'>详细</font></a></td><td>"+actRe+
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
 * 根据活动编号查询慈善活动
 * @param actType 活动类型标记
 * @param act_id 活动编号
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type7(actType,act_id,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>活动名称</th>"+
	"<th>活动内容</th>"+
	"<th>活动地点</th>"+
	"<th>活动时间</th>"+
	"<th>活动目的</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAnByAId.do",{"actType":actType,"act_id":act_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ce_id+
			"</td><td>"+data[0][i].ce_name+
			"</td><td>"+data[0][i].ce_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].ce_id+","+actType+")'><font style='clolor:red'>详细</font></a></td><td>"+data[0][i].ce_place+
			"</td><td>"+data[0][i].ce_startime+"-"+data[0][i].ce_endtime+
			"</td><td>"+data[0][i].ce_goal+
			"</td><td>"+actRe+
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
 * 根据活动编号查询自驾游活动
 * @param actType 活动类型标记
 * @param act_id 活动编号
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type8(actType,act_id,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>旅游时间</th>"+
	"<th>旅游地点</th>"+
	"<th>旅游项目</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAnByAId.do",{"actType":actType,"act_id":act_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].dt_id+
			"</td><td>"+data[0][i].dt_startime+"-"+data[0][i].dt_endtime+
			"</td><td>"+data[0][i].dt_place+
			"</td><td>"+data[0][i].dt_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].dt_id+","+actType+")'><font style='clolor:red;'>详细</font></a></td><td>"+actRe+
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
 * 根据活动开始日期和活动结束日期查询慈善活动列表
 * @param actType 活动类型标记
 * @param startTime 活动开始日期
 * @param endTime 活动结束日期
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type9(actType,startTime,endTime,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>活动名称</th>"+
	"<th>活动内容</th>"+
	"<th>活动地点</th>"+
	"<th>活动时间</th>"+
	"<th>活动目的</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAnBySETime.do",{"actType":actType,"startTime":startTime,"endTime":endTime,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].ce_id+
			"</td><td>"+data[0][i].ce_name+
			"</td><td>"+data[0][i].ce_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].ce_id+","+actType+")'><font style='clolor:red'>详细</font></a></td><td>"+data[0][i].ce_place+
			"</td><td>"+data[0][i].ce_startime+"-"+data[0][i].ce_endtime+
			"</td><td>"+data[0][i].ce_goal+
			"</td><td>"+actRe+
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
 * 根据活动开始日期和活动结束日期查询自驾游活动
 * @param actType 活动类型标记
 * @param startTime 活动开始日期
 * @param endTime 活动结束日期
 * @param pageIndex 页数索引
 * @param actRe 活动类型
 */
function type10(actType,startTime,endTime,pageIndex,actRe){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>活动编号</th>"+
	"<th>旅游时间</th>"+
	"<th>旅游地点</th>"+
	"<th>旅游项目</th>"+
	"<th>活动类型</th></tr>";
	$.getJSON("../backActivity/selectAnBySETime.do",{"actType":actType,"startTime":startTime,"endTime":endTime,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].dt_id+
			"</td><td>"+data[0][i].dt_startime+"-"+data[0][i].dt_endtime+
			"</td><td>"+data[0][i].dt_place+
			"</td><td>"+data[0][i].dt_content.substring(1,10)+
			"&gt;&gt;<a href='javascript:selectOneAct("+data[0][i].dt_id+","+actType+")'><font style='clolor:red;'>详细</font></a></td><td>"+actRe+
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
 * 详细超链接点击事件
 * @param ce_id 活动编号
 */
function selectOneAct(act_id,actType){
	if(actType==1){
		viewActDetail1(act_id,actType);
	}else{
		viewActDetail2(act_id,actType)
	}
}
/**
 * 根据活动编号查询慈善活动对象信息
 * @param act_id 活动编号
 * @param actType 活动类型标记
 */
function viewActDetail1(act_id,actType){
	$.getJSON("../backActivity/selectAn.do",{"act_id":act_id,"actType":actType},function(data){
		var content=data.ce_content;
		var width=500;
		var height=300;
		var left=500;
		var top=200;
		anDetail(act_id,content,width,height,left,top,6);
	});
}
/**
 * 根据活动编号查询自驾游活动对象信息
 * @param act_id 活动编号
 * @param actType 活动类型标记
 */
function viewActDetail2(act_id,actType){
	$.getJSON("../backActivity/selectAn.do",{"act_id":act_id,"actType":actType},function(data){
		var content=data.dt_content;
		var width=300;
		var height=200;
		var left=500;
		var top=100;
		anDetail(act_id,content,width,height,left,top,6);
	});
}
/**
 * 弹出活动内容对话框
 * @param id 唯一标识对话框，防止点击链接产生多个相同的对话框
 * @param title 对话框标题
 * @param content 对话框内容
 * @param width 对话框宽度
 * @param height 对话框高度
 * @param left 对话框距离屏幕左侧的距离
 * @param top 对话框距离屏幕上方的距离
 * @param time 对话框显示的最长时间
 */
function anDetail(id,content,width,height,left,top,time){
	var list = art.dialog.list;
	for (var i in list) {
	    list[i].close();
	};
	art.dialog({
		id:id,
		width:  width,
		height: height,
		left:left,
		top:top,
		content: content,
		fixed: true,
		drag: false,
		resize: false,
	    init: function () {
	    	var that = this, i = time;
	        var fn = function () {
	            that.title(i + '秒后关闭');
	            !i && that.close();
	            i --;
	        };
	        timer = setInterval(fn, 1000);
	        fn();
	    },
	    close: function () {
	    	clearInterval(timer);
	    }
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
