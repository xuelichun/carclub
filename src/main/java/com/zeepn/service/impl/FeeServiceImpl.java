package com.zeepn.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zeepn.bean.AnnualFee;
import com.zeepn.bean.FunCharge;
import com.zeepn.bean.Function;
import com.zeepn.bean.NumLevel;
import com.zeepn.bean.NumLevelFee;
import com.zeepn.dao.AnnualFeeDao;
import com.zeepn.dao.FunChargeDao;
import com.zeepn.dao.NumLevelFeeDao;
import com.zeepn.service.FeeService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.PacketAppliNotice;
import com.zeepn.utils.TimeUtils;

@Service("feeService")
public class FeeServiceImpl implements FeeService{
	
	/**
	 * 自动注入dao
	 */
	@Autowired
	AnnualFeeDao annualFeeDao;
	@Autowired
	FunChargeDao funChargeDao;
	@Autowired
	NumLevelFeeDao numLevelFeeDao;
	@SuppressWarnings("static-access")
	@Override
	public String subAnf(int af_price, int club_id) {
		AnnualFee annualFee2=new PacketAppliNotice().packageAnnualFee(af_price, club_id);
		String currentTime=new DateFormat().getCurrentTime(new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		List<String> atList=annualFeeDao.selectAnMattime(club_id);
		String anf_mattime=atList.get(0);
		Date d2=new TimeUtils().stringToDate(currentTime,new DateFormat().DEFAULT_DATE_FORMAT_SEC, new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		Date d1=new TimeUtils().stringToDate(anf_mattime,new DateFormat().DEFAULT_DATE_FORMAT_SEC, new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		if(new TimeUtils().compareTwoDate(d1, d2)){
			if(annualFeeDao.insertAnnualFee(annualFee2)>0){
				return "年费缴费成功";
			}else{
				return "年费缴费失败";
			}
		}else{
			return "您的年费还没到期呢，不能缴费";
		}
	}

	@SuppressWarnings("static-access")
	@Override
	public String subfc(int fun_id, int club_id) {
		FunCharge funCharge=new PacketAppliNotice().packageFunCharge(fun_id, club_id);
		String currentTime=new DateFormat().getCurrentTime(new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		List<String> ftList=funChargeDao.selectFcMattime(club_id);
		String fun_mattime=ftList.get(0);
		Date d2=new TimeUtils().stringToDate(currentTime,new DateFormat().DEFAULT_DATE_FORMAT_SEC, new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		Date d1=new TimeUtils().stringToDate(fun_mattime,new DateFormat().DEFAULT_DATE_FORMAT_SEC, new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		if(new TimeUtils().compareTwoDate(d2, d1)){
			if(funChargeDao.insertFunCharge(funCharge)>0){
				return "功能费用缴费成功";
			}else{
				return "功能费用缴费失败";
			}
		}else{
			return "您的功能缴费还没到期呢，不能缴费";
		}
	}

	@SuppressWarnings("static-access")
	@Override
	public String subnlf(int nl_id, int club_id) {
		NumLevelFee numLevelFee=new PacketAppliNotice().packageNumLevelFee(nl_id, club_id);
		String currentTime=new DateFormat().getCurrentTime(new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		List<String> ntList=numLevelFeeDao.selectNlfMattime(club_id);
		String nlf_mattime=ntList.get(0);
		Date d2=new TimeUtils().stringToDate(currentTime,new DateFormat().DEFAULT_DATE_FORMAT_SEC, new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		Date d1=new TimeUtils().stringToDate(nlf_mattime,new DateFormat().DEFAULT_DATE_FORMAT_SEC, new DateFormat().DEFAULT_DATE_FORMAT_SEC);
		if(new TimeUtils().compareTwoDate(d1, d2)){
			if(numLevelFeeDao.insertNumLevelFee(numLevelFee)>0){
				return "人数级别费用缴费成功";
			}else{
				return "人数级别费用缴费失败";
			}
		}else{
			return "您人数级别缴费还没到期呢，不能缴费";
		}
	}

	@Override
	public List<Function> selectAllFun() {
		List<Function> fcList=funChargeDao.selectAllF();
		return fcList;
	}

	@Override
	public List<NumLevel> selectAllNlf() {
		List<NumLevel> nlfList=numLevelFeeDao.selectAllNl();
		return nlfList;
	}

	@Override
	public AnnualFee selectAnnualFeeByClubPre(int club_id) {
		return annualFeeDao.selectAnnualFeeByClubPre(club_id);
	}

}
