package com.zeepn.dao;

import java.util.List;

import com.zeepn.bean.Function;

public interface FunDao {
	/**
	 * 查询所有功能
	 * @return 功能集合
	 */
	public List<Function> selectAllFunction();
	/**
	 * 根据功能编号查询功能对象
	 * @param fun_id 功能编号
	 * @return 功能对象
	 */
	public Function selectOneFunction(int fun_id);
	/**
	 * 更新功能表
	 * @param function 功能对象
	 * @return 更新成功，返回true；更新失败，返回false
	 */
	public int updateFunction(Function function);
	/**
	 * 添加功能
	 * @param function 功能对象
	 * @return 添加成功，返回true；添加失败，返回false
	 */
	public int insertFunction(Function function);
}
