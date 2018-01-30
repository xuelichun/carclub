package com.zeepn.service;
import java.util.List;
import java.util.Map;

import com.zeepn.bean.Adm;
import com.zeepn.bean.FnetAnt;
public interface FnetAntService {
	

	/**
	 * 创建全网公告
	 * @param fnetAnt 公告对象
	 * @return 1:创建成功 0:创建失败	 
	 * */
	public int relesAnt(FnetAnt fnetAnt);
	/**
	 * 分页查询全网公告
	 * @param map
	 * @return 公告集合
	 */
	public List<FnetAnt> selectFnetAntByPage(Map<String, Integer> map);
	
	/**
	 * 查询一个全网公告
	 * @param fa_id 公告id
	 * @return 公告对象
	 */
	public FnetAnt selectOneFnetAntById(int fa_id);
	
	/**
	 * 查询全网公告条数
	 * @return 公告条数
	 */
	public int selectFnetAntPage();
	
	/**
	 * 删除全网公告
	 * @param fa_id 公告id 
	 * @return 1:删除成功 0: 删除失败
	 */
	public int deleteFnetAnt(int fa_id);
	/**
	 * 修改全网公告
	 * @param fnetAnt 修改好的公告对象
	 * @return 1:修改成功 0:修改失败
	 */
	public int updateFnetAnt(FnetAnt fnetAnt);
	/**
	 * 查询最新的三条公告
	 * @return 公告对象
	 */
	public List<FnetAnt> selectOneFnetAntByTime();
	/**
	 * 批量删除公告
	 * @param s 公告id
	 * @return 删除成功反回1，失败反回0；
	 */
	public int deleteSomeFnetAnt(String s);
	/**
	 * 根据公告标题查询公告
	 * 公告标题，页数
	 * @return 公告集合
	 */
		public List<FnetAnt> selectFntAntByTitle(String fa_title,int pageIndex);
	/**
	 * 查询当前标题下公告记录条数	
	 * @param fa_title
	 * @return  公告条数
	 */ 
        public int selectFnetAntByTitlePage(String fa_title);
    /**
     * 获取发送公告对象
     * @param fa_title 消息标题 
     * @param fa_msg 消息内容
     * @param adm 管理员对象
     * @return 发送公告对象
     */
	public FnetAnt packgeFnt(String fa_title, String fa_msg, Adm adm);	
}
