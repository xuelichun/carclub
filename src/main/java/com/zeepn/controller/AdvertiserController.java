package com.zeepn.controller;


import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.zeepn.bean.AdvDesc;
import com.zeepn.bean.AdvType;
import com.zeepn.bean.Advertiser;
import com.zeepn.service.AdvertiserService;
import com.zeepn.utils.Upload;

@Controller
@RequestMapping("/advertiser")
public class AdvertiserController {
	@Autowired
	AdvertiserService advertiserService;
	@RequestMapping("/aa")
	@ResponseBody
	public List<Advertiser>  selectAdvertiser(int adv_id){
		List<Advertiser> advertiser=advertiserService.selectAllAdvertiser(adv_id);
		return advertiser;
	}
	@RequestMapping("/bb")
	@ResponseBody
	public List<Advertiser> selectAdvertiserByPage(int adv_id,int page){
		Map<String, Integer> map=new HashMap<String,Integer>();
		map.put("adv_id", adv_id);
		map.put("page", page);
		List<Advertiser> advertise=advertiserService.selectAdvertiserByPage(map);
		return advertise;
	}
	@RequestMapping("/showAdvIndex")
	@ResponseBody
	public List<AdvDesc> showAdvIndex(){
		return advertiserService.advRank();
	}
	@RequestMapping(value="/adv",method=RequestMethod.POST)
	@ResponseBody
	public Object insertAdvertiser(@RequestParam MultipartFile[] pic,HttpServletRequest request,Advertiser advertiser) throws IOException{
		String adv_img="";
		for(MultipartFile file:pic){
			adv_img=Upload.uploadPicture(file, request,"advertiser");
		}
		if(adv_img!=null){
			advertiser.setAdv_img(adv_img);
			if(advertiserService.insertAdvertiser(advertiser)>0){
				return "{\"rs\":\"ok\"}";
			}else{
				Upload.deletePicture(adv_img);
				return "{\"rs\":\"no\"}";
			}
		}else{
			return "{\"rs\":\"no\"}";
		}
	}
	@RequestMapping("/dd")
	public void deleteAdvertiser(int adv_id){
		int row=advertiserService.deleteAdvertiser(adv_id);
		if(row==1){
			advertiserService.deleteAdvertiserById(adv_id);
		}
	}
	@RequestMapping("/ee")
	@ResponseBody
	public int updateAdvertiser(Advertiser adv){
		return advertiserService.updateAdvertiser(adv);
	}
	@RequestMapping(value="/desc",method=RequestMethod.POST)
	@ResponseBody
	public Object insertAdvDesc(@RequestParam MultipartFile[] pict,HttpServletRequest request,AdvDesc advDesc) throws IOException{
		String advDesc_img="";
		for(MultipartFile file:pict){
			advDesc_img=Upload.uploadPicture(file, request,"advDesc");
		}
		if(advDesc_img!=null){
			advDesc.setAd_img(advDesc_img);
			if(advertiserService.insertAdvDesc(advDesc)>0){
				return "{\"rs\":\"ok\"}";
			}else{
				Upload.deletePicture(advDesc_img);
				return "{\"rs\":\"no\"}";
			}
		}else{
			return "{\"rs\":\"no\"}";
		}
	}
	
	@RequestMapping("/gg")
	@ResponseBody
	public int updateAdverDesc(AdvDesc advDesc){
		return advertiserService.updateAdverDesc(advDesc);
	}
	
	@RequestMapping("/hh")
	@ResponseBody
	public List<AdvDesc> selectAdverDesc(int adv_id){
		return advertiserService.selectAdvDesc(adv_id);
	}
	
	@RequestMapping("/ii")
	@ResponseBody
	public int insertAdvType(AdvType advType){
		return advertiserService.insertAdvType(advType);
	}
	
	@RequestMapping("/jj")
	public int deleteAdvType(int at_id){
		return advertiserService.deleteAdvType(at_id);
	}
	
	@RequestMapping("/kk")
	@ResponseBody
	public int updateAdvType(AdvType advType){
		return advertiserService.updateAdverType(advType);
	}
	
	@RequestMapping("/selectAllType")
	@ResponseBody
	public List<AdvType> selectAllAdvType(){
		List<AdvType> advType=advertiserService.selectAllAdvType();
		return advType;
	}
	
	@RequestMapping("/show")
	@ResponseBody
	public AdvType selectAdvType(int ad_id){
		return advertiserService.selectAdvType(ad_id);
	}
	

	@RequestMapping("/showDesc")
	@ResponseBody
	public List<AdvDesc> showAdvDesc(int ad_id){
		return advertiserService.showAdvDesc(ad_id);
	}
	
	@RequestMapping("/clickNum")
	@ResponseBody
	public Object clickNum(int ad_id){
		if(advertiserService.clickNum(ad_id)>0){
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}
	}
	
	@RequestMapping("/showAdvRank")
	@ResponseBody
	public List<AdvDesc> advRank(){
		List<AdvDesc> showRank=advertiserService.advRank();
		return showRank;
	}
	
	
	@RequestMapping("/showAdvType")
	@ResponseBody
	public AdvType selectAdvTypeById(int at_id){
		AdvType advType=advertiserService.selectAdvTypeById(at_id);
		return advType;
	}
	
	
	@RequestMapping("/countAdvName")
	@ResponseBody
	public Object countAdvName(String adv_name){
		int count=advertiserService.countAdvName(adv_name);
		if(count>0){
			return "{\"rs\":\"no\"}";
		}else{
			return "{\"rs\":\"ok\"}";
		}
	}
	
	@RequestMapping("/selectAdvDescById")
	@ResponseBody
	public AdvDesc selectAdvDescById(int ad_id){
		AdvDesc advDesc=advertiserService.selectAdvDescById(ad_id);
		System.out.println(advDesc);
		return advDesc;
	}
}
