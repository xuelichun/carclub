package com.zeepn.controller;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.AdvType;
import com.zeepn.bean.Advertiser;
import com.zeepn.service.BackAdvService;

@Controller
@RequestMapping("/backAdv")
public class BackAdvController {
	/**
	 * 自动注入dao
	 */
	@Resource(name="backAdvService")
	private BackAdvService backAdvService;
	
	@RequestMapping("/selectAdvRank")
	@ResponseBody
	public HashMap<Integer, Object> selectAdvRank(int pageIndex){
		HashMap<Integer, Object> anMap=backAdvService.selectAdvRank(pageIndex);
		return anMap;
	}
	
	@RequestMapping("/selectAdvRankByAT")
	@ResponseBody
	public HashMap<Integer, Object> selectAdvRankByAT(int pageIndex,String advType){
		HashMap<Integer, Object> anMap=backAdvService.selectAdvRankByAT(pageIndex,advType);
		return anMap;
	}
	
	@RequestMapping("/selectAdvRankByAD")
	@ResponseBody
	public HashMap<Integer, Object> selectAdvRankByAD(int pageIndex,String advser){
		HashMap<Integer, Object> anMap=backAdvService.selectAdvRankByAD(pageIndex,advser);
		return anMap;
	}
	
	@RequestMapping("/selectAdvRankByADId")
	@ResponseBody
	public HashMap<Integer, Object> selectAdvRankByADId(int pageIndex,int adv_id){
		HashMap<Integer, Object> anMap=backAdvService.selectAdvRankByADId(pageIndex,adv_id);
		return anMap;
	}
	
	@RequestMapping("/selectAdvRankByAA")
	@ResponseBody
	public HashMap<Integer, Object> selectAdvRankByAA(int pageIndex,String advType,String advser){
		HashMap<Integer, Object> anMap=backAdvService.selectAdvRankByAA(pageIndex,advType,advser);
		return anMap;
	}
	
	@RequestMapping("/selectAllAT")
	@ResponseBody
	public List<AdvType> selectAllAT(){
		List<AdvType> atList=backAdvService.selectAllAT();
		return atList;
	}
	
	@RequestMapping("/selectAllAD")
	@ResponseBody
	public List<Advertiser> selectAllAD(){
		List<Advertiser> adList=backAdvService.selectAllAD();
		return adList;
	}
}
