package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.CarBrand;

@Repository("carBrandDao")
public interface CarBrandDao {
	/**
	 * 查询所有的车品牌
	 * @return 车品牌集合
	 */
	public List<CarBrand> selectAllCarBrand();
	/**
	 * 添加车的品牌
	 * @param cb_name 车的品牌名
	 * @return 影响车品牌表的行数
	 */
	@Insert("insert into car_brand values(car_brand_seq.nextval,#{cb_name})")
	public int insertCarBrand(String cb_name);
	/**
	 * 根据车的品牌编号删除车的品牌
	 * @param cb_id 车的品牌编号
	 * @return 影响车品牌表的行数
	 */
	public int delCarBrand(int cb_id);
	@Select("select count(cb_id) from car_brand")
	public int selectCountCarBrand();
	/**
	 * 查询品牌是否存在
	 * @param cb_name 车的品牌名
	 * @return 记录数
	 */
	@Select("select count(cb_id) from car_brand where cb_name=#{cb_name}")
	public int selectCBId(String cb_name);
}
