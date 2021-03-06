package com.zeepn.service.impl;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.zeepn.bean.Activity;
import com.zeepn.bean.Club;
import com.zeepn.bean.ClubVisitor;
import com.zeepn.bean.Sign;
import com.zeepn.bean.UserInfo;
import com.zeepn.dao.ActRegDao;
import com.zeepn.dao.ActivityDao;
import com.zeepn.dao.ClubAlbumDao;
import com.zeepn.dao.ClubDao;
import com.zeepn.dao.ClubVisitorDao;
import com.zeepn.dao.JoinAppliDao;
import com.zeepn.dao.PreInfoDao;
import com.zeepn.dao.UserDao;
import com.zeepn.dao.UserSignDao;
import com.zeepn.service.ClubHomeService;
import com.zeepn.service.SearchService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.TransCoding;

@Component("clubHomeService")
public class ClubHomeServiceImpl implements ClubHomeService{
	@Autowired
	UserDao userDao;
	@Autowired
	PreInfoDao preInfoDao;
	@Autowired
	JoinAppliDao joinAppliDao;
	@Autowired
	ClubDao clubDao;
	@Autowired
	ActivityDao activityDao;
	@Autowired
	ClubAlbumDao clubAlbumDao;
	@Autowired
	UserSignDao userSignDao;
	@Autowired
	SearchService searchService;
	@Autowired
	ClubVisitorDao clubVisitorDao;
	@Autowired
	ActRegDao actRegDao;

	@Override
	public List<UserInfo> selectUserInfoByClubId(int club_id,int page) {
		List<UserInfo> userInfo=new ArrayList<UserInfo>();
		int temp=selectPresident(club_id).size();
		if(page==1){
		userInfo.addAll(selectPresident(club_id));
		userInfo.add(null);
		}
		userInfo.addAll(userDao.selectUserInfoNotPreByClubId(club_id,page,temp));
		return userInfo;
	}

	@Override
	public List<UserInfo> selectPresident(int club_id) {
		List<UserInfo> userInfo=new ArrayList<UserInfo>();
			userInfo.add(userDao.selectUserById(preInfoDao.selectPresidentId(club_id)));
			UserInfo tempUserInfo=userDao.selectUserById(preInfoDao.selectVicePresidentId1(club_id));
			if(tempUserInfo!=null){
				userInfo.add(tempUserInfo);
			}
			tempUserInfo=userDao.selectUserById(preInfoDao.selectVicePresidentId2(club_id));
			if(tempUserInfo!=null){
				userInfo.add(tempUserInfo);
			}
		return userInfo;
	}

	@Override
	public List<UserInfo> selectUserInfoInClubRankByClubId(int club_id) {
		List<UserInfo> userInfo=userDao.selectUserInfoInClubRankByClubId(club_id);
		return userInfo;
	}

	@Override
	public List<UserInfo> selectUserInfosByUIds(int[] u_id) {
		List<UserInfo> userInfo=new ArrayList<UserInfo>();
		for(int i=0;i<u_id.length;i++){
			userInfo.add(userDao.selectUserById(u_id[i]));
		}
		return userInfo;
	}

	@Override
	public UserInfo selectFirstPresident(int club_id) {
		int u_id=preInfoDao.selectPresidentId(club_id);
		UserInfo userInfo=userDao.selectUserById(u_id);
		return userInfo;
	}

	@Override
	public int countMembersPage(int club_id) {
		int page=(userDao.countUserInfoByClubId(club_id)-1)/15+1;
		return page;
	}

	@Override
	public UserInfo selectUserInfo(int u_id) {
		UserInfo userInfo=userDao.selectUserById(u_id);
		return userInfo;
	}

	@Override
	public int countClubGrade(int club_id) {
		int club_grade=clubDao.countClubGrade(club_id);
		return club_grade;
	}

	@Override
	public int[] isMember(int club_id,HttpServletRequest request) {
		int[] result=new int[3];
		int clubFlag=clubDao.isExistclub(club_id);
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		if(userInfo==null){ //未登录 
			result[0]=0;
			result[1]=club_id;//(0:非法访问个人所在车友会;非0:访问其他车友会)
			if(clubFlag==0){
				result[2]=0;
			}else{
				result[2]=1;//车友会存在
			}
		}else{ //已登录
			result[0]=1;
			int club_idTemp=userInfo.getClub_id();
			if(club_id==0){ //用户访问个人所在车友会请求
				result[1]=club_idTemp;//(0:用户未加入任何车友会,非0:用户已加入某车友会)
				result[2]=-1;
			}else{ //用户访问其他车友会请求
				result[1]=club_id;
				if(club_idTemp==club_id){ //用户访问到个人所在车友会
					result[2]=-1;//标记用户访问个人所在车友会
				}else{		//用户访问到其他车友会(未验证车友会是否存在)
					if(clubFlag==0){
						result[2]=0;
					}else{
						result[2]=1;//车友会存在
					}
				}
			}
		}
		return result;
	}

	@Override
	public int selectClubId(HttpServletRequest request) {
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		int club_id=userInfo.getClub_id();
		return club_id;
	}

	@Override
	public int isExistClub(int club_id) {
		int result=clubDao.isExistclub(club_id);
		return result;
	}

	@Override
	public int isExistAct(int act_id) {
		return activityDao.isExistAct(act_id);
	}

	@Override
	public int isExistClubAlbum(int ca_id) {
		return clubAlbumDao.isExistClubAlbum(ca_id);
	}

	@Override
	public Club selectClubIdForClubHome(int club_id) {	
		return clubDao.selectClubByClubIdForClubHome(club_id);
	}

	@Override
	public int sign(int u_id,int club_id) {
		int row=0;
		Sign sign=new Sign(club_id, u_id, DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMATS), 1);
		if(userSignDao.isFirst(u_id, club_id)==0){
			row=userSignDao.insertSign(sign);
			userDao.updateExp(u_id, 3);
		}else{
			Sign signtemp=userSignDao.selectSign(u_id, club_id);
			if(signtemp.getS_time().equals(sign.getS_time())){
				row=-1;
			}else if(DateFormat.isNextDay(sign.getS_time(), signtemp.getS_time())){
				sign.setS_num(signtemp.getS_num()+1);
				row=userSignDao.updateSign(sign);
				if(signtemp.getS_num()==2){
					userDao.updateExp(u_id, 4);
				}else if(signtemp.getS_num()==3){
					userDao.updateExp(u_id, 6);
				}else if(signtemp.getS_num()==4){
					userDao.updateExp(u_id, 8);
				}else{
					userDao.updateExp(u_id, 10);
				}
			}else{
				row=userSignDao.updateSign(sign);
				userDao.updateExp(u_id, 3);
			}
		}
		return row;
	}

	@Override
	public List<Club> selectClubByFuzzyName(String club_name) {
		club_name=TransCoding.transCoding(club_name);
		List<Club> club=new ArrayList<Club>();
		club=searchService.selectClubs(club_name);
		return club;
	}

	@Override
	public void insertClubVisitor(ClubVisitor clubVisitor) {
		clubVisitor.setCv_time(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC));
		ClubVisitor clubVisitorOrign=clubVisitorDao.selectClubVisitor(clubVisitor.getCv_uid());
		if(clubVisitorOrign!=null){
			clubVisitor.setCv_id(clubVisitorOrign.getCv_id());
			String timeTemp=clubVisitorOrign.getCv_time();
			if(DateFormat.isToday(timeTemp)){
				clubVisitorDao.updateClubVisitor(clubVisitor);;
			}else{
				clubVisitorDao.insertClubVisitor(clubVisitor);
			}
		}else{
			clubVisitorDao.insertClubVisitor(clubVisitor);
		}
	}

	@Override
	public List<ClubVisitor> selectClubVisitors(int club_id) {
		List<ClubVisitor> clubVisitor=clubVisitorDao.selectClubVisitors(club_id);
		for(ClubVisitor visitor:clubVisitor){
			visitor.setCv_time(DateFormat.smartTime(visitor.getCv_time()));
		}
		return clubVisitor;
	}

	@Override
	public int countClubVistors(int club_id) {
		return clubVisitorDao.countClubVistors(club_id);
	}

	@Override
	public List<UserInfo> selectUsersForClubVisitor(int[] u_id) {
		List<UserInfo> userInfo=new ArrayList<UserInfo>();
		for(int i=0;i<u_id.length;i++){
			if(i>=18){
				break;
			}
			userInfo.add(userDao.selectUserById(u_id[i]));
		}
		return userInfo;
	}

	@Override
	public Club selectClub(HttpServletRequest request) {
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		return clubDao.selectClubByClubIdForClubHome(userInfo.getClub_id());
	}

	@Override
	public int quitCarClub(HttpServletRequest request) {
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		return clubDao.quitCarClub(userInfo.getU_id());
	}

	@Override
	public int isPreForMyCarClub(HttpServletRequest request) {
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		if(preInfoDao.isPresident(userInfo.getU_id())==1||preInfoDao.isVicePresident(userInfo.getU_id())==1){
			return 1;
		}else{
			return 0;
		}
	}

	@Override
	public int[] actIsOutOfDate(int[] act_id) {
		int result[]=new int[act_id.length];
		for(int i=0;i<act_id.length;i++){
			Activity activityTemp=activityDao.selectActivity(act_id[i]);
			if(DateFormat.isOutOfDate(activityTemp.getAct_stoptime())){
				result[i]=1;
			}else{
				result[i]=0;
			}
		}
		return result;
	}

	@Override
	public int isCanBaoMing(int club_id, int act_id,HttpServletRequest request) {
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		if(userInfo!=null){
			int club_idTemp=userDao.selectClub_idForAct(userInfo.getU_id());
			if(club_id==club_idTemp){
				int flag=activityDao.isAlreadyBaoMing(act_id,userInfo.getU_id());
				if(flag==0){
					return 1;
				}else{
					return 0; //报过名了
				}
			}else{
				return -1;//不是会员
			}
		}else{
			return 0;
		}
	}

	@Override
	public int[] selectActPnum(int[] act_id) {
		int[] result=new int[act_id.length];
		for(int i=0;i<act_id.length;i++){
			result[i]=actRegDao.countPnum(act_id[i]);
		}
		return result;
	}

}
