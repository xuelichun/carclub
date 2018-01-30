package com.zeepn.controller;

import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.Adm;
import com.zeepn.service.AdmService;

@Controller
@RequestMapping("/adm")
public class AdmController {

	/**
	 * 自动注入dao 
	 */
	@Resource(name="admService")
	private AdmService admService;
	
	@RequestMapping("/login")
	@ResponseBody
	public Object admLogin(String adm_name,String adm_pwd,String adm_level,HttpServletRequest request){
		HttpSession session=request.getSession();
		if(admService.isAdmOwn(adm_name,adm_level)<=0){
			return "{\"result\":\"notOwn\"}";
		}else if(admService.admLogin(adm_name,adm_pwd,adm_level)){
			Adm adm=admService.selectAdm(adm_name,adm_pwd,adm_level);
			session.setAttribute("adm", adm);
			return "{\"result\":\"ok\"}";
		}else{
			return "{\"result\":\"sorry\"}";
		}
	}
	@RequestMapping("/updatePwd")
	@ResponseBody
	public Object admUpPwd(String adm_pwd,HttpServletRequest request){
		HttpSession session=request.getSession();
		Adm adm=(Adm)session.getAttribute("adm");
		String adm_name=adm.getAdm_name();
		Adm adm1=admService.packetAdm(adm);
		if(adm1.getAdm_pwd().equals(adm_pwd)){
			return "{\"result\":\"identi\"}";
		}else if(admService.updatePwd(adm_name,adm_pwd)){
			return "{\"result\":\"ok\"}";
		}else{
			return "{\"result\":\"sorry\"}";
		}
	}
	@RequestMapping("/nameIsExist")
	@ResponseBody
	public Object nameIsExist(String adm_name){
		if(admService.nameIsExit(adm_name)){
			return "{\"result\":\"ok\"}";
		}else{
			return "{\"result\":\"sorry\"}";
		}
	}
	@RequestMapping("/addAdm")
	@ResponseBody
	public Object addAdm(String adm_name,String adm_pwd,String adm_level,HttpServletRequest request){
		HttpSession session=request.getSession();
		Adm adm=(Adm)session.getAttribute("adm");
		if(!admService.nameIsExit(adm_name)){
			return "{\"result\":\"exit\"}";
		}else if(admService.insertAdm(adm_name,adm_pwd,adm_level,adm)){
			return "{\"result\":\"ok\"}";
		}else{
			return "{\"result\":\"sorry\"}";
		}
	}
	@RequestMapping("/isLogin")
	@ResponseBody
	public Adm isLogin(HttpServletRequest request){
		HttpSession session=request.getSession();
		Adm adm=(Adm)session.getAttribute("adm");
		return adm;
	}
	@RequestMapping("/selectAllGa")
	@ResponseBody
	public HashMap<Integer, Object> selectAllGa(int pageIndex){
		HashMap<Integer, Object> anMap=admService.selectAllGa(pageIndex);
		return anMap;
	}
	@RequestMapping("/admAuthority")
	@ResponseBody
	public Object admAuthority(HttpServletRequest request){
		HttpSession session=request.getSession();
		Adm adm=(Adm)session.getAttribute("adm");
		if(adm==null){
			return "{\"result\":\"error\"}";
		}else if(adm.getAdm_level().equals("2")){
			return "{\"result\":\"sorry\"}";
		}else{
			return "{\"result\":\"ok\"}";
		}
	}
}
