package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.NlfSta;

@Repository("nlfStaDao")
public interface NlfStaDao {

	/**
	 * 查询所有的人数级别费用欠费记录
	 * @param page 行数对象
	 * @return 人数级别费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from nlf_sta order by ns_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<NlfSta> selectAllNlfSta(int pageIndex);
	/**
	 * 查询人数级别收费欠费表的数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(ns_id) from nlf_sta")
	public int selectNlfCount();
	/**
	 * 添加人数级别费用欠费记录
	 * @param nlfSta 人数级别费用欠费对象
	 * @return 影响人数级别费用欠费表的行数
	 */
	public int insertNlfSta(NlfSta nlfSta);
	/**
	 * 根据欠费时间查询人数级别费用欠费记录
	 * @param ns_time 欠费时间
	 * @param pageIndex 页数索引
	 * @return 人数级别费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from nlf_sta where ns_time like #{ns_time} order by ns_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<NlfSta> selectAllNlfStaByTime(@Param("ns_time")String ns_time,@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费时间查询人数级别费用欠费记录数
	 * @param ns_time 欠费时间
	 * @return 人数级别费用欠费记录数
	 */
	@Select("select count(ns_id) from nlf_sta where ns_time like #{ns_time}")
	public int selectNlfCountByTime(String ns_time);
	/**
	 * 根据欠费编号查询人数级别费用欠费记录
	 * @param payId 行数对象
	 * @return 人数级别费用欠费对象
	 */
	public NlfSta selectOneNlfSta(int payId);
	/**
	 * 根据欠费天数查询人数级别费用欠费记录
	 * @param pageIndex 页数索引
	 * @param ns_day 欠费天数
	 * @return 人数级别费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from nlf_sta where ns_day=#{ns_day} order by ns_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<NlfSta> selectAllNlfStaByDay(@Param("ns_day")int ns_day,@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数查询人数级别费用欠费记录数
	 * @param ns_day 欠费天数
	 * @return 人数级别费用欠费记录数
	 */
	@Select("select count(ns_id) from nlf_sta where ns_day=#{ns_day}")
	public int selectNlfCountNsByDay(int ns_day);
	/**
	 * 根据车友会编号查询人数级别费用欠费记录
	 * @param club_id 车友会编号
	 * @param pageIndex 页数索引
	 * @return 人数级别费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from nlf_sta where club_id=#{club_id} order by ns_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<NlfSta> selectAllNlfStaByCId(@Param("club_id")int club_id,@Param("pageIndex")int pageIndex);
	/**
	 * 根据车友会编号查询人数级别费用欠费记录数
	 * @param club_id 车友会编号
	 * @return 人数级别费用欠费集合
	 */
	@Select("select count(ns_id)  from nlf_sta where club_id=#{club_id}")
	public int selectCountNsByCId(int club_id);
	/**
	 * 根据欠费天数和欠费时间查询人数级别费用欠费记录
	 * @param ns_day 欠费天数
	 * @param ns_time 欠费时间
	 * @param pageIndex 页数索引
	 * @return 人数级别费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from nlf_sta where ns_day=#{ns_day} and ns_time like #{ns_time} order by ns_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<NlfSta> selectAllNlfStaByTD(@Param("ns_day")int ns_day,@Param("ns_time")String ns_time,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数和欠费时间查询人数级别费用欠费记录数
	 * @param ns_day 欠费天数
	 * @param ns_time 人数级别费用欠费时间
	 * @return 人数级别费用欠费记录数
	 */
	@Select("select count(ns_id) from nlf_sta where ns_day=#{ns_day} and ns_time like #{ns_time}")
	public int selectCountNsByTD(@Param("ns_day")int ns_day,@Param("ns_time")String ns_time);
	/**
	 * 根据欠费天数和车友会编号查询人数级别费用欠费记录
	 * @param ns_day 欠费天数
	 * @param club_id 车友会编号
	 * @param pageIndex 页数索引
	 * @return 人数级别费用欠费记录
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from nlf_sta where ns_day=#{ns_day} and club_id=#{club_id} order by ns_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<NlfSta> selectAllNlfStaByDC(@Param("ns_day")int ns_day,@Param("club_id")int club_id,@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数和车友会编号查询人数级别费用欠费记录数
	 * @param ns_day 欠费天数
	 * @param club_id 车友会编号
	 * @return 人数级别费用欠费记录数
	 */
	@Select("select count(ns_id) from nlf_sta where ns_day=#{ns_day} and club_id=#{club_id}")
	public int selectCountNsByDC(@Param("ns_day")int ns_day,@Param("club_id")int club_id);
	/**
	 * 根据车友会编号和欠费时间查询人数级别费用欠费记录
	 * @param club_id 车友会编号
	 * @param ns_time 欠费时间
	 * @param pageIndex 页数索引
	 * @return 人数级别费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from nlf_sta where club_id=#{club_id} and ns_time like #{ns_time} order by ns_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<NlfSta> selectAllNlfStaByTC(@Param("club_id")int club_id,@Param("ns_time")String ns_time,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据车友会编号和欠费时间查询人数级别费用欠费记录数
	 * @param club_id 车友会编号
	 * @param ns_time 欠费时间
	 * @return 人数级别费用欠费记录数
	 */
	@Select("select count(ns_id) from nlf_sta where club_id=#{club_id} and ns_time like #{ns_time}")
	public int selectCountNsByTC(@Param("club_id")int club_id,@Param("ns_time")String ns_time);
	/**
	 * 根据欠费天数、车友会编号和欠费时间查询人数级别费用欠费记录
	 * @param ns_day 欠费天数
	 * @param club_id 车友会编号
	 * @param ns_time 欠费时间
	 * @param pageIndex 页数索引
	 * @return 人数级别费用欠费
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from nlf_sta where ns_day=#{ns_day} and club_id=#{club_id} and ns_time like #{ns_time} order by ns_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<NlfSta> selectAllNlfStaBYTDC(@Param("ns_day")int ns_day,@Param("club_id")int club_id,
			@Param("ns_time")String ns_time, @Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数、车友会编号和欠费时间查询人数级别费用欠费记录数
	 * @param ns_day 欠费天数
	 * @param club_id 车友会编号
	 * @param ns_time 欠费时间
	 * @return 人数级别费用欠费记录数
	 */
	@Select("select count(ns_id) from nlf_sta where ns_day=#{ns_day} and club_id=#{club_id} and ns_time like #{ns_time}")
	public int selectCountNsByTDC(@Param("ns_day")int ns_day, @Param("club_id")int club_id, @Param("ns_time")String ns_time);
	
}
