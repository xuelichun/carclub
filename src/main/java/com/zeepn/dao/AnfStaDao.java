package com.zeepn.dao;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.AnfSta;

@Repository("anfStaDao")
public interface AnfStaDao {
	
	/**
	 * 查询所有的年费欠费记录
	 * @param page 行数对象
	 * @return 年费欠费的数据集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from anf_sta order by as_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AnfSta> selectAllAnfSta(int pageIndex);
	/**
	 * 查询年费收费表的数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(as_id) from anf_sta")
	public int selectAsCount();
	/**
	 * 添加年费欠费记录
	 * @param anfSta 年费欠费对象
	 * @return 影响年费欠费表的行数
	 */
	public int insertAnfSta(AnfSta anfSta);
	/**
	 * 根据欠费时间查询年费欠费记录
	 * @param as_time 欠费时间 
	 * @param pageIndex 行数对象
	 * @return 年费欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from anf_sta where as_time like #{as_time} order by as_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AnfSta> selectAllAnfStaByTime(@Param("as_time")String as_time,@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费时间查询年费欠费记录数
	 * @param as_time 欠费时间
	 * @return 年费欠费记录数
	 */
	@Select("select count(as_id) from anf_sta where as_time like #{as_time}")
	public int selectAsCountByTime(String as_time);
	/**
	 * 根据欠费编号查询年费欠费记录
	 * @param payId 年费欠费编号
	 * @return 年费欠费对象
	 */
	public AnfSta selectOneAnfSta(int payId);
	/**
	 * 根据欠费天数查询年费欠费记录
	 * @param pageIndex 页数索引
	 * @param as_day 欠费天数
	 * @return 年费欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from anf_sta where as_day=#{as_day} order by as_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AnfSta> selectAnfStaByDay(@Param("as_day")int as_day,@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数查询年费欠费记录数
	 * @param as_day 欠费天数
	 * @return 年费欠费记录数
	 */
	@Select("select count(as_id) from anf_sta where as_day=#{as_day}")
	public int selctCountAsByDay(int as_day);
	/**
	 * 根据车友会编号查询年非欠费记录
	 * @param pageIndex 页数索引
	 * @param club_id 车友会编号
	 * @return 年费欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from anf_sta where club_id=#{club_id} order by as_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AnfSta> selectAnfStaByCId(@Param("club_id")int club_id,@Param("pageIndex")int pageIndex);
	/**
	 * 根据车友会编号查询年费欠费记录数
	 * @param club_id 车友会编号
	 * @return 年费欠费记录数
	 */
	@Select("select count(as_id) from anf_sta where club_id=#{club_id}")
	public int selctCountAsByCId(int club_id);
	/**
	 * 根据欠费天数和欠费时间查询年费欠费记录
	 * @param club_id 车友会编号
	 * @param as_time 欠费时间
	 * @param pageIndex 页数索引
	 * @return 年费欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from anf_sta where as_day=#{as_day} and as_time like #{as_time} order by as_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AnfSta> selectAnfStaByTD(@Param("as_day")int as_day,@Param("as_time")String as_time,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数和欠费时间查询年费欠费记录数
	 * @param club_id 车友会编号
	 * @param payTime 欠费时间
	 * @return 年费欠费记录数
	 */
	@Select("select count(as_id) from anf_sta where as_day=#{as_day} and as_time like #{as_time}")
	public int selectCountAsByTD(@Param("as_day")int as_day,@Param("as_time")String as_time);
	/**
	 * 根据欠费天数和车友会编号查询年费欠费记录
	 * @param day 欠费天数
	 * @param club_id 车友会编号
	 * @param pageIndex 页数索引
	 * @return 年费欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from anf_sta where as_day=#{as_day} and club_id=#{club_id} order by as_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AnfSta> selectAllAnfStaByDC(@Param("as_day")int as_day,@Param("club_id")int club_id,@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数和车友会编号查询年费欠费记录数
	 * @param day 欠费天数
	 * @param club_id 车友会编号
	 * @return 年费欠费记录数
	 */
	@Select("select count(as_id) from anf_sta where as_day=#{as_day} and club_id=#{club_id}")
	public int selectAsCountASByDC(@Param("as_day")int as_day,@Param("club_id")int club_id);
	/**
	 * 根据车友会编号、年费欠费时间查询年费欠费记录
	 * @param club_id 车友会编号
	 * @param payTime 欠费时间
	 * @param pageIndex 页数索引
	 * @return 年费欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from anf_sta where club_id=#{club_id} and as_time like #{as_time} order by as_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AnfSta> selectAllAnfStaByTC(@Param("club_id")int club_id,@Param("as_time")String as_time,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据车友会编号、年费欠费时间查询年费欠费记录数
	 * @param club_id 车友会编号
	 * @param as_time 欠费时间
	 * @return 年费欠费记录数
	 */
	@Select("select count(as_id) from anf_sta where club_id=#{club_id} and as_time like #{as_time}")
	public int selctCountAsByDC(@Param("club_id")int club_id,@Param("as_time")String as_time);
	/**
	 * 根据欠费天数、车友会编号和欠费时间查询年费欠费记录
	 * @param as_day 欠费天数
	 * @param club_id 车友会编号
	 * @param as_time 欠费时间
	 * @param pageIndex 页数索引
	 * @return 年费欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from anf_sta where as_day=#{as_day} and club_id=#{club_id} and as_time like #{as_time} order by as_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AnfSta> selectAllAnfStaByTDC(@Param("as_day")int as_day, @Param("club_id")int club_id,
			@Param("as_time")String as_time, @Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数、车友会编号和欠费时间查询年费欠费记录数
	 * @param as_day 欠费天数
	 * @param club_id 车友会编号
	 * @param as_time 欠费时间
	 * @return 年费欠费记录数
	 */
	@Select("select count(as_id) from anf_sta where as_day=#{as_day} and club_id=#{club_id} and as_time like #{as_time}")
	public int selctCountAsByTDC(@Param("as_day")int as_day, @Param("club_id")int club_id, @Param("as_time")String as_time);
	
}
