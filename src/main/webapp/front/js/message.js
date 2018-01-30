
function change(values){


	if (values=="1"){
		document.getElementById("d1").style.display="none";
		document.getElementById("d2").style.display="none";
			
	}else{
		document.getElementById("d1").style.display="";
		document.getElementById("d2").style.display="";
	}
};
function chang2(values){
	if(values=="0"){
		
	};
	if(values=="1"){
		
	}	
}

function addFusMsg(){
var fm_msg=$("#fm_msg").val();
var mt_id=$("#mt_id").val();

$.getJSON("./FusMsga.do",{"fm_msg":fm_msg,"mt_id":mt_id},function(data){

	if(data=="1"){
		alert("添加成功");
	}else{
		alert("添加失敗");
	}
});


}
function checkMsg(){
	var fa_title=$("#fm_msg").val();
	alert(fm_msg)
	if($("#msg").val().trim()==''){
		$("#msg").html("内容不能为空");
		
		$("#msg").prop("style","color:#f00;");
		return false;
	}else{
		$("#msg").html("");
		return true;
	}
}
