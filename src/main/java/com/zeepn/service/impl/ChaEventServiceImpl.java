package com.zeepn.service.impl;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.zeepn.bean.ChaEvent;
import com.zeepn.dao.ChaEventDao;
import com.zeepn.service.ChaEventService;
@Component("chaEventService")
public class ChaEventServiceImpl implements ChaEventService{
	
	@Autowired
	ChaEventDao chaEventDao;
	
	@Override
	public int insertChaEvent(ChaEvent chaEvent) {
		return chaEventDao.insertChaEvent(chaEvent);
	}

	@Override
	public int deleteChaEvent(int ce_id) {
		return chaEventDao.deleteChaEvent(ce_id);
	}

	@Override
	public int updateChaEvent(ChaEvent chaEvent) {
		return chaEventDao.updateChaEvent(chaEvent);
	}

	@Override
	public ChaEvent selectChaEventById(int ce_id) {
		return chaEventDao.selectChaEventById(ce_id);
	}

	@Override
	public List<ChaEvent> selectChaEventByPage(Map<String, Integer> map) {
		return chaEventDao.selectChaEventByPage(map);
	}

	@Override
	public List<ChaEvent> selectChaEventByUId(int u_id, int pageIndex) {
		return chaEventDao.selectChaEventByUId(u_id, pageIndex);
	}

	@Override
	public int selectChaEventPage(int u_id) {
		int page=(chaEventDao.selectChaEventPage(u_id)-1)/7+1;
		return page;
	}

	@Override
	public int countNum(int ce_id) {
		
		return chaEventDao.countNum(ce_id);
	}

	@Override
	public int clubValue(int club_id) {
		return chaEventDao.clubValue(club_id);
	}

	@Override
	public List<ChaEvent> showCha(int pageIndex) {
		return chaEventDao.showCha(pageIndex);
	}

	@Override
	public int countCha() {
		return chaEventDao.countCha();
	}

	@Override
	public int addTour2(int u_id, int ce_id) {
		return chaEventDao.addTour2(u_id, ce_id);
	}

	@Override
	public int countChas(int u_id, int ce_id) {
		return chaEventDao.countChas(u_id, ce_id);
	}
}
