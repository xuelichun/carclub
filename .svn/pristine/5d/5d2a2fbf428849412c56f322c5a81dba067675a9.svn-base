package com.zeepn.dao;

import java.util.List;

import com.zeepn.bean.NumLevel;
import com.zeepn.bean.PNum;

public interface NumLevelDao {
	/**
	 * 插入人数级别表记录
	 * @param numLevel 人数级别对象
	 * @return 影响数据库表的行数
	 */
	public int insertNumLevel(NumLevel numLevel);
	/**
	 * 更新车友会人数级别费用表
	 * @param numLevel 人数级别费用对象
	 * @return 人数级别费用表受影响的行数
	 */
	public int updateNumLevel(NumLevel numLevel);
	/**
	 * 根据人数级别编号查询人数级别对象
	 * @param nl_id 人数级别编号
	 * @return 人数级别对象
	 */
	public NumLevel selectOneNumLevel(int nl_id);
	/**
	 * 根据车友会编号查询车友会的人数上限和实际人数
	 * @param club_id 车友会编号
	 * @return 人数对象
	 */
	public PNum selectPNum(int club_id);
	/**
	 * 查询车友会人数级别费用集合
	 * @return 人数级别费用集合
	 */
	public List<NumLevel> selectAllNumLevel();
	/**
	 * 查询车友会人数最高上限
	 * @return 车友会人数最高上限
	 */
	public int selectMaxNumLevel();
}
