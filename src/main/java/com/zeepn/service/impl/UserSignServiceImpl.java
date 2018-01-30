package com.zeepn.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.Sign;
import com.zeepn.dao.UserSignDao;
import com.zeepn.service.UserSignService;
import com.zeepn.utils.DateFormat;
@Component("userSignService")
public class UserSignServiceImpl implements UserSignService{

	@Autowired
	UserSignDao userSignDao;
	@Override
	public int userSign(int u_id, int club_id) {
		int isOK=0;
		String s_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT);
		int isFirst=userSignDao.isFirst(u_id, club_id);
		if(isFirst==0){
			Sign sign=new Sign(club_id, u_id, s_time, 0);
			if(userSignDao.insertSign(sign)>0){
				//签到成功
				isOK=1;
			}else{
				//签到失败
				isOK=2;
			}
		}else{
			Sign sign=userSignDao.selectSign(u_id, club_id);
			if(sign.getS_time().equals(s_time)){
				//该用户今天已经签到，不能重复签到
				isOK=3;
			}else{
				sign.setS_time(s_time);
				if(userSignDao.updateSign(sign)>0){
					//签到成功
					isOK=1;
				}else{
					//签到失败
					isOK=2;
				}	
			}
		}
		return isOK;
	}

	@Override
	public Sign selectSign(int u_id, int club_id) {
		
		return userSignDao.selectSign(u_id, club_id);
	}

	@Override
	public int deleteSign(int u_id, int club_id) {
		
		return userSignDao.deleteSign(u_id, club_id);
	}

}
