package com.zeepn.service;

import java.util.HashMap;

public interface BackActivityService {

	/**
	 * 默认无条件查询活动列表
	 * @param actType 活动类型标记
	 * @param pageIndex 页数索引
	 * @return 含有记录数的活动集合
	 */
	HashMap<Integer, Object> selectAllAct(int actType, int pageIndex);
	/**
	 * 根据活动开始日期查询活动列表
	 * @param actType 活动类型标记
	 * @param startTime 活动开始日期
	 * @param pageIndex 页数索引
	 * @return 含有记录数的活动集合
	 */
	HashMap<Integer, Object> selectAnBySTime(int actType, String startTime,
			int pageIndex);
	/**
	 * 根据活动结束日期查询活动列表
	 * @param actType 活动类型记录
	 * @param endTime 活动结束日期
	 * @param pageIndex 页数索引
	 * @return 含有记录数的活动集合
	 */ 
	HashMap<Integer, Object> selectAnByETime(int actType, String endTime,
			int pageIndex);
	/**
	 * 根据活动编号查询活动列表
	 * @param actType 活动类型标记
	 * @param act_id 活动编号
	 * @param pageIndex 页数索引
	 * @return 含有记录数的活动集合
	 */
	HashMap<Integer, Object> selectAnByAId(int actType, int act_id,
			int pageIndex);
	/**
	 * 根据活动开始日期和活动结束日期查询活动列表
	 * @param actType 活动类型标记
	 * @param startTime 活动开始日期
	 * @param endTime 活动结束日期
	 * @param pageIndex 页数索引 
	 * @return 含有记录数的活动集合
	 */
	HashMap<Integer, Object> selectAnBySETime(int actType, String startTime,
			String endTime, int pageIndex);
	/**
	 * 根据活动类型和活动编号查询活动对象
	 * @param actType 活动类型标记
	 * @param act_id 活动编号
	 * @return 活动对象
	 */
	public Object selectOneAn(int actType, int act_id);

}
