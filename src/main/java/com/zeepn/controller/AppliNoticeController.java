package com.zeepn.controller;

import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.Adm;
import com.zeepn.service.AppliNoticeService;
@Controller
@RequestMapping("/appliNotice")
public class AppliNoticeController {
	/**
	 * 自动注入dao
	 */
	@Resource(name="appliNoticeService")
	private AppliNoticeService appliNoticeService;
	
	@RequestMapping("/selectAllAn")
	@ResponseBody
	public HashMap<Integer, Object> selectAllAn(int pageIndex,int readSign){
		HashMap<Integer, Object> anMap=appliNoticeService.selectApplicNoticeByReadSign(pageIndex, readSign);
		return anMap;
	} 
	@RequestMapping("/selectAllAnByApliTime")
	@ResponseBody
	public HashMap<Integer, Object> selectAllAnByApliTime(String repliTime,int readSign,int pageIndex){
		HashMap<Integer, Object> anMap=appliNoticeService.selectAllAnByApliTime(repliTime,readSign,pageIndex);
		return anMap;
	} 
	@RequestMapping("/selectAllAnByAnId")
	@ResponseBody
	public HashMap<Integer, Object> selectAllAnByAnId(int an_id,int readSign,int pageIndex){
		HashMap<Integer, Object> anMap=appliNoticeService.selectAllAnByAnId(an_id,readSign,pageIndex);
		return anMap;
	} 
	@RequestMapping("/passApli")
	@ResponseBody
	public int[] passApli(int[] chk_value,HttpServletRequest request){
		HttpSession session=request.getSession();
		Adm adm=(Adm)session.getAttribute("adm");
		int[] count=appliNoticeService.passApli(chk_value,adm);
		return count;
	}
	@RequestMapping("/negApli")
	@ResponseBody
	public int[] negApli(int[] chk_value,HttpServletRequest request){
		HttpSession session=request.getSession();
		Adm adm=(Adm)session.getAttribute("adm");
		int[] count=appliNoticeService.negApli(chk_value,adm);
		return count;
	}
	@RequestMapping("/selectPassUser")
	@ResponseBody
	public int[] selectPassUser(int[] chk_value){
		int[] count=appliNoticeService.selectSendUser(chk_value);
		return count;
	}
	@RequestMapping("/selectNegUser")
	@ResponseBody
	public int[] selectNegUser(int[] chk_value){
		int[] count=appliNoticeService.selectSendUser(chk_value);
		return count;
	}
	@RequestMapping("/selectOneApli")
	@ResponseBody
	public  HashMap<Integer, Object> selectOneApli(int an_id,int p_id){
		HashMap<Integer, Object> anMap=appliNoticeService.selectOneApli(an_id,p_id);
		return anMap;
	}
	@RequestMapping("/userIsLogin")
	@ResponseBody
	public Object userIsLogin(HttpServletRequest request){
		HttpSession session=request.getSession();
		Adm adm=(Adm) session.getAttribute("adm");
		if(adm!=null){
			return "{\"result\":\"ok\"}";
		}else{
			return "{\"result\":\"sorry\"}";
		}
	}
}

