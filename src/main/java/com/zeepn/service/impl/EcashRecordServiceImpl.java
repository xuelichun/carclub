package com.zeepn.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.zeepn.bean.EcashRecord;
import com.zeepn.dao.EcashRecordDao;
import com.zeepn.service.ClubFeeService;
import com.zeepn.service.EcashRecordService;
import com.zeepn.utils.DateFormat;

@Component("ecashRecordService")
public class EcashRecordServiceImpl implements EcashRecordService{

	@Autowired
	EcashRecordDao ecashRecordDao;
	@Autowired
	ClubFeeService clubFeeService;
	@Transactional
	@Override
	public int insertEcashRecord(EcashRecord ecashRecord) {
		ecashRecord.setEr_time(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC));
		ecashRecord.setEr_status("已申请");
		int row=ecashRecordDao.insertEcashRecord(ecashRecord);
		clubFeeService.updateClubFee(ecashRecord.getClub_id(), -ecashRecord.getEr_money(), -ecashRecord.getEr_grade());
		return row;
	}

}
