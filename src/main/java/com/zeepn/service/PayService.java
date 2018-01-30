package com.zeepn.service;

import java.util.HashMap;

public interface PayService {
	/**
	 * 更新欠费记录
	 * @param payType 欠费类型标记（“1”表示年费，“2”表示功能费用，“3”表示人数级别费用）
	 * @return 更新成功，返回true；更新失败，返回false
	 */
	public boolean updateStaFeeRecord(int payType);
	/**
	 * 按类型查询所有的欠费记录
	 * @param pageIndex 页数索引
	 * @param payType 欠费类型标记（“1”表示年费，“2”表示功能费用，“3”表示人数级别费用）
	 * @return 含有记录数的欠费集合
	 */
	public HashMap<Integer, Object> selectPayRecord(int pageIndex,int payType);
	/**
	 * 根据类型和欠费日期查询所有的欠费记录
	 * @param pageIndex 页数索引
	 * @param payType 欠费类型标记（“1”表示年费，“2”表示功能费用，“3”表示人数级别费用）
	 * @param payTime 欠费日期
	 * @return 含有记录数的欠费集合
	 */
	public HashMap<Integer, Object> selectPayRecordByTime(int pageIndex,int payType,String payTime);
	/**
	 * 根据欠费类型和欠费天数查询所有的欠费记录
	 * @param pageIndex 页数索引
	 * @param payType 欠费类型
	 * @param day 欠费天数
	 * @return 含有记录数的欠费集合
	 */
	public HashMap<Integer, Object> selectPayRecordByDay(int pageIndex,
			int payType, int day);
	/**
	 * 根据欠费类型和车友会编号查询所有的欠费记录
	 * @param pageIndex 页数索引
	 * @param payType 欠费类型
	 * @param club_id 车友会编号
	 * @return 含有记录数的欠费集合
	 */
	public HashMap<Integer, Object> selectPayRecordClubId(int pageIndex,
			int payType, int club_id);
	/**
	 * 根据欠费类型、欠费日期和欠费天数查询所有的欠费记录
	 * @param pageIndex 页数索引
	 * @param payType 欠费类型
	 * @param payTime 欠费日期
	 * @param club_id 车友会编号
	 * @return 含有记录数的欠费集合
	 */
	public HashMap<Integer, Object> selectPayRecordByTimeDay(int pageIndex,
			int payType, String payTime, int club_id);
	/**
	 * 根据欠费类型、欠费日期和车友会编号查询所有的欠费记录
	 * @param pageIndex 页数索引
	 * @param payType 欠费类型
	 * @param payTime 欠费日期
	 * @param club_id 车友会编号
	 * @return 含有记录数的欠费集合
	 */
	public HashMap<Integer, Object> selectPayRecordByTimeCId(int pageIndex,
			int payType, String payTime, int club_id);
	/**
	 * 根据欠费类型、欠费天数和车友会编号查询所有的欠费记录
	 * @param pageIndex
	 * @param payType
	 * @param day
	 * @param club_id
	 * @return 含有记录数的欠费集合
	 */
	public HashMap<Integer, Object> selectPayRecordByDayCId(int pageIndex,
			int payType, int day, int club_id);
	/**
	 * 根据欠费类型、欠费日期、欠费天数和车友会编号查询所有的欠费记录
	 * @param pageIndex 页数索引
	 * @param payType 欠费类型
	 * @param payTime 欠费日期
	 * @param day 欠费天数
	 * @param club_id 车友会编号
	 * @return 含有记录数的欠费集合
	 */
	public HashMap<Integer, Object> selectPayByTimeDCId(int pageIndex,
			int payType, String payTime, int day, int club_id);
}
