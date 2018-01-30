package com.zeepn.service;

import java.util.HashMap;
import java.util.List;

import com.zeepn.bean.CarBrand;
import com.zeepn.bean.CarDep;

public interface CarService {
	/**
	 * 查询所有的车品牌
	 * @return 车的品牌集合
	 */
	public List<CarBrand> selectAllCarB();
	/**
	 * 根据车的品牌编号查询车系
	 * @param cb_id 车的品牌编号
	 * @return 车系集合
	 */
	public List<CarDep> selectAllCarD(int cb_id);
	/**
	 * 添加车的品牌
	 * @param carBrand 车的品牌对象
	 * @return 添加成功，返回true；否则返回false
	 */
	public int[] insertCarB(String[] arr);
	/**
	 * 添加车系
	 * @param carDep 车系对象
	 * @return 添加成功，返回true；否则返回false
	 */
	public int[] insertCarD(String[] arr,int cb_id); 
	/**
	 * 根据车的品牌编号组成的字符串删除车品牌
	 * @param cbId 车的品牌编号组成的字符串
	 * @return 删除成功，返回true；删除失败，返回false
	 */
	public boolean delCarB(String cbId);
	/**
	 * 根据车系编号组成的字符串删除车系
	 * @param cdId 车系编号组成的字符串
	 * @return 删除成功，返回true；删除失败，返回false
	 */
	public boolean delCarD(String cdId);
	/**
	 * 默认无条件查询车系集合
	 * @param pageIndex 页数索引
	 * @return 车系集合
	 */
	public HashMap<Integer, Object> selectAllCD(int pageIndex);
	/**
	 * 根据车的品牌查询车系集合
	 * @param carBrand
	 * @param pageIndex
	 * @return 含有记录数的车系集合
	 */
	public HashMap<Integer, Object> selectAllCDByCB(int carBrand,
			int pageIndex);
	/**
	 * 查询所有车的品牌
	 * @return 含有记录数的车的品牌集合
	 */
	public HashMap<Integer, Object> selectAllCB();
	/**
	 * 根据车的品牌查询所有车系集合
	 * @param carBrand 车的品牌
	 * @return 含有记录数的车系集合
	 */
	public HashMap<Integer, Object> selectCDListByCB(String carBrand);
	/**
	 * 判断车的品牌是否重名
	 * @param arr 车的品牌名数组
	 * @return 重名，返回true；不重名，返回false
	 */
	public boolean cnIsExit(String[] arr);
	/**
	 * 判断指定品牌下的车系是否存在
	 * @param arr 车系数组
	 * @param cb_id 车的品牌编号
	 * @return 重名返回true；不重名，返回false
	 */
	public boolean cdIsExit(String[] arr, int cb_id);
}
