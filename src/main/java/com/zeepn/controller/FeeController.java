package com.zeepn.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.Function;
import com.zeepn.bean.NumLevel;
import com.zeepn.bean.UserInfo;
import com.zeepn.service.FeeService;

@Controller
@RequestMapping("/fee")
public class FeeController {
	/**
	 * 自动注入dao
	 */
	@Resource(name="feeService")
	private FeeService feeService;
	
	@RequestMapping("/selectAllFun")
	@ResponseBody
	public List<Function> selectAllFun(){
		return feeService.selectAllFun();
	}
	@RequestMapping("/selectAllNlf")
	@ResponseBody
	public List<NumLevel> selectAllNlf(){
		return feeService.selectAllNlf();
	}
	@RequestMapping("/subAnf")
	@ResponseBody
	public Object subAnf(int af_price,HttpServletRequest request){
		HttpSession session=request.getSession();
		af_price=1000;
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		if(feeService.subAnf(af_price,userInfo.getClub_id()).equals("年费缴费成功")){
			return "{\"result\":\"ok\"}";
		}else if(feeService.subAnf(af_price,userInfo.getClub_id()).equals("年费缴费失败")){
			return "{\"result\":\"sorry\"}";
		}else{
			return "{\"result\":\"error\"}";
		}
	}
	@RequestMapping("/subfc")
	@ResponseBody
	public Object subfc(int fun_id,HttpServletRequest request){
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		if(feeService.subfc(fun_id,userInfo.getClub_id()).equals("功能费用缴费成功")){
			return "{\"result\":\"ok\"}";
		}else if(feeService.subfc(fun_id,userInfo.getClub_id()).equals("功能费用缴费失败")){
			return "{\"result\":\"sorry\"}";
		}else{
			return "{\"result\":\"error\"}";
		}
	}
	@RequestMapping("/subnlf")
	@ResponseBody
	public Object subnlf(int nl_id,HttpServletRequest request){
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		if(feeService.subnlf(nl_id,userInfo.getClub_id()).equals("人数级别费用缴费成功")){
			return "{\"result\":\"ok\"}";
		}else if(feeService.subnlf(nl_id,userInfo.getClub_id()).equals("人数级别费用缴费失败"))
		{
			return "{\"result\":\"sorry\"}";
		}else{
			return "{\"result\":\"error\"}";
		}
	}
	
}
