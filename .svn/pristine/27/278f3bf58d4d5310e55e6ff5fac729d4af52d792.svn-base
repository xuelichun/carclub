package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.PersonDyn;
@Repository("personDynDao")
public interface PersonDynDao {
	
	
		/**
		 * 用户点击车友动态
		 * @param club_id  车友会id  indexPage 页数
		 * @return  list集合 装有用户和车友的动态，按时间降序排列
		 */
		public List<PersonDyn> showSpare(@Param("club_id")int club_id,@Param("indexPage")int indexPage);
		
		/**
		 * 计算车友圈动态的总条数
		 * @param club_id  车友会id
		 * @return
		 */
		public int countClubDyn(int club_id);
		
}

