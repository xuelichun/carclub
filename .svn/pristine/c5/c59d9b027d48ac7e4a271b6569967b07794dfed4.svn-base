package com.zeepn.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.zeepn.bean.Club;
import com.zeepn.bean.UserInfo;
import com.zeepn.service.SearchService;
import com.zeepn.utils.TransCoding;

@Controller
public class SearchController {
	
	@Autowired
	SearchService searchService;
	
	@RequestMapping("/1")
	@ResponseBody
	public List<Club> selectClubs(String str){
		str=TransCoding.transCoding(str);
		List<Club> list=searchService.selectClubs(str);
		return list;
	}
	
	@RequestMapping("/2")
	@ResponseBody
	public List<UserInfo> selectUsers(String str){
		str=TransCoding.transCoding(str);
		List<UserInfo> list=searchService.selectUsers(str);
		return list;
	}

}
