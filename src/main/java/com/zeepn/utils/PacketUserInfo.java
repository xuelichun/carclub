package com.zeepn.utils;

import com.zeepn.bean.UserInfo;

/**
 * 封装用户对象工具类
 * @author scc
 *
 */
public class PacketUserInfo {
	public UserInfo packetUserInfo(AUJSON aujson){
		UserInfo userInfo=new UserInfo();
		userInfo.setU_name(aujson.getAj_uname());
		userInfo.setU_sex(aujson.getAj_usex());
		userInfo.setU_pro(aujson.getAj_upro());
		userInfo.setU_city(aujson.getAj_ucity());
		userInfo.setU_addr(aujson.getAj_uaddr());
		userInfo.setU_phone(aujson.getAj_uphone());
		userInfo.setU_email(aujson.getAj_uemail());
		userInfo.setU_idcard(aujson.getAj_uidcard());
		return userInfo;
	}	
}
