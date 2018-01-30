$(function(){
	var pageIndex=1;
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
	selectAllCB();
	selectAllClub(pageIndex,province,city,carBrand,carDep,club_id);
});
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
/**
 * 城市下拉框内容改变事件
 */
function selectClubByCity(){
	var pageIndex=1;
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
	selectAllClub(pageIndex,province,city,carBrand,carDep,club_id);
}
/**
 * 车系下拉框内容改变事件
 */
function selectClubByCD(){
	var pageIndex=1;
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
	selectAllClub(pageIndex,province,city,carBrand,carDep,club_id);
}
/**
 * 页面加载时查询车友会列表
 * @param pageIndex 页数索引
 * @param province 省份
 * @param city 城市
 * @param carBrand 车的品牌
 * @param carDep 车系
 * @param club_id 车友会编号
 */
function selectAllClub(pageIndex,province,city,carBrand,carDep,club_id){
	if(city!=-1){
		if(carDep!=-1){
			//根据城市、车系和车友会编号查询车友会列表
			if(club_id!=""&&club_id!=null){
				type18(city,carDep,club_id,pageIndex);
			//根据城市、车系查询车友会列表
			}else{
				type11(city,carDep,pageIndex);
			}
		}else{
			if(carBrand!=-1){
				//根据城市、车的品牌和车友会编号查询车友会列表
				if(club_id!=""&&club_id!=null){
					type17(city,carBrand,club_id,pageIndex);
				//根据城市、车的品牌查询车友会
				}else{
					type10(city,carBrand,pageIndex);
				}
			}else{
				//根据城市和车友会编号查询车友会列表
				if(club_id!=""&&club_id!=null){
					type12(city,club_id,pageIndex);
				//根据城市查询车友会
				}else{
					type3(city,pageIndex);
				}
			}
		}
	}else{
		//根据
		if(province!=-1){
			if(carDep!=-1){
				//根据省份、车系和车友会编号查询车友会列表
				if(club_id!=""&&club_id!=null){
					type16(province,carDep,club_id,pageIndex);
				//根据省份、车系查询车友会列表
				}else{
					type8(province,carDep,pageIndex);
				}
			}else{
				if(carBrand!=-1){
					//根据省份、车的品牌和车友会编号查询车友会列表
					if(club_id!=""&&club_id!=null){
						type15(province,carBrand,club_id,pageIndex);
					//根据省份、车的品牌查询车友会列表
					}else{
						type7(province,carBrand,pageIndex);
					}
				}else{
					//根据省份和车友会编号查询车友会列表
					if(club_id!=""&&club_id!=null){
						type9(province,club_id,pageIndex);
					//根据省份查询车友会
					}else{
						type2(province,pageIndex);
					}
				}
			}
		}else{
			if(carDep!=-1){
				//根据车系和车友会编号查询车友会列表
				if(club_id!=""&&club_id!=null){
					type14(carDep,club_id,pageIndex);
				//根据车系查询车友会列表
				}else{
					type5(carDep,pageIndex);
				}
			}else{
				if(carBrand!=-1){
					//根据车的品牌和车友会编号查询车友会
					if(club_id!=""&&club_id!=null){
						type13(carBrand,club_id,pageIndex);
					//根据车的品牌查询车友会
					}else{
						type4(carBrand,pageIndex);
					}
				}else{
					//根据车友会编号查询车友会列表
					if(club_id!=""&&club_id!=null){
						type6(club_id,pageIndex);
					//默认显示车友会列表
					}else{
						type1(pageIndex);	
					}
				}
			}
		}
	}
}
/**
 * 首页按钮点击事件
 */
function selectFirstClub(){
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
	selectAllClub(1,province,city,carBrand,carDep,club_id);
}
/**
 * 上一页按钮点击事件
 */
function selectLastClub(){
	var currentPage=parseInt($("#currentPage").html());
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
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
		selectAllClub(currentPage-1,province,city,carBrand,carDep,club_id);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextClub(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var pageIndex=0;
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
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
		selectAllClub(pageIndex,province,city,carBrand,carDep,club_id);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndClub(){
	var endPage=parseInt($("#endPage").html());
	var pageIndex=0;
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
	selectAllClub(endPage,province,city,carBrand,carDep,club_id);
}
/**
 * 跳到指定页面按钮点击事件
 */
function selectIndexClub(){
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
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
		selectAllClub(pageIndex,province,city,carBrand,carDep,club_id);
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
function selectClubByParam(){
	var pageIndex=1;
	var selPro=$("#p");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#c");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	var club_id=$("#club_id").val();
	selectAllClub(pageIndex,province,city,carBrand,carDep,club_id);
} 
/**
 * 默认查询车友会列表
 * @param pageIndex 页数索引
 */
function type1(pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0' id='tb'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectAllClub.do",{"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据省份查询查询车友会列表
 * @param province 省份
 * @param pageIndex 页数索引
 */
function type2(province,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByPro.do",{"province":province,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据城市查询车友会
 * @param city 城市
 * @param pageIndex 页数索引
 */
function type3(city,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCity.do",{"city":city,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据车的品牌查询车友会
 * @param carBrand 车的品牌
 * @param pageIndex 页数索引
 */
function type4(carBrand,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCarBrand.do",{"carBrand":carBrand,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据车系查询车友会
 * @param carDep 车系
 * @param pageIndex 页数索引
 */
function type5(carDep,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCarDep.do",{"carDep":carDep,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据车友会编号查询车友会
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type6(club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByClubId.do",{"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据省份和车的品牌查询车友会列表
 * @param province 省份
 * @param carBrand 车的品牌
 * @param pageIndex 页数索引
 */
function type7(province,carBrand,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th></tr>";
	$.getJSON("../backClub/selectClubByProCB.do",{"province":province,"carBrand":carBrand,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据省份和车系查询车友会
 * @param province 省份
 * @param carDep 车系
 * @param pageIndex 页数索引
 */
function type8(province,carDep,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th></tr>";
	$.getJSON("../backClub/selectClubByProCD.do",{"province":province,"carDep":carDep,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据省份和车友会编号查询车友会列表
 * @param province 省份
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type9(province,club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByProCID.do",{"province":province,"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据城市和车的品牌查询车友会
 * @param city 城市
 * @param carBrand 车的品牌
 * @param pageIndex 页数索引
 */
function type10(city,carBrand,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCityCB.do",{"city":city,"carBrand":carBrand,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据城市和车系查询车友会
 * @param city 城市
 * @param carDep 车系
 * @param pageIndex 页数索引
 */
function type11(city,carDep,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCityCD.do",{"city":city,"carDep":carDep,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据城市和车友会编号查询车友会
 * @param city 城市
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type12(city,club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCityCID.do",{"city":city,"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据车的品牌和车友会编号查询车友会
 * @param carBrand 车的品牌
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type13(carBrand,club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCBCID.do",{"carBrand":carBrand,"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据车系和车友会编号查询车友会
 * @param carDep 车系
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type14(carDep,club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCDCID.do",{"carDep":carDep,"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据省份、车的品牌和车友会编号查询车友会
 * @param province
 * @param carBrand
 * @param club_id
 * @param pageIndex
 */
function type15(province,carBrand,club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByProCBCID.do",{"province":province,"carBrand":carBrand,"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据省份、车系和车友会编号查询车友会列表
 * @param province 省份
 * @param carDep 车系
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type16(province,carDep,club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByProCDCID.do",{"province":province,"carDep":carDep,"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据城市、车的品牌、车友会编号查询车友会
 * @param city 城市
 * @param carBrand 车的品牌
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type17(city,carBrand,club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCityCBCID.do",{"city":city,"carBrand":carBrand,"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
 * 根据城市、车系和车友会编号查询车友会
 * @param city 城市
 * @param carDep 车系
 * @param club_id 车友会编号
 * @param pageIndex 页数索引
 */
function type18(city,carDep,club_id,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>车友会编号</th>"+
	"<th>车友会会号</th>"+
	"<th>会主编号</th>"+
	"<th>车友会名称</th>"+
	"<th>地区</th>"+
	"<th>总贡献值</th>"+
	"<th>实际人数</th>";
	$.getJSON("../backClub/selectClubByCityCDCID.do",{"city":city,"carDep":carDep,"club_id":club_id,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='14458579642011' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].club_no+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].club_name+
			"</td><td>"+data[0][i].club_pro+"/"+data[0][i].club_city+
			"</td><td>"+data[0][i].club_tcon+
			"</td><td>"+data[0][i].club_pnum+
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
