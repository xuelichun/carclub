package com.zeepn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.ClubChacon;
import com.zeepn.bean.UserChacon;
import com.zeepn.service.UserChaconService;

@Controller
public class UserChaconController {
	
	@Autowired
	UserChaconService userChaoconService;
	
	@RequestMapping("/userChaocona")
	@ResponseBody
	public int insertUserChacon(UserChacon userChacon){
		return userChaoconService.insertUserChacon(userChacon);
	}
	
	@RequestMapping("/userChaoconb")
	@ResponseBody
	public UserChacon selectUserChaco(int uc_id){
		return userChaoconService.selectUserChacoById(uc_id);
	}
	
	@RequestMapping("/userChaoconc")
	@ResponseBody
	public List<UserChacon> selectUserChacon(int ce_id){
		return userChaoconService.selectUserChacon(ce_id);
	}
	
	@RequestMapping("/userChaocond")
	@ResponseBody
	public List<ClubChacon> selectClubChacon(int cc_id){
		return userChaoconService.selectClubChacon(cc_id);
	}
	
	@RequestMapping("/userChaocone")
	@ResponseBody
	public int updateClubChacon(ClubChacon clubChacon){
		return userChaoconService.updateClubChacon(clubChacon);
	}
}
