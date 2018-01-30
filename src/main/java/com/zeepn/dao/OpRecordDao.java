package com.zeepn.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.zeepn.bean.OpRecord;

@Repository("opRecordDao")
public interface OpRecordDao {
	
	public int insertOpRecord(OpRecord opRecord);
	
	public List<OpRecord> selectOpRecords(int club_id);

}
