package com.zeepn.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.PreInfo;
import com.zeepn.dao.PreInfoDao;
import com.zeepn.service.PreInfoService;

@Component("preInfoService")
public class PreInfoServiceImpl implements PreInfoService{
	
	@Autowired
	PreInfoDao preInfoDao;
	

	@Override
	public PreInfo selectPreInfo(int club_id) {
		PreInfo preInfo=preInfoDao.selectPreInfo(club_id);
		return preInfo;
	}

	@Override
	public int updatePreInfoAdd(int club_id, int vp_id) {
		int row=2;
		PreInfo preInfo=preInfoDao.selectPreInfo(club_id);
		if(preInfo.getVp1_id()==0){
			row=preInfoDao.updatePreInfoOne(club_id, vp_id);
		}else if(preInfo.getVp2_id()==0){
			row=preInfoDao.updatePreInfoTwo(club_id, vp_id);
		}
		return row;
	}

	@Override
	public int updatePreInfoDelete(int club_id, int vp_id) {
		int row=0;
		PreInfo preInfo=preInfoDao.selectPreInfo(club_id);
		if(preInfo.getVp1_id()==vp_id){
			row=preInfoDao.updatePreInfoOne(club_id, 0);
		}else if(preInfo.getVp2_id()==vp_id){
			row=preInfoDao.updatePreInfoTwo(club_id, 0);
		}
		return row;
	}

	@Override
	public int insertPreInfo(int p_id, int club_id) {
		int row=preInfoDao.insertPreInfo(p_id, club_id);
		return row;
	}

	@Override
	public int isPresident(int u_id) {
		int row=preInfoDao.isPresident(u_id);
		int result=0;
		if(row==1){
			result=2;
		}else{
			row=preInfoDao.isVicePresident(u_id);
			if(row==1){
				result=3;
			}else{
				result=1;
			}
		}
		return result;
	}

}
