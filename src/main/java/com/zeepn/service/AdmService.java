package com.zeepn.service;
import java.util.HashMap;

import com.zeepn.bean.Adm;
import com.zeepn.bean.GenAdm;
public interface AdmService {
	/**
	 * 管理员登录方法
	 * @param object 管理员对象
	 * @return 返回非空管理员对象，登录成功；返回空的管理员对象，登录失败
	 */
	public boolean admLogin(String adm_name,String adm_pwd,String adm_level); 
	/**
	 * 添加管理员方法
	 * @param genAdmDao 二级管理员对象
	 * @return 添加成功，返回true；添加失败，返回false
	 */
	public boolean insertGenAdm(GenAdm genAdm);
	/**
	 * 修改管理员密码
	 * @param admAccount 管理员账号
	 * @param newPIPwd 管理员密码
	 * @return 修改成功，返回true；修改失败，返回false
	 */
	public boolean updatePwd(String adm_name,String adm_pwd);
	/**
	 * 添加管理员
	 * @param adm_name 管理员账号
	 * @param adm_pwd 管理员密码
	 * @param adm_level 管理员级别
	 * @return 添加成功，返回true；添加失败，返回false
	 */
	public boolean insertAdm(String adm_name, String adm_pwd, String adm_level,Adm adm);
	/**
	 * 查询管理员对象
	 * @param adm_name 管理员账号
	 * @param adm_pwd 管理员密码
	 * @param adm_level 管理员级别
	 * @return 管理员对象
	 */
	public Adm selectAdm(String adm_name, String adm_pwd, String adm_level);
	/**
	 * 判断添加的管理员账号是否已存在
	 * @param adm_name 管理员账号
	 * @return 不存在，返回true；存在，返回false
	 */
	public boolean nameIsExit(String adm_name);
	/**
	 * 默认无条件查询二级管理员列表
	 * @param pageIndex 页数索引
	 * @return 含有记录数的管理员集合
	 */
	public HashMap<Integer, Object> selectAllGa(int pageIndex);
	/**
	 * 判断是否是超级管理员
	 * @param adm 管理员对象
	 * @return 是，返回true；不是返回false
	 */
	public boolean isSA(Adm adm);
	/**
	 * 判断管理员账号和自身的省份是否符合
	 * @param adm_name 
	 * @return
	 */
	public int isAdmOwn(String adm_name,String adm_level);
	/**
	 * 获取最新的管理员对象
	 * @param adm 管理员对象
	 * @return 最新的管理员对象
	 */
	public Adm packetAdm(Adm adm);
}
