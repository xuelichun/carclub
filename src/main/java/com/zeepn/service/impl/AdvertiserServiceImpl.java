package com.zeepn.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.AdvDesc;
import com.zeepn.bean.AdvType;
import com.zeepn.bean.Advertiser;
import com.zeepn.dao.AdvertiserDao;
import com.zeepn.service.AdvertiserService;

@Component("advertiserService")
public class AdvertiserServiceImpl implements AdvertiserService{
		@Autowired
		AdvertiserDao advertiserDao;
		/**
		 * 查询所有广告商
		 * @return
		 */
		public List<Advertiser> selectAllAdvertiser(int adv_id){
			return advertiserDao.selectAllAdvertiser(adv_id);
		}
		/**
		 * 添加广告商
		 * @param adv
		 */
		public int insertAdvertiser(Advertiser adv){
			return advertiserDao.insertAdvertiser(adv);
		}
		@Override
		public int deleteAdvertiser(int adv_id) {
			return advertiserDao.deleteAdvertiser(adv_id);
		}
		@Override
		public int updateAdvertiser(Advertiser adv) {
			return advertiserDao.updateAdvertiser(adv);
		}
		@Override
		public void deleteAdvertiserById(int adv_id) {
			advertiserDao.deleteAdvertiserById(adv_id);
			
		}
		@Override
		public int deleteAdvDesc(int ad_id) {
			return advertiserDao.deleteAdvDesc(ad_id);
		}
		@Override
		public List<AdvDesc> selectAdvertiseByPage(int adv_id,int page) {
			return advertiserDao.selectAdvertiseByPage(adv_id, page);
		}
		@Override
		public int insertAdvDesc(AdvDesc advDesc) {
			return advertiserDao.insertAdvDesc(advDesc);
		}
		@Override
		public int updateAdverDesc(AdvDesc advDesc) {
			return advertiserDao.updateAdverDesc(advDesc);
		}
		@Override
		public List<AdvDesc> selectAdvDesc(int adv_id) {
			return advertiserDao.selectAdvDesc(adv_id);
		}
		@Override
		public int insertAdvType(AdvType advType) {
			return advertiserDao.insertAdvType(advType);
		}
		@Override
		public int deleteAdvType(int at_id) {
			return advertiserDao.deleteAdvType(at_id);
		}
		@Override
		public int updateAdverType(AdvType advType) {
			return advertiserDao.updateAdverType(advType);
		}
		@Override
		public List<AdvType> selectAllAdvType() {
			return advertiserDao.selectAllAdvType();
		}
		@Override
		public AdvType selectAdvType(int ad_id) {
			return advertiserDao.selectAdvType(ad_id);
		}
		@Override
		public List<Advertiser> selectAdvertiserByPage(Map<String, Integer> map) {
			return advertiserDao.selectAdvertiserByPage(map);
		}
		@Override
		public List<AdvDesc> showAdvDesc(int ad_id) {
			return advertiserDao.showAdvDesc(ad_id);
		}
		@Override
		public int clickNum(int ad_id) {
			return advertiserDao.clickNum(ad_id);
		}
		@Override
		public List<AdvDesc> advRank() {
			return advertiserDao.advRank();
		}
		@Override
		public AdvType selectAdvTypeById(int at_id) {
			return advertiserDao.selectAdvTypeById(at_id);
		}
		@Override
		public int countAdvName(String adv_name) {
			return advertiserDao.countAdvName(adv_name);
		}
		@Override
		public List<AdvDesc> showAdvindex(int ad_id) {
			return advertiserDao.showAdvindex(ad_id);
		}
		@Override
		public AdvDesc selectAdvDescById(int ad_id) {
			return advertiserDao.selectAdvDescById(ad_id);
		}

}
