package com.zeepn.service;

import java.util.HashMap;

import com.zeepn.bean.Adm;

public interface AppliNoticeService {
	/**
	 * 根据申请通知编号组成的字符串修改申请通知（状态+处理人）
	 * @param str 申请通知编号组成的字符串
	 * @return 修改成功，返回true；修改失败，返回false
	 */
	public boolean updateAppliNotice(String str);
	/**
	 * 根据页数索引和读取状态查询申请通知
	 * @param pageIndex 页数索引
	 * @param readStatus 读取状态（“0”表示未读，“1”表示已读）
	 * @return 包含记录条数的申请通知集合
	 */
	public HashMap<Integer, Object> selectApplicNoticeByReadSign(int pageIndex,int readStatus);
	/**
	 * 根据申请时间查询申请通知列表
	 * @param repliTime 申请时间
	 * @param read_sign 读取标记
	 * @param pageIndex 页数索引
	 * @return 含有记录数的申请通知集合
	 */
	public HashMap<Integer, Object> selectAllAnByApliTime(String repliTime,
			int read_sign, int pageIndex);
	/**
	 * 根据申请编号查询申请通知列表
	 * @param an_id 申请编号
	 * @param read_sign 读取标记
	 * @param pageIndex 页数索引
	 * @return 含有记录数的申请通知集合
	 */
	public HashMap<Integer, Object> selectAllAnByAnId(int an_id, int read_sign,
			int pageIndex);
	/**
	 * 审批通过车友会申请通知
	 * @param chk_value 申请通知编号数组
	 * @param adm 当前管理员对象
	 * @return 审批成功和失败的通知个数
	 */
	public int[] passApli(int[] chk_value,Adm adm);
	/**
	 * 审批不通过申请通知
	 * @param chk_value 申请通知编号数组
	 * @param adm 当前管理员对象
	 * @return 审批成功和失败的通知个数
	 */
	public int[] negApli(int[] chk_value, Adm adm);
	/**
	 * 获取申请通过用户编号数组
	 * @param chk_value 申请通知编号
	 * @return 用户编号数组
	 */
	public int[] selectSendUser(int[] chk_value);
	/**
	 * 
	 * @param an_id
	 * @return
	 */
	public HashMap<Integer, Object> selectOneApli(int an_id,int p_id);
}
