var fuzzyClub=new Array();
$(function(){
	var pageIndex=1;
	selectAll(pageIndex);
	selectAllCB();
});

function selectAllClub(pageIndex,province,city,carBrand,carDep){
	if(city!=-1&&carDep!=-1){
		selectAllClubByCityCD2(city,carDep,pageIndex);
	}else if(city!=-1&&carBrand!=-1&&carDep==-1){
		selectAllClubByCityCB2(city,carBrand,pageIndex);
	}else if(province!=-1&&city==-1&&carDep!=-1){
		selectAllClubByProCD2( province, carDep, pageIndex);
	}else if(province!=-1&&city==-1&&carBrand!=-1&&carDep==-1){
		selectAllClubByProCB2(province,carBrand,pageIndex);
	}else if(province!=-1&&city==-1&&carBrand==-1){
		selectAllClubByPro2(province,pageIndex);
	}else if(city!=-1&&carBrand==-1){
		selectAllClubByCity2(city,pageIndex);
	}else if(province==-1&&carBrand!=-1&&carDep==-1){
		selectAllClubByCarBrand2(carBrand, pageIndex);
	}else if(province==-1&&carDep!=-1){
		selectAllClubByCarDep2(carDep,pageIndex);
	}else if(province==-1&&city==-1&&carBrand==-1&&carDep==-1){
		selectAll(pageIndex);
	}
}
function selectClubByParam(){
	var pageIndex=1;
	var selPro=$("#club_pro");
	var province=$(selPro).find("option:selected").val();
	var selCity=$("#club_city");
	var city=$(selCity).find("option:selected").val();
	var selCB=$("#cb");
	var carBrand=$(selCB).find("option:selected").val();
	var selCD=$("#cd");
	var carDep=$(selCD).find("option:selected").val();
	selectAllClub(pageIndex,province,city,carBrand,carDep);
}


function pageUpAndDown1(province,pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAllClubByPro2(province,pageIndex);
	}
}
function pageUpAndDown2(city,pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAllClubByCity2(city,pageIndex);
	}
}
function pageUpAndDown3(carbrand,pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAllClubByCarBrand2(carBrand, pageIndex);
	}
}
function pageUpAndDown4(carDep,pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAllClubByCarDep2(carDep, pageIndex);
	}
}
function pageUpAndDown5(province,carBrand,pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAllClubByProCB2(province,carBrand,pageIndex);
	}
}
function pageUpAndDown6(province,carDep,pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAllClubByProCD2(province,carDep,pageIndex);
	}
}
function pageUpAndDown7(city,carBrand,pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAllClubByCityCB2(city,carBrand,pageIndex);
	}
}
function pageUpAndDown8(city,carDep,pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAllClubByCityCD2(city,carDep,pageIndex);
	}
}
function pageUpAndDown9(pageIndex,allPage){
	if(pageIndex<=0){
		alert("没有上一页了");
	}else if(pageIndex>allPage){
		alert("没有下一页了")
	}else{
		selectAll(pageIndex);
	}
}
function selectClub1(province,pageIndex){
	selectAllClubByPro2(province,pageIndex);
}
function selectClub2(city,pageIndex){
	selectAllClubByCity2(city,pageIndex);
}
function selectClub3(carBrand,pageIndex){
	selectAllClubByCarBrand2(carBrand, pageIndex);
}
function selectClub4(carDep,pageIndex){
	selectAllClubByCarDep2(carDep, pageIndex);
}
function selectClub5(province,carBrand,pageIndex){
	selectAllClubByProCB2(province,carBrand,pageIndex);
}
function selectClub6(province,carDep,pageIndex){
	selectAllClubByProCD2(province,carDep,pageIndex);
}	
function selectClub7(city,carBrand,pageIndex){
	selectAllClubByCityCB2(city,carBrand,pageIndex);
}
function selectClub8(city,carDep,pageIndex){
	selectAllClubByCityCD2(city,carDep,pageIndex);
}
function selectClub9(pageIndex){
	selectAll(pageIndex);
}

function selectAllClubByPro2(province,pageIndex){
	var content="";
	var content1="";
	$.getJSON("../backClub/selectAllClubByPro2.do",{"province":province,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
                		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
                		"<div class='paiming_right'>"+
                    	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
		               "<table cellpadding='0' cellspacing='0' >"+
		                  "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
		                  "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
		                    "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
		                    "</tr></table>"+
		                "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
             			"<div class='club-side'>"+
                           "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
                       "</div>"+
                	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown1(\""+province+"\","+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub1(\""+province+"\","+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown1(\""+province+"\","+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}

function selectAllClubByCity2(city,pageIndex){
	var content="";
	var content1="";
	$.getJSON("../backClub/selectAllClubByCity2.do",{"city":city,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
    		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
    		"<div class='paiming_right'>"+
        	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
           "<table cellpadding='0' cellspacing='0' >"+
              "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
              "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
                "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
                "</tr></table>"+
            "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
 			"<div class='club-side'>"+
               "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
           "</div>"+
    	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown2(\""+city+"\","+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub2(\""+city+"\","+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown2(\""+city+"\","+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}
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
function selectAllClubByCarBrand2(carBrand, pageIndex){
	var content="";
	var content1="";
	$.getJSON("../backClub/selectAllClubByCarBrand2.do",{"carBrand":carBrand,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
    		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
    		"<div class='paiming_right'>"+
        	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
           "<table cellpadding='0' cellspacing='0' >"+
              "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
              "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
                "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
                "</tr></table>"+
            "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
 			"<div class='club-side'>"+
               "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
           "</div>"+
    	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown3(\""+carBrand+"\","+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub3(\""+carBrand+"\","+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown3(\""+carBrand+"\","+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}
function selectAllClubByCarDep2(carDep,pageIndex){
	var content="";
	var content1="";
	$.getJSON("../backClub/selectAllClubByCarDep2.do",{"carDep":carDep,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
    		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
    		"<div class='paiming_right'>"+
        	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
           "<table cellpadding='0' cellspacing='0' >"+
              "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
              "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
                "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
                "</tr></table>"+
            "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
 			"<div class='club-side'>"+
               "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
           "</div>"+
    	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown4(\""+carBrand+"\","+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub4(\""+carBrand+"\","+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown4(\""+carBrand+"\","+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}

function selectAllClubByProCB2(province,carBrand,pageIndex){
	var content="";
	var content1="";
	$.getJSON("../backClub/selectAllClubByProCB2.do",{"province":province,"carBrand":carBrand,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
    		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
    		"<div class='paiming_right'>"+
        	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
           "<table cellpadding='0' cellspacing='0' >"+
              "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
              "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
                "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
                "</tr></table>"+
            "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
 			"<div class='club-side'>"+
               "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
           "</div>"+
    	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown5(\""+province+"\",\""+carBrand+"\","+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub5(\""+province+"\",\""+carBrand+"\","+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown5(\""+province+"\",\""+carBrand+"\","+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}
function selectAllClubByProCD2( province, carDep, pageIndex){
	var content="";
	var content1="";
	$.getJSON("../backClub/selectAllClubByProCD2.do",{"province":province,"carDep":carDep,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
    		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
    		"<div class='paiming_right'>"+
        	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
           "<table cellpadding='0' cellspacing='0' >"+
              "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
              "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
                "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
                "</tr></table>"+
            "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
 			"<div class='club-side'>"+
               "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
           "</div>"+
    	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown6(\""+province+"\",\""+carBrand+"\","+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub6(\""+province+"\",\""+carBrand+"\","+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown6(\""+province+"\",\""+carBrand+"\","+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}

function selectAllClubByCityCB2(city,carBrand,pageIndex){
	var content="";
	var content1="";
	$.getJSON("../backClub/selectAllClubByCityCB2.do",{"city":city,"carBrand":carBrand,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
    		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
    		"<div class='paiming_right'>"+
        	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
           "<table cellpadding='0' cellspacing='0' >"+
              "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
              "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
                "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
                "</tr></table>"+
            "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
 			"<div class='club-side'>"+
               "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
           "</div>"+
    	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown7(\""+city+"\",\""+carBrand+"\","+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub7(\""+city+"\",\""+carBrand+"\","+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown7(\""+city+"\",\""+carBrand+"\","+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}

function selectAllClubByCityCD2(city,carDep,pageIndex){
	var content="";
	var content1="";
	$.getJSON("../backClub/selectAllClubByCityCD2.do",{"city":city,"carDep":carDep,"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
    		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
    		"<div class='paiming_right'>"+
        	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
           "<table cellpadding='0' cellspacing='0' >"+
              "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
              "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
                "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
                "</tr></table>"+
            "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
 			"<div class='club-side'>"+
               "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
           "</div>"+
    	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown8(\""+city+"\",\""+carDep+"\","+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub8(\""+city+"\",\""+carDep+"\","+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown8(\""+city+"\",\""+carDep+"\","+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}

function selectAll(pageIndex){
	var content="";
	var content1="";
	$.getJSON("../club/selectAll.do",{"pageIndex":pageIndex},function(data){
		for(var i=0;i<data[0].length;i++){
			content+="<div class='paiming'>"+
                		"<div class='paiming_left'><img src=../"+data[0][i].club_img+" width='100px' height='100px'/></div>"+
                		"<div class='paiming_right'>"+
                    	"<h2><a href='carClub.html?club_id="+data[0][i].club_id+"'>"+data[0][i].club_name+"</a></h2>"+
		               "<table cellpadding='0' cellspacing='0' >"+
		                  "<tr><td width='25%' >地区："+data[0][i].club_pro+"</td>"+
		                  "<td width='25%' >车牌："+data[0][i].club_cb+"</td>"+
		                    "<td width='25%' >会员："+data[0][i].club_pnum+"人</td>"+
		                    "</tr></table>"+
		                "<div class='jj' >简介："+data[0][i].club_desc+"</div></div>"+
             			"<div class='club-side'>"+
                           "<div class='u-live'>贡献值<strong>"+data[0][i].club_tcon+"</strong></div>"+
                       "</div>"+
                	"</div>";
		}
		content1+="<div class='digg'><a href='javascript:pageUpAndDown9("+(pageIndex-1)+","+data[1][3]+")'>&lt;</a>";
		for(var i=0;i<data[1][3];i++){
			content1+="<a href=javascript:selectClub9("+(i+1)+")>"+(i+1)+"</a>";
		}
		content1+="<a href='javascript:pageUpAndDown9("+(pageIndex+1)+","+data[1][3]+")'>&gt;</a></div>";
		$("#fenye").html(content1);
		$("#allCarClub").html(content);
	});
}

function fuzzyClubByName(){
	var club_name=$("#clubName").val();
	$.getJSON("../clubHomeu.do",{"club_name":club_name},function(data){
		fuzzyClub=data;
		showFuzzyClub(1);
	});
}

function showFuzzyClub(page){
	var content="";
	if(fuzzyClub.length>=8*page){
		for(var i=8*(page-1);i<8*page;i++){
			content+="<div class='paiming'>"+
			"<div class='paiming_left'><img src=../"+fuzzyClub[i].club_img+" width='100px' height='100px'/></div>"+
			"<div class='paiming_right'>"+
	    	"<h2><a href='carClub.html?club_id="+fuzzyClub[i].club_id+"'>"+fuzzyClub[i].club_name+"</a></h2>"+
	       "<table cellpadding='0' cellspacing='0' >"+
	          "<tr><td width='25%' >地区："+fuzzyClub[i].club_pro+"</td>"+
	          "<td width='25%' >车牌："+fuzzyClub[i].club_cb+"</td>"+
	            "<td width='25%' >会员："+fuzzyClub[i].club_pnum+"人</td>"+
	            "</tr></table>"+
	        "<div class='jj' >简介："+fuzzyClub[i].club_desc+"</div></div>"+
				"<div class='club-side'>"+
	           "<div class='u-live'>贡献值<strong>"+fuzzyClub[i].club_tcon+"</strong></div>"+
	       "</div>"+
		"</div>";
		}
	}else{
		for(var i=8*(page-1);i<fuzzyClub.length;i++){
			content+="<div class='paiming'>"+
			"<div class='paiming_left'><img src=../"+fuzzyClub[i].club_img+" width='100px' height='100px'/></div>"+
			"<div class='paiming_right'>"+
	    	"<h2><a href='carClub.html?club_id="+fuzzyClub[i].club_id+"'>"+fuzzyClub[i].club_name+"</a></h2>"+
	       "<table cellpadding='0' cellspacing='0' >"+
	          "<tr><td width='25%' >地区："+fuzzyClub[i].club_pro+"</td>"+
	          "<td width='25%' >车牌："+fuzzyClub[i].club_cb+"</td>"+
	            "<td width='25%' >会员："+fuzzyClub[i].club_pnum+"人</td>"+
	            "</tr></table>"+
	        "<div class='jj' >简介："+fuzzyClub[i].club_desc+"</div></div>"+
				"<div class='club-side'>"+
	           "<div class='u-live'>贡献值<strong>"+fuzzyClub[i].club_tcon+"</strong></div>"+
	       "</div>"+
		"</div>";
		}
	}
	$("#allCarClub").html(content);
	showFuzzyClubPage(page);
}

function showFuzzyClubPage(page){
	var content2="";
	var allPage=(fuzzyClub.length-1)/8+1;
	content2+="<div class='digg'><a href='javascript:pageUpAndDown("+(page-1)+","+allPage+")'>&lt;</a>";
	for(var i=1;i<=(fuzzyClub.length-1)/8+1;i++){
		content2+="<a href=javascript:showFuzzyClub("+i+")>"+i+"</a>";
	}
	content2+="<a href='javascript:pageUpAndDown("+(page+1)+","+allPage+")'>&gt;</a></div>";
	$("#fenye").html(content2);
	
}

function pageUpAndDown(page,allPage){
	if(page<=0){
		alert("没有上一页了");
	}else if(page>allPage){
		alert("没有下一页了")
	}else{
		showFuzzyClub(page)
	}
}