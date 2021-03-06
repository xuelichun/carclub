package com.zeepn.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.bean.ActReg;
import com.zeepn.bean.Activity;
import com.zeepn.bean.Club;
import com.zeepn.bean.ClubVisitor;
import com.zeepn.bean.UserInfo;
import com.zeepn.service.ActivityService;
import com.zeepn.service.ClubHomeService;
@Controller
public class ClubHomeController {
	@Autowired
	ClubHomeService clubHomeService;
	@Autowired
	ActivityService activityService;
	
	@RequestMapping("/clubHomea")
	@ResponseBody
	public List<UserInfo> selectUserInfoByClubId(int club_id,int page){
		List<UserInfo> userInfo=clubHomeService.selectUserInfoByClubId(club_id,page);
		return userInfo;
	}
	
	@RequestMapping("/clubHomeb")
	@ResponseBody
	public List<UserInfo> selectPresident(int club_id) {
		List<UserInfo> userInfo=clubHomeService.selectPresident(club_id);
		return userInfo;
	}
	
	@RequestMapping("/clubHomec")
	@ResponseBody
	public List<UserInfo> selectUserInfoInClubRankByClubId(int club_id){
		List<UserInfo> userInfo=clubHomeService.selectUserInfoInClubRankByClubId(club_id);
		return userInfo;
	}
	
	@RequestMapping("/clubHomed")
	@ResponseBody
	public List<UserInfo> selectUserInfosByUIds(int[] u_id){
		List<UserInfo> userInfo=new ArrayList<UserInfo>();
		userInfo=clubHomeService.selectUserInfosByUIds(u_id);
		return userInfo;
	}
	
	@RequestMapping("/clubHomee")
	@ResponseBody
	public UserInfo selectFirstPresident(int club_id){
		UserInfo userInfo=clubHomeService.selectFirstPresident(club_id);
		return userInfo;
	}
	
	@RequestMapping("/clubHomef")
	@ResponseBody
	public List<UserInfo> selectUserInfoAttendee(int act_id){
		List<UserInfo> userInfo=activityService.selectUserInfoAttendee(act_id);
		return userInfo;
	}
	
	@RequestMapping("/clubHomeg")
	@ResponseBody
	public List<UserInfo> selectUserInfoAttendeeByClubId(int club_id){
		List<UserInfo> userInfo=activityService.selectUserInfoAttendeeByClubId(club_id);
		return userInfo;
	}
	
	@RequestMapping("/clubHomeh")
	@ResponseBody
	public List<Activity> selectActivitiesByPage(int club_id,int page){
		List<Activity> activities=activityService.selectActivitiesByPage(club_id, page);
		return activities;
	}
	
	@RequestMapping("/clubHomei")
	@ResponseBody
	public int selectActivityPage(int club_id){
		int page=activityService.selectActivityPage(club_id);
		return page;
	}
	
	@RequestMapping("/clubHomej")
	@ResponseBody
	public int countMembersPage(int club_id){
		int page=clubHomeService.countMembersPage(club_id);
		return page;
	}
	
	@RequestMapping("/clubHomek")
	@ResponseBody
	public UserInfo selectUserInfo(int u_id){
		UserInfo userInfo=clubHomeService.selectUserInfo(u_id);
		return userInfo;
	}
	
	@RequestMapping("/clubHomel")
	@ResponseBody
	public int countClubGrade(int club_id){
		int club_grade=clubHomeService.countClubGrade(club_id);
		return club_grade;
	}
	
	@RequestMapping("/clubHomem")
	@ResponseBody
	public int[] isMember(int club_id,HttpServletRequest request){
		return clubHomeService.isMember(club_id, request);
	}
	
	@RequestMapping("/clubHomen")
	@ResponseBody
	public int selectClubId(HttpServletRequest request){
		return clubHomeService.selectClubId(request);
	}
	
	@RequestMapping("/clubHomeo")
	@ResponseBody
	public int isExistClub(int club_id){
		return clubHomeService.isExistClub(club_id);
	}
	
	@RequestMapping("/clubHomep")
	@ResponseBody
	public int isExistAct(int act_id){
		return clubHomeService.isExistAct(act_id);
	}
	
	@RequestMapping("/clubHomeq")
	@ResponseBody
	public int isExistClubAlbum(int ca_id){
		return clubHomeService.isExistClubAlbum(ca_id);
	}
	
	@RequestMapping("/clubHomer")
	@ResponseBody
	public int isLoad(HttpServletRequest request){
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		if(userInfo==null){
			return 0;
		}else{
			return userInfo.getU_id();
		}
	}
	
	@RequestMapping("/clubHomes")
	@ResponseBody
	public Club selectClubByClubId(int club_id){
		return clubHomeService.selectClubIdForClubHome(club_id);
	}
	
	@RequestMapping("/clubHomet")
	@ResponseBody
	public int sign(int u_id,int club_id){
		return clubHomeService.sign(u_id, club_id);
	}
	
	@RequestMapping("/clubHomeu")
	@ResponseBody
	public List<Club> selectClubByFuzzyName(String club_name){
		return clubHomeService.selectClubByFuzzyName(club_name);
	}
	
	@RequestMapping("/clubHomev")
	@ResponseBody
	public void insertClubVisitor(ClubVisitor clubVisitor) {
		clubHomeService.insertClubVisitor(clubVisitor);
	}

	@RequestMapping("/clubHomew")
	@ResponseBody
	public List<ClubVisitor> selectClubVisitors(int club_id) {
		return clubHomeService.selectClubVisitors(club_id);
	}

	@RequestMapping("/clubHomex")
	@ResponseBody
	public int countClubVistors(int club_id) {
		return clubHomeService.countClubVistors(club_id);
	}
	
	@RequestMapping("/clubHomey")
	@ResponseBody
	public List<UserInfo> selectUsersForClubVisitor(int[] u_id){
		return clubHomeService.selectUsersForClubVisitor(u_id);
	}
	
	@RequestMapping("/clubHomez")
	@ResponseBody
	public Club selectClub(HttpServletRequest request){
		return clubHomeService.selectClub(request);
	}
	
	@RequestMapping("/clubHomeaa")
	@ResponseBody
	public int quitCarClub(HttpServletRequest request){
		return clubHomeService.quitCarClub(request);
	}
	
	@RequestMapping("clubHomeab")
	@ResponseBody
	public int isPreForMyCarClub(HttpServletRequest request) {
		return clubHomeService.isPreForMyCarClub(request);
	}
	
	@RequestMapping("clubHomeac")
	@ResponseBody
	public int isDengLu(HttpServletRequest request){
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		if(userInfo==null){
			return 0;
		}else{
			return 1;
		}
	}
	
	@RequestMapping("clubHomead")
	@ResponseBody
	public int attendAct(ActReg actReg){
		return activityService.insertActReg(actReg);
	}
	
	@RequestMapping("/clubHomeae")
	@ResponseBody
	public int[] actIsOutOfDate(int[] act_id){
		return clubHomeService.actIsOutOfDate(act_id);
	}
	
	@RequestMapping("/clubHomeaf")
	@ResponseBody
	public int isCanBaoMing(int club_id,int act_id,HttpServletRequest request){
		return clubHomeService.isCanBaoMing(club_id, act_id, request);
	}
	
	@RequestMapping("/clubHomeag")
	@ResponseBody
	public int[] selectActPnum(int[] act_id){
		return clubHomeService.selectActPnum(act_id);
	}
}
