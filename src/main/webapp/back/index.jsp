<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>车友会后台管理系统</title>
	<script type="text/javascript" src="<%=basePath %>back/js/jquery-1.7.2.js"></script>
	<link href="<%=basePath %>back/style/authority/main_css.css" rel="stylesheet" type="text/css" />
	<link href="<%=basePath %>back/style/authority/zTreeStyle.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="<%=basePath %>back/scripts/jquery/jquery-1.7.1.js"></script>
	<script type="text/javascript" src="<%=basePath %>back/scripts/zTree/jquery.ztree.core-3.2.js"></script>
	<script type="text/javascript" src="<%=basePath %>back/scripts/authority/commonAll.js"></script>
	<script type="text/javascript" src="<%=basePath %>back/js/login.js"></script>
	<script type="text/javascript" src="<%=basePath %>back/js/index.js"></script>
	<script type="text/javascript" src="<%=basePath %>back/js/ga_manage.js"></script>
	<script type="text/javascript">
	// skin demo
	(function() {
	var _skin, _jQuery;
	var _search = window.location.search;
	if (_search) {
	_skin = _search.split('demoSkin=')[1];
	_jQuery = _search.indexOf('jQuery=true') !== -1;
	if (_jQuery) document.write('<scr'+'ipt src="jquery-1.6.2.min.js"></sc'+'ript>');
	};
		document.write('<scr'+'ipt src="<%=basePath %>artDialog/artDialog.source.js?skin=' + (_skin || 'default') +'"></sc'+'ript>');
		window._isDemoSkin = !!_skin;
	})();
</script>
<script type="text/javascript" src="<%=basePath %>artDialog/artDialog.js"></script>
		<script type="text/javascript" src="<%=basePath %>artDialog/basic/jquery.artDialog.basic.js" ></script>
		<script type="text/javascript" src="<%=basePath %>artDialog/jquery.artDialog.js"></script>
		<script type="text/javascript" src="<%=basePath %>artDialog/jquery.artDialog.source.js"></script>
		<link rel="stylesheet" href="<%=basePath %>artDialog/_doc/highlight/styles/magula.css" />	
	<script type="text/javascript">
		/**退出系统**/
		function logout(){
			art.dialog({
				title:'系统提示',
				icon:'face-smile',
				content: '您确定要退出本系统吗？',
				ok: function () {
					window.location.href="login.jsp";
				},
				cancelVal: '取消',
				cancel: true //为true等价于function(){}
			});
		}
		/**获得当前日期**/
		function  getDate01(){
			var time = new Date();
			var myYear = time.getFullYear();
			var myMonth = time.getMonth()+1;
			var myDay = time.getDate();
			if(myMonth < 10){
				myMonth = "0" + myMonth;
			}
			document.getElementById("day_day").innerHTML =  myYear + "." + myMonth + "." + myDay;
		}
		
		/**加入收藏夹**/
		function addfavorite(){
			var ua = navigator.userAgent.toLowerCase();
			 if (ua.indexOf("360se") > -1){
			  	art.dialog({icon:'error', title:'友情提示', drag:false, resize:false, content:'由于360浏览器功能限制，加入收藏夹功能失效', ok:true,});
			 }else if (ua.indexOf("msie 8") > -1){
			  	window.external.AddToFavoritesBar('${dynamicURL}/authority/loginInit.action','车友会后台系统管理');//IE8
			 }else if (document.all){
			  	window.external.addFavorite('${dynamicURL}/authority/loginInit.action','车友会后台系统管理');
			 }else{
			  	art.dialog({icon:'error', title:'友情提示', drag:false, resize:false, content:'添加失败，请用ctrl+D进行添加', ok:true,});
			 }
		} 
	</script>
	<script type="text/javascript">
		/* zTree插件加载目录的处理  */
		var zTree;
		var setting = {
				view: {
					dblClickExpand: false,
					showLine: false,
					expandSpeed: ($.browser.msie && parseInt($.browser.version)<=6)?"":"fast"
				},
				data: {
					key: {
						name: "resourceName"
					},
					simpleData: {
						enable:true,
						idKey: "resourceID",
						pIdKey: "parentID",
						rootPId: ""
					}
				},
				callback: {
	// 				beforeExpand: beforeExpand,
	// 				onExpand: onExpand,
					onClick: zTreeOnClick			
				}
		};
		 
		var curExpandNode = null;
		function beforeExpand(treeId, treeNode) {
			var pNode = curExpandNode ? curExpandNode.getParentNode():null;
			var treeNodeP = treeNode.parentTId ? treeNode.getParentNode():null;
			for(var i=0, l=!treeNodeP ? 0:treeNodeP.children.length; i<l; i++ ) {
				if (treeNode !== treeNodeP.children[i]) {
					zTree.expandNode(treeNodeP.children[i], false);
				}
			}
			while (pNode) {
				if (pNode === treeNode) {
					break;
				}
				pNode = pNode.getParentNode();
			}
			if (!pNode) {
				singlePath(treeNode);
			}
	
		}
		function singlePath(newNode) {
			if (newNode === curExpandNode) return;
			if (curExpandNode && curExpandNode.open==true) {
				if (newNode.parentTId === curExpandNode.parentTId) {
					zTree.expandNode(curExpandNode, false);
				} else {
					var newParents = [];
					while (newNode) {
						newNode = newNode.getParentNode();
						if (newNode === curExpandNode) {
							newParents = null;
							break;
						} else if (newNode) {
							newParents.push(newNode);
						}
					}
					if (newParents!=null) {
						var oldNode = curExpandNode;
						var oldParents = [];
						while (oldNode) {
							oldNode = oldNode.getParentNode();
							if (oldNode) {
								oldParents.push(oldNode);
							}
						}
						if (newParents.length>0) {
							for (var i = Math.min(newParents.length, oldParents.length)-1; i>=0; i--) {
								if (newParents[i] !== oldParents[i]) {
									zTree.expandNode(oldParents[i], false);
									break;
								}
							}
						}else {
							zTree.expandNode(oldParents[oldParents.length-1], false);
						}
					}
				}
			}
			curExpandNode = newNode;
		}
	
		function onExpand(event, treeId, treeNode) {
			curExpandNode = treeNode;
		}
		/** 用于捕获节点被点击的事件回调函数  **/
		function zTreeOnClick(event, treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("dleft_tab1");
			zTree.expandNode(treeNode, null, null, null, true);
	// 		zTree.expandNode(treeNode);
			// 规定：如果是父类节点，不允许单击操作
			if(treeNode.isParent){
	// 			alert("父类节点无法点击哦...");
				return false;
			}
			// 如果节点路径为空或者为"#"，不允许单击操作
			if(treeNode.accessPath=="" || treeNode.accessPath=="#"){
				//alert("节点路径为空或者为'#'哦...");
				return false;
			}
		    // 跳到该节点下对应的路径, 把当前资源ID(resourceID)传到后台，写进Session
		    rightMain(treeNode.accessPath);
		    
		    if( treeNode.isParent ){
			    $('#here_area').html('当前位置：'+treeNode.getParentNode().resourceName+'&nbsp;>&nbsp;<span style="color:#1A5CC6">'+treeNode.resourceName+'</span>');
		    }else{
			    $('#here_area').html('当前位置：系统&nbsp;>&nbsp;<span style="color:#1A5CC6">'+treeNode.resourceName+'</span>');
		    }
		};
		/* 上方菜单 */
		function switchTab(tabpage,tabid){
		var oItem = document.getElementById(tabpage).getElementsByTagName("li"); 
		    for(var i=0; i<oItem.length; i++){
		        var x = oItem[i];    
		        x.className = "";
			}
			if('left_tab1' == tabid){
				$(document).ajaxStart(onStart).ajaxSuccess(onStop);
				// 异步加载"业务模块"下的菜单
			  	loadMenu('YEWUMOKUAI', 'dleft_tab1');
			 	// 默认展开所有节点
				if( zTree ){
					// 默认展开所有节点
					zTree.expandAll(false);
				}
			}else  if('left_tab2' == tabid){
				$(document).ajaxStart(onStart).ajaxSuccess(onStop);
				// 异步加载"系统管理"下的菜单
				loadMenu('XITONGMOKUAI', 'dleft_tab1');
				// 默认展开所有节点
				if( zTree ){
					// 默认展开所有节点
					zTree.expandAll(false);
				}
			}else  if('left_tab3' == tabid){
				$(document).ajaxStart(onStart).ajaxSuccess(onStop);
				// 异步加载"其他"下的菜单
				loadMenu('QITAMOKUAI', 'dleft_tab1');
				// 默认展开所有节点
				if( zTree ){
					// 默认展开所有节点
					zTree.expandAll(false);
				}
			} 
		}
		
		
		$(document).ready(function(){
			$(document).ajaxStart(onStart).ajaxSuccess(onStop);
			/** 默认异步加载"业务模块"目录  **/
			loadMenu('YEWUMOKUAI', "dleft_tab1");
			// 默认展开所有节点
			if( zTree ){
				// 默认展开所有节点
				zTree.expandAll(false);
			}
		});
		
		function loadMenu(resourceType, treeObj){
			/*$.ajax({
				type:"POST",
				url:"${dynamicURL}/authority/modelPart.action?resourceType=" + resourceType,
				dataType : "json",
				success:function(data){
					// 如果返回数据不为空，加载"业务模块"目录
					if(data != null){
						// 将返回的数据赋给zTree
						$.fn.zTree.init($("#"+treeObj), setting, data);
 						alert(treeObj);
						zTree = $.fn.zTree.getZTreeObj(treeObj);
						if( zTree ){
							// 默认展开所有节点
							zTree.expandAll(true);
						}
					}
				}
			});*/
            data = [{"accessPath":"","checked":false,"delFlag":0,"parentID":1,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":3,"resourceName":"用户管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":37,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":19,"resourceName":"系统配置","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":37,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":20,"resourceName":"系统升级","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":1,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":2,"resourceName":"会主管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":1,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":16,"resourceName":"车友会管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":1,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":24,"resourceName":"消息管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":1,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":34,"resourceName":"管理员管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":1,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":55,"resourceName":"招商管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":1,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":30,"resourceName":"安全管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":1,"resourceCode":"","resourceDesc":"","resourceGrade":2,"resourceID":37,"resourceName":"系统管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":30,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":31,"resourceName":"企业安全","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/editinfo_send.jsp","checked":false,"delFlag":0,"parentID":24,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":26,"resourceName":"推送信息","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/replinotice_list.jsp","checked":false,"delFlag":0,"parentID":16,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":17,"resourceName":"申请通知列表","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/user_list.jsp","checked":false,"delFlag":0,"parentID":3,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":7,"resourceName":"用户列表","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/userad_rank.jsp","checked":false,"delFlag":0,"parentID":3,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":8,"resourceName":"用户活跃度统计","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/present_list.jsp","checked":false,"delFlag":0,"parentID":2,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":5,"resourceName":"会主列表","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/club_list.jsp","checked":false,"delFlag":0,"parentID":16,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":18,"resourceName":"车友会列表","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/activity_list.jsp","checked":false,"delFlag":0,"parentID":24,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":59,"resourceName":"活动列表","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/pi_manage.jsp","checked":false,"delFlag":0,"parentID":34,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":35,"resourceName":"个人信息管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/adv_list.jsp","checked":false,"delFlag":0,"parentID":55,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":45,"resourceName":"广告管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":30,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":46,"resourceName":"信息安全管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":30,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":47,"resourceName":"安全审计","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/adv_manage.jsp","checked":false,"delFlag":0,"parentID":55,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":43,"resourceName":"广告推送","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/ga_manage.jsp","checked":false,"delFlag":0,"parentID":34,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":36,"resourceName":"二级管理员管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/fusmsg.jsp","checked":false,"delFlag":0,"parentID":24,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":42,"resourceName":"消息列表","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/messagetype_list.jsp","checked":false,"delFlag":0,"parentID":24,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":42,"resourceName":"消息类型","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/selectfnetant.jsp","checked":false,"delFlag":0,"parentID":24,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":42,"resourceName":"公告列表","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/payrecord_list.jsp","checked":false,"delFlag":0,"parentID":16,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":33,"resourceName":"缴费记录","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/pread_rank.jsp","checked":false,"delFlag":0,"parentID":2,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":6,"resourceName":"会主活跃度统计","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":3,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":32,"resourceName":"用户信息反馈","resourceOrder":0,"resourceType":""},           
            {"accessPath":"","checked":false,"delFlag":0,"parentID":2,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":9,"resourceName":"会主信息反馈","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/arecord_list.jsp","checked":false,"delFlag":0,"parentID":16,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":52,"resourceName":"欠费管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/activity_send.jsp","checked":false,"delFlag":0,"parentID":24,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":25,"resourceName":"活动发布","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":34,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":51,"resourceName":"下级工作汇报","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":55,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":29,"resourceName":"广告商申请通知","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":30,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":50,"resourceName":"网站安全","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":37,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":38,"resourceName":"网站维护","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/tn_send.jsp","checked":false,"delFlag":0,"parentID":24,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":53,"resourceName":"话题和公告发布","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/car_manage.jsp","checked":false,"delFlag":0,"parentID":16,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":40,"resourceName":"车辆管理","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/readcir_rank.jsp","checked":false,"delFlag":0,"parentID":16,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":41,"resourceName":"热门车友圈统计","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/topic_rank.jsp","checked":false,"delFlag":0,"parentID":24,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":56,"resourceName":"热门话题统计","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/advwel_rank.jsp","checked":false,"delFlag":0,"parentID":55,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":54,"resourceName":"广告受欢迎统计","resourceOrder":0,"resourceType":""},
            {"accessPath":"<%=basePath %>back/club_rank.jsp","checked":false,"delFlag":0,"parentID":16,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":60,"resourceName":"车友会排行统计","resourceOrder":0,"resourceType":""},
            {"accessPath":"","checked":false,"delFlag":0,"parentID":16,"resourceCode":"","resourceDesc":"","resourceGrade":3,"resourceID":58,"resourceName":"车友会信息反馈","resourceOrder":0,"resourceType":""}];
            // 如果返回数据不为空，加载"业务模块"目录
            if(data != null){
                // 将返回的数据赋给zTree
                $.fn.zTree.init($("#"+treeObj), setting, data);
//              alert(treeObj);
                zTree = $.fn.zTree.getZTreeObj(treeObj);
                if( zTree ){
                    // 默认展开所有节点
                    zTree.expandAll(true);
                }
            }
		}
		//ajax start function
		function onStart(){
			$("#ajaxDialog").show();
		}
		//ajax stop function
		function onStop(){
	// 		$("#ajaxDialog").dialog("close");
			$("#ajaxDialog").hide();
		}
	</script>
</head>
<body onload="getDate01()">
    <div id="top">
		<div id="top_logo">
			<img alt="logo" src="<%=basePath %>back/images/common/logo.jpg" width="274" height="49" style="vertical-align:middle;">
		</div>
		<div id="top_links" style="margin-left: 0;">
			<div id="top_op">
				<ul>
					<li>
						<img alt="当前用户" src="<%=basePath %>back/images/common/user.jpg">：
						<span id="user1"></span>
					</li>
					<li>
						<img alt="今天是" src="<%=basePath %>back/images/common/date.jpg">：
						<span id="day_day"></span>
					</li>
				</ul> 
			</div>
			<div id="top_close">
				<a href="javascript:void(0);" onclick="logout();" target="_parent">
					<img alt="退出系统" title="退出系统" src="<%=basePath %>back/images/common/close.jpg" style="position: relative; top: 10px; left: 25px;">
				</a>
			</div>
		</div>
	</div>
    <!-- side menu start -->
	<div id="side">
		<div id="left_menu">
		 	<ul id="TabPage2" style="height:200px; margin-top:50px;">
				<li id="left_tab1" class="selected" onClick="javascript:switchTab('TabPage2','left_tab1');" title="业务模块">
					<img alt="业务模块" title="业务模块" src="<%=basePath %>back/images/common/1_hover.jpg" width="33" height="31">
				</li>
				<li id="left_tab2" onClick="javascript:switchTab('TabPage2','left_tab2');" title="系统管理">
					<img alt="系统管理" title="系统管理" src="<%=basePath %>back/images/common/2.jpg" width="33" height="31">
				</li>		
				<li id="left_tab3" onClick="javascript:switchTab('TabPage2','left_tab3');" title="其他">
					<img alt="其他" title="其他" src="<%=basePath %>back/images/common/3.jpg" width="33" height="31">
				</li>
			</ul>
			
			
			<div id="nav_show" style="position:absolute; bottom:0px; padding:10px;">
				<a href="javascript:;" id="show_hide_btn">
					<img alt="显示/隐藏" title="显示/隐藏" src="<%=basePath %>back/images/common/nav_hide.png" width="35" height="35">
				</a>
			</div>
		 </div>
		 <div id="left_menu_cnt">
		 	<div id="nav_module">
		 		<img src="<%=basePath %>back/images/common/module_1.png" width="210" height="58"/>
		 	</div>
		 	<div id="nav_resource">
		 		<ul id="dleft_tab1" class="ztree"></ul>
		 	</div>
		 </div>
	</div>
	<script type="text/javascript">
		$(function(){
			$('#TabPage2 li').click(function(){
				var index = $(this).index();
				$(this).find('img').attr('src', '<%=basePath %>back/images/common/'+ (index+1) +'_hover.jpg');
				$(this).css({background:'#fff'});
				$('#nav_module').find('img').attr('src', '<%=basePath %>back/images/common/module_'+ (index+1) +'.png');
				$('#TabPage2 li').each(function(i, ele){
					if( i!=index ){
						$(ele).find('img').attr('src', '<%=basePath %>back/images/common/'+ (i+1) +'.jpg');
						$(ele).css({background:'#044599'});
					}
				});
				// 显示侧边栏
				switchSysBar(true);
			});
			
			// 显示隐藏侧边栏
			$("#show_hide_btn").click(function() {
		        switchSysBar();
		    });
		});
		
		/**隐藏或者显示侧边栏**/
		function switchSysBar(flag){
			var side = $('#side');
	        var left_menu_cnt = $('#left_menu_cnt');
			if( flag==true ){	// flag==true
				left_menu_cnt.show(500, 'linear');
				side.css({width:'280px'});
				$('#top_nav').css({width:'77%', left:'304px'});
	        	$('#main').css({left:'280px'});
			}else{
		        if ( left_menu_cnt.is(":visible") ) {
					left_menu_cnt.hide(10, 'linear');
					side.css({width:'60px'});
		        	$('#top_nav').css({width:'100%', left:'60px', 'padding-left':'28px'});
		        	$('#main').css({left:'60px'});
		        	$("#show_hide_btn").find('img').attr('src', '<%=basePath %>back/images/common/nav_show.png');
		        } else {
					left_menu_cnt.show(500, 'linear');
					side.css({width:'280px'});
					$('#top_nav').css({width:'77%', left:'304px', 'padding-left':'0px'});
		        	$('#main').css({left:'280px'});
		        	$("#show_hide_btn").find('img').attr('src', '<%=basePath %>back/images/common/nav_hide.png');
		        }
			}
		}
	</script>
    <!-- side menu start -->
    <div id="top_nav">
	 	<span id="here_area">当前位置：系统&nbsp;>&nbsp;系统介绍</span>
	</div>
    <div id="main">
    	<iframe name="right" id="rightMain" src="introduce.jsp" frameborder="no" scrolling="auto" width="100%" height="100%" allowtransparency="true" >
    </div>
</body>
</html>
   
 