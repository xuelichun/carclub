<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>编辑推送信息</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="<%=basePath%>back/style/authority/style2.css"
	rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/mystyle.css"
	rel="stylesheet" type="text/css" />
<link href="<%=basePath%>back/style/authority/style2.css"
	rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>back/style/authority/basic_layout.css" rel="stylesheet" type="text/css">
<link href="<%=basePath%>back/style/authority/common_style.css" rel="stylesheet" type="text/css">	
<script type="text/javascript" src="<%=basePath%>/back/js/index.js"></script>
<script type="text/javascript" src="<%=basePath%>back/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/authority/commonAll.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/fancybox/jquery.fancybox-1.3.4.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath%>back/style/authority/jquery.fancybox-1.3.4.css" media="screen"></link>
<script type="text/javascript" src="<%=basePath%>back/scripts/artDialog/artDialog.js?skin=default"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/myjs/laydate/laydate.js"></script>
<script type="text/javascript" src="<%=basePath%>back/scripts/jquery/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<%=basePath%>back/js/message.js"></script>

<script type="text/javascript">
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop : $(this.hash).offset().top
			}, 1200);
		});
	});
</script>	
	<script type="text/javascript">
	var pName = [ "北京", "天津", "上海", "重庆", "黑龙江", "吉林", "辽宁", "内蒙古", "甘肃", "新疆",
			"西藏", "青海", "宁夏", "山西", "河北", "山东", "河南", "陕西", "四川", "湖北", "安徽",
			"江苏", "浙江", "江西", "湖南", "贵州", "云南", "广西", "广东", "福建", "海南", "台湾",
			"香港", "澳门" ];
	var cName = [
			//北京市
			[ "东城", "西城", "崇文", "宣武", "朝阳", "丰台", "石景山", "海淀", "门头沟", "房山",
					"通州", "顺义", "昌平", "大兴", "怀柔", "平谷", "密云", "延庆" ],
			//天津市
			[ "和平", "河东", "河西", "南开", "河北", "红桥", "塘沽", "汉沽", "大港", "东丽", "西青",
					"津南", "北辰", "武清", "宝坻", "宁河", "静海", "蓟县" ],
			//上海市
			[ "黄埔", "卢湾", "徐汇", "长宁", "静安", "普陀", "闸北", "虹口", "杨浦", "闵行", "宝山",
					"嘉定", "浦东新", "金山", "松江", "南汇", "奉贤", "青浦", "崇明" ],
			//重庆市
			[ "渝中", "大渡口", "江北", "沙坪坝", "九龙坡", "南岸", "北碚", "万盛", "双桥", "渝北",
					"巴南", "万州", "涪陵", "黔江", "长寿", "江津", "合川", "永川", "南川", "綦江",
					"潼南", "铜梁", "大足", "荣昌", "璧山", "垫江", "武隆", "丰都", "城口", "梁平",
					"开县", "巫溪", "巫山", "奉节", "云阳", "忠县", "石柱", "彭水", "酉阳", "秀山" ],
			//黑龙江省
			[ "哈尔滨", "齐齐哈尔", "鸡西", "鹤岗", "双鸭山", "大庆", "伊春", "佳木斯", "七台河",
					"牡丹江", "黑河", "绥化", "大兴安岭" ],
			//吉林省
			[ "长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边" ],
			//辽宁省
			[ "沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦",
					"铁岭", "朝阳", "葫芦岛" ],
			//内蒙古省
			[ "呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布",
					"兴安", "锡林郭勒", "阿拉善" ],
			//甘肃省
			[ "兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "张掖", "平凉", "酒泉", "庆阳",
					"定西", "陇南", "临夏", "甘南" ],
			//新疆省
			[ "乌鲁木齐", "克拉玛依", "吐鲁番", "哈密", "昌吉", "博尔塔拉", "巴音郭楞", "阿克苏", "克孜勒苏",
					"喀什", "和田", "伊犁", "塔城", "阿勒泰", "石河子", "阿拉尔", "图木舒克", "五家渠" ],
			//西藏省
			[ "拉萨", "昌都", "山南", "日喀则", "那曲", "阿里", "林芝" ],
			//青海省
			[ "西宁", "海东", "海北", "黄南", "海南", "果洛", "玉树", "海西" ],
			//宁夏省
			[ "银川", "石嘴山", "吴中", "固原", "中卫" ],
			//山西省
			[ "太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "临汾", "吕梁", "忻州" ],
			//河北省
			[ "石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊",
					"衡水" ],
			//山东省
			[ "济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照",
					"莱芜", "临沂", "德州", "聊城", "滨州", "菏泽" ],
			//河南省
			[ "郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌",
					"漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店", "济源" ],
			//陕西省
			[ "西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛" ],
			//四川省
			[ "成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山",
					"南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝", "甘孜" ],
			//湖北省
			[ "武汉", "黄石", "十堰", "宜昌", "襄樊", "鄂州", "荆门", "孝感", "荆州", "黄冈", "咸宁",
					"随州", "恩施", "仙桃", "潜江", "天门", "神农架" ],
			//安徽省
			[ "合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州",
					"阜阳", "宿州", "巢湖", "六安", "豪州", "池州", "宣城" ],
			//江苏省
			[ "南京", "无锡", "徐州", "常州", "苏州", "南通", "连云港", "淮安", "盐城", "扬州",
					"镇江", "泰州", "宿迁" ],
			//浙江省
			[ "杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水" ],
			//江西省
			[ "南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶" ],
			//湖南省
			[ "长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州",
					"永州", "怀化", "娄底", "湘西" ],
			//贵州省
			[ "贵阳", "六盘水", "遵义", "安顺", "同仁", "黔西南", "毕节", "黔东南", "黔南" ],
			//云南省
			[ "昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧", "楚雄", "红河", "文山",
					"西双版纳", "大理", "德宏", "怒江", "迪庆" ],
			//广西省
			[ "南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色",
					"贺州", "河池", "来宾", "崇左" ],
			//广东省
			[ "广州", "韶关", "深圳", "珠海", "汕头", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州",
					"梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳", "云浮" ],
			//福建省
			[ "福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德" ],
			//海南省
			[ "海口", "三亚", "五指山", "琼海", "儋州", "文昌", "万宁", "东方", "安定", "屯昌",
					"澄迈", "临高", "白沙", "昌江", "乐东", "陵水", "保亭", "琼中", "西沙", "南沙",
					"中沙" ],
			//台湾省
			[ "台北市", "高雄市", "基隆市", "台中市", "台南市", "新竹市", "嘉义市", "台北县", "宜兰县",
					"桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县",
					"台南县", "高雄县", "屏东县", "台东县", "花莲县", "澎湖县" ],
			//香港
			[ "香港", "九龙", "新界" ],
			//澳门
			[ "澳门" ] ];
	function initP() {
		var objP = document.getElementById("p");
		for ( var i = 0; i < pName.length; i++) {
			var op = new Option(pName[i], pName[i]);
			objP.add(op);
		}
	}
	function initC() {
		var objC = document.getElementById("c");
		var pValue = document.getElementById("p").value;
		for ( var i = objC.length - 1; i > 0; i--) {
			objC.remove(i);
		}
		var j=jQuery.inArray(pValue,pName);
		if (j >= 0) {
			for ( var i = 0; i < cName[j].length; i++) {
				var op = new Option(cName[j][i], cName[j][i]);
				objC.add(op);
			}
		}
	}
</script>
</head>
<body>
	<div class="main">
		<div class="contact-form">
			<h2>填写推送信息</h2>
			<br/>
			<div>
				用户类型：<select name="fangyuanEntity.fyXqCode" id="fyXq1"
					class="ui_select01" onchange="change(this.value)" style="height:38px;width:150px;">
					
					<option value="1">全用户</option>
					<option value="0">单用户</option>
				</select>  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				
			&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
		          <span>
					<input type="button" class="" value="欠费通知" onclick="qianfeichauxn()">
				  </span> 
				
				
				<br><br>
				<div id="messagetype" > 
			   </div>
			      <div id="qianfeileixing" style="display:none" > 
			       欠费类型：<select name="fangyuanEntity.fyHxCode" id="feeType" class="ui_select01" style="height:38px;width:150px;" onchange="selectOpPay()">
                                <option value="1">年费</option>
                                <option value="2">功能费用</option>
                                <option value="3">人数级别费用</option>
                    </select>
                 </div>    
				      
			</div>
			<div>
				消息内容：&nbsp;<span ><textarea id="fm_msg" name="userMsg"> </textarea></span>
			</div>
			
		</div>
	</div>
	<div id="ui_tb1" style="display:none">
	</div>
	<div class="ui_tb_h30" id="uitbh3o" style="display:none">
					<div class="ui_flt" style="height: 30px; line-height: 30px;">
						共有
						<span class="ui_txt_bold04" id="countRecord1"></span>
						条记录，当前第
						<span class="ui_txt_bold04" id="currentPage1"></span>
						/
						<span class="ui_txt_bold04" id="endPage1"></span>
						页
					</div>
					<div class="ui_frt">
						<!--    如果是第一页，则只显示下一页、尾页 -->
						
							<input type="button" value="首页" class="ui_input_btn01" onclick="selectFirstAr1()" />
							<input type="button" value="上一页" class="ui_input_btn01" onclick="selectLastAr1()" />
							<input type="button" value="下一页" class="ui_input_btn01"
								onclick="selectNextAr1();" />
							<input type="button" value="尾页" class="ui_input_btn01"
								onclick="selectEndAr1()" />
						
						
						
						<!--     如果是最后一页，则只显示首页、上一页 -->
						
						转到第<input type="text" id="text11" class="ui_input_txt01" />页
							 <input type="button" class="ui_input_btn01" value="跳转" onclick="selectIndexAr1();" />
					</div>
				</div>
				<div class="ui_content" style="display:none" id="uicontent" >
				<div class="ui_text_indent">
					<div id="box_border">
						<div id="box_bottom">
							<input type="button" value="发送消息" class="ui_input_btn01" onclick="search1();" /> 
						</div>
					</div>
				</div>
			</div>
	<div>
	<div id="include" style="display:none"> 
		      <jsp:include page="user_list.jsp"	/>
		</div>
		<form id="submitForm" name="submitForm" action="" method="post">
	
			<div class="ui_content" id="fasong">
							<div class="ui_text_indent">
					<div id="box_border">
						<div id="box_bottom">
							<input type="button" value="发送消息" class="ui_input_btn01" onclick="search();" /> 
						</div>
					</div>
				</div>
			</div>
			
			
	</form>
	</div>
</body>
</html>