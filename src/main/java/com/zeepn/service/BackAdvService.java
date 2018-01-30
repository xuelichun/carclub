package com.zeepn.service;

import java.util.HashMap;
import java.util.List;

import com.zeepn.bean.AdvType;
import com.zeepn.bean.Advertiser;

public interface BackAdvService {
	
	/**
	 * 默认无条件查询广告排行
	 * @param pageIndex 页数索引
	 * @return 含有记录数的广告集合
	 */
	public HashMap<Integer, Object> selectAdvRank(int pageIndex);
	/**
	 * 根据广告类型查询广告排行
	 * @param pageIndex 页数索引
	 * @param advType 广告类型
	 * @return 含有记录数的广告集合
	 */
	public HashMap<Integer, Object> selectAdvRankByAT(int pageIndex, String advType);
	/**
	 * 根据广告商查询广告排行
	 * @param pageIndex 页数索引
	 * @param advser 广告商
	 * @return 含有记录数的广告集合
	 */
	public HashMap<Integer, Object> selectAdvRankByAD(int pageIndex, String advser);
	/**
	 * 根据广告编号查询广告排行
	 * @param pageIndex 页数索引
	 * @param adv_id 广告编号
	 * @return 含有记录数的广告集合
	 */
	public HashMap<Integer, Object> selectAdvRankByADId(int pageIndex, int adv_id);
	/**
	 * 根据广告类型和广告商查询广告排行
	 * @param pageIndex 页数索引
	 * @param advType 广告类型
	 * @param advser 广告商
	 * @return 含有记录数的广告集合
	 */
	public HashMap<Integer, Object> selectAdvRankByAA(int pageIndex, String advType,
			String advser);
	/**
	 * 查询所有的广告类型
	 * @return 广告类型集合
	 */
	public List<AdvType> selectAllAT();
	/**
	 * 查询所有的广告商
	 * @return 广告商集合
	 */
	public List<Advertiser> selectAllAD();

}
