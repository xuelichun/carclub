package com.zeepn.dao;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.AppliNotice;

@Repository("appliNoticeDao")
public interface AppliNoticeDao {
	
	/**
	 * 查询所有的申请通知记录
	 * @param page 行数对象
	 * @return 申请通知集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from appli_notice order by an_time desc) s)"
	+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AppliNotice> selectAllAppliNotice(int pageIndex);
	/**
	 * 查询车友会申请通知对象方法
	 * @param an_id 申请通知编号
	 * @return 申请通知对象
	 */
	@Select("select * from appli_notice where an_id=#{an_id}")
	public AppliNotice selectOneAppliNotice(int an_id);
	/**
	 * 提交车友会申请通知方法
	 * @param appliNotice 申请通知对象
	 * @return 申请通过，返回申请通知对象；没有通过，返回空对象
	 */
	@Insert("insert into appli_notice values(appli_notice_seq.nextval,#{an_time},#{an_status},#{p_id},#{ga_id},#{club_name},"
			+ "#{club_domnam},#{club_pro},#{club_city},#{club_del},"
			+ "#{club_cb},#{club_cd},#{read_sign})")
	public int insertAppliNotice(AppliNotice appliNotice);
	/**
	 * 查询车友会申请通知表的记录条数
	 * @return 记录条数
	 */
	@Select("select count(an_id) from appli_notice where read_sign=#{read_sign}")
	public int selectAnCount(int read_sign);
	/**
	 * 查询未读取的申请通知
	 * @param page 行数对象
	 * @return 未读取的申请通知集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from appli_notice where read_sign=#{read_sign} order by an_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AppliNotice> selectAllApli(@Param("read_sign")int read_sign,@Param("pageIndex")int pageIndex);
	/**
	 * 根据申请时间查询申请通知集合
	 * @param repliTime 申请时间
	 * @param read_sign 读取标记
	 * @param pageIndex 页数索引
	 * @return 申请通知集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from appli_notice where an_time like #{an_time} and read_sign=#{read_sign} order by an_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AppliNotice> selectAllAnByApliTime(@Param("an_time")String an_time,
			@Param("read_sign")int read_sign,@Param("pageIndex")int pageIndex);
	/**
	 * 根据申请时间查询申请通知数据记录数
	 * @param repliTime 申请时间
	 * @param read_sign 读取标记
	 * @return 数据记录数
	 */
	@Select("select count(an_id) from appli_notice where an_time like #{an_time} and read_sign=#{read_sign}")
	public int selectAnCountByTime(@Param("an_time")String an_time,@Param("read_sign")int read_sign);
	/**
	 * 根据申请编号查询申请通知集合
	 * @param an_id 申请编号
	 * @param read_sign 读取标记
	 * @param pageIndex 页数索引
	 * @return 申请通知集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from appli_notice where an_id like #{an_id} and read_sign=#{read_sign} order by an_time desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<AppliNotice> selectAllAnByAnId(@Param("an_id")int an_id,@Param("read_sign")int read_sign,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据申请编号查询申请通知数据记录数
	 * @param an_id 申请编号
	 * @param read_sign 读取标记
	 * @return 数据记录数
	 */
	@Select("select count(an_id) from appli_notice where an_id=#{an_id} and read_sign=#{read_sign}")
	public int selectAnCountByAnId(@Param("an_id")int an_id,@Param("read_sign")int read_sign);
	/**
	 * 审批通过申请通知
	 * @param an_status 申请状态
	 * @param ga_id 处理人编号
	 * @param read_sign 读取状态
	 * @param an_id 申请通知编号
	 * @return 影响申请通知表的行数
	 */
	@Update("update appli_notice set an_status=#{an_status},ga_id=#{ga_id},read_sign=#{read_sign} where an_id=#{an_id}")
	public int updateAppliNotice(@Param("an_status")String an_status,@Param("ga_id")int ga_id,@Param("read_sign")int read_sign,@Param("an_id")int an_id);
	/**
	 * 根据申请通知编号查询用户编号
	 * @param an_id 申请通知编号
	 * @return 用户编号
	 */
	@Select("select p_id from appli_notice where an_id=#{an_id}")
	public int selectPID(int an_id);
}
