package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.CarDep;
@Repository("carDepDao")
public interface CarDepDao {
	/**
	 * 默认无条件查询所有的车系
	 * @param pageIndex 车的品牌编号 
	 * @return 车系集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from car_dep) s) "
			+ "where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<CarDep> selectAllCarDep(int pageIndex);
	/**
	 * 添加车系
	 * @param carDep 车系对象
	 * @return 影响车系表的行数
	 */
	@Insert("insert into car_dep values(car_dep_seq.nextval,#{cd_name},#{cb_id})")
	public int insertCarDep(@Param("cd_name")String cd_name,@Param("cb_id")int cb_id);
	/**
	 * 根据车系编号删除车系
	 * @param cd_id 车系编号
	 * @return 影响车系表的行数
	 */
	public int delCarDep(int cd_id);
	/**
	 * 默认无条件查询车系数据记录数
	 * @return 数据记录数
	 */
	@Select("select count(cd_id) from car_dep")
	public int selectCountCarDep();
	/**
	 * 根据车的品牌编号查询车系集合
	 * @param cb_id 车的品牌编号
	 * @param pageIndex 页数索引
	 * @return 车系集合
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from car_dep where cb_id=#{cb_id}) s)"
			+"where rn between (#{pageIndex}-1)*10+1 and #{pageIndex}*10")
	public List<CarDep> selectCarDepByCB(@Param("cb_id")int cb_id,@Param("pageIndex")int pageIndex);
	/**
	 * 根据车的品牌编号查询车系数据记录数
	 * @param cb_id 车的品牌编号
	 * @return 数据记录数
	 */
	@Select("select count(cd_id) from car_dep where cb_id=#{cb_id}")
	public int selectCountCarDepByCB(int cb_id);
	/**
	 * 
	 * @param cd_name
	 * @param cb_id
	 * @return
	 */
	@Select("select count(cd_id) from car_dep where cd_name=#{cd_name} and cb_id=#{cb_id}")
	public int selectCDId(@Param("cd_name")String cd_name,@Param("cb_id")int cb_id);
	/**
	 * 根据车的品牌名查询车系集合
	 * @param cb_name 车的品牌名
	 * @return 车系集合
	 */
	@Select("select * from car_dep where cb_id=(select cb_id from car_brand where cb_name=#{cb_name})")
	public List<CarDep> electCDListByCB(String cb_name);
	/**
	 * 根据车的品牌名查询车系数据记录数
	 * @param carBrand 车的品牌名
	 * @return 数据记录数
	 */
	@Select("select count(cd_id) from car_dep where cb_id=(select cb_id from car_brand where cb_name=#{cb_name})")
	public int selectCountCDByCB(String cb_name);
}
