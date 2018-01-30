package com.zeepn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.zeepn.service.FusMsgService;
import com.zeepn.service.MessageService;
import com.zeepn.bean.FusMsg;
import com.zeepn.bean.UserMessage;
@Controller
@RequestMapping("/usermessage")
public class UserMessageController {
	@Autowired
	FusMsgService fusMsgService;
	@Autowired
	MessageService messageService;
	
	/**
	 * 查询全网消息
	 * @param pageIndex 页数 10 个一页
	 * @return
	 */
	@RequestMapping("/userSelectAllmessage")
	@ResponseBody
	public List<FusMsg> userSelectAllmessage(int pageIndex){
		Map<String, Integer> map=new HashMap<String,Integer>();
		map.put("page", pageIndex);
		List<FusMsg> list=fusMsgService.selectFusMsgByPageTime(map);
		return list;
	}
	
	/**
	 * 计算全网消息总页数
	 * @return
	 */
	@RequestMapping("/countMessage")
	@ResponseBody
	public Object countMessage(){
		int a=fusMsgService.selectFusMsgPage();
		int b=(a-1)/10+1;
		return "{\"rs\":\""+b+"\"}";
	}


	@RequestMapping("/selectNewMessage")
	@ResponseBody
	public List<UserMessage> selectNewMessage(int u_id,int pageIndex){
		List<UserMessage> list=messageService.selectNewMessage(u_id,pageIndex);
		return list;
	}
	
	@RequestMapping("/countNewMessage")
	@ResponseBody
	public Object countNewMessage(int u_id){
		int a=messageService.countNewMessage(u_id);
		return "{\"rs\":\""+a+"\"}";
	}
	
}
