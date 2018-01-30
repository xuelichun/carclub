package com.zeepn.service;

import java.util.List;
import java.util.Map;

import com.zeepn.bean.AdvDesc;
import com.zeepn.bean.AdvType;
import com.zeepn.bean.Advertiser;
public interface AdvertiserService {
		/**
		 * 查询广告商
		 * @param advertiser
		 * @return 广告商信息
		 */
		List<Advertiser> selectAllAdvertiser(int adv_id);
		/**
		 * 添加广告商
		 * @param adv_id
		 */
		int insertAdvertiser(Advertiser advertiser);
		
		/**
		 * 添加广告
		 * @param advDesc
		 * @return
		 */
		int insertAdvDesc(AdvDesc advDesc);
		
		/**
		 * 添加广告类型
		 * @param advType
		 * @return 添加成功返回1
		 */
		int insertAdvType(AdvType advType);
		/**
		 * 删除广告商
		 * @param adv_id
		 */
		int deleteAdvertiser(int adv_id);
		
		/**
		 * 删除广告商广告(删除广告商联动)
		 * @param ad_id
		 */
		void deleteAdvertiserById(int adv_id);
		
		/**
		 * 删除广告商的广告
		 * @param ad_id
		 * @return 成功删除返回1
		 */
		int deleteAdvDesc(int ad_id);
		
		/**
		 * 删除广告类型
		 * @param at_id
		 * @return 删除成功返回1
		 */
		int deleteAdvType(int at_id);
		/**
		 * 修改广告商
		 * @param adv
		 * @return 成功返回1
		 */
		int updateAdvertiser(Advertiser adv);
		
		/**
		 * 修改广告信息
		 * @param advType
		 * @return 修改成功返回1
		 */
		int updateAdverDesc(AdvDesc advDesc);
		
		/**
		 * 修改广告类型
		 * @param advType
		 * @return	修改成功返回1
		 */
		int updateAdverType(AdvType advType);
		/**
		 * 后台分页查询广告商
		 * @param map
		 * @return	广告商列表
		 */
		List<Advertiser> selectAdvertiserByPage(Map<String, Integer> map);
		
		/**
		 * 查询广告商广告
		 * @param adv_id
		 * @return 广告商广告列表
		 */
		List<AdvDesc> selectAdvDesc(int adv_id);
		
		/**
		 * 根据广告id显示广告信息
		 * @param ad_id
		 * @return
		 */
		List<AdvDesc> showAdvDesc(int ad_id);
		
		/**
		 * 查询全部广告类型
		 * @param at_id
		 * @return 广告类型列表
		 */
		List<AdvType> selectAllAdvType();
		
		/**
		 * 查询单个广告的类型
		 * @param ad_id
		 * @return	广告类型
		 */
		AdvType selectAdvType(int ad_id);
		
		
		
		/**
		 * 分页查询广告
		 * @param adv_id
		 * @param page
 		 * @return 广告列表
		 */
		List<AdvDesc> selectAdvertiseByPage(int adv_id, int page);
		
		
		/**
		 * 记录广告被点击数量
		 * @param ad_id
		 * @return
		 */
		int clickNum(int ad_id);
		
		/**
		 * 广告受欢迎度排行
		 * @return
		 */
		public List<AdvDesc> advRank();
		
		
		/**
		 * 根据广告类型ID查询广告类型
		 * @param at_id
		 * @return
		 */
		AdvType selectAdvTypeById(int at_id);
		
		
		
		/**
		 * 判断广告商是否存在
		 * @param adv_name
		 * @return
		 */
		public int countAdvName(String  adv_name);
		
		
		
		/**
		 * 根据广告id查询广告列表 
		 * @param ad_id
		 * @return 广告列表
		 */
		public List<AdvDesc> showAdvindex(int ad_id);
		
		
		/**
		 * 根据广告id查询广告信息
		 * @param ad_id
		 * @return
		 */
		AdvDesc selectAdvDescById(int ad_id);
}
