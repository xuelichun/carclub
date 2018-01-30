package com.zeepn.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zeepn.bean.PiPayRecord;
import com.zeepn.bean.PriView;
import com.zeepn.bean.UserInfo;
import com.zeepn.dao.BackPreInfoDao;
import com.zeepn.service.BackPreInfoService;
import com.zeepn.utils.FeeUtils;
import com.zeepn.utils.TransCoding;

@Service("backPreInfoService")
public class BackPreInfoServiceImpl implements BackPreInfoService{

	/**
	 * 自动注入dao
	 */
	@Autowired
	BackPreInfoDao backPreInfoDao;
	
	@Override
	public HashMap<Integer, Object> selectSendArPIList(int feeType,
			int pageIndex) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<PiPayRecord> pprList=new ArrayList<PiPayRecord>();
		int count=0;
		if(feeType==1){
			pprList= backPreInfoDao.selectPiAfList(pageIndex);
			count=backPreInfoDao.selectCountPiAf();
		}else if(feeType==2){
			pprList= backPreInfoDao.selectPiFcList(pageIndex);
			count=backPreInfoDao.selectCountPiFc();
		}else if(feeType==3){
			pprList= backPreInfoDao.selectPiNlfList(pageIndex);
			count=backPreInfoDao.selectCountPiNlf();
		}else{
			pprList= backPreInfoDao.selectPiAfList(pageIndex);
			count=backPreInfoDao.selectCountPiAf();
		}
		anMap=new FeeUtils().packagePPRTotal(pprList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAllPI(int pageIndex) {
		return null;
	}

	@Override
	public HashMap<Integer, Object> selectPIByClubId(int club_id, int pageIndex) {
		return null;
	}

	@Override
	public HashMap<Integer, Object> selectPIByClubName(String club_name,
			int pageIndex) {
		return null;
	}

	@Override
	public HashMap<Integer, Object> selectPIByCICN(int club_id,
			String club_name, int pageIndex) {
		return null;
	}

	@Override
	public HashMap<Integer, Object> selectAllPIByTime(int pageIndex) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<PriView> priList=backPreInfoDao.selectAllPIByTime(pageIndex);
		int count=backPreInfoDao.selectCountPIByTime();
		anMap=new FeeUtils().packagePriViewTotal(priList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAllPIByCname(String club_name,
			int pageIndex) {
		club_name=TransCoding.transCoding(club_name);
		club_name="%"+club_name+"%";
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<PriView> priList=backPreInfoDao.selectAllPIByName(pageIndex,club_name);
		int count=backPreInfoDao.selectCountPIByCName(club_name);
		anMap=new FeeUtils().packagePriViewTotal(priList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAllPIByCId(int club_id, int pageIndex) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<PriView> priList=backPreInfoDao.selectAllPIByCId(pageIndex,club_id);
		int count=backPreInfoDao.selectCountPIByCId(club_id);
		anMap=new FeeUtils().packagePriViewTotal(priList, pageIndex, count);
		return anMap;
	}

	@Override
	public List<UserInfo> selectFrontPreRank() {
		List<UserInfo> uiList=backPreInfoDao.selectFrontPreRank();
		return uiList;
	}

	@Override
	public HashMap<Integer, Object> selectAllPreRank(int pageIndex) {
		List<UserInfo> uiList=backPreInfoDao.selectAllPreRank(pageIndex);
		int count=backPreInfoDao.selectCountPreRank();
		HashMap<Integer, Object> anMap=new FeeUtils().packageUITotal(uiList, pageIndex, count);
		return anMap;
	}
	
}
