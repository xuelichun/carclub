package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.ClubChacon;
import com.zeepn.bean.UserChacon;

@Repository("userChaconDao")
public interface UserChaconDao {

	int insertUserChacon(UserChacon userChacon);
	
	int updateUserChacon(@Param("ce_id")int ce_id,@Param("u_id")int u_id,@Param("uc_value")int uc_value);
	
	UserChacon selectUserChacoById(int uc_id);
	
	List<UserChacon> selectUserChacon(int ce_id);
	
	List<ClubChacon> selectClubChacon(int cc_id);
	
	int updateClubChacon(ClubChacon clubChacon);
}
