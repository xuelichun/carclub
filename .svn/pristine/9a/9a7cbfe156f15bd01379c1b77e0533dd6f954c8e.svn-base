package com.zeepn.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.UserInfo;
import com.zeepn.dao.PreInfoDao;
import com.zeepn.dao.UserDao;
import com.zeepn.service.ClubMemberService;
import com.zeepn.utils.DateFormat;

@Component("clubMemberService")
public class ClubMemberServiceImpl implements ClubMemberService{
	
	@Autowired
	UserDao userDao;
	@Autowired
	PreInfoDao preInfoDao;
	@Override
	public List<UserInfo> selectUserInfoByClubId(int club_id, int page) {
		List<UserInfo> userInfo=new ArrayList<UserInfo>();
		int temp=selectPresident(club_id).size();
		if(page==1){
			userInfo.addAll(selectPresident(club_id));
			userInfo.add(null);
		}
		userInfo.addAll(userDao.selectUserInfoNotPreByClubIdForPre(club_id,page,temp));
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
	public int countClubMemberPage(int club_id) {
		int page=(userDao.countUserInfoByClubId(club_id)-1)/8+1;
		return page;
	}

	@Override
	public int countClubMemberTotal(int club_id) {
		int total=userDao.countUserInfoByClubId(club_id);
		return total;
	}

	@Override
	public List<UserInfo> selectUserInfoOutOfDate(int club_id, int page) {
		String time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC);
		List<UserInfo> userInfos=userDao.selectClubMembersOutOfDate(club_id,page,time);
		return userInfos;
	}

	@Override
	public int countMembersOutOfDate(int club_id) {
		String time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC);
		int row=userDao.countClubMembersOutOfDate(club_id,time);
		return row;
	}

	@Override
	public int countMembersOutOfDatePage(int club_id) {
		String time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC);
		int page=(userDao.countClubMembersOutOfDate(club_id,time)-1)/8+1;
		return page;
	}

	@Override
	public int[] deleteMembers(int[] u_id, int club_id) {
		int row=0;
		int j=0;
		for(int i=0;i<u_id.length;i++){
			row=userDao.deleteMembers(u_id[i], club_id);
			if(row==1){
				j++;
			}
		}
		int[] rows=new int[2];
		rows[0]=j;
		rows[1]=u_id.length-j;
		return rows;
	}

}
