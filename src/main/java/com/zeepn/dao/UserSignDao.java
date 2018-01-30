package com.zeepn.dao;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.Sign;
@Repository("userSignDao")
public interface UserSignDao {
	/**
	 * 在用户签到时，查询上次签到的时间
	 * @param u_id  用户iD
	 * @param club_id  车友会ID
	 * @return	上次签到的时间String 类型
	 */
	@Select("select s_time from sign where u_id=#{u_id} and club_id=#{club_id}")
	public String selectSignTime(@Param("u_id")int u_id,@Param("club_id")int club_id);
	
	/**
	 * 跟新签到表，操作数据库
	 * @param sign	封装的新的签到对象
	 * @return  影响数据库行数
	 */
	public int updateSign(Sign sign);
	
	/**
	 * 查询用户签到表
	 * @param u_id   用户id
	 * @param club_id   车友会id
	 * @return  签到对象
	 */
	@Select("select * from sign where u_id=#{u_id} and club_id=#{club_id}")
	public Sign selectSign(@Param("u_id")int u_id,@Param("club_id")int club_id);
	
	/**
	 * 判断用户是否是第一次签到
	 * @param u_id  用户ID
	 * @param club_id  车友会ID
	 * @return   数据库该记录的总数
	 */
	public int isFirst(@Param("u_id")int u_id,@Param("club_id")int club_id);
	
	/**
	 * 用户第一个签到时，向sign表中插入数据
	 * @param sign  对象
	 * @return  返回数据库行数
	 */
	public int insertSign(Sign sign);
	
	/**
	 * 用户在退出车友会时，删除签到表，该用户的记录
	 * @param u_id  用户ID
	 * @param club_id 车友会ID
	 * @return  影响数据库行数
	 */
	@Delete("delete  from sign where u_id=#{u_id} and club_id=#{club_id} ")
	public int deleteSign(@Param("u_id")int u_id,@Param("club_id")int club_id);
}
