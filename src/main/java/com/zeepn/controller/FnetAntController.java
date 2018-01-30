package com.zeepn.controller;


import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;





import com.zeepn.bean.Adm;
import com.zeepn.bean.FnetAnt;
import com.zeepn.service.FnetAntService;
import com.zeepn.utils.EscapeChars;
import com.zeepn.utils.TransCoding;

@Controller

public class FnetAntController {

	
		@Autowired
		FnetAntService fnetAntService;
		@RequestMapping("/FnetAnta")
		@ResponseBody
		public int relesAnt(String fa_title,String fa_msg,HttpServletRequest request){
			HttpSession session=request.getSession();
			Adm adm=(Adm) session.getAttribute("adm");
			FnetAnt fnetAnt=fnetAntService.packgeFnt(fa_title,fa_msg,adm);
			int row=fnetAntService.relesAnt(fnetAnt);
			return row;
		}
		
		@RequestMapping("/FnetAntb")
		@ResponseBody
		public List<FnetAnt> selectFnetAnt(HttpServletRequest request,int pageIndex){
			Map<String, Integer> map=new HashMap<String, Integer>();
			map.put("page",pageIndex);
			List<FnetAnt> fnetAnt = fnetAntService.selectFnetAntByPage(map);
			return fnetAnt;
			}
		
		@RequestMapping("/FnetAntc")
		@ResponseBody
		public FnetAnt selectOneFnetAntById(int fa_id){
			FnetAnt fnetAnt=fnetAntService.selectOneFnetAntById(fa_id);
			return fnetAnt;
		}
		
		@RequestMapping("/FnetAntd")
		@ResponseBody
		public int selectFnetAntPage(){
			int page=fnetAntService.selectFnetAntPage();
			return page;
		}
		
		@RequestMapping("/FnetAnte")
		@ResponseBody
		public int deleteFnetAnt(int fa_id){
			int row=fnetAntService.deleteFnetAnt(fa_id);
			return row;
		}
		@RequestMapping("/FnetAntf")
		@ResponseBody
		public int updateFnetAnt(FnetAnt fnetAnt){
			return fnetAntService.updateFnetAnt(fnetAnt);
		}
		@RequestMapping("/FnetAntg")
		@ResponseBody
		public List<FnetAnt> selectOneFnetAntByTime(){
			List<FnetAnt> fnetAnt= fnetAntService.selectOneFnetAntByTime();
			return fnetAnt;
		}
		@RequestMapping("/FnetAnth")
		@ResponseBody
		public int deleteSomeFnetAnt(String s){
			return fnetAntService.deleteSomeFnetAnt(s);
			
		}
		@RequestMapping("/FnetAnti")
		@ResponseBody
		public List<FnetAnt> selectFntAntByTitle(String fa_title,int pageIndex){
			fa_title=TransCoding.transCoding(fa_title);
			fa_title=EscapeChars.escapeHTMLTags(fa_title);
			List<FnetAnt> fnetAnt=fnetAntService.selectFntAntByTitle(fa_title, pageIndex);
			return fnetAnt;
		}
		@RequestMapping("/FnetAntj")
		@ResponseBody
		public int selectFnetAntByTitlePage(String fa_title){
			fa_title=TransCoding.transCoding(fa_title);
			fa_title=EscapeChars.escapeHTMLTags(fa_title);
			int m= fnetAntService.selectFnetAntByTitlePage(fa_title);
		
			return m;
		}
		
			
	}
