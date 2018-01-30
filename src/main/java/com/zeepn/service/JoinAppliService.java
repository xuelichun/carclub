package com.zeepn.service;

import java.util.List;

import com.zeepn.bean.JoinAppli;
import com.zeepn.bean.UserInfo;

public interface JoinAppliService {

	/**
	 * 申请加入车友会
	 * @param userInfo
	 * @return 提交申请成功返回1,失败返回0,车友会人数已满返回2
	 */
	public int insertJoinAppli(UserInfo userInfo);
	
	/**
	 * 查询车友会申请
	 * @param club_id
	 * @return 车友会申请列表
	 */
	public List<JoinAppli> selectJoinAppli(int club_id,int page);
	
	/**
	 * 处理车友会申请
	 * @param ja_id
	 * @return 处理成功返回1
	 */
	public int[] updateJoinAppli(int[] u_id,int club_id,String ja_status);
	
	public int updateJoinAppli(JoinAppli joinAppli);
	
	/**
	 * 查询车友会地址
	 * @param club_id
	 * @return 车友会地址
	 */
	public String[] selectClubAddress(int club_id);
	
	public int countJoinAppli(int club_id);
	
	public int countJoinAppliPage(int club_id);
}
