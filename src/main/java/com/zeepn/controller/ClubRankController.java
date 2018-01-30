package com.zeepn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.Club;
import com.zeepn.service.ClubRankService;

@Controller
@RequestMapping("/clubRank")
public class ClubRankController {
	@Autowired
	ClubRankService clubRankService;
	
	@RequestMapping("/showRank")
	@ResponseBody
	public List<Club> showRank(){
		List<Club> showRank=clubRankService.clubRank();
		return showRank;
	}
	
	@RequestMapping("/showRankIndex")
	@ResponseBody
	public List<Club> showRankIndex(){
		List<Club> showRankIndex=clubRankService.clubRankIndex();
		return showRankIndex;
	}
}
