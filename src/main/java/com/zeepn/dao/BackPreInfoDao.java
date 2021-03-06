package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.PiPayRecord;
import com.zeepn.bean.PriView;
import com.zeepn.bean.UserInfo;

@Repository("backPreInfoDao")
public interface BackPreInfoDao {
	/**
	 * 查询会主信息表的数据记录数
	 * @return 数据记录数
	 */
	public int selectPiCountByTime();
	/**
	 * 查询含有年费欠费信息的会主列表
	 * @param pageIndex 页数索引
	 * @return 含年费欠费信息的会主集合
	 */
	public List<PiPayRecord> selectPiAfList(int pageIndex);
	/**
	 * 查询含有年费欠费信息的数据记录数
	 * @return 数据记录数
	 */
	public int selectCountPiAf();
	/**
	 * 查询含有功能费用欠费信息的会主列表
	 * @param pageIndex 页数索引
	 * @return 含功能费用欠费信息的会主集合
	 */
	public List<PiPayRecord> selectPiFcList(int pageIndex);
	/**
	 * 查询含有功能费用欠费信息的数据记录数
	 * @return 数据记录数
	 */
	public int selectCountPiFc();
	/**
	 * 查询含有人数级别费用欠费信息的会主列表
	 * @param pageIndex 页数索引
	 * @return 含有人数级别费用欠费信息的会主集合
	 */
	public List<PiPayRecord> selectPiNlfList(int pageIndex);
	/**
	 * 查询含有人数级别费用欠费信息的数据记录数
	 * @return 数据记录数
	 */
	public int selectCountPiNlf();
	/**
	 * 默认查询会主集合
	 * @param pageIndex 页数索引
	 * @return 会主集合
	 */
	public List<PriView> selectAllPIByTime(int pageIndex);
	/**
	 * 查询会主数据记录数
	 * @return 数据记录数
	 */
	public int selectCountPIByTime();
	/**
	 * 根据车友会名查询会主集合
	 * @param club_name 车友会名
	 * @param pageIndex 页数索引
	 * @return 会主集合
	 */
	public List<PriView> selectAllPIByName(@Param("pageIndex")int pageIndex,@Param("pri_cname")String pri_cname);
	/**
	 * 根据车友会名查询会主数据记录数
	 * @param club_name 车友会名
	 * @return 数据记录数
	 */
	public int selectCountPIByCName(String pri_cname);
	/**
	 * 根据车友会编号查询会主集合
	 * @param club_id 车友会编号
	 * @param pageIndex 页数索引
	 * @return 会主集合
	 */
	public List<PriView> selectAllPIByCId(@Param("pageIndex")int pageIndex,@Param("pri_cid")int pri_cid);
	/**
	 * 根据车友会编号查询会主数据记录数
	 * @param club_id 车友会编号
	 * @return 数据记录数
	 */
	public int selectCountPIByCId(int pri_cid);
	/**
	 * 查询会主活跃度排行为前七位的会主信息
	 * @return 会主信息集合
	 */
	public List<UserInfo> selectFrontPreRank();
	/**
	 * 查询所有的会主活跃度排行
	 * @param pageIndex 页数索引
	 * @return 会主信息集合
	 */
	public List<UserInfo> selectAllPreRank(int pageIndex);
	/**
	 * 查询会主数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(p_id) from pre_info")
	public int selectCountPreRank();
}
