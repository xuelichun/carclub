
$(function(){

	selectfusmsg(1);
	yeshu();
	
});


/**
 * 判断查询全网消息还是单人消息
 * @param values
 */
function change(values){
	
var pageindex=1
	if(values=="0"){
		$("#uitbh30").prop("style","display:;");
		$("#d3").prop("style","display:;");
		$("#d31").prop("style","display:none;");
		$("#uitbh301").prop("style","display:none;");
		$("#d33").prop("style","display:none;");
		$("#uitbh303").prop("style","display:none;");
	
		yeshu2();
		selectmessage(1);
	
    }
	else{
		$("#uitbh30").prop("style","display:;");
		$("#d3").prop("style","display:;");
		$("#d31").prop("style","display:none;");
		$("#uitbh301").prop("style","display:none;");
		$("#d33").prop("style","display:none;");
		$("#uitbh303").prop("style","display:none;");
		selectfusmsg(1);
		yeshu();
	}
 
	

	 

}	


/**
 * 显示页数事件
 */
function yeshu(){
	var countRecorgd=0;
	$.getJSON("../FusMsgd.do",function(data){
		
	countRecorgd=data;
	$("#countRecord").html(countRecorgd);

	$("#endPage").html(parseInt((data-1)/10)+1);
});
}
/**
 * 显示页数2
 */
function yeshu2(){
	var countRecorgd=0;
	$.getJSON("../messageh.do",function(data){
		
	countRecorgd=data;
	$("#countRecord").html(countRecorgd);

	$("#endPage").html(parseInt((data-1)/10)+1);
});
}
/**
 * 首页按钮点击事件
 */
function selectStartAn(){
	if($("#fyXq1").val()==1){
	selectfusmsg(1);
	yeshu();
	}
	if($("#fyXq1").val()==0){
	selectmessage(1);
	yeshu2();
}
}
/**
 * 上一页按钮点击事件
 */
function selectFrontAn(){
	var currentPage=parseInt($("#currentPage").html());
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
		if($("#fyXq1").val()==1){
			selectfusmsg(currentPage-1);
	}	if($("#fyXq1").val()==0){
		selectmessage(currentPage-1);
	};
	};
}
/**
 * 下一页按钮点击事件
 */
function selectNextAn(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var title="操作失败";
	var pageIndex=0;
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
		$("#currentPage").html(pageIndex);
		if($("#fyXq1").val()==1){
			selectfusmsg(pageIndex);
	}	if($("#fyXq1").val()==0){
		selectmessage(pageIndex);
	}
		
	}
}
/**
 * 尾页按钮点击事件
 */
function selectEndAn(){
	var endPage=parseInt($("#endPage").html());
	if($("#fyXq1").val()==1){
		selectfusmsg(endPage);
}	if($("#fyXq1").val()==0){
	selectmessage(endPage);
}
	
}
/**
 * 跳转指定页面按钮点击事件
 */
function selectIndexAn(){
	var pageIndex=$("#text1").val();
	var endPage=parseInt($("#endPage").html());
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
		if($("#fyXq1").val()==1){
			selectfusmsg(pageIndex);
	}	if($("#fyXq1").val()==0){
		selectmessage(pageIndex);
	}
	}
}
/**
 * 分页查询全用户消息
 */
function selectfusmsg(pageIndex){
	var context="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>消息编号</th>"+
	"<th>发送时间</th>"+
	"<th>消息类型</th>"+
	"<th>消息详情</th>"+
	"<th><a href='javascript:deletesomefus()'>批量删除</a></th>";
	$.getJSON("../FusMsgb.do",{"pageIndex":pageIndex},function(data){
		
		for(var i=0;i<data.length;i++){
		
			context+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck1' value='"+data[i].fm_id+"' class='acb' />"+
			"</td><td>"+data[i].fm_id+
			"</td><td>"+data[i].fm_date+
			
			"</td><td><lable onmouseover=viewtype(\""+data[i].mt_id+"\")>"+data[i].mt_id+"</lable>"+
			"</td><td><lable onmouseover=viewfusmsg(\""+data[i].fm_id+"\")>详情</lable>"+
			
			"</td><td><a href='javascript:deletefusmsg("+data[i].fm_id+")'>删除</a>"
			"</td></tr>";
			
		}
		
		$("#currentPage").html(pageIndex);
		
		context+="</table>";
		$("#d3").html(context);
		
	});
}
/** 
 * 分页查询单用户消息
 * @param pageIndex
 */
function selectmessage(pageIndex){
	var context="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>消息编号</th>"+
	"<th>发送时间</th>"+
	"<th>消息类型</th>"+
	"<th>接收人id</th>"+
	"<th>消息详情</th>"+
	"<th><a href='javascript:deletesome()'>批量删除</a></th>";
	$.getJSON("../messagec.do",{"pageIndex":pageIndex},function(data){
		
		for(var i=0;i<data.length;i++){
			context+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='"+data[i].m_id+"' class='acb' />"+
			"</td><td>"+data[i].m_id+
			"</td><td>"+data[i].m_time+
			"</td><td><lable onmouseover=viewtype(\""+data[i].mt_id+"\")>"+data[i].mt_id+"</lable>"+
			"</td><td><lable onmouseover=viewunick(\""+data[i].mu_id+"\")>"+data[i].mu_id+"</lable>"+
			"</td><td><lable onmouseover=viewmessage("+data[i].m_id+")>详情</lable>"+
			"</td><td><a href='javascript:deletemessage("+data[i].m_id+")'>删除</a>"
			"</td></tr>";
			
		}
		
		$("#currentPage").html(pageIndex);
		
		context+="</table>";
		$("#d3").html(context);
		
	});
}

/**
 * 删除全网消息
 */
function deletefusmsg(id){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){
		$.getJSON("../FusMsge.do",{"fm_id":id},function(data){
			if(data=="1"){
				var title="操作成功";
				 var icon="face-smile";
					var content="删除成功";
					var id=1;
					opTips(icon,id,title,content,width,height,left,top);
			}else{
				var title="操作失败";
				 var icon="face-sad";
					var content="删除失败";
					var id=1;
					opTips(icon,id,title,content,width,height,left,top);
			}
			selectfusmsg(1);
			yeshu();
		});
	}
}
/**
 * 删除单人消息
 */
function deletemessage(id){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
			if(confirm("確定要刪除么？？")){
				$.getJSON("../messageb.do",{"m_id":id},function(data){
					if(data=="1"){
						var title="操作成功";
						 var icon="face-smile";
							var content="删除成功";
							var id=1;
							opTips(icon,id,title,content,width,height,left,top);
					}else{
						var title="操作失败";
						 var icon="face-sad";
							var content="删除失败";
							var id=1;
							opTips(icon,id,title,content,width,height,left,top);
					}
					selectmessage(1);
					yeshu2();
				});
			}
}
/**
 *批量删除message 
 **/
function deletesome(){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){	
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
	 $.getJSON("../messaget.do",{"s":s},function(data){
		 if(data==1){
			 var title="操作成功";
			 var icon="face-smile";
				var content="删除成功";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			 
		 }
		 if(data==0){
			 var title="操作失败";
			 var icon="face-sad";
				var content="删除失败";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
		 }
		 selectmessage(1);
			yeshu2();
	 });
	}
	 }
	if(s==''){
		var title="操作失败";
		var icon="face-sad";
		var content="未选择删除对象";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	} 
	
}

/**
 * 批量删除fusmsg
 */
function deletesomefus(){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){	
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
	 $.getJSON("../FusMsgg.do",{"s":s},function(data){
		 if(data==1){
			 var title="操作成功";
			 var icon="face-smile";
				var content="删除成功";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			 
			 
		 }
		 if(data==0){
			 var title="操作失败";
			 var icon="face-sad";
				var content="删除失败";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
		 }
		 selectfusmsg(1);
			yeshu();
	 });
	 }
	 }
	if(s==''){
		var title="操作失败";
		var icon="face-sad";
		var content="未选择删除对象";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	} 
}
/**
 * 输入接收用户id查询单人消息事件
 */
function serchmessagebyuid(){
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if($("#mu_id").val().trim()==''){
		
		var content="请输入接收人id";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}
	else{
		$("#d33").prop("style","display:none;");
		$("#uitbh303").prop("style","display:none;");
	
		$("#uitbh30").prop("style","display:none;");
		$("#d3").prop("style","display:none;");
		$("#d31").prop("style","display:;");
		$("#uitbh301").prop("style","display:;");
		var mu_id=$("#mu_id").val();
		
		var pageIndex=1;
		selectmessage1(mu_id,pageIndex);
		yeshu1(mu_id);
	}
	
}
/**
 * 根据接收人id分页查询单人消息
 */
function selectmessage1(mu_id,pageIndex){
	var context="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>消息编号</th>"+
	"<th>发送时间</th>"+
	"<th>消息类型</th>"+
	"<th>接收人id</th>"+
	"<th>消息详情</th>"+
	"<th><a href='javascript:deletesome1()'>批量删除</a></th>";
	$.getJSON("../messageo.do",{"mu_id":mu_id,"pageIndex":pageIndex},function(data){
		
		for(var i=0;i<data.length;i++){
			context+="<tr id='t"+i+"' onmouseover='cc(t"+i+")' onmouseout='dd(t"+i+")'><td><input type='checkbox' name='IDCheck1' value='"+data[i].m_id+"' class='acb' />"+
			"</td><td>"+data[i].m_id+
			"</td><td>"+data[i].m_time+
			"</td><td><lable onmouseover=viewtype(\""+data[i].mt_id+"\")>"+data[i].mt_id+"</lable>"+
			"</td><td>"+data[i].mu_id+
		
			"</td><td><lable onmouseover=viewmessage("+data[i].m_id+")>详情</lable>"+
			"</td><td><a href='javascript:deletemessage1("+data[i].m_id+")'>删除</a>"
			"</td></tr>";
			
		}
		
		
		$("#currentPage1").html(pageIndex);
		
		context+="</table>";
		$("#d31").html(context);
		
	});
}
/**
 * 接收用户id查询页数
 */
function yeshu1(mu_id){
	
	var countRecorgd=0;
	$.getJSON("../messagep.do",{"mu_id":mu_id},function(data){
		
	countRecorgd=data;

	$("#countRecord1").html(countRecorgd);

	$("#endPage1").html(parseInt((data-1)/10)+1);
});
}

/**
 * 首页按钮点击事件
 */
function selectStartAn1(){
	
	var mu_id=$("#mu_id").val();
	var pageIndex=1;
	selectmessage1(mu_id,pageIndex);
	yeshu1(mu_id);
		
	
}
/**
 * 上一页按钮点击事件
 */
function selectFrontAn1(){
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
		var mu_id=$("#mu_id").val();
		selectmessage1(mu_id,currentPage-1);
			
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAn1(){
	var currentPage=parseInt($("#currentPage1").html());
	var endPage=parseInt($("#endPage1").html());
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
		 var pageIndex=currentPage+1;
		$("#currentPage1").html(pageIndex);
		
		var mu_id=$("#mu_id").val();
		selectmessage1( mu_id,pageIndex);
			
		
	}
}

/**
 * 尾页按钮点击事件
 */
function selectEndAn1(){
	var endPage=parseInt($("#endPage1").html());
	var mu_id=$("#mu_id").val();
	selectmessage1( mu_id,endPage);
		
	
	
		
	
}
/**
 * 跳转指定页面按钮点击事件
 */
function selectIndexAn1(){
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
		
		
		var mu_id=$("#mu_id").val();
		selectmessage1( mu_id,pageIndex);
	}
}

	
/**
 *批量删除message 
 **/
function deletesome1(){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){	
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
	 $.getJSON("../messaget.do",{"s":s},function(data){
		 if(data==1){
			 var title="操作成功";
			 var icon="face-smile";
				var content="删除成功";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			 
		 }
		 if(data==0){
			 var title="操作失败";
			 var icon="face-sad";
				var content="删除失败";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			 
		 }
		 var mu_id=$("#mu_id").val();
		 selectmessage1(mu_id,1);
			yeshu1( mu_id);
	 });
	}
	 }
	if(s==''){
		var title="操作失败";
		var icon="face-sad";
		var content="未选择删除对象";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	} 
	
}
/**
 * 接收用户id查询单删
 */
function deletemessage1(id){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){
		
		$.getJSON("../messageb.do",{"m_id":id},function(data){
			if(data=="1"){
				 var title="操作成功";
				 var icon="face-smile";
					var content="删除成功";
					var id=1;
					opTips(icon,id,title,content,width,height,left,top);
			}else{
				 var title="操作失败";
				 var icon="face-sad";
					var content="删除失败";
					var id=1;
					opTips(icon,id,title,content,width,height,left,top);
				 
			}
			 var mu_id=$("#mu_id").val();
			 selectmessage1( mu_id,1);
				yeshu1( mu_id);
		});
	}
}
/**
 * 重载页面
 */
function fanhui(){
	selectfusmsg(1);
	yeshu();
	$("#uitbh30").prop("style","display:;");
	$("#d3").prop("style","display:;");
	$("#d31").prop("style","display:none;");
	$("#uitbh301").prop("style","display:none;");
	$("#d33").prop("style","display:none;");
	$("#uitbh303").prop("style","display:none;");
}
/**
 * 输入昵称查找信息事件
 */
function serchmessagebyunick(){
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if($("#u_nick").val().trim()==''){
		
		var content="请输入接收人昵称";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}
	else{
	
		$("#uitbh30").prop("style","display:none;");
		$("#d3").prop("style","display:none;");
		$("#d31").prop("style","display:none;");
		$("#uitbh301").prop("style","display:none;");
		$("#d33").prop("style","display:;");
		$("#uitbh303").prop("style","display:;");
		
		var u_nick=$("#u_nick").val();
		
		var pageIndex=1;
		selectmessage3(u_nick,pageIndex);
		yeshu3(u_nick);
	}
	

	
	
}
/**
 * 根据昵称 分页查询个人消息
 * @param u_nick 接收人昵称
 * @param pageIndex 当前页数
 */
function selectmessage3(u_nick,pageIndex){
	var context="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'><input type='checkbox' id='all' onclick='selectOrClearAllCheckbox(this);' /></th>"+
	"<th>消息编号</th>"+
	"<th>发送时间</th>"+
	"<th>消息类型</th>"+
	"<th>接收人id</th>"+
	"<th>消息详情</th>"+
	"<th><a href='javascript:deletesome3()'>批量删除</a></th>";
	$.getJSON("../messageu.do",{"u_nick":u_nick,"pageIndex":pageIndex},function(data){
		
		for(var i=0;i<data.length;i++){
			context+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck3' value='"+data[i].m_id+"' class='acb' />"+
			"</td><td>"+data[i].m_id+
			"</td><td>"+data[i].m_time+
			"</td><td><lable onmouseover=viewtype(\""+data[i].mt_id+"\")>"+data[i].mt_id+"</lable>"+
			"</td><td><lable onmouseover=viewunick(\""+data[i].mu_id+"\")>"+data[i].mu_id+"</lable>"+
			"</td><td><lable onmouseover=viewmessage("+data[i].m_id+")>详情</lable>"+
			"</td><td><a href='javascript:deletemessage3("+data[i].m_id+")'>删除</a>"
			"</td></tr>";
			
		}
		
		$("#currentPage3").html(pageIndex);
		
		context+="</table>";
		$("#d33").html(context);
		
	});
}
/**
 * 根据昵称查找页数
 * @param u_nick 接收人昵称
 */
function yeshu3(u_nick){
	
	var countRecorgd=0;
	$.getJSON("../messagew.do",{"u_nick":u_nick},function(data){
		
	countRecorgd=data;

	$("#countRecord3").html(countRecorgd);

	$("#endPage3").html(parseInt((data-1)/10)+1);
});
}

/**
 * 首页按钮点击事件
 */
function selectStartAn3(){
	
	var u_nick=$("#u_nick").val();
	
	selectmessage3(u_nick,1);
	yeshu3(u_nick);
		
	
}
/**
 * 上一页按钮点击事件
 */
function selectFrontAn3(){
	var currentPage=parseInt($("#currentPage3").html());
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
		var u_nick=$("#u_nick").val();
		selectmessage3(u_nick,currentPage-1);
			
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAn3(){
	var currentPage=parseInt($("#currentPage3").html());
	var endPage=parseInt($("#endPage3").html());
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
		 var pageIndex=currentPage+1;
		$("#currentPage3").html(pageIndex);
		
		var u_nick=$("#u_nick").val();
		selectmessage3(u_nick,pageIndex);
			
		
	}
}

/**
 * 尾页按钮点击事件
 */
function selectEndAn3(){
	var endPage=parseInt($("#endPage3").html());
	var u_nick=$("#u_nick").val();
	selectmessage3( u_nick,endPage);
		
	
	
		
	
}
/**
 * 跳转指定页面按钮点击事件
 */
function selectIndexAn3(){
	var pageIndex=$("#text13").val();
	var endPage=parseInt($("#endPage3").html());
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
		var id=2;
		opTips(icon,id,title,content,width,height,left,top);
	}else if(pageIndex-endPage>0){
		var content="页数索引超出范围";
		var id=3;
		opTips(icon,id,title,content,width,height,left,top);
	}else{
		
		
		var u_nick=$("#u_nick").val();
		selectmessage3( u_nick,pageIndex);
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
 *批量删除message 
 **/
function deletesome3(){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){	
	var s =""; 
	 var temp =""; 
	 var a = document.getElementsByName("IDCheck3"); 
	 for ( var i = 0; i < a.length; i++) 
	 { 
		 if (a[i].checked) { 
			 temp = a[i].value; 
	        s = s +temp + "," ;
	                        } 
		 
     }
	 if(s!=''){
	 $.getJSON("../messaget.do",{"s":s},function(data){
		 if(data==1){
			 var title="操作成功";
			 var icon="face-smile";
				var content="删除成功";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			 
		 }
		 if(data==0){
			 var title="操作失败";
			 var icon="face-sad";
				var content="删除失败";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
		 }
		 var u_nick=$("#u_nick").val();
		 selectmessage3(u_nick,1);
			yeshu3(u_nick);
	 });
	 }
	 }
	if(s==''){
		var title="操作失败";
		var icon="face-sad";
		var content="未选择删除对象";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	} 
}
/**
 * 删除单人消息
 * @param id 单人消息id
 */
function deletemessage3(id){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){
		
		$.getJSON("../messageb.do",{"m_id":id},function(data){
			if(data=="1"){
				 var title="操作成功";
				 var icon="face-smile";
					var content="删除成功";
					var id=1;
					opTips(icon,id,title,content,width,height,left,top);
				 
			}else{
				 var title="操作失败";
				 var icon="face-sad";
					var content="删除失败";
					var id=1;
					opTips(icon,id,title,content,width,height,left,top);
			}
			 var u_nick=$("#u_nick").val();
			 selectmessage3(u_nick,1);
				yeshu3(u_nick);
		});
	}
}
/**
 * 重载页面
 */
function fanhui3(){
	selectfusmsg(1);
	yeshu();
	$("#uitbh30").prop("style","display:;");
	$("#d3").prop("style","display:;");
	$("#d31").prop("style","display:none;");
	$("#uitbh301").prop("style","display:none;");
	$("#d33").prop("style","display:none;");
	$("#uitbh303").prop("style","display:none;");
}

/** 
 * 根据消息类型编号查询消息类型标题
 * * @param mt_id 消息类型编号
 * 
 */
function viewtype(mt_id){
	 $.getJSON("../messagek.do",{"mt_id":mt_id},function(data){
		var title=data.mt_title;
		var content=data.mt_title;
		var width=200;
		var height=100;
		var left=750;
		var top=300;
		anDetail(mt_id,title,content,width,height,left,top,2);
	});
}

/**
 * 根据消息id 查询全用户消息
 * @param fm_id 消息id
 */
function viewfusmsg(fm_id){
	 $.getJSON("../FusMsgc.do",{"fm_id":fm_id},function(data){
			var title=data.fm_msg;
			var content=data.fm_msg;
			var width=300;
			var height=200;
			var left=800;
			var top=300;
			anDetail(fm_id,title,content,width,height,left,top,2);
		});
}

/**
 * 根据用户id 查询用户昵称
 * @param u_id 用户id
 */
function viewunick(u_id){
	$.getJSON("../user/selectHeadAndNick.do",{"u_id":u_id},function(data){
			var title=data.u_id;
			var content=data.u_nick;
			var width=200;
			var height=100;
			var left=750;
			var top=300;
			anDetail(u_id,title,content,width,height,left,top,2);
		});
}

/**
 * 根据消息全用户消息id 查询消息内容
 * @param m_id 消息id
 */
function viewmessage(m_id){
	$.getJSON("../messagei.do",{"m_id":m_id},function(data){
	
			var title=data.m_con;
			var content=data.m_con;
			var width=300;
			var height=200;
			var left=750;
			var top=300;
			anDetail(m_id,title,content,width,height,left,top,2);
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
function anDetail(id,title,content,width,height,left,top,time){
	var list = art.dialog.list;
	for (var i in list) {
	    list[i].close();
	};
	art.dialog({
		id:id,
		title:title,
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

function aa(v){
	$("#"+v).css("background-color","#CDDAEB");
	
	
}
function bb(p){
	$("#"+p).css("background-color","#ffffff");
}
function cc(v){
	document.getElementByld(v).style.backgroundColor="#CCDDAEB";
//	$("#"+s).css("background-color","#CDDAEB");
//	$("#"+v).prop("styleBackgroundColor",":#CDDAEB");

	//$("#uitbh301").prop("style","display:none;");
	
}
function dd(p){
	$("#"+g).css("background-color","#ffffff");
}