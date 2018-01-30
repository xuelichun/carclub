$(function(){
	messagetype();
	var selPro=$("#feeType");
	var feeType=$(selPro).find("option:selected").val();
	var pageIndex=1;
	sendMsgAr(feeType,pageIndex);
});
/**
 * 判断消息类型
 * @param valuse
 */
function change(valuse){


	if (valuse=="1"){
		document.getElementById("fasong").style.display="";
		document.getElementById("include").style.display="none";
		document.getElementById("d1").style.display="none";
		document.getElementById("d2").style.display="none";
		document.getElementById("qianfeileixing").style.display="none";
		document.getElementById("ui_tb1").style.display="none";
		document.getElementById("uitbh3o").style.display="none";
		document.getElementById("uicontent").style.display="none";
		
	
	}
	if(valuse=="0")
	{    document.getElementById("fasong").style.display="";
		document.getElementById("qianfeileixing").style.display="none";
		document.getElementById("ui_tb1").style.display="none";
		document.getElementById("uitbh3o").style.display="none";
		
		document.getElementById("uicontent").style.display="none";
		document.getElementById("include").style.display="";
		document.getElementById("d1").style.display="";
		document.getElementById("d2").style.display="";
		
	
	}
};
/**
 *添加消息
 */
function search(){
	if(checkMsg()){
	var t=$("#fyXq1").val();

	if(t==1){
		addFusMsg();
	}
	if(t==0){
		addmessage();
	}
	}
}
/**
 *添加消息
 */
function search1(){
	if(checkMsg()){
	
		chk1()
	}
}
/**
 * 发布全网消息
 */
function addFusMsg(){
var fm_msg=$("#fm_msg").val();
var width=170;
var height=40;
var left=780;
var top=300;
var mt_id=$("#fyXq2").val();

$.getJSON("../FusMsga.do",{"fm_msg":fm_msg,"mt_id":mt_id},function(data){

	if(data=="1"){
		var title="操作成功";
		var icon="face-smile";
		var content="添加成功";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
		
	}else{
		
		var title="操作失败";
		var icon="face-sad";
		var content="添加失敗";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}
});
}
/**
 * 添加单用户消息
 */
function addmessage()
{
	var fm_msg=$("#fm_msg").val();
	var mt_id=$("#fyXq2").val();
	
    var ga_id=1;
    chk();
}   
/**
 * 验证消息内容是否为空
 * @returns {Boolean}
 */
function checkMsg(){
	var fa_title=$("#fm_msg").val();
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if($("#fm_msg").val().trim()==''){
	
		var content="消息内容不能为空";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
		
		return false;
	}else{
		if($("#fm_msg").val().length>250){
			
			var content="消息内容不能大于250字";
			var id=1;
			opTips(icon,id,title,content,width,height,left,top);
			return false;
		}else{	
		return true;
		}
	}
}
/**
 * 查询欠费类型
 */
function selectOpPay(){
	var selPro=$("#feeType");
	var feeType=$(selPro).find("option:selected").val();
	var pageIndex=1;
	sendMsgAr(feeType,pageIndex);
}
/**
 * 查询欠费会主列表
 * @param feeType 欠费类型
 * @param pageIndex 当前页数
 */
function sendMsgAr(feeType,pageIndex){
	var content1="";
	content1+="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);'></th>"+
	"<th>车友会编号</th>"+
	"<th>会长编号</th>"+
	"<th>欠费日期</th>"+
	"<th>欠费天数</th>";
	$.getJSON("../backPreInfo/selectSendArPIList.do",{"feeType":feeType,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content1+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck1' value='"+data[0][i].p_id+"' class='acb' />"+
			"</td><td>"+data[0][i].club_id+
			"</td><td>"+data[0][i].p_id+
			"</td><td>"+data[0][i].pr_time+
			"</td><td>"+data[0][i].pr_day+
			"</td></tr>";
		}
		$("#countRecord1").html(data[1][1]);
		$("#currentPage1").html(pageIndex);
		$("#endPage1").html(data[1][3]);
		content1+="</table>";
		$("#ui_tb1").html(content1);
	});
}
/**
 * 获取复选框的值
 */
function chk1(){ 
	checkMsg();
	var m_con=$("#fm_msg").val();
	var mt_id=$("#fyXq2").val();
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	
	var s =""; 
	 var temp =""; 
	 var a = document.getElementsByName("IDCheck1"); 
	 for ( var i = 0; i < a.length; i++) 
	 { 
		 if (a[i].checked) { 
			 temp = a[i].value; 
	        s = s +temp + "," ;
	                        } 
		 
    }
	 if(s!=''){
	$.getJSON("../messagea.do",{"mt_id":mt_id,"m_con":m_con,"s":s},function(data){
		if(data==1){
			var title="操作成功";
			var icon="face-smile";
			var content="添加成功";
			var id=1;
			opTips(icon,id,title,content,width,height,left,top);
			
		}
		else{
			var title="操作失败";
			var icon="face-sad";
		
			var content="添加失败";
			var id=1;
			opTips(icon,id,title,content,width,height,left,top);
		}
		
	
	});
	 }
	if(s==''){
		var title="操作失败";
		var icon="face-sad";
		var content="接收人不能为空";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	} 
	
	};
	
/**
 * 首页按钮点击事件
 */
function selectFirstAr1(){
	var selPro=$("#feeType");
	var feeType=$(selPro).find("option:selected").val();
	var pageIndex=1;
	sendMsgAr(feeType,pageIndex);
}
/**
 * 上一页按钮点击事件
 */
function selectLastAr1(){
	var currentPage=parseInt($("#currentPage1").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if(currentPage-1<=0){
		var content="没有上一页了";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		var selPro=$("#feeType");
		var feeType=$(selPro).find("option:selected").val();
		
		sendMsgAr(feeType,currentPage-1);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAr1(){
	var currentPage=parseInt($("#currentPage1").html());
	var endPage=parseInt($("#endPage1").html());
	var pageIndex=0;
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if(currentPage-endPage>=0){
		
		var content="没有下一页了";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		pageIndex=currentPage+1;
		$("#currentPage1").html(pageIndex);
		var selPro=$("#feeType");
        var feeType=$(selPro).find("option:selected").val();
		
		sendMsgAr(feeType,pageIndex);
		
		
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndAr1(){
	var endPage=parseInt($("#endPage1").html());
	var selPro=$("#feeType");
    var feeType=$(selPro).find("option:selected").val();
	
	sendMsgAr(feeType,endPage);
	
}
	

/**
 * 跳转指定页面按钮点击事件
 */
function selectIndexAr1(){
	var pageIndex=$("#text11").val();
	var endPage=parseInt($("#endPage1").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if(pageIndex==""||pageIndex==null){
	
		var content="页数索引不能为空";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex<=0){
	
		var content="页数索引无效";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex-endPage>0){
		var content="页数索引超出范围";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		var selPro=$("#feeType");
	    var feeType=$(selPro).find("option:selected").val();
		
		sendMsgAr(feeType,pageIndex);
		
	}
}
/**
 * 获取复选框的值
 */
function chk(){ 
	var m_con=$("#fm_msg").val();

	var mt_id=$("#fyXq2").val();
    
    var ga_id=1;
  
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	
	var s =""; 
	 var temp =""; 
	 var a = document.getElementsByName("IDCheck"); 
	 for ( var i = 0; i < a.length; i++) 
	 { 
		 if (a[i].checked) { 
			 temp = a[i].value; 
	        s = s +temp + "," ;
	                        } 
		 
    }
	 if(s!=''){
	$.getJSON("../messagea.do",{"mt_id":mt_id,"m_con":m_con,"s":s},function(data){
		if(data==1){
			var title="操作成功";
			var icon="face-smile";
			var content="添加成功";
			var id=1;
			opTips(icon,id,title,content,width,height,left,top);
		}
		else{
			var icon="face-sad";
		    var title="操作失败";
			var content="添加失败";
			var id=1;
			opTips(icon,id,title,content,width,height,left,top);
		}
		
	
	});
	 }
	if(s==''){
		var icon="face-sad";
	    var title="操作失败";
		var content="接收人不能为空";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	} 
	
	};
	/**
	 * 欠费查询事件
	 */
function qianfeichauxn(){
	
	document.getElementById("qianfeileixing").style.display="";

	document.getElementById("ui_tb1").style.display="";
	document.getElementById("uitbh3o").style.display="";
	
	document.getElementById("fasong").style.display="none";

	document.getElementById("uicontent").style.display="";
	document.getElementById("include").style.display="none";
	document.getElementById("d1").style.display="none";
	document.getElementById("d2").style.display="none";
	

}
	
	
	
	
	
/**
 * 查找所有消息类型
 */
function messagetype(){
	
var text="消息类型：<select name='fangyuanEntity.fyXqCode' id='fyXq2' class='ui_select01' onchange='getmessagetypecon(this.value);' style='height:38px;width:150px;'>;"
	
	$.getJSON("../messageg.do",{},function(data){
		
		for(var i=0;i<data.length;i++){
			
				text+="<option value="+data[i].mt_id+">"+data[i].mt_title+"</option>"
		
		}
		
		text+="</select>";
		$("#messagetype").html(text);
	});
	
}
/**
 * 根据消息类型id查询消息内容
 * @param valuse
 */
 function getmessagetypecon(valuse){
	 if(valuse==0){
		 
		 document.getElementById("addmessagetype").style.display="";
		
		
	 }
	 else{
		
		 $.getJSON("../messagek.do",{"mt_id":valuse},function(data){
		 $("#fm_msg").html(data.mt_con);
	 });
	 }
 }
/**
 * 验证标题
 * @returns {Boolean}
 */
function checkTitle(){
	if($("#mt_title").val().trim()==''){
		$("#mttitle").html("信息不能为空");
		$("#mttitle").prop("style","color:#f00;");
		return false;
	}else{
		$("#mttitle").html("");
		return true;
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

function aa(v){
	$("#"+v).css("background-color","#CDDAEB");
	
}
function bb(p){
	$("#"+p).css("background-color","#ffffff")
}