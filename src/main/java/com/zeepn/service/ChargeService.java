package com.zeepn.service;

import java.util.HashMap;

public interface ChargeService {
	/**
	 * 按类型查询所有的收费记录
	 * @param pageIndex 页数索引
	 * @param payType 收费类型标记（“1”表示年费收费，“2”表示功能收费，“3”表示人数级别收费）
	 * @return 含有记录数的收费集合
	 */
	public HashMap<Integer, Object> selectAllPay(int pageIndex,int payType);
	/**
	 * 按类型和收费日期查询所有的收费记录
	 * @param pageIndex 页数索引
	 * @param payType 收费类型标记（“1”表示年费收费，“2”表示功能收费，“3”表示人数级别收费）
	 * @param payTime 收费日期
	 * @return 含有记录数的收费集合
	 */
	public HashMap<Integer, Object> selectAllPayByPP(int pageIndex,int payType,String payTime);
	/**
	 * 按类型、缴费日期和车友会编号查询所有的收费记录
	 * @param pageIndex 页数索引
	 * @param payType 收费类型标记（“1”表示年费收费，“2”表示功能收费，“3”表示人数级别收费）
	 * @param club_id 车友会编号
	 * @param payTime 缴费日期
	 * @return 含有记录数的收费集合
	 */
	public HashMap<Integer, Object> selectAllPayByCidPtime(int pageIndex,int payType,int club_id,String payTime);
	/**
	 * 根据类型和缴费编号查询收费对象
	 * @param pageIndex 页数索引
	 * @param payType 收费类型标记（“1”表示年费收费，“2”表示功能收费，“3”表示人数级别收费）
	 * @param pay_id 缴费编号
	 * @return 含有记录数的收费集合
	 */
	public HashMap<Integer, Object> selectPayByPayId(int pageIndex,int payType,int payId);
	/**
	 * 根据类型和车友会编号查询收费对象
	 * @param payType 收费类型
	 * @param club_id 车友会编号
	 * @return 含有记录数的收费集合
	 */
	public HashMap<Integer, Object> selectPayByClubId(int pageIndex,int payType,int club_id);
}
