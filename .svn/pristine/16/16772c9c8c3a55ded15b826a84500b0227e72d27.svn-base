package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.GenAdm;
@Repository("genAdmDao")
public interface GenAdmDao {
	/**
	 * 查询二级管理员表中是否存在该管理员的方法
	 * @param ga_level 管理员级别
	 * @return 返回值>0，说明存在；返回值<=0，说明不存在
	 */
	public int selectGenAdmLevel(int ga_level);
	/**
	 * 二级管理员登录方法
	 * @param ga_name 二级管理员账号
	 * @param ga_pwd 二级管理员密码
	 * @return 返回非空的二级管理员对象，登录成功；返回空的二级管理员对象，登录失败
	 */
	public int selectGenAdm(@Param("ga_name")String ga_name,@Param("ga_pwd")String ga_pwd);
	/**
	 * 超级管理员添加二级管理员方法
	 * @param genAdm 二级管理员对象
	 * @return 返回值>0，添加成功；返回值<=0，添加失败
	 */
	public int insertGenAdm(GenAdm genAdm);
	/**
	 * 二级管理员修改自己密码的方法
	 * @param ga_pwd 二级管理员新密码
	 * @return 返回值>0，说明修改成功；返回值<=0，说明修改失败
	 */
	public int updateGenAdmPwd(String ga_pwd);
	/**
	 * 根据二级管理员编号查询上级管理员编号
	 * @param sa_id 二级管理员编号
	 * @return  上级管理员编号
	 */
	public int selectGenAdmBySaid(int ga_id);
	/**
	 * 超级管理员删除二级管理员方法
	 * @param ga_id 二级管理员编号
	 * @return 返回值>0，说明删除成功；返回值<=0，说明删除失败
	 */
	public int delGenAdmByGaid(int ga_id);
	/**
	 * 根据管理员账号判断是否是二级管理员
	 * @param ga_name 管理员账号
	 * @return 是，返回值>0；否返回值<=0
	 */
	public int isGenAdm(String ga_name);
	/**
	 * 根据二级管理员账号修改密码
	 * @param ga_pwd 新密码
	 * @param ga_name 账号
	 * @return 修改成功，返回值>0；修改失败，返回值<=0
	 */
	public int updateGaPwd(@Param("ga_pwd")String ga_pwd, @Param("ga_name")String ga_name);
	/**
	 * 添加二级管理员
	 * @param ga_name 管理员账号
	 * @param ga_pwd 管理员密码
	 * @param ga_level 管理员级别
	 * @param sa_id 上级管理员编号
	 * @return 添加成功，返回值>0；添加失败，返回值<=0
	 */
	public int insertGa(@Param("ga_name")String ga_name,@Param("ga_pwd") String ga_pwd,
			@Param("sa_id")int sa_id);
	/**
	 * 查询所有二级管理员
	 * @return 二级管理员账号集合
	 */
	public List<String> selectAllGaName();
	/**
	 * 默认无条件查询所有二级管理员列表
	 * @param pageIndex 页数索引
	 * @return 二级管理员集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from gen_adm order by ga_id) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<GenAdm> selectAllGa(int pageIndex);
	/**
	 * 默认无条件查询二级管理员数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(ga_id) from gen_adm")
	public int selectCountGenAdm();
	/**
	 * 根据账号查询管理员编号
	 * @param adm_name 管理员账号
	 * @return 影响申请通知表的行数
	 */
	@Select("select ga_id from gen_adm where ga_name=#{ga_name}")
	public int selectGaId(String ga_name);
	/**
	 * 根据管理员账号查询管理员密码
	 * @param ga_name 管理员账号
	 * @return 管理员密码
	 */ 
	@Select("select ga_pwd from gen_adm where ga_name=#{ga_name}")
	public String selectGaPwd(String ga_name);
}
