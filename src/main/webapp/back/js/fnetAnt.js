
/**
 * 分页查询公告
 */
$(function(){
	selectAllAn(1);
	yeshu();
	
});

/**
 * 分页查询所有公告
 * @param page
 */
function selectAllAn(pageIndex){
	var context="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'></th>"+
	"<th>公告编号</th>"+
	"<th>公告标题</th>"+
	"<th>发送人id</th>"+
	"<th>发送时间</th>"+
	"<th>公告信息</th>"+
	"<th><a href='javascript:deletesome()'>批量删除</a></th>"
	$.getJSON("../FnetAntb.do",{"pageIndex":pageIndex},function(data){
	
		for(var i=0;i<data.length;i++){
			context+="<tr id='"+i+"' onmouseover='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck' value='"+data[i].fa_id+"' class='acb' />"+
			"</td><td>"+data[i].fa_id+
			"</td><td>"+data[i].fa_title+
			"</td><td>"+data[i].ga_id+
			"</td><td>"+data[i].p_time+
			"</td><td><lable onmouseover=viewfnetant("+data[i].fa_id+")>详情</lable>"+
			"</td><td><a href='javascript:deleteFnetAnt("+data[i].fa_id+")'>删除</a>"
			"</td></tr>";
			
		}
		
		$("#currentPage").html(pageIndex);
		
		context+="</table>";
		$("#d3").html(context);
		
	});
}
/**
 * 显示页数事件
 */
function yeshu(){
	var countRecorgd=0;
	$.getJSON("../FnetAntd.do",function(data){
		
	countRecorgd=data;
	
	$("#countRecord").html(countRecorgd);

	$("#endPage").html(parseInt((data-1)/10)+1);
});
}

/**
 * 首页按钮点击事件
 */
function selectStartAn(){
	
	
	selectAllAn(1);
	yeshu();
		
	
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
		opTips(icon,id,title,content,width,height,left,top)
	}else{
		
		selectAllAn(currentPage-1);
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAn(){
	var currentPage=parseInt($("#currentPage").html());
	var endPage=parseInt($("#endPage").html());
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if(currentPage-endPage>=0){
		
		var content="没有下一页了";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top)
	}else{
		 var pageIndex=currentPage+1;
		$("#currentPage").html(pageIndex);
		
		selectAllAn(pageIndex);	
	}
}

/**
 * 尾页按钮点击事件
 */
function selectEndAn(){
	var endPage=parseInt($("#endPage").html());
	
	selectAllAn(endPage);
		
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
		opTips(icon,id,title,content,width,height,left,top)
	}else if(pageIndex<=0){
		
		var content="页数索引无效";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top)
		
	}else if(pageIndex-endPage>0){
		var content="页数索引超出范围";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top)
	}else{
		
		selectAllAn(pageIndex);
		
	}
}




/**
 * 添加公告
 */
function addFnetAnt(){
var fa_title=$("#fa_title").val();

var fa_msg=$("#fa_msg").val();



if(checkMsg()){

$.getJSON("../FnetAnta.do",{"fa_title":fa_title,"fa_msg":fa_msg},function(data){
	
	if(data=="1"){
		alert("添加成功");
	}else{
	   alert("添加失败");
	}
});

}
} 
/**
 * 删除公告
 * @param id
 */
function deleteFnetAnt(id){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){
		
		$.getJSON("../FnetAnte.do",{"fa_id":id},function(data){
			if(data=="1"){
				var title="操作成功";
				 var icon="face-smile";
					var content="删除成功";
					var id=1;
					opTips(icon,id,title,content,width,height,left,top);
			}else{
				var title="操作失败";
				 var icon="face-smile";
					var content="删除失败";
					var id=1;
					opTips(icon,id,title,content,width,height,left,top);
			}
			selectAllAn(1);
			yeshu();
		});

	}
	
}
/**
 * 检查公告标题是否空
 * @returns {Boolean}
 */
function checkTitle(){
	var fa_title=$("#fa_title").val();
	
	if($("#fa_title").val().trim()==''){
		$("#title").html("标题不能为空");
		
		$("#title").prop("style","color:#f00;");
		return false;
	}else{
		$("#title").html("");
		return true;
	}
}
/**
 * 检查公告内容是否空
 * @returns {Boolean}
 */
function checkMsg(){
	
	if($("#fa_msg").val().trim()==''){
		$("#msg").html("信息不能为空");
		$("#msg").prop("style","color:#f00;");
		return false;
	}else{
		
		if($("#fa_msg").val().length>250){
			$("#msg").html("信息不能超过250字");
			$("#msg").prop("style","color:#f00;");
			return false;
		}
		else{
		$("#msg").html("");
		return true;
		}
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
	 $.getJSON("../FnetAnth.do",{"s":s},function(data){
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
		 selectAllAn(1);
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
 * 输入标题查询事件
 */
function serchtitle(){
	var title="操作失败";
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	var icon="face-sad";
	if($("#fa_title1").val().trim()==''){
		
		var content="请输入消息标题";
		var id=1;
		opTips(icon,id,title,content,width,height,left,top);
	}
	else{
	
		$("#uitbh30").prop("style","display:none;");
		$("#d3").prop("style","display:none;");
		$("#d31").prop("style","display:;");
		$("#uitbh301").prop("style","display:;");
		var fa_title=$("#fa_title1").val();
		
		var pageIndex=1;
		selectfnetantbytitle(fa_title,pageIndex);
		yeshu1(fa_title);
	}
	
}
/**
 * 根据公告标题分页查询公告
 * @param fa_title 公告标题
 * @param pageIndex  当前页数
 */
function selectfnetantbytitle( fa_title,pageIndex){
	
	var context="<table class='table' cellspacing='0' cellpadding='0' width='100%' align='center' border='0'>"+
	"<tr><th width='30'></th>"+
	"<th>公告编号</th>"+
	"<th>公告标题</th>"+
	"<th>发送人id</th>"+
	"<th>发送时间</th>"+
	"<th>公告信息</th>"+
	"<th><a href='javascript:deletesome1()'>批量删除</a></th>"
	$.getJSON("../FnetAnti.do",{"fa_title":fa_title,"pageIndex":pageIndex},function(data){
	
		for(var i=0;i<data.length;i++){
			context+="<tr id='"+i+"' onclick='aa("+i+")' onmouseout='bb("+i+")'><td><input type='checkbox' name='IDCheck1' value='"+data[i].fa_id+"' class='acb' />"+
			"</td><td>"+data[i].fa_id+
			"</td><td>"+data[i].fa_title+
			"</td><td>"+data[i].ga_id+
			"</td><td>"+data[i].p_time+
			
			"</td><td><lable onmouseover=viewfnetant("+data[i].fa_id+")>详情</lable>"+
			"</td><td><a href='javascript:deleteFnetAnt1("+data[i].fa_id+")'>删除</a>"
			"</td></tr>";
			
		}
		
		$("#currentPage1").html(pageIndex);
		
		context+="</table>";
		$("#d31").html(context);
		
	});
}
/**
 * 查询标题查询的页数
 * @param fa_title
 */
function yeshu1(fa_title){
	
	var countRecorgd=0;
	$.getJSON("../FnetAntj.do",{"fa_title":fa_title},function(data){
		
	countRecorgd=data;

	$("#countRecord1").html(countRecorgd);

	$("#endPage1").html(parseInt((data-1)/10)+1);
});
}

/**
 * 首页按钮点击事件
 */
function selectStartAn1(){
	
	var fa_title=$("#fa_title1").val();
	var pageIndex=1;
	selectfnetantbytitle( fa_title,pageIndex);
	yeshu1(fa_title);
		
	
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
		var fa_title=$("#fa_title1").val();
		selectfnetantbytitle( fa_title,currentPage-1);
			
	}
}
/**
 * 下一页按钮点击事件
 */
function selectNextAn1(){
	var currentPage=parseInt($("#currentPage1").html());
	var endPage=parseInt($("#endPage1").html());
	var currentPage=parseInt($("#currentPage1").html());
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
		
		var fa_title=$("#fa_title1").val();
		selectfnetantbytitle( fa_title,pageIndex);
			
		
	}
}

/**
 * 尾页按钮点击事件
 */
function selectEndAn1(){
	var endPage=parseInt($("#endPage1").html());
	var fa_title=$("#fa_title1").val();
	selectfnetantbytitle( fa_title,endPage);
		
	
	
		
	
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
		
		
		var fa_title=$("#fa_title1").val();
		selectfnetantbytitle( fa_title,pageIndex);
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
	 $.getJSON("../FnetAnth.do",{"s":s},function(data){
		 if(data==1){
			 var title="操作成功";
				var icon="face-smile";
				var content="删除成功";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			 
		 }
		 if(data==0){
			 var icon="face-sad";
			    var title="操作失败";
				var content="删除失败";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
		 }
		 var fa_title=$("#fa_title1").val();
			selectfnetantbytitle( fa_title,1);
			yeshu1( fa_title);
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
 * 删除公告
 * @param id
 */
function deleteFnetAnt1(id){
	var width=170;
	var height=40;
	var left=780;
	var top=300;
	if(confirm("確定要刪除么？？")){
		
		$.getJSON("../FnetAnte.do",{"fa_id":id},function(data){
			if(data=="1"){
				var title="操作成功";
				var icon="face-smile";
				var content="删除成功";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			}else{
				var icon="face-sad";
			    var title="操作失败";
				var content="删除失败";
				var id=1;
				opTips(icon,id,title,content,width,height,left,top);
			}
			 var fa_title=$("#fa_title1").val();
				selectfnetantbytitle( fa_title,1);
				yeshu1( fa_title);
		});
	}
}
/**
 * 重载页面
 */
function fanhui(){
	
	selectAllAn(1);
	yeshu();
	$("#uitbh30").prop("style","display:;");
	$("#d3").prop("style","display:;");
	$("#d31").prop("style","display:none;");
	$("#uitbh301").prop("style","display:none;");
}
function viewfnetant(fa_id){
	$.getJSON("../FnetAntc.do",{"fa_id":fa_id},function(data){

			var title=data.fa_msg;
			var content=data.fa_msg;
			var width=300;
			var height=200;
			var left=750;
			var top=300;
			anDetail(fa_id,title,content,width,height,left,top,2);
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