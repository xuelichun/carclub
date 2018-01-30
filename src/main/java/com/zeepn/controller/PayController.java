package com.zeepn.controller;

import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.service.PayService;

@Controller
@RequestMapping("/pay")
public class PayController {
	/**
	 * 自动注入dao
	 */
	@Resource(name="payService")
	private PayService payService;
	
	@RequestMapping("/selectAllPay")
	@ResponseBody
	public HashMap<Integer, Object> selectAllPay(int pageIndex,int feeType){
		HashMap<Integer, Object> anMap=payService.selectPayRecord(pageIndex, feeType);
		return anMap;
	}
	@RequestMapping("/selectPayByTime")
	@ResponseBody
	public HashMap<Integer, Object> selectPayByTime(int pageIndex,int feeType,String payTime){
		HashMap<Integer, Object> anMap=payService.selectPayRecordByTime(pageIndex, feeType, payTime);
		return anMap;
	}
	@RequestMapping("/selectPayByDay")
	@ResponseBody
	public HashMap<Integer, Object> selectPayByDay(int pageIndex,int feeType,int day){
		HashMap<Integer, Object> anMap=payService.selectPayRecordByDay(pageIndex, feeType, day);
		return anMap;
	}
	@RequestMapping("/selectPayByClubId")
	@ResponseBody
	public HashMap<Integer, Object> selectPayByClubId(int pageIndex,int feeType,int club_id){
		HashMap<Integer, Object> anMap=payService.selectPayRecordClubId(pageIndex, feeType, club_id);
		return anMap;
	}
	@RequestMapping("/selectPayByTimeDay")
	@ResponseBody
	public HashMap<Integer, Object> selectPayByTimeDay(int pageIndex,int feeType,String payTime,int day){
		HashMap<Integer, Object> anMap=payService.selectPayRecordByTimeDay(pageIndex, feeType,payTime,day);
		return anMap;
	}
	@RequestMapping("/selectPayByTimeCId")
	@ResponseBody
	public HashMap<Integer, Object> selectPayByTimeCId(int pageIndex,int feeType,String payTime,int club_id){
		HashMap<Integer, Object> anMap=payService.selectPayRecordByTimeCId(pageIndex, feeType,payTime,club_id);
		return anMap;
	}
	@RequestMapping("/selectPayByDayClubId")
	@ResponseBody
	public HashMap<Integer, Object> selectPayByDayClubId(int pageIndex,int feeType,int day,int club_id){
		HashMap<Integer, Object> anMap=payService.selectPayRecordByDayCId(pageIndex, feeType,day,club_id);
		return anMap;
	}
	@RequestMapping("/selectPayByTimeDCId")
	@ResponseBody
	public HashMap<Integer, Object> selectPayByTimeDCId(int pageIndex,int feeType,String payTime,int day,int club_id){
		HashMap<Integer, Object> anMap=payService.selectPayByTimeDCId(pageIndex, feeType,payTime,day,club_id);
		return anMap;
	}
	@RequestMapping("/updatePay")
	@ResponseBody
	public Object updatePay(int feeType){
		boolean flag=payService.updateStaFeeRecord(feeType);
		if(flag){
			return "{\"result\":\"ok\"}";
		}else{
			return "{\"result\":\"sorry\"}";
		}
	}
}
