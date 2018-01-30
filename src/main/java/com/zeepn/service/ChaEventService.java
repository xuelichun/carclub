package com.zeepn.service;

import java.util.List;
import java.util.Map;

import com.zeepn.bean.ChaEvent;

public interface ChaEventService {
	
	/**
	 * 添加慈善活动
	 * @param chaEvent
	 * @return 添加成功返回1
	 */
	int insertChaEvent(ChaEvent chaEvent);
	
	/**
	 * 删除慈善活动
	 * @param ce_id
	 * @return 删除成功返回1
	 */
	int deleteChaEvent(int ce_id);
	
	/**
	 * 修改慈善活动
	 * @param chaEvent
	 * @return 修改成功返回1
	 */
	int updateChaEvent(ChaEvent chaEvent);
	
	/**
	 * 根据ID查询慈善活动
	 * @param ce_id
	 * @return 慈善活动
	 */
	ChaEvent selectChaEventById(int ce_id);
	
	/**
	 * 分页查询慈善活动
	 * @param map
	 * @return 慈善活动列表
	 */
	List<ChaEvent> selectChaEventByPage(Map<String , Integer> map);
	/**
	 * 根据id查询用户的慈善活动
	 * @param u_id 用户id
	 * @param page  页数
	 * @return
	 */
	List<ChaEvent> selectChaEventByUId(int u_id,int pageIndex);
	
	/**
	 * 页数
	 * @param u_id
	 * @return
	 */
	public int selectChaEventPage(int u_id);
	
	/**
	 * 计算一个慈善活动下人数
	 * @param ce_id
	 * @return
	 */
	public int countNum(int ce_id);
	
	/**
	 * 添加车友会贡献值
	 * @param club_id
	 * @return
	 */
	public int clubValue(int club_id);
	
	/**
	 * 前台显示慈善活动
	 * @return
	 */
	public List<ChaEvent> showCha(int pageIndex);
	
	
	/**
	 * 查询慈善活动总数
	 * @return
	 */
	public int countCha();
	public int addTour2(int u_id,int ce_id);
	public int countChas(int u_id, int ce_id );
	
}
