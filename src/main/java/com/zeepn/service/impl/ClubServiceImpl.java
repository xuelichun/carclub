package com.zeepn.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.zeepn.bean.AnnualFee;
import com.zeepn.bean.Club;
import com.zeepn.bean.FunCharge;
import com.zeepn.bean.Function;
import com.zeepn.bean.UserInfo;
import com.zeepn.dao.AnnualFeeDao;
import com.zeepn.dao.ClubDao;
import com.zeepn.dao.FunChargeDao;
import com.zeepn.service.ClubService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.Upload;

@Component("clubService")
public class ClubServiceImpl implements ClubService{
	@Autowired
	ClubDao clubDao;
	@Autowired
	AnnualFeeDao annualFeeDao;
	@Autowired
	FunChargeDao funChargeDao;
	@Override
	public int updateClubByClubPre(MultipartFile club_img,HttpServletRequest request) {
		Club club=new Club();
		club.setClub_name(request.getParameter("club_name"));
		club.setClub_desc(request.getParameter("club_desc"));
		club.setClub_id(Integer.parseInt(request.getParameter("club_id")));
		try {
			club.setClub_img(Upload.uploadPicture(club_img, request, "clubImg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return clubDao.updateClubByClubPre(club);
	}
	@Override
	public Function selectFunction(int fun_id) {
		return clubDao.selectFunction(fun_id);
	}
	@Override
	public List<Function> selectAllFunction() {
		return clubDao.selectAllFunction();
	}
	@Override
	public List<FunCharge> selectFunCharge(int club_id) {
		return clubDao.selectFunCharge(club_id);
	}
	@Override
	public int yearFeeIsOutOfDate(int club_id) {
		AnnualFee annualFee=annualFeeDao.selectAnnualFeeByClubPre(club_id);
		if(annualFee!=null){
			if(DateFormat.isOutOfDate(annualFee.getAf_mattime())){
				return 0;
			}else{
				return 1;
			}
		}else{
			return 0;
		}
	}
	@Override
	public List<FunCharge> selectFunChargeOpened(int club_id) {
		List<FunCharge> funChargeResult=new ArrayList<FunCharge>();
		List<FunCharge> funCharge=clubDao.selectFunCharge(club_id);
		for(FunCharge func:funCharge){
			if(!DateFormat.isOutOfDate(func.getFc_mattime())){
				funChargeResult.add(func);
			}
		}
		return funChargeResult;
	}
	@Override
	public List<Function> selectFunctionOpened(int[] fun_id) {
		List<Function> function=new ArrayList<Function>();
		for(int i=0;i<fun_id.length;i++){
			function.add(clubDao.selectFunction(fun_id[i]));
		}
		return function;
	}
	@Override
	public int jiaoFei(int fun_id,int club_id) {
		FunCharge funCharge=new FunCharge();
		funCharge.setFun_id(fun_id);
		funCharge.setFc_paytime(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC));
		funCharge.setFc_mattime(DateFormat.getNextYearTime(funCharge.getFc_paytime()));
		funCharge.setFc_monthtime("0");
		funCharge.setClub_id(club_id);
		System.out.println(funCharge);
		return funChargeDao.insertFunCharge(funCharge);
	}
	@Override
	public int kaiTongYearFee(int u_id, HttpServletRequest request) {
		int row=0;
		HttpSession session=request.getSession();
		UserInfo userInfo=(UserInfo) session.getAttribute("user");
		AnnualFee annualFee=annualFeeDao.selectAnnualFeeByClubPre(userInfo.getClub_id());
		if(annualFee==null){
			AnnualFee annualFeeTemp=new AnnualFee(800, DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC), userInfo.getClub_id(), DateFormat.getNextYearTime(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC)));
			row=annualFeeDao.insertAnnualFee(annualFeeTemp);
		}else{
			if(DateFormat.isOutOfDate(annualFee.getAf_mattime())){
				AnnualFee annualFeeTemp=new AnnualFee(800, DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC), userInfo.getClub_id(), DateFormat.getNextYearTime(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC)));
				row=annualFeeDao.insertAnnualFee(annualFeeTemp);
			}else{
				annualFee.setAf_mattime(DateFormat.getNextYearTime(annualFee.getAf_mattime()));
				row=annualFeeDao.updateAnnualFee(annualFee);
			}
		}
		return row;
	}

}
