package com.zeepn.service;

import java.util.List;
import com.zeepn.bean.DraTravel;

public interface DraTravelService {
	/**
	 * 添加旅游项目
	 * @param draTravel
	 * @return	添加成功返回1，失败返回0
	 */
	int insertDraTravel(DraTravel draTravel);
	
	/**
	 * 根据ID查询旅游项目
	 * @param dt_id
	 * @return 旅游项目详情
	 */
	DraTravel selectDraTravelById(int dt_id);
	/**
	 * 查看全部旅游项目
	 * @param dt_id
	 * @return 旅游项目列表
	 */
	List<DraTravel> selectDraTravel(int dt_id);
	
	/**
	 * 修改旅游项目信息
	 * @param draTravel
	 * @return	修改成功返回1，失败返回0
	 */
	int updateDraTravel(DraTravel draTravel);
	
	/**
	 * 删除旅游项目
	 * @param dt_id
	 * @return 删除成功返回1，失败返回0
	 */
	int deleteDraTravel(int dt_id);
	
	/**
	 * 根据用户id查询参加的活动
	 * @param u_id
	 * @param pageindex
	 * @return 活动列表
	 */
	List<DraTravel> selectDraTravelBuUId(int u_id,int pageindex);
	
	/**
	 * 查询页数
	 * @param u_id
	 * @return
	 */
	int selectDraTravelPage(int u_id);
	
	public int countNum(int ts_id);
	
	/**
	 * 前台显示自驾旅游
	 * @return 自驾旅游列表
	 */
	public List<DraTravel> showDra(int pageIndex);
	
	
	/**
	 * 查询自驾旅游总数
	 * @return 总数
	 */
	public int countDra();

	/**
	 * 添加用户到活动中
	 * @return
	 */
	public int addTour(int u_id,int dt_id);
	public int countDras(int u_id, int dt_id );

	DraTravel selectTop1();
	
}
