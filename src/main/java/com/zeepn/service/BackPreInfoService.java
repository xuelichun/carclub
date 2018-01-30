package com.zeepn.service;

import java.util.HashMap;
import java.util.List;

import com.zeepn.bean.UserInfo;

public interface BackPreInfoService {
	/**
	 * 根据欠费类型查询要发送欠费消息的对象（即会主）列表
	 * @param feeType 欠费类型
	 * @param pageIndex 页数索引
	 * @return 含有记录数的会主集合
	 */
	public HashMap<Integer, Object> selectSendArPIList(int feeType,
			int pageIndex);
	/**
	 * 默认无条件查询会主列表
	 * @param pageIndex 页数索引
	 * @return 含有记录数的会主集合
	 */
	public HashMap<Integer, Object> selectAllPI(int pageIndex);
	/**
	 * 根据车友车友会编号查询会主列表
	 * @param club_id 车友会编号
	 * @param pageIndex 页数索引
	 * @return 含有记录数的会主集合
	 */
	public HashMap<Integer, Object> selectPIByClubId(int club_id, int pageIndex);
	/**
	 * 根据车友会名查询会主列表
	 * @param club_name 车友会名
	 * @param pageIndex 页数索引
	 * @return 含有记录数的会主集合
	 */
	public HashMap<Integer, Object> selectPIByClubName(String club_name,
			int pageIndex);
	/**
	 * 根据车友会编号和车友会名查询会主列表
	 * @param club_id 车友会编号
	 * @param club_name 车友会名
	 * @param pageIndex 页数索引
	 * @return 含有记录数的会主集合
	 */
	public HashMap<Integer, Object> selectPIByCICN(int club_id,
			String club_name, int pageIndex);
	/**
	 * 默认无条件查询会主列表
	 * @param pageIndex 页数索引
	 * @return 含有记录数的会主集合
	 */
	public HashMap<Integer, Object> selectAllPIByTime(int pageIndex);
	/**
	 * 根据车友会名查询车友会
	 * @param club_name 车友会名
	 * @param pageIndex 页数索引
	 * @return 含有记录数的车友会集合
	 */
	public HashMap<Integer, Object> selectAllPIByCname(String club_name,
			int pageIndex);
	/**
	 * 根据车友会编号查询车友会
	 * @param club_id 车友会编号
	 * @param pageIndex 页数索引
	 * @return 含有记录数的车友会集合
	 */
	public HashMap<Integer, Object> selectAllPIByCId(int club_id, int pageIndex);
	/**
	 * 查询会主活跃度排行为前七位的会主信息
	 * @return 会主信息集合
	 */
	public List<UserInfo> selectFrontPreRank();
	/**
	 * 查询所有会主的排行
	 * @param pageIndex 页数索引
	 * @return 含有记录数的会主信息集合
	 */
	public HashMap<Integer, Object> selectAllPreRank(int pageIndex);
}
