package com.zeepn.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.Adm;
import com.zeepn.bean.Message;
import com.zeepn.bean.MessageType;
import com.zeepn.bean.UserMessage;
import com.zeepn.dao.GenAdmDao;
import com.zeepn.dao.MessageDao;
import com.zeepn.dao.SupAdmDao;
import com.zeepn.service.FusMsgService;
import com.zeepn.service.MessageService;
import com.zeepn.utils.EscapeChars;
import com.zeepn.utils.TransCoding;
@Component("messageService")
public class MessageServiceImpl implements MessageService {
	@Autowired
	FusMsgService fusMsgService;
	@Autowired
	MessageDao messageDao;
	@Autowired
	SupAdmDao supAdmDao;
	@Autowired
	GenAdmDao genAdmDao;
	@Override
	public int createMessage(Message message){
		
		message.setM_time(new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()));
		message.setM_show(0);
		return 	messageDao.createMessage(message);
	
	}

	@Override
	public int deleteMessage(int m_id) {
		int row= messageDao.deleteMessage(m_id);
		return row;
	}

	@Override
	public List<Message> selectMessageByPage(Map<String , Integer> map) {
		List<Message> message=messageDao.selectMessageByPage(map);
		return message;
		
	}

	@Override
	public int createMessageType(MessageType messageType) {
		
		return messageDao.createMessageType(messageType);
	}

	@Override
	public int deleteMessageType(int mt_id) {
		
		
	  if(messageDao.selectmessagepagebytype(mt_id)==0&&fusMsgService.selectfusmsgpagetype(mt_id)==0)
		{int row= messageDao.deleteMessageType(mt_id);
		 return row;
		}
	  else 
		  {return 0;}
}

	@Override
	public int updateMessageType(MessageType messageType) {
		
		return messageDao.updateMessageType(messageType);
	}

	@Override
	public List<MessageType> selectMessageType() {
	
		return messageDao.selectMessageType();
	}

	@Override
	public int selectMessagePage() {
                 	
		return messageDao.selectMessagePage();
	}

	@Override
	public Message selectOneMessageById(int m_id) {
	
		return messageDao.selectOneMessageById(m_id);
	}

	@Override
	public List<Message> selectMessageByType(int mt_id) {
	
		return messageDao.selectMessageByType(mt_id);
	}

	@Override
	public MessageType selectMessageTypeById(int mt_id) {
		
		return messageDao.selectMessageTypeById(mt_id);
	}
	@Override
	public int updateMessage(Message message){
		return messageDao.updateMessage(message);
	}
	@Override
	public List<Message> selectMessageByPageQian(Map<String , Integer> map){
		return messageDao.selectMessageByPageQian(map);
	}
	@Override
	public int selectMessagepageByid(int mu_id){
		return messageDao.selectMessagepageByid(mu_id);
	}
	@Override
	public int updateMessageShow(int m_id){
		return messageDao.updateMessageShow(m_id);
	}
	@Override
	public int selectmessagepagebytype(int mt_id){
		return messageDao.selectmessagepagebytype(mt_id);
		
}

	@Override
	public List<UserMessage> selectNewMessage(int u_id,int pageIndex) {
		
		return messageDao.selectNewMessage(u_id,pageIndex);
	}

	@Override
	public int countNewMessage(int mu_id) {
		int a=messageDao.countNewMessage(mu_id);
		return (a-1)/10+1;
	}
	@Override
	public int selectmessagetypepage(){
		return messageDao.selectmessagetypepage();
	}
	@Override
	public int creatsomemessage(int [] arr ,int mt_id){
		String m_con=(messageDao.selectMessageTypeById(mt_id)).getMt_con();
		int s=arr.length;
		int m=0;
		
		for(int i=0;i<arr.length;i++){
			Message message=new Message(1,arr[i],mt_id,m_con);
			
			 m+=createMessage(message);
			
		}
		if(m==s){
			return 1;
		}
		else{
			return 0;
		}
	}
	


	@Override
	public int deletesomemessage(String s){
		
		String temp1[] =s.split(",");
		int m=temp1.length;
		int f=0;
		for(int i=0;i<temp1.length;i++){
			int m_id=Integer.parseInt(temp1[i]);
			f+=messageDao.deleteMessage(m_id);	
		}
		if(m==f){
			return 1;
		}else{
		return 0;
		}
	}
	@Override
	public List<Message> selectmessagebyunick(String u_nick,int pageIndex ){
		List<Message> message =messageDao.selectmessagebyunick(u_nick,pageIndex );
	
		return message;
	}
	@Override
    public int selectmessagebyunickpage(String u_nick){
		return messageDao.selectmessagebyunickpage(u_nick);
	}
	@Override
	public MessageType packgeMes(String mt_title, String mt_con, Adm adm) {
		int ga_id=0;
		if(adm.getAdm_level().equals("1")){
			ga_id=supAdmDao.selectSaId(adm.getAdm_name());
		}else{
			ga_id=genAdmDao.selectGaId(adm.getAdm_name());
		}
		mt_con=TransCoding.transCoding(mt_con);
		mt_con=EscapeChars.escapeHTMLTags(mt_con);
		mt_title=TransCoding.transCoding(mt_title);
		mt_title=EscapeChars.escapeHTMLTags(mt_title);
		MessageType  messageType=new MessageType(mt_title, mt_con, ga_id);
		return messageType;
	}	
	@Override
	public int  packgeMes2(int mt_id,String m_con,String s,Adm adm){
		int ga_id=0;
		if(adm.getAdm_level().equals("1")){
			ga_id=supAdmDao.selectSaId(adm.getAdm_name());
		}else{
			ga_id=genAdmDao.selectGaId(adm.getAdm_name());
		}
		m_con=TransCoding.transCoding(m_con);
		m_con=EscapeChars.escapeHTMLTags(m_con);
		String temp1[] =s.split(",");
		int m=temp1.length;
		int f=0;
		for(int i=0;i<temp1.length;i++){
			int mu_id=Integer.parseInt(temp1[i]);
			Message message=new Message( ga_id,mu_id,mt_id,m_con);
			f+=createMessage(message);	
		}
		if(m==f){
			return 1;
		}else{
		return 0;
		}
	}
}