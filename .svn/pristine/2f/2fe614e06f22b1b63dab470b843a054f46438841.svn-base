package com.zeepn.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.JoinAppli;

@Repository("joinAppliDao")
public interface JoinAppliDao {
	
	public int insertJoinAppli(JoinAppli joinAppli);
	
	public List<JoinAppli> selectJoinAppli(@Param("club_id")int club_id,@Param("page")int page);
	
	public int updateJoinAppli(JoinAppli joinAppli);
	
	public int updateClubOnClubPnum(int club_id);
	
	public int selectClubIdByJaId(int ja_id);
	
	public int selectClubPnum(int club_id);
	
	public int selectClubMaxNum(int club_id);
	
	public String selectClubAddress(int club_id);
	
	public String selectJaStatus(int u_id);
	
	public int countJoinAppli(int club_id);
	

}
