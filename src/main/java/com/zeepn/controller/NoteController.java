package com.zeepn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.utils.Rand;
import com.zeepn.utils.SendMassage;
@Controller
public class NoteController {
	@RequestMapping("/note")
	@ResponseBody
	public Object Note(String u_phone){
		String code = Rand.randSixNum();
		System.out.println("【发送短信验证码】为: "+code);
        int result = 0;
		try {
			result = SendMassage.sendMassage(u_phone, code);
		} catch (Exception e) {
			e.printStackTrace();
		}
        if(result==1){
        	
        	return "{\"rs\":\""+code+"\"}";
        	
        }else {
        	return "{\"rs\":\"no\"}";
        }
	}
	
}
