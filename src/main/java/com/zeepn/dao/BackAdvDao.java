package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.Adv;
import com.zeepn.bean.AdvType;
import com.zeepn.bean.Advertiser;
@Repository("backAdvDao")
public interface BackAdvDao {

	/**
	 * 默认无条件查询广告排行列表
	 * @param pageIndex 页数索引
	 * @return 广告集合
	 */
	List<Adv> selectAdvRank(int pageIndex);
	/**
	 * 默认无条件查询广告数据记录数
	 * @return 数据记录数
	 */
	public int selectCountAdv();
	/**
	 * 根据广告类型查询广告排行列表
	 * @param advType 广告类型
	 * @param pageIndex 页数索引
	 * @return 广告集合
	 */
	public List<Adv> selectAdvRankByAT(@Param("pageIndex")int pageIndex,@Param("av_an")String av_an);
	/**
	 * 根据广告类型查询广告数据记录数
	 * @param advType 广告类型
	 * @return 数据记录数
	 */
	int selectCountAdvByAT(String av_an);
	/**
	 * 根据广告商查询广告数据记录数
	 * @param advser 广告商
	 * @return 数据记录数
	 */
	int selectCountAdvByAD(String av_a);
	/**
	 * 根据广告商查询广告排行列表
	 * @param advser 广告商
	 * @param pageIndex 页数索引
	 * @return 广告集合
	 */
	List<Adv> selectAdvRankByAD(@Param("pageIndex")int pageIndex,@Param("av_a")String av_a);
	/**
	 * 根据广告编号查询广告排行
	 * @param av_id 广告编号
	 * @param pageIndex 页数索引
	 * @return 广告集合
	 */
	List<Adv> selectAdvRankByADId(@Param("pageIndex")int pageIndex,@Param("av_id")int av_id);
	/**
	 * 根据广告编号插叙广告数据记录数
	 * @param adv_id 广告编号
	 * @return 数据记录数
	 */
	int selectCountAdvByADId(int av_id);
	/**
	 * 根据广告类型和广告商查询广告排行列表
	 * @param advType 广告类型
	 * @param advser 广告商
	 * @param pageIndex 页数索引
	 * @return 广告集合
	 */
	List<Adv> selectAdvRankByAA(@Param("pageIndex")int pageIndex,@Param("av_an")String av_an,@Param("av_a")String av_a);
	/**
	 * 根据广告类型和广告商查询广告数据记录数
	 * @param advType 广告类型
	 * @param advser 广告商
	 * @return 数据记录数
	 */
	int selectCountAdvByAA(@Param("av_an")String av_an,@Param("av_a")String av_a);
	/**
	 * 查询所有的广告类型
	 * @return 广告类型集合
	 */
	@Select("select * from adv_type")
	List<AdvType> selectAllAT();
	/**
	 * 查询所有的广告商集合
	 * @return 广告商集合
	 */
	@Select("select * from advertiser")
	List<Advertiser> selectAllAD();

}
