package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.ChaEvent;
import com.zeepn.bean.DraTravel;
@Repository("backActivityDao")
public interface BackActivityDao {
	
	/**
	 * 默认无条件查询慈善活动集合
	 * @param pageIndex 页数索引
	 * @return 慈善活动集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from cha_event order by ce_startime desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<ChaEvent> selectAllCh(int pageIndex);
	/**
	 * 默认无条件查询慈善活动数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(ce_id) from cha_event")
	public int selectCountCh();
	/**
	 * 默认无条件查询自驾游活动集合
	 * @param pageIndex 页数索引
	 * @return 自驾游活动集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from dra_travel order by dt_startime desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<DraTravel> selectAllDT(int pageIndex);
	/**
	 * 默认无条件查询自驾游活动数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(dt_id) from dra_travel")
	public int selectCountDT();
	/**
	 * 根据活动开始日期查询慈善活动集合
	 * @param startTime 活动开始日期
	 * @param pageIndex 页数索引
	 * @return 慈善活动集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from cha_event where ce_startime like #{ce_startime} order by ce_startime desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<ChaEvent> selectAllChByST(@Param("ce_startime")String ce_startime,@Param("pageIndex")int pageIndex);
	/**
	 * 根据活动开始日期查询慈善活动数据记录数
	 * @param startTime 活动开始日期
	 * @return 数据记录数
	 */
	@Select("select count(ce_id) from cha_event where ce_startime like #{ce_startime}")
	public int selectCountChByST(String ce_startime);
	/**
	 * 根据活动开始日期查询自驾游活动集合
	 * @param startTime 活动开始日期
	 * @param pageIndex 页数索引
	 * @return 自驾游活动集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from dra_travel where dt_startime like #{dt_startime} order by dt_startime desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<DraTravel> selectAllDTByST(@Param("dt_startime")String dt_startime,@Param("pageIndex")int pageIndex);
	/**
	 * 根据活动开始日期查询自驾游活动数据记录数
	 * @param startTime 活动开始日期
	 * @return 数据记录数
	 */
	@Select("select count(dt_id) from dra_travel where dt_startime like #{dt_startime}")
	public int selectCountDTByST(String dt_startime);
	/**
	 * 根据活动结束日期查询慈善活动集合
	 * @param endTime 活动结束日期
	 * @param pageIndex 页数索引
	 * @return 慈善活动集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from cha_event where ce_endtime like #{ce_endtime} order by ce_startime desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<ChaEvent> selectAllChByET(@Param("ce_endtime")String ce_endtime,@Param("pageIndex")int pageIndex);
	/**
	 * 根据活动结束日期查询慈善活动数据记录数
	 * @param endTime 活动结束日期
	 * @return 数据记录数
	 */
	@Select("select count(ce_id) from cha_event where ce_endtime like #{ce_endtime}")
	public int selectCountChByET(String ce_endtime);
	/**
	 * 根据活动结束日期查询自驾游活动集合
	 * @param endTime 活动结束日期
	 * @param pageIndex 页数索引
	 * @return 自驾游活动集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from dra_travel where dt_endtime like #{dt_endtime} order by dt_startime desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<DraTravel> selectAllDTByET(@Param("dt_endtime")String dt_endtime,@Param("pageIndex")int pageIndex);
	/**
	 * 根据活动结束日期查询自驾游活动数据记录数
	 * @param endTime 活动结束日期
	 * @return 数据记录数
	 */
	@Select("select count(dt_id) from dra_travel where dt_endtime like #{dt_endtime}")
	public int selectCountDTByET(String dt_endtime);
	/**
	 * 根据活动编号查询慈善活动集合
	 * @param act_id 活动编号
	 * @param pageIndex 页数索引
	 * @return 慈善活动集合
	 */
	@Select("select * from cha_event where ce_id=#{ce_id}")
	public List<ChaEvent> selectAllChByAId(int ce_id);
	/**
	 * 根据活动编号查询慈善活动数据记录数
	 * @param act_id 活动编号
	 * @return 数据记录数
	 */
	@Select("select count(ce_id) from cha_event where ce_id=#{ce_id}")
	public int selectCountChByAId(int ce_id);
	/**
	 * 根据活动编号查询自驾游活动集合
	 * @param act_id 活动编号
	 * @param pageIndex 页数索引
	 * @return 自驾游活动集合
	 */
	@Select("select * from dra_travel where dt_id=#{dt_id}")
	public List<DraTravel> selectAllDTByAId(int dt_id);
	/**
	 * 根据活动编号查询自驾游活动数据记录数
	 * @param act_id 活动编号
	 * @return 数据记录数
	 */
	@Select("select count(dt_id) from dra_travel where dt_id=#{dt_id}")
	public int selectCountDTByAId(int dt_id);
	/**
	 * 根据活动开始日期和活动结束日期查询慈善活动集合
	 * @param startTime 活动开始日期
	 * @param endTime 活动结束日期
	 * @param pageIndex 页数索引
	 * @return 慈善活动集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from cha_event where ce_startime like #{ce_startime} and ce_endtime like #{ce_endtime} order by ce_startime desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<ChaEvent> selectAllChBySETime(@Param("ce_startime")String ce_startime,@Param("ce_endtime")String ce_endtime,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据活动开始日期和活动结束日期查询慈善活动数据记录数
	 * @param startTime 活动开始日期
	 * @param endTime 活动结束日期
	 * @return 数据记录数
	 */
	@Select("select count(ce_id) from cha_event where ce_startime like #{ce_startime} and ce_endtime like #{ce_endtime}")
	public int selectCountChBySETime(@Param("ce_startime")String ce_startime,@Param("ce_endtime")String ce_endtime);
	/**
	 * 根据活动开始日期和活动结束日期查询自驾游活动集合
	 * @param startTime 活动开始日期
	 * @param endTime 活动结束日期
	 * @param pageIndex 页数索引
	 * @return 自驾游活动集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from dra_travel where dt_startime like #{dt_startime} and dt_endtime like #{dt_endtime} order by dt_startime desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<DraTravel> selectAllDTBySETime(@Param("dt_startime")String dt_startime,@Param("dt_endtime")String dt_endtime,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据活动开始日期和活动结束日期查询自驾游活动数据记录数
	 * @param startTime 活动开始日期
	 * @param endTime 活动结束日期
	 * @return 自驾游活动数据记录数
	 */
	@Select("select count(dt_id) from dra_travel where dt_startime like #{dt_startime} and dt_endtime like #{dt_endtime}")
	public int selectCountDTBySETime(@Param("dt_startime")String dt_startime,@Param("dt_endtime")String dt_endtime);
	/**
	 * 根据活动编号查询慈善活动对象
	 * @param ce_id 活动编号
	 * @return 慈善活动对象
	 */
	@Select("select * from cha_event where ce_id=#{ce_id}")
	public ChaEvent selectOneChByAId(int ce_id);
	/**
	 * 根据活动编号查询自驾游活动对象
	 * @param act_id 活动编号
	 * @return 自驾游活动对象
	 */
	@Select("select * from dra_travel where dt_id=#{dt_id}")
	public DraTravel selectOneDTByAId(int dt_id);
	
}
