$(function(){
	$.getJSON("../clubRank/showRankIndex.do",{},function(data){
		var test="";
		for(var j=0;j<5;j++){
			if(j<4){
				test+="<li><span class='sp sp"+(j+1)+"'>"+(j+1)+"</span>\n<span class='zhic'><img alt=''src=../"+data[j].club_img+" width='20px' height='20px'/></span>\n<span class='name'><a href=carClub.html?club_id="+data[j].club_id+">";
				var clubName=data[j].club_name;
				if(clubName.length>=9){
					clubName=clubName.substring(1,9);
					test+=clubName+"..</a></span>\n<span class='oil'>"+data[j].club_tcon+"L</span>\n</li>";
				}else{
					test+=clubName+"</a></span>\n<span class='oil'>"+data[j].club_tcon+"L</span>\n</li>";
				}
			}else{
				test+="<li><span class='sp sp'>"+(j+1)+"</span>\n<span class='zhic'><img alt=''src=../"+data[j].club_img+" width='20px' height='20px'/></span>\n<span class='name'><a href="+data[j].club_id+">"+data[j].club_name+"</a></span>\n<span class='oil'>"+data[j].club_tcon+"L</span>\n</li>";
			}
		}
		$("#clubRank").html(test);
	});   

	$.getJSON("../user/userRank.do",{},function(data){
		
		var users="";
		for(var i=0;i<5;i++){
			if(i<4){
				users+="<li><span class='sp sp"+(i+1)+"'>"+(i+1)+"</span>\n<span class='zhic'><img alt=''src=../"+data[i].u_head+" width='20px' height='20px'/></span>\n<span class='name'><a href=friendsShow.html?u_id="+data[i].u_id+">" ;
				var uNick=data[i].u_nick;
				if(uNick.length>=9){
					uNick=uNick.substring(1,9);
					users+=uNick+"..</a></span>\n<span class='oil'>"+data[i].u_con+"L</span>\n</li>";
				}else{
					users+=data[i].u_nick+"</a></span>\n<span class='oil'>"+data[i].u_con+"L</span>\n</li>";
				}
			}else{
				users+="<li><span class='sp sp'>"+(i+1)+"</span>\n<span class='zhic'><img alt=''src=../"+data[i].u_head+" width='20px' height='20px'/></span>\n<span class='name'><a href=friendsShow.html?u_id="+data[i].u_id+">"+data[i].u_nick+"</a></span>\n<span class='oil'>"+data[i].u_con+"L</span>\n</li>";
			}
		}
		$("#userRank").html(users);
	});
	
});