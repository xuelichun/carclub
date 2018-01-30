package com.zeepn.dao;

import org.springframework.stereotype.Repository;

import com.zeepn.bean.MemFee;

@Repository("menFeeDao")
public interface MemFeeDao {
	
	public int insertMemFee(MemFee memFee);
	
	public MemFee selectMemFee(int club_id);
	
	public int updateMemFee(MemFee memFee);

}
