package com.zeepn.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zeepn.bean.Adm;
import com.zeepn.bean.AppliNotice;
import com.zeepn.bean.UserInfo;
import com.zeepn.dao.AppliNoticeDao;
import com.zeepn.dao.GenAdmDao;
import com.zeepn.dao.SupAdmDao;
import com.zeepn.dao.UserDao;
import com.zeepn.service.AppliNoticeService;
import com.zeepn.utils.FeeUtils;

@Service("appliNoticeService")
public class AppliNoticeServiceImpl implements AppliNoticeService{

	/**
	 * 自动注入Dao
	 */
	@Autowired
	AppliNoticeDao appliNoticeDao;
	@Autowired
	UserDao userDao;
	@Autowired
	SupAdmDao supAdmDao;
	@Autowired
	GenAdmDao genAdmDao;
	
	@Override
	public boolean updateAppliNotice(String str) {
		
		return false;
	}

	@Override
	public HashMap<Integer, Object> selectApplicNoticeByReadSign(int pageIndex, int read_sign) {
		HashMap<Integer,Object> anMap=new HashMap<Integer, Object>();
		List<AppliNotice> apList=appliNoticeDao.selectAllApli(read_sign, pageIndex);
		int count=appliNoticeDao.selectAnCount(read_sign);
		anMap=new FeeUtils().packageTotal(apList, pageIndex, count);
		return anMap;
	}


	@Override
	public HashMap<Integer, Object> selectAllAnByApliTime(String repliTime,
			int read_sign, int pageIndex) {
		repliTime+="%";
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<AppliNotice> apList=appliNoticeDao.selectAllAnByApliTime(repliTime,read_sign,pageIndex);
		int count=appliNoticeDao.selectAnCountByTime(repliTime,read_sign);
		anMap=new FeeUtils().packageTotal(apList, pageIndex, count);
		return anMap;
	}


	@Override
	public HashMap<Integer, Object> selectAllAnByAnId(int an_id, int read_sign,
			int pageIndex) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<AppliNotice> apList=appliNoticeDao.selectAllAnByAnId(an_id, read_sign, pageIndex);
		int count=appliNoticeDao.selectAnCountByAnId(an_id,read_sign);
		anMap=new FeeUtils().packageTotal(apList, pageIndex, count);
		return anMap;
	}

	@Override
	public int[] passApli(int[] chk_value,Adm adm) {
		int read_sign=2;
		String an_status="已通过";
		int ga_id;
		int count1=0;
		int count2=0;
		if(adm.getAdm_level().equals("1")){
			ga_id=supAdmDao.selectSaId(adm.getAdm_name());
		}else{
			ga_id=genAdmDao.selectGaId(adm.getAdm_name());
		}
		for(int i=0;i<chk_value.length;i++){
			int an_id=chk_value[i];
			if(appliNoticeDao.updateAppliNotice(an_status,ga_id,read_sign,an_id)>0){
				count1+=1;
			}else{
				count2+=0;
			}
		}
		int [] count={count1,count2};
		return count;
	}

	@Override
	public int[] negApli(int[] chk_value, Adm adm) {
		int read_sign=2;
		String an_status="未通过";
		int ga_id;
		int count1=0;
		int count2=0;
		if(adm.getAdm_level().equals("1")){
			ga_id=supAdmDao.selectSaId(adm.getAdm_name());
		}else{
			ga_id=genAdmDao.selectGaId(adm.getAdm_name());
		}
		for(int i=0;i<chk_value.length;i++){
			int an_id=chk_value[i];
			if(appliNoticeDao.updateAppliNotice(an_status,ga_id,read_sign,an_id)>0){
				count1+=1;
			}else{
				count2+=0;
			}
		}
		int [] count={count1,count2};
		return count;
	}

	@Override
	public int[] selectSendUser(int[] chk_value) {
		int[] userArr=new int[chk_value.length];
		for(int i=0;i<chk_value.length;i++){
			int p_id=appliNoticeDao.selectPID(chk_value[i]);
			userArr[i]=p_id;
		}
		return userArr;
	}

	@Override
	public HashMap<Integer, Object> selectOneApli(int an_id, int p_id) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		AppliNotice appliNotice=appliNoticeDao.selectOneAppliNotice(an_id);
		UserInfo userInfo=userDao.selectUserById(p_id);
		anMap.put(0, appliNotice);
		anMap.put(1, userInfo);
		return anMap;
	}

}
