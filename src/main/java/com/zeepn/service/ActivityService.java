package com.zeepn.service;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.zeepn.bean.ActReg;
import com.zeepn.bean.Activity;
import com.zeepn.bean.UserInfo;

public interface ActivityService {
	
	/**
	 * 新建活动
	 * @param activity
	 * @return 新建成功返回1
	 */
	public int insertActivity(Activity activity);
	
	/**
	 * 查询车友会活动
	 * @param club_id
	 * @return 车友会活动列表
	 */
	public List<Activity> selecActivities(int club_id);
	
	/**
	 * 查询单个车友会活动
	 * @param act_id
	 * @return 车友会活动对象
	 */
	public Activity selectActivity(int act_id);
	
	/**
	 * 修改车友会活动
	 * @param activity
	 * @return 修改成功返回1
	 */
	public int updateActivity(Activity activity);
	
	/**
	 * 删除车友会活动
	 * @param act_id
	 * @return 删除成功返回1
	 */
	public int deleteActivity(int act_id);
	
	/**
	 * 添加活动报名信息
	 * @param actReg
	 * @return 添加成返回1
	 */
	public int insertActReg(ActReg actReg);
	
	/**
	 * 更新活动报名缴费信息信息
	 * @param actReg
	 * @return 更新成功返回1
	 */
	public int updateActRegOnPay(ActReg actReg,HttpServletRequest request);
	
	/**
	 * 计算车友会活动费用
	 * @param u_id
	 * @return 个人活动费用
	 */
	public double selectActivityFee(ActReg actReg);
	
	/**
	 * 更新活动报名费用退款信息
	 * @param actReg
	 * @return 更新成功返回1
	 */
	public int updateActRegOnRefund(ActReg actReg,HttpServletRequest request);
	
	/**
	 * 根据用户id查询活动报名信息
	 * @param u_id
	 * @return 活动报名列表
	 */
	public List<ActReg> selectActRegByUId(int u_id);
	
	/**
	 * 查询单个活动有效报名者
	 * @param u_id
	 * @return 报名人信息
	 */
	public List<UserInfo> selectUserInfoAttendee(int act_id);
	
	/**
	 * 查询所有活动报名者
	 * @param club_id
	 * @return 报名人信息
	 */
	public List<UserInfo> selectUserInfoAttendeeByClubId(int club_id);
	
	/**
	 * 分页查询活动
	 * @param club_id
	 * @param page
	 * @return
	 */
	public List<Activity> selectActivitiesByPage(int club_id,int page);
	
	/**
	 * 计算活动页数
	 * @param club_id
	 * @return
	 */
	public int selectActivityPage(int club_id);
}
