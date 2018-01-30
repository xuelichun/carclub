package com.zeepn.service;

import org.apache.ibatis.annotations.Param;

import com.zeepn.bean.Sign;

public interface UserSignService {
	
		/**
		 * 用户
		 * @param u_id   用户id
		 * @param club_id  车友会id
		 * @return 返回1，签到成功。返回2  签到失败。返回3 该用户今天已经签到，不能重复签到
		 */
		public int userSign(int u_id,int club_id);
		
		/**
		 * 查询用户签到表
		 * @param u_id   用户id
		 * @param club_id   车友会id
		 * @return  签到对象
		 */
		public Sign selectSign(int u_id,int club_id);
		
		/**
		 * 用户在退出车友会时，删除签到表，该用户的记录
		 * @param u_id  用户ID
		 * @param club_id 车友会ID
		 * @return  影响数据库行数
		 */
		public int deleteSign(@Param("u_id")int u_id,@Param("club_id")int club_id);
		
}
