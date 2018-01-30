package com.zeepn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.FusMsg;
import com.zeepn.service.FusMsgService;
import com.zeepn.utils.EscapeChars;
import com.zeepn.utils.TransCoding;

@Controller

public class FusMsgController {

	
		@Autowired
		FusMsgService fusMsgService;
		@RequestMapping("/FusMsga")
		@ResponseBody
		public int createFusMsg(FusMsg fusMsg){
			fusMsg.setFm_msg(TransCoding.transCoding(fusMsg.getFm_msg()));
			fusMsg.setFm_msg(EscapeChars.escapeHTMLTags(fusMsg.getFm_msg()));
			int row=fusMsgService.createFusMsg(fusMsg);
			return row;
		}
		
		@RequestMapping("/FusMsgb")
		@ResponseBody
		public List<FusMsg> selectFusMsg(HttpServletRequest request,int pageIndex){
			Map<String, Integer> map=new HashMap<String, Integer>();
			map.put("page",pageIndex);
			
		List<FusMsg> fusMsg= fusMsgService.selectFusMsgByPage(map);
			return fusMsg;	
			}
		
		@RequestMapping("/FusMsgc")
		@ResponseBody
		public FusMsg selectOneFusMsgById(int fm_id){
			FusMsg fusMsg=fusMsgService.selectOneFusMsgById(fm_id);
			return fusMsg;
		}
		
		@RequestMapping("/FusMsgd")
		@ResponseBody
		public int selectFusMsgPage(){
			int page=fusMsgService.selectFusMsgPage();
			return page;
		}
		
		@RequestMapping("/FusMsge")
		@ResponseBody
		public int deleteFusMsg(int fm_id){
			int row=fusMsgService.deleteFusMsg(fm_id);
			return row;
		}
		@RequestMapping("/FusMsgf")
		@ResponseBody
		public int updateFusMsgShow(int fm_id){
			int row=fusMsgService.updateFusMsgShow(fm_id);
			return row;
		}
		@RequestMapping("/FusMsgg")
		@ResponseBody
		public int deleteSomeFusMsg(String s){
		return	fusMsgService.deleteSomeFusMsg(s);
			
		}		
	}
