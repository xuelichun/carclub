$(function (){
	$("#submit").click(function(){
		if($("#a_id").val()==''){
			alert("请选择相册");
			return;
		}
		$("#fff").submit();	
		});
	//表单提交成功后		
	$('#fff').form({
		success:function(data) {
			var rss = $.parseJSON(data);
			if (rss.rs == 'ok') {
				$.messager.alert('提示信息','上传成功！');
				$('#h2').form('load',"../user/islogin.do");
			}else{
				$.messager.alert('提示','上传失败！');
			}
		}
	}); 
});

function showphoto(){
	var data=$('#h2').form('load',"../user/islogin.do");
	$.getJSON("../user/islogin.do",{},function(data){
		if(data==null){
			alert("请先登录");
			location.href="./index.html";
		}else{
			showAlbumList(data.u_id);
		}
		
	});
}
function showAlbumList(u_id){
	$.getJSON("../album/showPhoto.do",{"u_id":u_id},function(data){
		var context="上传到：<select name='a_id' id='a_id' style='width: 150px' size='1' >";
		for(var i=0;i<data.length;i++){
			context+="<option value="+data[i].a_id+">"+data[i].a_title+"</option>";
		}
		context+="</select>";
		$("#td").html(context);
	});	
}

function openAblum(){
	$("#cc").html(" ");
	var context="<div id='TB_overlayBG'></div><div class='box' style='display:none'><h2>创建相册<a href='#' class='close'>关闭</a></h2>"+
"<div class='mainlist'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td width='6%'>&nbsp;</td>"+
"<td width='21%' align='right' style='color:#000; font-size:14px; line-height:50px; line-height:50px;'>相册名称 ：</td>"+	
"<td width='67%'><input type='text' name='a_title' id='a_title'  class='yanse'></td><td width='6%'>&nbsp;</td>"+		
"</tr><tr><td>&nbsp;</td><td align='right' style='color:#000; font-size:14px; line-height:50px; line-height:50px;'>相册描述：</td>"+
 "<td><textarea rows='3' cols='29' id='a_desc'></textarea></td><td>&nbsp;</td></tr><tr>"+            
"<td>&nbsp;</td><td>&nbsp;</td><td><table width='205' border='0' cellspacing='0' cellpadding='0'>"+
"<tr><td>&nbsp;<span id='span' style='color:#f00;'></span></td> <td><label for='checkbox'></label></td> "+            
 "<td>&nbsp;</td> <td>&nbsp;</td> "+            
"</tr><tr><td width='41'><div class='login'><a href='javascript:createAlbums()'>提交</a></div></td>"+
"</tr></table></td><td>&nbsp;</td></tr></table></div></div>";
	$("#cc").html(context);
	$("#TB_overlayBG").css({
		display:"block",height:$(document).height()
	});
	$(".box").css({
		left:($("body").width()-$(".box").width())/2-20+"px",
		top:($(window).height()-$(".box").height())/2+$(window).scrollTop()+"px",
		display:"block"
	});
	$(".close").click(function(){
		$("#TB_overlayBG").css("display","none");
		$(".box ").css("display","none");
	});
	
	
}
function createAlbums(){
	var a_title=$("#a_title").val().trim();
	var a_desc=$("#a_desc").val().trim();
	var u_id=$("#u_id").val();
	var a=2;
	if(a_title==''){
		$("#span").html("标题不能为空");
		a--;
		return ;	
	}
	if(a_desc==''){
		$("#span").html("描述不能为空");
		a--;
		return ;
	}
	if(a==2){
		$("#span").html("");
		$.getJSON("../album/createAlbum.do",{"u_id":u_id,"a_title":a_title,"a_desc":a_desc},function(data){
			if(data.rs=='ok'){
				alert("创建成功");
				$("#TB_overlayBG").css("display","none");
				$(".box ").css("display","none");
				var u_id=$("#u_id").val();
				showAlbumList(u_id);
			}else{
				alert("创建失败");
			}
		});
	}
		
}
function Id(id){
	return document.getElementById(id);
	}

var pre="preview1";
var upl="upload1";
function setImagePreview(fieldupload, image, imagediv) {
	var docObj = document.getElementById(fieldupload);
	var imgObjPreview = document.getElementById(image);
	if (docObj.files && docObj.files[0]) {
	//火狐下，直接设img属性
	imgObjPreview.style.display = 'block';
	imgObjPreview.style.width = '100px';
	imgObjPreview.style.height = '100px';
	//imgObjPreview.src = docObj.files[0].getAsDataURL();
	//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
	imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
	} else {
	//IE下，使用滤镜
	docObj.select();
	var imgSrc = document.selection.createRange().text;
	var localImagId = document.getElementById(imagediv);
	//必须设置初始大小
	localImagId.style.width = "100px";
	localImagId.style.height = "100px";
	//图片异常的捕捉，防止用户修改后缀来伪造图片
	try {
	localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)"; localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
	} catch (e) {
	alert("您上传的图片格式不正确，请重新选择!");
	return false;
	}
	imgObjPreview.style.display = 'none';
	document.selection.empty();
	}
	return true;
	}

function showImage(fieldupload, image, imagediv){
	if(fieldupload=='upload111111111111111'){
			alert("一次最多只能上传15 张图片");
			return;
		}
	setImagePreview(fieldupload, image, imagediv);
	var context="<div id='localImag' style='float:left; margin-left:10px;'><img id=\""+pre+"\"  src='' alt='' />" +
	"<input type='file' name='img' onchange='showImage(\""+upl+"\",\""+pre+"\",\"localImag\")' id=\""+upl+"\" style='display:none;'/></div>"
	
	
	$("#di").append(context);
	
	var con="<img  src='images/2.jpg' onclick='Id(\""+upl+"\").click()' alt='1' id='s'  class='a' />";
	$("#dii").html(con);
	pre+=1;
	upl+=1;	
	$("#da").show();
}







