package com.zeepn.dao;

import org.springframework.stereotype.Repository;

import com.zeepn.bean.EcashRecord;

@Repository("ecashRecordDao")
public interface EcashRecordDao {
	
	public int insertEcashRecord(EcashRecord ecashRecord);
	
	public int updateEcashRecord(int er_id);

}
