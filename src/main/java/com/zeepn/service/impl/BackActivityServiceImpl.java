package com.zeepn.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zeepn.bean.ChaEvent;
import com.zeepn.bean.DraTravel;
import com.zeepn.dao.BackActivityDao;
import com.zeepn.service.BackActivityService;
import com.zeepn.utils.FeeUtils;

@Service("backActivityService")
public class BackActivityServiceImpl implements BackActivityService{
	
	/**
	 * 自动注入dao
	 */
	@Autowired
	BackActivityDao backActivityDao;
	@Override
	public HashMap<Integer, Object> selectAllAct(int actType, int pageIndex) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		if(actType==1){
			List<ChaEvent> chList=backActivityDao.selectAllCh(pageIndex);
			int count=backActivityDao.selectCountCh();
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}else if(actType==2){
			List<DraTravel> dtList=backActivityDao.selectAllDT(pageIndex);
			int count=backActivityDao.selectCountDT();
			anMap=new FeeUtils().packageDTTotal(dtList, pageIndex, count);
		}else{
			List<ChaEvent> chList=backActivityDao.selectAllCh(pageIndex);
			int count=backActivityDao.selectCountCh();
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAnBySTime(int actType,
			String startTime, int pageIndex) {
		startTime+="%";
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		if(actType==1){
			List<ChaEvent> chList=backActivityDao.selectAllChByST(startTime,pageIndex);
			int count=backActivityDao.selectCountChByST(startTime);
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}else if(actType==2){
			List<DraTravel> dtList=backActivityDao.selectAllDTByST(startTime,pageIndex);
			int count=backActivityDao.selectCountDTByST(startTime);
			anMap=new FeeUtils().packageDTTotal(dtList, pageIndex, count);
		}else{
			List<ChaEvent> chList=backActivityDao.selectAllChByST(startTime,pageIndex);
			int count=backActivityDao.selectCountChByST(startTime);
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAnByETime(int actType,
			String endTime, int pageIndex) {
		endTime+="%";
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		if(actType==1){
			List<ChaEvent> chList=backActivityDao.selectAllChByET(endTime,pageIndex);
			int count=backActivityDao.selectCountChByET(endTime);
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}else if(actType==2){
			List<DraTravel> dtList=backActivityDao.selectAllDTByET(endTime,pageIndex);
			int count=backActivityDao.selectCountDTByET(endTime);
			anMap=new FeeUtils().packageDTTotal(dtList, pageIndex, count);
		}else{
			List<ChaEvent> chList=backActivityDao.selectAllChByET(endTime,pageIndex);
			int count=backActivityDao.selectCountChByET(endTime);
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAnByAId(int actType, int act_id,
			int pageIndex) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		if(actType==1){
			List<ChaEvent> chList=backActivityDao.selectAllChByAId(act_id);
			int count=backActivityDao.selectCountChByAId(act_id);
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}else if(actType==2){
			List<DraTravel> dtList=backActivityDao.selectAllDTByAId(act_id);
			int count=backActivityDao.selectCountDTByAId(act_id);
			anMap=new FeeUtils().packageDTTotal(dtList, pageIndex, count);
		}else{
			List<ChaEvent> chList=backActivityDao.selectAllChByAId(act_id);
			int count=backActivityDao.selectCountChByAId(act_id);
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAnBySETime(int actType,
			String startTime, String endTime, int pageIndex) {
		startTime+="%";
		endTime+="%";
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		if(actType==1){
			List<ChaEvent> chList=backActivityDao.selectAllChBySETime(startTime,endTime,pageIndex);
			int count=backActivityDao.selectCountChBySETime(startTime,endTime);
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}else if(actType==2){
			List<DraTravel> dtList=backActivityDao.selectAllDTBySETime(startTime,endTime,pageIndex);
			int count=backActivityDao.selectCountDTBySETime(startTime,endTime);
			anMap=new FeeUtils().packageDTTotal(dtList, pageIndex, count);
		}else{
			List<ChaEvent> chList=backActivityDao.selectAllChBySETime(startTime,endTime,pageIndex);
			int count=backActivityDao.selectCountChBySETime(startTime,endTime);
			anMap=new FeeUtils().packageChETotal(chList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public Object selectOneAn(int actType, int act_id) {
		if(actType==1){
			ChaEvent chaEvent=backActivityDao.selectOneChByAId(act_id);
			return chaEvent;
		}else if(actType==2){
			DraTravel draTravel=backActivityDao.selectOneDTByAId(act_id);
			return draTravel;
		}else{
			ChaEvent chaEvent=backActivityDao.selectOneChByAId(act_id);
			return chaEvent;
		}
	}

}
