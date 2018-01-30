package com.zeepn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.Adm;
import com.zeepn.bean.Message;
import com.zeepn.bean.MessageType;
import com.zeepn.bean.UserInfo;
import com.zeepn.service.MessageService;
import com.zeepn.service.UserService;
import com.zeepn.utils.EscapeChars;
import com.zeepn.utils.TransCoding;


@Controller
public class MessageController {
	@Autowired
	MessageService messageService;
	@Autowired
	UserService  userService;
	
	@RequestMapping("/messagea")
	@ResponseBody
	public int createMessage(int mt_id,String m_con ,String s ,HttpServletRequest request){
		HttpSession session=request.getSession();
		Adm adm=(Adm) session.getAttribute("adm");
		return messageService.packgeMes2(mt_id,m_con,s,adm);
		

		
		
	
	}
	@RequestMapping("/messageb")
	@ResponseBody
	public int deleteMessage(int m_id) {
		
		int row=messageService.deleteMessage(m_id);
		return row;
	}
	@RequestMapping("/messagec")
	@ResponseBody
	public List<Message> selectMessage(int pageIndex){
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("page", pageIndex);
		List<Message> message= messageService.selectMessageByPage(map);
		return message;
	}
	@RequestMapping("/messaged")
	@ResponseBody
	public int createMessageType(String mt_title,String mt_con,HttpServletRequest request) {
		HttpSession session=request.getSession();
		Adm adm=(Adm) session.getAttribute("adm");
		MessageType messageType=messageService.packgeMes(mt_title,mt_con,adm);
		return messageService.createMessageType(messageType);
	}
	@RequestMapping("/messagee")
	@ResponseBody
	public int deleteMessageType(int mt_id) {
		
		return messageService.deleteMessageType(mt_id);
	}
	@RequestMapping("/messagef")
	@ResponseBody
     public int updateMessageType(MessageType messageType) {
		
	return messageService.updateMessageType(messageType);
	}
	@RequestMapping("/messageg")
	@ResponseBody
	public List<MessageType> selectMessageType() {
		List<MessageType> messageType=messageService.selectMessageType();
		return messageType;
	}
	@RequestMapping("/messageh")
	@ResponseBody
	public int selectMessagePage() {
     	
		return messageService.selectMessagePage();
	}
	@RequestMapping("/messagei")
	@ResponseBody
	public Message selectOneMessageById(int m_id) {
		
		return messageService.selectOneMessageById(m_id);
	}
	@RequestMapping("/messagej")
	@ResponseBody
	public List<Message> selectMessageByType(int mt_id) {
		
		return messageService.selectMessageByType(mt_id);
	}
	@RequestMapping("/messagek")
	@ResponseBody
     public MessageType selectMessageTypeById(int mt_id) {
		MessageType messageType=messageService.selectMessageTypeById(mt_id);
		return messageType;
	}
		
	
	@RequestMapping("/messagel")
	@ResponseBody
	public int updateMessage(Message message){
		return messageService.updateMessage(message);
	}
	@RequestMapping("/messagem")
	@ResponseBody
	public List<UserInfo> selectAllUser(int pageIndex){
	
		return  userService.selectAllUser(pageIndex);
	}
	@RequestMapping("/messagen")
	@ResponseBody
	public int countUser(){
	
		return userService.countuser();
		
	}
	@RequestMapping("/messageo")
	@ResponseBody
	public  List<Message> selectMessageByPageQian(int mu_id,int pageIndex){
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("mu_id", mu_id);
		map.put("page", pageIndex);
		List<Message> message= messageService.selectMessageByPageQian(map);
		return message;
		
	}
	@RequestMapping("/messagep")
	@ResponseBody
	public int selectMessagepageByid(int mu_id){
		int count= messageService.selectMessagepageByid(mu_id);
		return count;
	}
	@RequestMapping("/messageq")
	@ResponseBody
	public int updateMessageShow(int m_id){
		int row=messageService.updateMessageShow(m_id);
		return row;
	}
	@RequestMapping("/messager")
	@ResponseBody
	public int selectmessagetypepage(){
		return messageService.selectmessagetypepage();
	}
	@RequestMapping("/messages")
	@ResponseBody
	public int creatsomemessage(int [] arr ,int mt_id){
	
		return messageService.creatsomemessage( arr, mt_id);
	}
	@RequestMapping("/messaget")
	@ResponseBody
	public int deletesomemessage(String s){
		return messageService.deletesomemessage(s);
	}
	@RequestMapping("/messageu")
	@ResponseBody
	public List<Message> selectmessagebyunick(String u_nick, int pageIndex){
		u_nick=TransCoding.transCoding(u_nick);
		u_nick=EscapeChars.escapeHTMLTags(u_nick);
		List<Message>  message=messageService.selectmessagebyunick(u_nick, pageIndex);
		return message;
	}
	@RequestMapping("/messagew")
	@ResponseBody
    public int selectmessagebyunickpage(String u_nick){
		u_nick=TransCoding.transCoding(u_nick);
		u_nick=EscapeChars.escapeHTMLTags(u_nick);
		return messageService.selectmessagebyunickpage(u_nick);
}
}