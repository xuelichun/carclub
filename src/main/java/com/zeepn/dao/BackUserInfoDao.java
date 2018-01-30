package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.UserInfo;

@Repository("backUserInfoDao")
public interface BackUserInfoDao{
	
	/**
	 * 默认无条件查询用户集合
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUI(int pageIndex);
	/**
	 * 默认无条件查询用户数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo")
	public int selectCountUI();
	/**
	 * 根据省份查询用户集合
	 * @param procince 省份
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectUIByPro(@Param("u_pro")String u_pro,@Param("pageIndex")int pageIndex);
	/**
	 * 根据省份查询用户数据记录数
	 * @param procince 省份
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_pro=#{u_pro}")
	public int selectCountUIByPro(String u_pro);
	/**
	 * 根据城市查询用户集合
	 * @param city 城市
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_city=#{u_city} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByCity(@Param("u_city")String u_city,@Param("pageIndex")int pageIndex);
	/**
	 * 根据城市查询用户数据记录数
	 * @param city 城市
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_city=#{u_city}")
	public int selectCountUIbyCity(String u_city);
	/**
	 * 根据性别查询用户集合
	 * @param sex 性别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_sex=#{u_sex} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIBySex(@Param("u_sex")String u_sex,@Param("pageIndex")int pageIndex);
	/**
	 * 根据性别查询用户数据记录数
	 * @param sex 性别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_sex=#{u_sex}")
	public int selectCountUIbySex(String u_sex);
	/**
	 * 根据用户昵称查询用户集合
	 * @param uname 用户昵称
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_nick like #{u_nick} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByUname(@Param("u_nick")String u_nick, @Param("pageIndex")int pageIndex);
	/**
	 * 根据用户昵称查询用户数据记录数
	 * @param uname 用户昵称
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_nick like #{u_nick}")
	public int selectCountUIByUname(String u_nick);
	/**
	 * 根据用户级别查询用户集合
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByUgrade(@Param("u_level")String u_level,@Param("pageIndex")int pageIndex);
	/**
	 * 根据用户级别查询用户数据记录数
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_level=#{u_level}")
	public int selectCountUIByUgrade(String u_level);
	/**
	 * 根据省份和用户性别查询用户集合
	 * @param procince 省份
	 * @param sex 用户性别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByPS(@Param("u_pro")String u_pro,@Param("u_sex")String u_sex,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据省份和用户性别查询用户数据记录数
	 * @param procince 省份
	 * @param sex 性别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex}")
	public int selectCountUIByPS(@Param("u_pro")String u_pro, @Param("u_sex")String u_sex);
	/**
	 * 根据省份和用户昵称查询用户集合
	 * @param procince 省份
	 * @param uname 用户昵称
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} and u_nick like #{u_nick} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByPUN(@Param("u_pro")String u_pro, @Param("u_nick")String u_nick,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据省份和用户昵称查询用户数据记录数
	 * @param procince 省份
	 * @param uname 用户昵称
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_pro=#{u_pro} and u_nick like #{u_nick}")
	public int selectCountUIByPUN(@Param("u_pro")String u_pro,@Param("u_nick")String u_nick);
	/**
	 * 根据省份和用户级别查询用户集合
	 * @param procince 省份
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByPUG(@Param("u_pro")String u_pro, @Param("u_level")String u_level,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据省份和用户级别查询用户数据记录数
	 * @param procince 省份
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_pro=#{u_pro} and u_level=#{u_level}")
	public int selectCountUIByPUG(@Param("u_pro")String u_pro,@Param("u_level")String u_level);
	/**
	 * 根据城市和用户性别查询用户集合
	 * @param city 城市
	 * @param sex 用户性别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_city=#{u_city} and u_sex=#{u_sex} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByCS(@Param("u_city")String u_city,@Param("u_sex")String u_sex,@Param("pageIndex")int pageIndex);
	/**
	 * 根据城市和用户性别查询用户数据记录数
	 * @param city 城市
	 * @param sex 性别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_city=#{u_city} and u_sex=#{u_sex}")
	public int selectCountUIByCS(@Param("u_city")String u_city,@Param("u_sex")String u_sex);
	/**
	 * 根据城市和用户昵称查询用户集合
	 * @param city 城市
	 * @param uname 用户昵称
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_city=#{u_city} and u_nick like #{u_nick} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByCUN(@Param("u_city")String u_city,@Param("u_nick")String u_nick,
			int pageIndex);
	/**
	 * 根据城市和用户昵称查询用户数据记录数
	 * @param city 城市
	 * @param uname 用户昵称
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_city=#{u_city} and u_nick like #{u_nick}")
	public int selectCountUIByCUN(@Param("u_city")String u_city,@Param("u_nick")String u_nick);
	/**
	 * 根据城市和用户级别查询用户集合
	 * @param city 城市
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_city=#{u_city} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByCUG(@Param("u_city")String u_city,@Param("u_level")String u_level,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据城市和用户级别查询用户数据记录数
	 * @param city 城市
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_city=#{u_city} and u_level=#{u_level}")
	public int selectCountUIByCUG(@Param("u_city")String u_city,@Param("u_level")String u_level);
	/**
	 * 根据用户性别和用户昵称查询用户集合
	 * @param sex 用户性别 
	 * @param uname 用户昵称
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_sex=#{u_sex} and u_nick like #{u_nick} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIBySUN(@Param("u_sex")String u_sex,@Param("u_nick")String u_nick,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据性别和用户昵称查询用户数据记录数
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_sex=#{u_sex} and u_nick like #{u_nick}")
	public int selectCountUIBySUN(@Param("u_sex")String u_sex,@Param("u_nick")String u_nick);
	/**
	 * 根据用户性别和用户级别查询用户集合
	 * @param sex 用户性别
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_sex=#{u_sex} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIBySUG(@Param("u_sex")String u_sex,@Param("u_level")String u_level,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据用户性别和用户级别查询用户数据记录数
	 * @param sex 用户性别
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_sex=#{u_sex} and u_level=#{u_level}")
	public int selectCountUIBySUG(@Param("u_sex")String u_sex,@Param("u_level")String u_level);
	/**
	 * 根据用户昵称和用户级别查询用户集合
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_sex=#{u_sex} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByUNUG(@Param("u_nick")String u_nick,@Param("u_level")String u_level,
			@Param("pageIndex")int pageIndex);
	/**
	 * 根据用户昵称和用户级别查询用户数据记录数
	 * @param uname 用户昵称
	 * @param ugrade 用户等级
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_nick like #{u_nick} and u_level=#{u_level}")
	public int selectCountUIByUNUG(@Param("u_nick")String u_nick,@Param("u_level")String u_level);
	/**
	 * 根据省份、用户性别和用户昵称查询用户集合
	 * @param procince 省份
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex} and u_nick like #{u_nick} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByPSUN(@Param("u_pro")String u_pro,@Param("u_sex")String u_sex,
			@Param("u_nick")String u_nick,@Param("pageIndex")int pageIndex);
	/**
	 * 根据省份、用户性别和用户昵称查询用户数据记录数
	 * @param procince 省份
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex} and u_nick like #{u_nick}")
	public int selectCountUIByPSUN(@Param("u_pro")String u_pro,@Param("u_sex")String u_sex,@Param("u_nick")String u_nick);
	/**
	 * 根据省份、用户性别和用户级别查询用户集合
	 * @param procince 省份
	 * @param sex 用户性别
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByPSUG(@Param("u_pro")String u_pro,@Param("u_sex")String u_sex,
			@Param("u_level")String u_level,@Param("pageIndex") int pageIndex);
	/**
	 * 根据省份、用户性别和用户级别查询用户数据记录数
	 * @param procince 省份
	 * @param sex 用户性别
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex} and u_level=#{u_level}")
	public int selectCountUIByPSUG(String u_pro,@Param("u_sex")String u_sex, @Param("u_level")String u_level);
	/**
	 * 根据省份、用户昵称和用户级别查询用户集合
	 * @param procince 省份
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} and u_nick like #{u_nick} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByPUNUG(@Param("u_pro")String u_pro,@Param("u_nick")String u_nick,
			@Param("u_level")String u_level,@Param("pageIndex")int pageIndex);
	/**
	 * 根据省份、用户昵称和用户级别查询用户数据记录数
	 * @param procince 省份
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_pro=#{u_pro} and u_nick like #{u_nick} and u_level=#{u_level}")
	public int selectCountUIByPUNUG(@Param("u_pro")String u_pro,@Param("u_nick")String u_nick,@Param("u_level")String u_level);
	/**
	 * 根据城市、用户性别和用户昵称查询用户集合
	 * @param city 城市
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_city=#{u_city} and u_sex=#{u_sex} and u_nick like #{u_nick} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByCSCUN(@Param("u_city")String u_city,@Param("u_sex")String u_sex,
			@Param("u_nick")String u_nick, @Param("pageIndex")int pageIndex);
	/**
	 * 根据城市、用户性别和用户昵称查询用户数据记录数
	 * @param city 城市
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_city=#{u_city} and u_sex=#{u_sex} and u_nick like #{u_nick}")
	public int selectCountUIByCSCUN(@Param("u_city")String u_city, @Param("u_sex")String u_sex,
			@Param("u_nick")String u_nick);
	/**
	 * 根据城市、用户性别和用户级别查询用户集合
	 * @param city 城市
	 * @param sex 用户性别
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_city=#{u_city} and u_sex=#{u_sex} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByCSUG(@Param("u_city")String u_city, @Param("u_sex")String u_sex,
			@Param("u_level")String u_level,@Param("pageIndex")int pageIndex);
	/**
	 * 根据城市、用户性别和用户级别查询用户数据记录数
	 * @param city 城市
	 * @param sex 用户性别
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_city=#{u_city} and u_sex=#{u_sex} and u_level=#{u_level}")
	public int selectCountUIByCSUG(@Param("u_city")String u_city,@Param("u_sex")String u_sex,@Param("u_level")String u_level);
	/**
	 * 根据城市、用户昵称和用户级别查询用户集合
	 * @param city 城市
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_city=#{u_city} and u_nick like #{u_nick} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByCUNUG(@Param("u_city")String u_city,@Param("u_nick")String u_nick,
			@Param("u_level")String u_level,@Param("pageIndex")int pageIndex);
	/**
	 * 根据城市、用户昵称和用户级别查询用户数据记录数
	 * @param city 城市
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_city=#{u_city} and u_nick like #{u_nick} and u_level=#{u_level}")
	public int selectCountUIByCUNUG(@Param("u_city")String u_city,@Param("u_nick")String u_nick,@Param("u_level")String u_level);
	/**
	 * 根据用户性别、用户昵称和用户级别查询用户集合
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_sex=#{u_sex} and u_nick like #{u_nick} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIBySUNUG(@Param("u_sex")String u_sex,@Param("u_nick")String u_nick,
			@Param("u_level")String u_level, @Param("pageIndex")int pageIndex);
	/**
	 * 根据用户性别、用户昵称和用户级别查询用户数据记录数
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_sex=#{u_sex} and u_nick like #{u_nick} and u_level=#{u_level}")
	public int selectCountUIBySUNUG(@Param("u_sex")String u_sex, @Param("u_nick")String u_nick, @Param("u_level")String u_level);
	/**
	 * 根据省份、用户性别、用户昵称和用户级别查询用户集合
	 * @param province 省份
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex} and u_nick like #{u_nick} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByPSUU(@Param("u_pro")String u_pro, @Param("u_sex")String u_sex,
			@Param("u_nick")String u_nick, @Param("u_level")String u_level, @Param("pageIndex")int pageIndex);
	/**
	 * 根据省份、用户性别、用户昵称和用户级别查询用户数据记录数
	 * @param province 省份
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex} and u_nick like #{u_nick} and u_level=#{u_level}")
	public int selectCountUIByPSUU(@Param("u_pro")String u_pro, @Param("u_sex")String u_sex,@Param("u_nick")String u_nick,
			@Param("u_level")String u_level);
	/**
	 * 根据城市、用户性别、用户昵称和用户级别查询用户集合
	 * @param city 城市
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @param ugrade 用户等级
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo where u_pro=#{u_pro} and u_sex=#{u_sex} and u_nick like #{u_nick} and u_level=#{u_level} order by u_id desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectAllUIByCSUU(@Param("u_city")String u_city, @Param("u_sex")String u_sex,
			@Param("u_nick")String u_nick,@Param("u_level")String u_level, @Param("pageIndex")int pageIndex);
	/**
	 * 根据城市、用户性别、用户昵称和用户级别查询用户数据记录数
	 * @param city 城市
	 * @param sex 用户性别
	 * @param uname 用户昵称
	 * @param ugrade 用户级别
	 * @return 数据记录数
	 */
	@Select("select count(u_id) from userinfo where u_city=#{u_city} and u_sex=#{u_sex} and u_nick like #{u_nick} and u_level=#{u_level}")
	public int selectCountUIByCSUU(@Param("u_city")String u_city, @Param("u_sex")String u_sex,
			@Param("u_nick")String u_nick,@Param("u_level")String u_level);
	/**
	 * 查询用户活跃度排行
	 * @param pageIndex 页数索引
	 * @return 用户集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from userinfo order by u_con desc) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<UserInfo> selectUIRank(int pageIndex);
	
}
