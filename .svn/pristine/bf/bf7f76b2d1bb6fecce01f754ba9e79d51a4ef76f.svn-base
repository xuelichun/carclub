package com.zeepn.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zeepn.bean.Adv;
import com.zeepn.bean.AdvType;
import com.zeepn.bean.Advertiser;
import com.zeepn.dao.BackAdvDao;
import com.zeepn.service.BackAdvService;
import com.zeepn.utils.FeeUtils;
import com.zeepn.utils.TransCoding;
@Service("backAdvService")
public class BackAdvServiceImpl implements BackAdvService{
	
	/**
	 * 自动注入到
	 */
	@Autowired
	BackAdvDao backAdvDao;
	
	@Override
	public HashMap<Integer, Object> selectAdvRank(int pageIndex) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Adv> advList=backAdvDao.selectAdvRank(pageIndex);
		int count=backAdvDao.selectCountAdv();
		anMap=new FeeUtils().packageAdvTotal(advList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAdvRankByAT(int pageIndex,
			String advType) {
		advType=TransCoding.transCoding(advType);
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Adv> advList=backAdvDao.selectAdvRankByAT(pageIndex,advType);
		int count=backAdvDao.selectCountAdvByAT(advType);
		anMap=new FeeUtils().packageAdvTotal(advList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAdvRankByAD(int pageIndex,
			String advser) {
		advser=TransCoding.transCoding(advser);
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Adv> advList=backAdvDao.selectAdvRankByAD(pageIndex,advser);
		int count=backAdvDao.selectCountAdvByAD(advser);
		anMap=new FeeUtils().packageAdvTotal(advList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAdvRankByADId(int pageIndex,
			int adv_id) {
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Adv> advList=backAdvDao.selectAdvRankByADId(pageIndex,adv_id);
		int count=backAdvDao.selectCountAdvByADId(adv_id);
		anMap=new FeeUtils().packageAdvTotal(advList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAdvRankByAA(int pageIndex,
			String advType, String advser) {
		advType=TransCoding.transCoding(advType);
		advser=TransCoding.transCoding(advser);
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Adv> advList=backAdvDao.selectAdvRankByAA(pageIndex,advType,advser);
		int count=backAdvDao.selectCountAdvByAA(advType,advser);
		anMap=new FeeUtils().packageAdvTotal(advList, pageIndex, count);
		return anMap;
	}

	@Override
	public List<AdvType> selectAllAT() {
		List<AdvType> atList=backAdvDao.selectAllAT();
		return atList;
	}

	@Override
	public List<Advertiser> selectAllAD() {
		List<Advertiser> adList=backAdvDao.selectAllAD();
		return adList;
	}

}
