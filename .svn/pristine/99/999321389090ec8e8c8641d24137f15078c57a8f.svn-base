package com.zeepn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.ClubChacon;
import com.zeepn.bean.UserChacon;
import com.zeepn.dao.UserChaconDao;
import com.zeepn.service.UserChaconService;

@Component("userChaconService")
public class UserChaconServiceImpl implements UserChaconService{

	@Autowired
	UserChaconDao userChaoconDao;
	
	@Override
	public int updateUserChacon(int ce_id, int u_id, int uc_value) {
		return userChaoconDao.updateUserChacon(ce_id, u_id, uc_value);
	}
	
	
	@Override
	public int insertUserChacon(UserChacon userChacon) {
		int count=0;
		int uc_id=userChacon.getUc_id();
		UserChacon row=userChaoconDao.selectUserChacoById(uc_id);
		int a=row.getUc_value();
		if(a==0){
			count=userChaoconDao.insertUserChacon(userChacon);
		}else{
			int ce_id=userChacon.getCe_id();
			int u_id=userChacon.getU_id();
			int uc_value=userChacon.getUc_value();
			count=userChaoconDao.updateUserChacon(ce_id,u_id, uc_value);
		}
		//未完成
		//=userChaoconDao.updateClubChacon(clubChacon); 
		return count;
	}

	@Override
	public UserChacon selectUserChacoById(int uc_id) {
		return userChaoconDao.selectUserChacoById(uc_id);
	}


	@Override
	public List<UserChacon> selectUserChacon(int ce_id) {
		return userChaoconDao.selectUserChacon(ce_id);
	}


	@Override
	public List<ClubChacon> selectClubChacon(int cc_id) {
		return userChaoconDao.selectClubChacon(cc_id);
	}


	@Override
	public int updateClubChacon(ClubChacon clubChacon) {
		return userChaoconDao.updateClubChacon(clubChacon);
	}

}
