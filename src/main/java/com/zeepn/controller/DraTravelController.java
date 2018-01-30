package com.zeepn.controller;

import java.io.IOException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.zeepn.bean.DraTravel;
import com.zeepn.service.DraTravelService;
import com.zeepn.utils.Upload;

@Controller
@RequestMapping("/draTravel")
public class DraTravelController {
	
	@Autowired
	DraTravelService draTravelService;
	
	@RequestMapping(value="/insertdraTravel",method=RequestMethod.POST)
	@ResponseBody
	public Object insertDraTravel(@RequestParam MultipartFile[] pictures,HttpServletRequest request,DraTravel draTravel) throws IOException{	
		String dt_img="";
		for(MultipartFile file:pictures){
			dt_img=Upload.uploadPicture(file, request,"draTravel");
		}
		if(dt_img!=null){
			draTravel.setDt_img(dt_img);
			if(draTravelService.insertDraTravel(draTravel)>0){
				return "{\"rs\":\"ok\"}";
			}else{
				Upload.deletePicture(dt_img);
				return "{\"rs\":\"no\"}";
			}
		}else{
			return "{\"rs\":\"no\"}";
		}
	}
	@RequestMapping("/draTravelb")
	@ResponseBody
	public DraTravel selectDraTravelById(int dt_id){
		return draTravelService.selectDraTravelById(dt_id);
	}
	
	@RequestMapping("/draTravelc")
	@ResponseBody
	public List<DraTravel> selectDraTravel(int dt_id){
		return draTravelService.selectDraTravel(dt_id);
	}
	
	public DraTravel selectTop1(){
		return draTravelService.selectTop1();
	}
	@RequestMapping("/draTraveld")
	@ResponseBody
	public int updateDraTravel(DraTravel draTravel){
		return draTravelService.updateDraTravel(draTravel);
	}
	
	@RequestMapping("/draTravele")
	@ResponseBody
	int deleteDraTravel(int dt_id){
		return draTravelService.deleteDraTravel(dt_id);
	}
	
	@RequestMapping("/showDraIndex")
	@ResponseBody
	public List<DraTravel> showDraIndex(int pageIndex){
		List<DraTravel> draTravel=draTravelService.showDra(pageIndex);
		return draTravel;
	}
	
	@RequestMapping("/countDra")
	@ResponseBody
	public int countDra(){
		
		return draTravelService.countDra();
	}
	
	
	@RequestMapping("/addTour")
	@ResponseBody
	public Object addTour(int u_id,int dt_id){
		if(draTravelService.countDras(u_id, dt_id)>0){
			return "{\"rs\":\"no\"}";
		}else{
			if(draTravelService.addTour(u_id,dt_id)>0){
				return "{\"rs\":\"ok\"}";
			}else{
				return "{\"rs\":\"failed\"}";
			}
		}
		
	}
	
	
}
