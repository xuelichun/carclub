package com.zeepn.service;
import java.util.List;
import com.zeepn.bean.ClubChacon;
import com.zeepn.bean.UserChacon;

public interface UserChaconService {
	/**
	 * 初始化慈善贡献值
	 * @param userChacon
	 * @return 添加成功返回1
	 */
	int insertUserChacon(UserChacon userChacon);
	
	/**
	 * 更新贡献值
	 * @param ce_id
	 * @param u_id
	 * @param uc_value
	 * @return 更新成功返回1，失败返回0
	 */
	int updateUserChacon(int ce_id,int u_id,int uc_value);
	
	/**
	 * 查询贡献值
	 * @param uc_id
	 * @return	贡献值
	 */
	UserChacon selectUserChacoById(int uc_id);
	
	/**
	 * 根据贡献值排序
	 * @param ce_id
	 * @return 贡献值列表
	 */
	List<UserChacon> selectUserChacon(int ce_id);
	
	/**
	 * 查看车友会总贡献值排行
	 * @param cc_id
	 * @return 贡献值列表
	 */
	List<ClubChacon> selectClubChacon(int cc_id);
	
	/**
	 * 修改车友会贡献值
	 * @param clubChacon
	 * @return 成功返回1
	 */
	int updateClubChacon(ClubChacon clubChacon);
}
