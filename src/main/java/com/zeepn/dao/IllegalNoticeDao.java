package com.zeepn.dao;

import java.util.List;

import com.zeepn.bean.IllegalNotice;

public interface IllegalNoticeDao {
	/**
	 * 添加车主违法通知记录
	 * @param illegalNotice 车主违法通知对象
	 * @return 影响数据库表的行数
	 */
	public int insertIllegalNotice(IllegalNotice illegalNotice);
	/**
	 * 更新车主违法通知记录
	 * @param illegalNotice 车主违法通知对象
	 * @return 影响数据库表的行数
	 */
	public int updatellegalNotice(IllegalNotice illegalNotice);
	/**
	 * 根据用户编号查询用户违法通知集合
	 * @param u_id 用户编号
	 * @return 违法通知集合
	 */
	public List<IllegalNotice> selectIllegalNotice(int u_id);
	/**
	 * 根据用户编号和违法通知时间查询违法通知对象
	 * @param u_id 用户编号
	 * @param in_time 违法通知时间
	 * @return 违法通知对象
	 */
	public IllegalNotice selectOneIllegalNoticeBUT(int u_id,String in_time);
	/**
	 * 根据违法通知编号查询违法通知对象
	 * @param in_id 违法通知编号
	 * @return 违法通知对象
	 */
	public IllegalNotice selectOneIllegalNotice(int in_id);
	/**
	 * 查询所有违法通知记录
	 * @return 车主违法通知集合
	 */
	public List<IllegalNotice> selectAllIllegalNotice();
}
