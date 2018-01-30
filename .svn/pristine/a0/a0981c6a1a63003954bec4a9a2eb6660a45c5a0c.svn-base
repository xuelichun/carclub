package com.zeepn.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.zeepn.bean.UserInfo;
import com.zeepn.service.UserService;


@Controller
@RequestMapping("/friends")
public class UserFriendsController {
	@Autowired
	UserService userService;
	
	@RequestMapping("/show")
	@ResponseBody
	public List<UserInfo> show(int u_id,int pageIndex){
		 List<UserInfo> list=userService.selectFriends(u_id, pageIndex);
		return list;
	}
}
