package com.zeepn.dao;
import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.ActReg;
@Repository("actRegDao")
public interface ActRegDao {
	
	public int insertActReg(ActReg actReg);
	
	public int updateActReg(ActReg actReg);
	
	public int selectClubIdByArId(int ar_id);
	
	public List<ActReg> selectActRegByUId(int u_id);
	
	public List<ActReg> selectActRegByActId(int act_id);
	
	@Select("select count(ar_id) from act_reg where act_id=#{act_id}")
	public int countPnum(int act_id);
}
