package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.Club;
import com.zeepn.bean.UserInfo;


@Repository("searchDao")
public interface SearchDao {
	
	public List<Club> selectClubs(@Param("sql")String sql);
	
	public List<UserInfo> selectUsers(@Param("sql")String sql);

}
