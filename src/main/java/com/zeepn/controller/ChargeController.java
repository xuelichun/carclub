package com.zeepn.controller;

import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.service.ChargeService;

@Controller
@RequestMapping("/charge")
public class ChargeController {
	
	/**
	 * 自动注入dao
	 */
	@Resource(name="chargeService")
	private ChargeService chargeService;
	
	@RequestMapping("/selectAllCharge")
	@ResponseBody
	public HashMap<Integer, Object> selectAllCharge(int pageIndex,int feeType){
		HashMap<Integer, Object> anMap=chargeService.selectAllPay(pageIndex, feeType);
		return anMap;
	}
	@RequestMapping("/selectAllChargeByTime")
	@ResponseBody
	public HashMap<Integer, Object> selectAllChargeByTime(int pageIndex,int feeType,String chargeTime){
		HashMap<Integer, Object> anMap=chargeService.selectAllPayByPP(pageIndex, feeType, chargeTime);
		return anMap;
	}
	@RequestMapping("/selectChargeByClubId")
	@ResponseBody
	public HashMap<Integer, Object> selectChargeByClubId(int pageIndex,int feeType,int club_id){
		HashMap<Integer, Object> anMap=chargeService.selectPayByClubId(pageIndex, feeType, club_id);
		return anMap;
	}
	@RequestMapping("/selectChargeByCidPtime")
	@ResponseBody
	public HashMap<Integer, Object> selectChargeByCidPtime(int pageIndex,int feeType,String chargeTime,int club_id){
		HashMap<Integer, Object> anMap=chargeService.selectAllPayByCidPtime(pageIndex, feeType, club_id, chargeTime);
		return anMap;
	}
	@RequestMapping("/selectAllChargeByPId")
	@ResponseBody
	public HashMap<Integer, Object> selectAllChargeByPId(int pageIndex,int feeType,int payId){
		HashMap<Integer, Object> anMap=chargeService.selectPayByPayId(pageIndex, feeType, payId);
		return anMap;
	}
}
