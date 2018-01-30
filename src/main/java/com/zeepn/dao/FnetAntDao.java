package com.zeepn.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.FnetAnt;

@Repository("fnetAntDao")
public interface FnetAntDao {
	/**
	 * 创建全网公告
	 * @param fnetAnt 公告对象
	 * @return  数据库改变行数
	 */
	public int  relesAnt(FnetAnt fnetAnt);
	/**
	 * 分页查询全网公告
	 * @param map
	 * @return 公告集合
	 */
	public List<FnetAnt> selectFnetAntByPage(Map<String, Integer> map);
	/**
	 * 查询单个全网公告
	 * @param fa_id 公告id
	 * @return 公告对象
	 */
	public FnetAnt selectOneFnetAntById(int fa_id);
	/**
	 * 查询公告记录条数
	 * @return 记录条数
	 */
	public int selectFnetAntPage();
	/**
	 * 删除全网公告
	 * @param fa_id 公告id
	 * @return 数据库改变行数
	 */
	public int deleteFnetAnt(int fa_id);
	/**
	 * 修改全网公告
	 * @param fnetAnt 修改好的公告对象
	 * @return 数据库改变行数
	 */
	
	public int updateFnetAnt(FnetAnt fnetAnt);
	/**
	 * 查询最新三条公告
	 * @param fnetAnt 
	 * @return 公告对象
	 */
		public List<FnetAnt> selectOneFnetAntByTime();
	/**
	 * 根据公告标题查询公告
	 * 公告标题，页数
	 * @return 公告集合
	 */
		public List<FnetAnt> selectFntAntByTitle(@Param("fa_title")String fa_title,@Param("pageIndex")int pageIndex);
	/**
	 * 查询当前标题下公告记录条数	
	 * @param fa_title
	 * @return  公告条数
	 */ 
        public int selectFnetAntByTitlePage(String fa_title);	
}