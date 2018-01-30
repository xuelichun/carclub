package com.zeepn.service;

import java.util.List;
import com.zeepn.bean.AnnualFee;
import com.zeepn.bean.Function;
import com.zeepn.bean.NumLevel;

public interface FeeService {
	
	/**
	 * 缴纳年费
	 * @param annualFee 年费对象
	 * @param club_id 车友会编号
	 * @return 字符串类型的缴费结果
	 */
	public String subAnf(int af_price, int club_id);
	/**
	 * 缴纳功能费用
	 * @param funCharge 功能费用对象
	 * @param club_id 车友会编号
	 * @return 字符串类型的缴费结果
	 */
	public String subfc(int fun_id, int club_id);
	/**
	 * 缴纳人数级别费用
	 * @param numLevelFee 人数级别费用对象
	 * @param club_id 车友会编号
	 * @return 字符串类型的缴费结果
	 */
	public String subnlf(int nl_id, int club_id);
	/**
	 * 查询功能费用集合
	 * @return 功能费集合
	 */
	List<Function> selectAllFun();
	/**
	 * 查询人数级别费用集合
	 * @return 人数级别费用集合
	 */
	List<NumLevel> selectAllNlf();
	
	public AnnualFee selectAnnualFeeByClubPre(int club_id);

}
