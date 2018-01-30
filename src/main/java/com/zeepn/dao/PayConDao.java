package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.PayCon;

@Repository("payConDao")
public interface PayConDao {
	
	public int countPayConByUId(int u_id);
	
	public int insertPayCon(PayCon payCon);
	
	public List<PayCon> selectPayCon(int club_id);
	
	public PayCon selectPayConByUId(int u_id);
	
	public int updatePayCon(PayCon payCon);
	
	public int updatePayConOutOfdate(PayCon payCon);
	
	public String selectPcMattime(int u_id);
	
	public List<PayCon> selectPayCons(@Param("club_id")int club_id,@Param("pc_mattime")String pc_mattime,@Param("page")int page);
	
	public int countPayConPage(@Param("club_id")int club_id,@Param("pc_mattime")String pc_mattime);

}
