$(function(){
	var pageIndex=1;
	var p=$("#p")
	var procince=$(p).find("option:selected").val();
	var c=$("#c")
	var city=$(c).find("option:selected").val();
	var s=$("#s")
	var sex=$(s).find("option:selected").val();
	var uname=$("#uname").val();
	var ugrade=$("#ugrade").val();
	selectAllUI(pageIndex,procince,city,sex,uname,ugrade);
});
/**
 * 页面加载时查询用户列表
 * @param pageIndex 页数索引
 * @param procince 省份
 * @param city 城市
 * @param sex 用户性别
 * @param uname 用户昵称
 * @param ugrade 用户等级
 */
function selectAllUI(pageIndex,procince,city,sex,uname,ugrade){
	if(city!=-1){
		if(sex!=-1){
			if(uname!=""&&uname!=null){
				//根据城市、用户性别、用户昵称、用户等级查询用户列表
				if(ugrade!=""&&ugrade!=null){
					type24(pageIndex,city,sex,uname,ugrade);
				//根据城市、用户性别、用户昵称查询用户列表
				}else{
					type19(pageIndex,city,sex,uname);
				}
			}else{
				//根据城市、用户性别和用户等级查询用户列表
				if(ugrade!=""&&ugrade!=null){
					type20(pageIndex,city,sex,ugrade);
				//根据城市、用户性别查询用户列表
				}else{
					type10(pageIndex,city,sex);
				}
			}
		}else{
			if(uname!=""&&uname!=null){
				//根据城市、用户昵称和用户等级查询用户列表
				if(ugrade!=""&&ugrade!=null){
					type21(pageIndex,city,uname,ugrade);
				//根据城市和用户昵称查询用户列表
				}else{
					type11(pageIndex,city,uname);
				}
			}else{
				//根据城市、用户等级查询用户列表
				if(ugrade!=""&&ugrade!=null){
					type12(pageIndex,city,ugrade);
				//根据城市查询用户列表
				}else{
					type3(pageIndex,city);
				}
			}
		}
	}else{
		if(procince!=-1){
			if(sex!=-1){
				if(uname!=""&&uname!=null){
					//根据省份、用户性别、用户昵称和用户等级查询用户列表
					if(ugrade!=""&&ugrade!=null){
						type23(pageIndex,province,sex,uname,ugrade);
					//根据省份、用户性别和用户昵称查询用户列表
					}else{
						type16(pageIndex,procince,sex,uname);
					}
				}else{
					//根据省份、用户性别和用户等级查询用户列表
					if(ugrade!=""&&ugrade!=null){
						type17(pageIndex,procince,sex,ugrade);
					//根据省份和用户性别查询用户列表
					}else{
						type7(pageIndex,procince,sex);
					}
				}
			}else{
				if(uname!=""&&uname!=null){
					//根据省份、用户昵称和用户级别查询用户列表
					if(ugrade!=""&&ugrade!=null){
						type18(pageIndex,procince,uname,ugrade);
					//根据省份和用户昵称查询用户列表
					}else{
						type8(pageIndex,procince,uname);
					}
				}else{
					//根据省份和用户级别查询用户列表
					if(ugrade!=""&&ugrade!=null){
						type9(pageIndex,procince,ugrade);
					//根据省份查询用户列表
					}else{
						type2(pageIndex,procince);	
					}
				}
			}
		}else{
			if(sex!=-1){
				if(uname!=""&&uname!=null){
					//根据用户性别、用户昵称和用户等级查询用户列表
					if(ugrade!=""&&ugrade!=null){
						type22(pageIndex,sex,uname,ugrade);
					//根据用户性别和用户昵称查询用户列表
					}else{
						type13(pageIndex,sex,uname);
					}
				}else{
					//用户性别和用户等级查询用户列表
					if(ugrade!=""&&ugrade!=null){
						type14(pageIndex,sex,ugrade);
					//根据用户性别查询用户列表
					}else{
						type4(pageIndex,sex);
					}
				}
			}else{
				if(uname!=""&&uname!=null){
					//根据用户昵称和用户等级查询用户列表
					if(ugrade!=""&&ugrade!=null){
						type15(pageIndex,uname,ugrade);
					//根据用户昵称查询用户列表
					}else{
						type5(pageIndex,uname)
					}
				}else{
					//根据用户等级查询用户列表
					if(ugrade!=""&&ugrade!=null){
						type6(pageIndex,ugrade);
					//默认无条件查询用户列表
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
function selectFirstUI(){
	var p=$("#p")
	var procince=$(p).find("option:selected").val();
	var c=$("#c")
	var city=$(c).find("option:selected").val();
	var s=$("#s")
	var sex=$(s).find("option:selected").val();
	var uname=$("#uname").val();
	var ugrade=$("#ugrade").val();
	selectAllUI(1,procince,city,sex,uname,ugrade);
}
/**
 * 上一页按钮点击事件
 */
function selectLastUI(){
	var p=$("#p")
	var procince=$(p).find("option:selected").val();
	var c=$("#c")
	var city=$(c).find("option:selected").val();
	var s=$("#s")
	var sex=$(s).find("option:selected").val();
	var uname=$("#uname").val();
	var ugrade=$("#ugrade").val();
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
		selectAllUI(currentPage-1,procince,city,sex,uname,ugrade);
	}
}
/**
 * 下一页按钮点击事件
 */
function  selectNextUI(){
	var p=$("#p")
	var procince=$(p).find("option:selected").val();
	var c=$("#c")
	var city=$(c).find("option:selected").val();
	var s=$("#s")
	var sex=$(s).find("option:selected").val();
	var uname=$("#uname").val();
	var ugrade=$("#ugrade").val();
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
		selectAllUI(pageIndex,procince,city,sex,uname,ugrade);
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndUI(){
	var p=$("#p")
	var procince=$(p).find("option:selected").val();
	var c=$("#c")
	var city=$(c).find("option:selected").val();
	var s=$("#s")
	var sex=$(s).find("option:selected").val();
	var uname=$("#uname").val();
	var ugrade=$("#ugrade").val();
	var endPage=parseInt($("#endPage").html());
	selectAllUI(endPage,procince,city,sex,uname,ugrade);
}
/**
 * 跳转至指定页面点击事件
 */
function selectIndexUI(){
	var p=$("#p")
	var procince=$(p).find("option:selected").val();
	var c=$("#c")
	var city=$(c).find("option:selected").val();
	var s=$("#s")
	var sex=$(s).find("option:selected").val();
	var uname=$("#uname").val();
	var ugrade=$("#ugrade").val();
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
		selectAllUI(pageIndex,procince,city,sex,uname,ugrade);
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
 * 用户性别下拉框内容改变事件
 */
function selectUIBySex(){
	var pageIndex=1;
	var p=$("#p")
	var procince=$(p).find("option:selected").val();
	var c=$("#c")
	var city=$(c).find("option:selected").val();
	var s=$("#s")
	var sex=$(s).find("option:selected").val();
	var uname=$("#uname").val();
	var ugrade=$("#ugrade").val();
	selectAllUI(pageIndex,procince,city,sex,uname,ugrade);
}
/**
 * 搜索超链接点击事件
 */
function selectUIByParam(){
	var pageIndex=1;
	var p=$("#p")
	var procince=$(p).find("option:selected").val();
	var c=$("#c")
	var city=$(c).find("option:selected").val();
	var s=$("#s")
	var sex=$(s).find("option:selected").val();
	var uname=$("#uname").val();
	var ugrade=$("#ugrade").val();
	selectAllUI(pageIndex,procince,city,sex,uname,ugrade);
}
/**
 * 默认无条件查询用户列表
 * @param pageIndex
 */
function type1(pageIndex){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectAllUI.do",{"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
/**
 * 根据省份查询用户列表
 * @param pageIndex 页数索引
 * @param procince 省份
 */
function type2(pageIndex,procince){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByPro.do",{"procince":procince,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据城市查询用户列表
 * @param pageIndex 页数索引
 * @param city 城市
 */
function type3(pageIndex,city){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByCity.do",{"city":city,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据用户性别查询用户列表
 * @param pageIndex 页数索引
 * @param sex 用户性别
 */
function type4(pageIndex,sex){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIBySex.do",{"sex":sex,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据用户昵称查询用户列表
 * @param pageIndex 页数索引
 * @param uname 用户昵称
 */
function type5(pageIndex,uname){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByUname.do",{"uname":uname,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param ugrade 用户级别
 */
function type6(pageIndex,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByUgrade.do",{"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据省份和用户性别查询用户列表
 * @param pageIndex 页数索引
 * @param procince 省份
 * @param sex 用户性别
 */
function type7(pageIndex,procince,sex){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByPS.do",{"procince":procince,"sex":sex,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据省份和用户昵称查询用户列表
 * @param pageIndex 页数索引
 * @param procince 省份
 * @param uname 用户昵称
 */
function type8(pageIndex,procince,uname){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByPUN.do",{"procince":procince,"uname":uname,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据省份和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param procince 省份
 * @param ugrade 用户级别
 */
function type9(pageIndex,procince,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByPUG.do",{"procince":procince,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据城市和用户性别查询用户列表
 * @param pageIndex 页数索引
 * @param city 城市
 * @param sex 用户性别
 */
function type10(pageIndex,city,sex){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByCS.do",{"city":city,"sex":sex,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据城市和用户昵称查询用户列表
 * @param pageIndex 页数索引
 * @param city 城市
 * @param uname 用户昵称
 */
function type11(pageIndex,city,uname){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByCUN.do",{"city":city,"uname":uname,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据城市和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param city 城市
 * @param ugrade 用户级别
 */
function type12(pageIndex,city,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByCUG.do",{"city":city,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据用户性别和用户昵称查询用户列表
 * @param pageIndex 页数索引
 * @param sex 用户性别
 * @param uname 用户昵称
 */
function type13(pageIndex,sex,uname){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIBySUN.do",{"sex":sex,"uname":uname,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据用户性别和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param sex 用户性别
 * @param ugrade 用户级别
 */
function type14(pageIndex,sex,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIBySUG.do",{"sex":sex,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据用户昵称和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param uname 用户昵称
 * @param ugrade 用户级别
 */
function type15(pageIndex,uname,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByUNUG.do",{"uname":uname,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据省份、用户性别和用户昵称查询用户列表
 * @param pageIndex 页数索引
 * @param procince 省份
 * @param sex 用户性别
 * @param uname 用户昵称
 */
function type16(pageIndex,procince,sex,uname){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByPSUN.do",{"procince":procince,"sex":sex,"uname":uname,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据省份、用户性别和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param procince 省份
 * @param sex 用户性别
 * @param ugrade 用户级别
 */
function type17(pageIndex,procince,sex,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByPSUG.do",{"procince":procince,"sex":sex,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据省份、用户昵称和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param procince 省份
 * @param uname 用户昵称
 * @param ugrade 用户级别
 */
function type18(pageIndex,procince,uname,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByPUNUG.do",{"procince":procince,"uname":uname,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据城市、用户性别和用户昵称查询用户列表
 * @param pageIndex 页数索引
 * @param city 城市
 * @param sex 用户性别
 * @param uname 用户昵称
 */
function type19(pageIndex,city,sex,uname){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByCSUN.do",{"city":city,"sex":sex,"uname":uname,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据城市、用户性别和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param city 城市
 * @param sex 用户性别
 * @param ugrade 用户级别
 */
function type20(pageIndex,city,sex,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByCSUG.do",{"city":city,"sex":sex,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据城市、用户昵称和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param city 城市
 * @param uname 用户昵称
 * @param ugrade 用户级别
 */
function type21(pageIndex,city,uname,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByCUNUG.do",{"city":city,"uname":uname,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据用户性别、用户昵称和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param sex 用户性别
 * @param uname 用户昵称
 * @param ugrade 用户级别
 */
function type22(pageIndex,sex,uname,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIBySUNUG.do",{"sex":sex,"uname":uname,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==''){
				u_name+="";
			}else{
				u_name+=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据省份、用户性别、用户昵称和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param province 省份
 * @param sex 用户性别
 * @param uname 用户昵称
 * @param ugrade 用户级别
 */
function type23(pageIndex,province,sex,uname,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByPSUU.do",{"province":province,"sex":sex,"uname":uname,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
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
 * 根据城市、用户性别、用户昵称和用户级别查询用户列表
 * @param pageIndex 页数索引
 * @param city 城市
 * @param sex 性别
 * @param uname 用户昵称
 * @param ugrade 用户级别
 */
function type24(pageIndex,city,sex,uname,ugrade){
	var content1=" ";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>用户编号</th>"+
	"<th>用户昵称</th>"+
	"<th>用户真实姓名</th>"+
	"<th>用户性别</th>"+
	"<th>用户等级</th>"+
	"<th>用户省份</th>"+
	"<th>用户城市</th></tr>";
	$.getJSON("../backUserInfo/selectUIByCSUU.do",{"city":city,"sex":sex,"uname":uname,"ugrade":ugrade,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			var u_name="";
			if(data[0][i].u_name==null){
				u_name="";
			}else{
				u_name=data[0][i].u_name;
			}
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value="+data[0][i].u_id+
					" class='acb' />"+
			"</td><td>"+data[0][i].u_id+
			"</td><td>"+data[0][i].u_nick+
			"</td><td>"+u_name+
			"</td><td>"+data[0][i].u_sex+
			"</td><td>"+data[0][i].u_level+
			"</td><td>"+data[0][i].u_pro+
			"</td><td>"+data[0][i].u_city+
			"</td></tr>";
		}
		$("#countRecord").html(data[1][1]);
		$("#currentPage").html(pageIndex);
		$("#endPage").html(data[1][3]);
		content1+="</table>";
		$("#ui_tb").html(content1);
	});
}








