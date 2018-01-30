package com.zeepn.controller;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.UserInfo;
import com.zeepn.service.BackPreInfoService;

@Controller
@RequestMapping("/backPreInfo")
public class BackPreInfoController {
	/**
	 * 自动注入dao
	 */
	@Resource(name="backPreInfoService")
	private BackPreInfoService backPreInfoService;
	
	@RequestMapping("/selectSendArPIList")
	@ResponseBody
	public HashMap<Integer, Object> selectSendArPIList(int feeType,int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectSendArPIList(feeType,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllPI")
	@ResponseBody
	public HashMap<Integer, Object> selectAllPI(int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectAllPI(pageIndex);
		return anMap;
	}
	@RequestMapping("/selectPIByClubId")
	@ResponseBody
	public HashMap<Integer, Object> selectPIByClubId(int club_id,int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectPIByClubId(club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectPIByClubName")
	@ResponseBody
	public HashMap<Integer, Object> selectPIByClubName(String club_name,int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectPIByClubName(club_name,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectPIByCICN")
	@ResponseBody
	public HashMap<Integer, Object> selectPIByCICN(int club_id,String club_name,int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectPIByCICN(club_id,club_name,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllPIByTime")
	@ResponseBody
	public HashMap<Integer, Object> selectAllPIByTime(int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectAllPIByTime(pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllPIByCname")
	@ResponseBody
	public HashMap<Integer, Object> selectAllPIByCname(String club_name,int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectAllPIByCname(club_name,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllPIByCId")
	@ResponseBody
	public HashMap<Integer, Object> selectAllPIByCId(int club_id,int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectAllPIByCId(club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllPreRank")
	@ResponseBody
	public HashMap<Integer, Object> selectAllPIRank(int pageIndex){
		HashMap<Integer, Object> anMap=backPreInfoService.selectAllPreRank(pageIndex);
		return anMap;
	}
	@RequestMapping("/selectFrontPreRank")
	@ResponseBody
	public List<UserInfo> selectFrontPIRank(){
		return backPreInfoService.selectFrontPreRank();
	}
}
