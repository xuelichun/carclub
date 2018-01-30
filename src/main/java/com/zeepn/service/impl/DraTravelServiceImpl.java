package com.zeepn.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.zeepn.bean.DraTravel;
import com.zeepn.dao.DraTravelDao;
import com.zeepn.service.DraTravelService;
@Component("draTravelService")
public class DraTravelServiceImpl implements DraTravelService {

	@Autowired
	DraTravelDao draTravelDao;
	@Override
	public int insertDraTravel(DraTravel draTravel) {
		return draTravelDao.insertDraTravel(draTravel);
	}

	@Override
	public DraTravel selectDraTravelById(int dt_id) {
		return draTravelDao.selectDraTravelById(dt_id);
	}

	@Override
	public List<DraTravel> selectDraTravel(int dt_id) {
		return draTravelDao.selectDraTravel(dt_id);
	}

	@Override
	public int updateDraTravel(DraTravel draTravel) {
		return draTravelDao.updateDraTravel(draTravel);
	}

	@Override
	public int deleteDraTravel(int dt_id) {
		return draTravelDao.deleteDraTravel(dt_id);
	}

	@Override
	public List<DraTravel> selectDraTravelBuUId(int u_id, int pageindex) {
		return draTravelDao.selectDraTravelBuUId(u_id, pageindex);
	}

	@Override
	public int selectDraTravelPage(int u_id) {
		int pageindex=(draTravelDao.selectDraTravelPage(u_id)-1)/7+1;
		return pageindex;
	}

	@Override
	public int countNum(int ts_id) {
		// TODO Auto-generated method stub
		return draTravelDao.countNum(ts_id);
	}

	@Override
	public List<DraTravel> showDra(int pageIndex) {
		
		return draTravelDao.showDra(pageIndex);
	}

	@Override
	public int countDra() {
		return draTravelDao.countDra();
	}

	@Override
	public int addTour(int u_id,int dt_id) {
		return draTravelDao.addTour(u_id,dt_id);
	}

	@Override
	public int countDras(int u_id, int dt_id) {
		
		return draTravelDao.countDras(u_id, dt_id);
	}

	@Override
	public DraTravel selectTop1() {
		return draTravelDao.selectTop1();
	}

}