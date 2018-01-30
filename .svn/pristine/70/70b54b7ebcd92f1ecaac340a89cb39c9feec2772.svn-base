package com.zeepn.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zeepn.bean.AnfSta;
import com.zeepn.bean.AnnualFee;
import com.zeepn.bean.FcSta;
import com.zeepn.bean.FunCharge;
import com.zeepn.bean.NlfSta;
import com.zeepn.bean.NumLevelFee;
import com.zeepn.dao.AnfStaDao;
import com.zeepn.dao.AnnualFeeDao;
import com.zeepn.dao.FcStaDao;
import com.zeepn.dao.FunChargeDao;
import com.zeepn.dao.NlfStaDao;
import com.zeepn.dao.NumLevelFeeDao;
import com.zeepn.service.PayService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.FeeUtils;

@Service("payService")
public class PayServiceImpl implements PayService{

	/**
	 * 自动注入dao
	 */
	@Autowired
	AnfStaDao anfStaDao;
	@Autowired
	FcStaDao fcStaDao;
	@Autowired
	NlfStaDao nlfStaDao;
	@Autowired
	AnnualFeeDao annualFeeDao;
	@Autowired
	FunChargeDao funChargeDao;
	@Autowired
	NumLevelFeeDao numLevelFeeDao;
	
	@SuppressWarnings("static-access")
	@Override
	public boolean updateStaFeeRecord(int payType) {
		String time=new DateFormat().getCurrentTime(new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		List<AnfSta> anfStaList=new ArrayList<AnfSta>();
		List<FcSta> fcStaList=new ArrayList<FcSta>();
		List<NlfSta> nlfStaList=new ArrayList<NlfSta>();
		int count=0;
		if(payType==1){
			List<AnnualFee> anfList=annualFeeDao.selectAllAf();
			if(anfList.size()>0){
				anfStaList=new FeeUtils().getAnfStaList(anfList,time);
				if(anfStaList.size()>0){
					for(AnfSta anfSta:anfStaList){
						count=anfStaDao.insertAnfSta(anfSta);
					}
				}
			}
		}else if(payType==2){
			List<FunCharge> fcList=funChargeDao.selectAllFc();
			if(fcList.size()>0){
				fcStaList=new FeeUtils().getFcStaList(fcList,time);
				if(fcStaList.size()>0){
					for(FcSta fcSta:fcStaList){
						count=fcStaDao.insertFcSta(fcSta);
					}
				}
			}
		}else if(payType==3){
			List<NumLevelFee> nlfList=numLevelFeeDao.selectAllNlf();
			if(nlfList.size()>0){
				nlfStaList=new FeeUtils().getNlfStaList(nlfList,time);
				if(nlfStaList.size()>0){
					for(NlfSta nlfSta:nlfStaList){
						count=nlfStaDao.insertNlfSta(nlfSta);
					}
				}
			}
		}
		if(count>0){
			return true;
		}else{
			return false;
		}
	}

	@Override
	public HashMap<Integer, Object> selectPayRecord(int pageIndex,int payType) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		if(payType==1){
			List<AnfSta> asList=anfStaDao.selectAllAnfSta(pageIndex);
			int count=anfStaDao.selectAsCount();
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}else if(payType==2){
			List<FcSta> fsList=fcStaDao.selectAllFcSta(pageIndex);
			int count=fcStaDao.selectFcStaCount();
			anMap=new FeeUtils().packageFsTotal(fsList, pageIndex, count);
		}else if(payType==3){
			List<NlfSta> nsList=nlfStaDao.selectAllNlfSta(pageIndex);
			int count=nlfStaDao.selectNlfCount();
			anMap=new FeeUtils().packageNsTotal(nsList, pageIndex, count);
		}else{
			List<AnfSta> asList=anfStaDao.selectAllAnfSta(pageIndex);
			int count=anfStaDao.selectAsCount();
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectPayRecordByTime(int pageIndex, int payType, String payTime) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		payTime+="%";
		if(payType==1){
			List<AnfSta> asList=anfStaDao.selectAllAnfStaByTime(payTime,pageIndex);
			count=anfStaDao.selectAsCountByTime(payTime);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}else if(payType==2){
			List<FcSta> fsList=fcStaDao.selectAllFcStaByTime(payTime,pageIndex);
			count=fcStaDao.selectFcStaCountByTime(payTime);
			anMap=new FeeUtils().packageFsTotal(fsList, pageIndex, count);
		}else if(payType==3){
			List<NlfSta> nsList=nlfStaDao.selectAllNlfStaByTime(payTime,pageIndex);
			count=nlfStaDao.selectNlfCountByTime(payTime);
			anMap=new FeeUtils().packageNsTotal(nsList, pageIndex, count);
		}else{
			List<AnfSta> asList=anfStaDao.selectAllAnfStaByTime(payTime,pageIndex);
			count=anfStaDao.selectAsCountByTime(payTime);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectPayRecordByDay(int pageIndex,
			int payType, int day) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		if(payType==1){
			List<AnfSta> asList=anfStaDao.selectAnfStaByDay(day,pageIndex);
			count=anfStaDao.selctCountAsByDay(day);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}else if(payType==2){
			List<FcSta> fsList=fcStaDao.selectAllFcStaByDay(day,pageIndex);
			count=fcStaDao.selctCountFsByDay(day);
			anMap=new FeeUtils().packageFsTotal(fsList, pageIndex, count);
		}else if(payType==3){
			List<NlfSta> nsList=nlfStaDao.selectAllNlfStaByDay(day, pageIndex);
			count=nlfStaDao.selectNlfCountNsByDay(day);
			anMap=new FeeUtils().packageNsTotal(nsList, pageIndex, count);
		}else{
			List<AnfSta> asList=anfStaDao.selectAnfStaByDay(day,pageIndex);
			count=anfStaDao.selctCountAsByDay(day);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectPayRecordClubId(int pageIndex,
			int payType, int club_id) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		if(payType==1){
			List<AnfSta> asList=anfStaDao.selectAnfStaByCId(club_id,pageIndex);
			count=anfStaDao.selctCountAsByCId(club_id);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}else if(payType==2){
			List<FcSta> fsList=fcStaDao.selectFcStaByCId(club_id,pageIndex);
			count=fcStaDao.selctCountFsByCId(club_id);
			anMap=new FeeUtils().packageFsTotal(fsList, pageIndex, count);
		}else if(payType==3){
			List<NlfSta> nsList=nlfStaDao.selectAllNlfStaByCId(club_id,pageIndex);
			count=nlfStaDao.selectCountNsByCId(club_id);
			anMap=new FeeUtils().packageNsTotal(nsList, pageIndex, count);
		}else{
			List<AnfSta> asList=anfStaDao.selectAnfStaByCId(club_id,pageIndex);
			count=anfStaDao.selctCountAsByCId(club_id);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectPayRecordByTimeDay(int pageIndex,
			int payType, String payTime, int day) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		payTime+="%";
		if(payType==1){
			List<AnfSta> asList=anfStaDao.selectAnfStaByTD(day,payTime,pageIndex);
			count=anfStaDao.selectCountAsByTD(day,payTime);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}else if(payType==2){
			List<FcSta> fsList=fcStaDao.selectAllFcStaByTD(day,payTime,pageIndex);
			count=fcStaDao.selectCountFsByTD(day,payTime);
			anMap=new FeeUtils().packageFsTotal(fsList, pageIndex, count);
		}else if(payType==3){
			List<NlfSta> nsList=nlfStaDao.selectAllNlfStaByTD(day,payTime,pageIndex);
			count=nlfStaDao.selectCountNsByTD(day,payTime);
			anMap=new FeeUtils().packageNsTotal(nsList, pageIndex, count);
		}else{
			List<AnfSta> asList=anfStaDao.selectAnfStaByTD(day,payTime,pageIndex);
			count=anfStaDao.selectCountAsByTD(day,payTime);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectPayRecordByTimeCId(int pageIndex,
			int payType, String payTime, int club_id) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		payTime+="%";
		if(payType==1){
			List<AnfSta> asList=anfStaDao.selectAllAnfStaByTC(club_id,payTime,pageIndex);
			count=anfStaDao.selctCountAsByDC(club_id,payTime);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}else if(payType==2){
			List<FcSta> fsList=fcStaDao.selectAllFcStaByTC(club_id,payTime,pageIndex);
			count=fcStaDao.selctCountFsByTC(club_id,payTime);
			anMap=new FeeUtils().packageFsTotal(fsList, pageIndex, count);
		}else if(payType==3){
			List<NlfSta> nsList=nlfStaDao.selectAllNlfStaByTC(club_id,payTime,pageIndex);
			count=nlfStaDao.selectCountNsByTC(club_id,payTime);
			anMap=new FeeUtils().packageNsTotal(nsList, pageIndex, count);
		}else{
			List<AnfSta> asList=anfStaDao.selectAllAnfStaByTC(club_id,payTime,pageIndex);
			count=anfStaDao.selctCountAsByDC(club_id,payTime);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectPayRecordByDayCId(int pageIndex,
			int payType, int day, int club_id) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		if(payType==1){
			List<AnfSta> asList=anfStaDao.selectAllAnfStaByDC(day,club_id,pageIndex);
			count=anfStaDao.selectAsCountASByDC(day,club_id);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}else if(payType==2){
			List<FcSta> fsList=fcStaDao.selectAllFcStaByDC(day,club_id,pageIndex);
			count=fcStaDao.selctCountFsByDC(day,club_id);
			anMap=new FeeUtils().packageFsTotal(fsList, pageIndex, count);
		}else if(payType==3){
			List<NlfSta> nsList=nlfStaDao.selectAllNlfStaByDC(day,club_id,pageIndex);
			count=nlfStaDao.selectCountNsByDC(day,club_id);
			anMap=new FeeUtils().packageNsTotal(nsList, pageIndex, count);
		}else{
			List<AnfSta> asList=anfStaDao.selectAllAnfStaByDC(day,club_id,pageIndex);
			count=anfStaDao.selectAsCountASByDC(day,club_id);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectPayByTimeDCId(int pageIndex,
			int payType, String payTime, int day, int club_id) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		payTime+="%";
		if(payType==1){
			List<AnfSta> asList=anfStaDao.selectAllAnfStaByTDC(day,club_id,payTime,pageIndex);
			count=anfStaDao.selctCountAsByTDC(day,club_id,payTime);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}else if(payType==2){
			List<FcSta> fsList=fcStaDao.selectAllFcStaByTDC(day,club_id,payTime,pageIndex);
			count=fcStaDao.selctCountFsByTDC(day,club_id,payTime);
			anMap=new FeeUtils().packageFsTotal(fsList, pageIndex, count);
		}else if(payType==3){
			List<NlfSta> nsList=nlfStaDao.selectAllNlfStaBYTDC(day,club_id,payTime,pageIndex);
			count=nlfStaDao.selectCountNsByTDC(day,club_id,payTime);
			anMap=new FeeUtils().packageNsTotal(nsList, pageIndex, count);
		}else{
			List<AnfSta> asList=anfStaDao.selectAllAnfStaByTDC(day,club_id,payTime,pageIndex);
			count=anfStaDao.selctCountAsByTDC(day,club_id,payTime);
			anMap=new FeeUtils().packageAsTotal(asList, pageIndex, count);
		}
		return anMap;
	}
	
}
