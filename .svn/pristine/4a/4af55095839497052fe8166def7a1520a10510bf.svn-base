$(function(){
	$.ajax({
		type:'post',
		url:'../advertiser/showAdvIndex.do',
		async:false,
		success:function(data){
			var context="";
			var con="";
			
			for(var i=0;i<data.length;i++){
				
				context+="<div><a title='' href='javascript:clickAdv("+data[i].ad_id+","+data[i].ad_click+")'><img src=../"+data[i].ad_img+" width='1000' height='330' /></a></div>";
				if(i==0){
					con+="<a href=\"http://"+data[i].ad_web+"\" class='cur'>"+(i+1)+"</a>";
				}else{
					con+="<a href=\"http://"+data[i].ad_web+"\" class=''>"+(i+1)+"</a>";
				}
			}
			
			$("#cba").html(context);
			$("#abc").html(con);
			
		}});
//	diaoyong();
	// 焦点图片水平滚动
	$("#slider1").Xslider({
		// 默认配置
		affect:'scrollx', //效果  有scrollx|scrolly|fade|none
		speed: 800, //动画速度
		space: 6000, //时间间隔
		auto: true, //自动滚动
		trigger: 'mouseover', //触发事件 注意用mouseover代替hover
		conbox: '.conbox', //内容容器id或class
		ctag: 'div', //内容标签 默认为<a>
		switcher: '.switcher', //切换触发器id或class
		stag: 'a', //切换器标签 默认为a
		current:'cur', //当前切换器样式名称
		rand:false //是否随机指定默认幻灯图片
	});
	
	// 焦点图片垂直滚动
	$("#slider2").Xslider({
		affect:'scrolly',
		ctag: 'div',
		speed:400
	});
	
	// 焦点图片淡隐淡现
	$("#slider3").Xslider({
		affect:'fade',
		ctag: 'div'
	});
	
	// 选项卡
	$("#slider4").Xslider({
		affect:'none',
		ctag: 'div',
		speed:10
	});
	sfHover = function() {
		var sfEls = document.getElementById("navMenu").getElementsByTagName("LI");
		for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
		this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
		this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
		}
		}
		if (window.attachEvent) window.attachEvent("onload", sfHover);
		
		
});


function clickAdv(ad_id,click){
	$.getJSON("../advertiser/clickNum.do",{"ad_id":ad_id},function(data){
		if(data.rs=="ok"){
			click=parseInt(click);
		}
	});
}
