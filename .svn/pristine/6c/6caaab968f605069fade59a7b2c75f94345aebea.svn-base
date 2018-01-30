package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.FcSta;

@Repository("fcStaDao")
public interface FcStaDao {

	/**
	 * 查询所有的功能费用欠费记录
	 * @param page 行数对象
	 * @return 功能费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from fc_sta order by fs_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<FcSta> selectAllFcSta(int pageIndex);
	/**
	 * 查询功能费用欠费表的数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(fs_id) from fc_sta")
	public int selectFcStaCount();
	/**
	 * 添加功能费用欠费记录
	 * @param fcSta 功能费用欠费对象
	 * @return 影响功能费用欠费表的行数
	 */
	public int insertFcSta(FcSta fcSta);
	/**
	 * 根据欠费时间查询功能费用欠费记录
	 * @param fs_time 欠费时间
	 * @param pageIndex 页数索引
	 * @return 功能费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from fc_sta where fs_time like #{fs_time} order by fs_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<FcSta> selectAllFcStaByTime(@Param("fs_time")String fs_time,@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费时间查询功能费用欠费记录
	 * @param fs_time 欠费时间
	 * @return 功能费用欠费记录数
	 */
	@Select("select count(fs_id) from fc_sta where fs_time like #{fs_time}")
	public int selectFcStaCountByTime(String fs_time);
	/**
	 * 根据欠费编号查询功能欠费对象
	 * @param payId 欠费编号
	 * @return 功能欠费对象
	 */
	public FcSta selectOneFcsSta(int payId);
	/**
	 * 根据欠费天数查询功能费用欠费记录
	 * @param fs_day 欠费天数
	 * @param pageIndex 页数索引
	 * @return 功能费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from fc_sta where fs_day=#{fs_day} order by fs_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<FcSta> selectAllFcStaByDay(@Param("fs_day")int fs_day,@Param("pageIndex")int pageIndex);
	/**
	 * 根据欠费天数查询功能费用欠费记录数
	 * @param fs_day 欠费天数
	 * @return 功能费用欠费记录数
	 */
	@Select("select count(fs_id) from fc_sta where fs_day=#{fs_day}")
	public int selctCountFsByDay(int fs_day);
	/**
	 * 根据车友会编号查询功能费用欠费记录
	 * @param club_id 车友会编号
	 * @param pageIndex 页数索引
	 * @return 功能费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from fc_sta where club_id=#{club_id} order by fs_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<FcSta> selectFcStaByCId(@Param("club_id")int club_id, @Param("pageIndex")int pageIndex);
	/**
	 * 根据车友会编号查询功能费用欠费记录数
	 * @param club_id 车友会编号
	 * @return 功能费用欠费记录数
	 */
	@Select("select count(fs_id) from fc_sta where club_id=#{club_id}")
	public int selctCountFsByCId(int club_id);
	/**
	 * 根据车友会编号和欠费时间查询功能费用欠费记录
	 * @param club_id 车友会编号
	 * @param payTime 功能费用欠费时间
	 * @param pageIndex 页数索引
	 * @return 功能费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from fc_sta where fs_day=#{fs_day} and fs_time like #{fs_time} order by fs_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<FcSta> selectAllFcStaByTD(@Param("fs_day")int fs_day,@Param("fs_time")String fs_Time,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据车友会编号和欠费时间查询功能费用欠费记录数
	 * @param club_id 车友会编号
	 * @param payTime 功能费用欠费时间
	 * @return 功能费用欠费记录数
	 */
	@Select("select count(fs_id) from fc_sta where club_id=#{club_id} and fs_time like #{fs_time}")
	public int selectCountFsByTD(@Param("club_id")int club_id,@Param("fs_time")String fs_time);
	/**
	 * 根据欠费天数和车友会编号查询功能费用欠费记录
	 * @param fs_day 欠费天数
	 * @param club_id 车友会编号
	 * @param pageIndex 页数索引
	 * @return 功能费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from fc_sta where fs_day=#{fs_day} and club_id=#{club_id} order by fs_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<FcSta> selectAllFcStaByDC(@Param("fs_day")int fs_day,@Param("club_id")int club_id,@Param("pageIndex")int pageIndex);
	/**
	 * 据欠费天数和车友会编号查询功能费用欠费记录数
	 * @param fs_day 欠费天数
	 * @param club_id 车友会编号
	 * @return 功能费用欠费记录数
	 */
	@Select("select count(fs_id) from fc_sta where fs_day=#{fs_day} and club_id=#{club_id}")
	public int selctCountFsByDC(@Param("fs_day")int fs_day,@Param("club_id")int club_id);
	/**
	 * 根据车友会编号和欠费时间查询功能费用欠费记录
	 * @param club_id 车友会编号
	 * @param fs_ime 欠费时间
	 * @param pageIndex 页数索引
	 * @return 功能费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from fc_sta where club_id=#{club_id} and fs_time like #{fs_time} order by fs_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<FcSta> selectAllFcStaByTC(@Param("club_id")int club_id,@Param("fs_time")String fs_time,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据车友会编号和欠费时间查询功能费用欠费记录数
	 * @param club_id 车友会编号
	 * @param fs_ime 欠费时间
	 * @return 功能费用欠费记录数
	 */
	@Select("select count(fs_id) from fc_sta where club_id=#{club_id} and fs_time like #{fs_time}")
	public int selctCountFsByTC(@Param("club_id")int club_id,@Param("fs_time")String fs_time);
	/**
	 * 根据欠费天数、车友会编号和欠费时间查询功能费用欠费记录
	 * @param fs_day 欠费天数
	 * @param club_id 车友会编号
	 * @param fs_time 车友会编号
	 * @param pageIndex 页数索引
	 * @return 功能费用欠费集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from fc_sta where fs_day=#{fs_day} and club_id=#{club_id} and fs_time like #{fs_time} order by fs_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<FcSta> selectAllFcStaByTDC(@Param("fs_day")int fs_day, @Param("club_id")int club_id,
			@Param("fs_time")String fs_time, @Param("pageIndex")int pageIndex);
	/**
	 * 据欠费天数、车友会编号和欠费时间查询功能费用欠费记录数
	 * @param fs_day 欠费天数
	 * @param club_id 车友会编号
	 * @param fs_time 车友会编号
	 * @return 功能费用欠费记录数
	 */
	@Select("select count(fs_id) from fc_sta where fs_day=#{fs_day} and club_id=#{club_id} and fs_time like #{fs_time}")
	public int selctCountFsByTDC(@Param("fs_day")int fs_day, @Param("club_id")int club_id, @Param("fs_time")String fs_time);

}
