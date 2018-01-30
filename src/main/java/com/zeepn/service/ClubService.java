package com.zeepn.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

import com.zeepn.bean.FunCharge;
import com.zeepn.bean.Function;


public interface ClubService {
	
	public int updateClubByClubPre(MultipartFile club_img,HttpServletRequest request);
	
	public Function selectFunction(int fun_id);
	
	public List<Function> selectAllFunction();
	
	public List<FunCharge> selectFunCharge(int club_id);
	
	public int yearFeeIsOutOfDate(int club_id);
	
	public List<FunCharge> selectFunChargeOpened(int club_id);
	
	public List<Function> selectFunctionOpened(int[] fun_id);
	
	public int jiaoFei(int fun_id,int club_id);
	
	public int kaiTongYearFee(int u_id,HttpServletRequest request);

}
