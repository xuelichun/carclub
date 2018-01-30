package com.zeepn.controller;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.AppliNotice;
import com.zeepn.bean.CarBrand;
import com.zeepn.bean.CarDep;
import com.zeepn.bean.Club;
import com.zeepn.bean.UserInfo;
import com.zeepn.service.BackClubService;
import com.zeepn.service.CarService;

@Controller
@RequestMapping("/club")
public class ClubController {
	/**
	 * 自动注入dao
	 */
	@Resource(name="backClubService")
	private BackClubService backClubService;
	@Resource(name="carService")
	private CarService carService;
	
	@RequestMapping("/selectAll")
	@ResponseBody
	public Object selectClubRank(int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubRank(pageIndex);
		return anMap;
	}
	@RequestMapping("/selectFront")
	@ResponseBody
	public Object selectFrontClubRank(){
		List<Club> clubList=backClubService.seleFrontClub();
		return clubList;
	}
	@RequestMapping("/beforeCreClub")
	@ResponseBody
	public  Object selectAllCarB(){
		List<CarBrand> cbList=carService.selectAllCarB();
		return cbList;
	}
	@RequestMapping("/cbLianDong")
	@ResponseBody
	public Object cbLianDong(int cb_id){
		List<CarDep> cdList=carService.selectAllCarD(cb_id);
		return cdList;
	}
	@RequestMapping("/domnamIsExit")
	@ResponseBody
	public Object domnamIsExit(String club_domnam){
		if(backClubService.domnamIsExit(club_domnam)){
			return "{\"result\":\"dIsE\"}";
		}else{
			return "{\"result\":\"ok\"}";
		}
	}
	@RequestMapping("/unameIsExit")
	@ResponseBody
	public Object unameIsExit(String club_name){
		if(backClubService.unameIsExit(club_name)){
			return "{\"result\":\"uIsE\"}";
		}else{
			return "{\"result\":\"ok\"}";
		}
	}
	
	@RequestMapping("/creClub")
	@ResponseBody
	public Object creClub(AppliNotice appliNotice,HttpServletRequest request){
		HttpSession session=request.getSession();
			session.setAttribute("appliNotice", appliNotice);
			return "{\"result\":\"ok\"}";
	}
	@RequestMapping("/subClubInfo")
	@ResponseBody
	public Object subClubInfo(UserInfo userInfo,HttpServletRequest request){
		HttpSession session=request.getSession();
		AppliNotice appliNotice=(AppliNotice) session.getAttribute("appliNotice");
		UserInfo userInfo2=(UserInfo) session.getAttribute("user");
		if(backClubService.subClubInfo(appliNotice,userInfo,userInfo2.getU_id())){
			return "{\"result\":\"ok\"}";
		}else{
			return "{\"result\":\"sorry\"}";
		}
	}
}
