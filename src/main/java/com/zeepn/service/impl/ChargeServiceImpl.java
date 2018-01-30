package com.zeepn.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zeepn.bean.AnnualFee;
import com.zeepn.bean.FunCharge;
import com.zeepn.bean.NumLevelFee;
import com.zeepn.dao.AnnualFeeDao;
import com.zeepn.dao.FunChargeDao;
import com.zeepn.dao.NumLevelFeeDao;
import com.zeepn.service.ChargeService;
import com.zeepn.utils.FeeUtils;

@Service("chargeService")
public class ChargeServiceImpl implements ChargeService{

	/**
	 * 自动注入dao
	 */
	@Autowired
	AnnualFeeDao annualFeeDao;
	@Autowired
	FunChargeDao funChargeDao;
	@Autowired
	NumLevelFeeDao numLevelFeeDao;
	
	@Override
	public HashMap<Integer, Object> selectAllPay(int pageIndex, int payType) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		if(payType==1){
			List<AnnualFee> afList=annualFeeDao.selectAllAnnualFeeByTime(pageIndex);
			count=annualFeeDao.selectAnfCount();
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}else if(payType==2){
			List<FunCharge> fcList=funChargeDao.selectAllFunChargeByTime(pageIndex);
			count=funChargeDao.selectFcCount();
			anMap=new FeeUtils().packageFcTotal(fcList, pageIndex, count);
		}else if(payType==3){
			List<NumLevelFee> nlfList=numLevelFeeDao.selectAllNumLevelFeeByTime(pageIndex);
			count=numLevelFeeDao.selectNfCount();
			anMap=new FeeUtils().packageNlfTotal(nlfList, pageIndex, count);
		}else{
			List<AnnualFee> afList=annualFeeDao.selectAllAnnualFeeByTime(pageIndex);
			count=annualFeeDao.selectAnfCount();
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAllPayByPP(int pageIndex, int payType, String payTime) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		payTime+="%";
		if(payType==1){
			List<AnnualFee> afList=annualFeeDao.selectAllAnnualFeeByPP(payTime,pageIndex);
			count=annualFeeDao.selectAnfCountByTime(payTime);
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}else if(payType==2){
			List<FunCharge> fcList=funChargeDao.selectAllFunChargeByPP(payTime,pageIndex);
			count=funChargeDao.selectFcCountByTime(payTime);
			anMap=new FeeUtils().packageFcTotal(fcList, pageIndex, count);
		}else if(payType==3){
			List<NumLevelFee> nlfList=numLevelFeeDao.selectAllNumLevelFeeByPP(payTime,pageIndex);
			count=numLevelFeeDao.selectNfCountByTime(payTime);
			anMap=new FeeUtils().packageNlfTotal(nlfList, pageIndex, count);
		}else{
			List<AnnualFee> afList=annualFeeDao.selectAllAnnualFeeByPP(payTime,pageIndex);
			count=annualFeeDao.selectAnfCountByTime(payTime);
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAllPayByCidPtime(int pageIndex, int payType, int club_id,String payTime) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		payTime+="%";
		if(payType==1){
			List<AnnualFee> afList=annualFeeDao.selectAfByCidPtime(club_id, payTime, pageIndex);
			count=annualFeeDao.selectCountAfByCidPtime(club_id, payTime);
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}else if(payType==2){
			List<FunCharge> fcList=funChargeDao.selectAllFunChargeByCidPTime(club_id, payTime, pageIndex);
			count=funChargeDao.selectFcCountByCidPtime(club_id, payTime);
			anMap=new FeeUtils().packageFcTotal(fcList, pageIndex, count);
		}else if(payType==3){
			List<NumLevelFee> nlfList=numLevelFeeDao.selectNlfByCidPtime(club_id, payTime, pageIndex);
			count=numLevelFeeDao.selectNlfCountByCidPtime(club_id, payTime);
			anMap=new FeeUtils().packageNlfTotal(nlfList, pageIndex, count);
		}else{
			List<AnnualFee> afList=annualFeeDao.selectAfByCidPtime(club_id, payTime, pageIndex);
			count=annualFeeDao.selectCountAfByCidPtime(club_id, payTime);
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}
		return anMap;
	}


	@Override
	public HashMap<Integer, Object> selectPayByPayId(int pageIndex,int payType,int payId) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=1;
		if(payType==1){
			List<AnnualFee> afList=annualFeeDao.selectOneAnnualFee(payId);
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}else if(payType==2){
			List<FunCharge> fcList=funChargeDao.selectOneFunCharge(payId);
			anMap=new FeeUtils().packageFcTotal(fcList, pageIndex, count);
		}else if(payType==3){
			List<NumLevelFee> nlfList=numLevelFeeDao.selectOneLevelFee(payId);
			anMap=new FeeUtils().packageNlfTotal(nlfList, pageIndex, count);
		}else{
			List<AnnualFee> afList=annualFeeDao.selectOneAnnualFee(payId);
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectPayByClubId(int pageIndex,int payType, int club_id) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		int count=0;
		if(payType==1){
			List<AnnualFee> afList=annualFeeDao.selectAnnualFeeByClubId(club_id,pageIndex);
			count=annualFeeDao.selectCountAfByClubId(club_id);
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}else if(payType==2){
			List<FunCharge> fcList=funChargeDao.selectAllFunChargeByClubId(club_id,pageIndex);
			count=funChargeDao.selectFcCountByClubId(club_id);
			anMap=new FeeUtils().packageFcTotal(fcList, pageIndex, count);
		}else if(payType==3){
			List<NumLevelFee> nlfList=numLevelFeeDao.selectNlfByClubId(club_id,pageIndex);
			count=numLevelFeeDao.selectNlfCountByClubId(club_id);
			anMap=new FeeUtils().packageNlfTotal(nlfList, pageIndex, count);
		}else{
			List<AnnualFee> afList=annualFeeDao.selectAnnualFeeByClubId(club_id,pageIndex);
			count=annualFeeDao.selectCountAfByClubId(club_id);
			anMap=new FeeUtils().packageAfTotal(afList, pageIndex, count);
		}
		return anMap;
	}
}
