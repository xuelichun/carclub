package com.zeepn.service;

import java.util.List;

import com.zeepn.bean.UserInfo;

public interface ClubMemberService {
	
	public List<UserInfo> selectUserInfoByClubId(int club_id,int page);
	
	public List<UserInfo> selectPresident(int club_id);
	
	public int countClubMemberPage(int club_id);
	
	public int countClubMemberTotal(int club_id);
	
	public List<UserInfo> selectUserInfoOutOfDate(int club_id,int page);
	
	public int countMembersOutOfDate(int club_id);
	
	public int countMembersOutOfDatePage(int club_id);
	
	public int[] deleteMembers(int[] u_id,int club_id);

}
