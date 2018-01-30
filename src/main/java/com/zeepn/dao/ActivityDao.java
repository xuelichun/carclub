package com.zeepn.dao;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.Activity;
@Repository("activityDao")
public interface ActivityDao {
	
	public int insertActivity(Activity activity);
	
	public List<Activity> selectActivities(int club_id);
	
	public Activity selectActivity(int act_id);
	
	public int updateActivity(Activity activity);
	
	public int deleteActivity(int act_id);
	
	public List<Activity> selectActivitiesByPage(@Param("club_id")int club_id,@Param("page")int page);
	
	public int selectActivityPage(int club_id);
	
	@Select("select count(act_id) from activity where act_id=#{act_id}")
	public int isExistAct(int act_id);
	
	@Select("select count(act_id) from act_reg where act_id=#{act_id} and u_id=#{u_id}")
	public int isAlreadyBaoMing(@Param("act_id")int act_id,@Param("u_id")int u_id);
	
}
