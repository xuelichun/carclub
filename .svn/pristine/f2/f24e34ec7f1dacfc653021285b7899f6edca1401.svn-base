package com.zeepn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.OpRecord;
import com.zeepn.dao.OpRecordDao;
import com.zeepn.service.OpRecordService;

@Component("opRecordService")
public class OpRecordServiceImpl implements OpRecordService{
	
	@Autowired
	OpRecordDao opRecordDao;
	@Override
	public int insertOpRecord(OpRecord opRecord) {
		int row=opRecordDao.insertOpRecord(opRecord);
		return row;
	}
	@Override
	public List<OpRecord> selectOpRecords(int club_id) {
		List<OpRecord> opRecords=opRecordDao.selectOpRecords(club_id);
		return opRecords;
	}

}
