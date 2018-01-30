package com.zeepn.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.MemFee;
import com.zeepn.dao.MemFeeDao;
import com.zeepn.service.MemFeeService;

@Component("memFeeService")
public class MemFeeServiceImpl implements MemFeeService{

	@Autowired
	MemFeeDao memFeeDao;
	@Override
	public int insertMemFee(MemFee memFee) {
		int row=0;;
		MemFee oldMemFee=memFeeDao.selectMemFee(memFee.getClub_id());
		if(oldMemFee==null){
			row=memFeeDao.insertMemFee(memFee);
		}else{
			row=memFeeDao.updateMemFee(memFee);
		}
		return row;
	}

	@Override
	public MemFee selectMemFee(int club_id) {
		MemFee memFee=memFeeDao.selectMemFee(club_id);
		return memFee;
	}

}
