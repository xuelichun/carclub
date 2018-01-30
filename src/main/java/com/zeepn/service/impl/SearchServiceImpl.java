package com.zeepn.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.Club;
import com.zeepn.bean.UserInfo;
import com.zeepn.dao.SearchDao;
import com.zeepn.service.SearchService;
import com.zeepn.utils.FuzzySearch;

@Component("searchService")
public class SearchServiceImpl implements SearchService{
	@Autowired
	SearchDao searchDao;
	@Override
	public List<Club> selectClubs(String str) {
		Map<Integer, String> sqlMap=FuzzySearch.search(str, "club", "club_name");
		List<Club> clubList=new ArrayList<Club>();
		for(int key:sqlMap.keySet()){
			List<Club> club=searchDao.selectClubs(sqlMap.get(key));
			System.out.println(sqlMap.get(key));
			clubList.addAll(club);
			if(clubList.size()>200){
				clubList.subList(0, 200);
			}
		}
		return clubList;
	}
	@Override
	public List<UserInfo> selectUsers(String str) {
		Map<Integer, String> sqlMap=FuzzySearch.search(str, "userinfo", "u_name");
		List<UserInfo> userList=new ArrayList<UserInfo>();
		for(int key:sqlMap.keySet()){
			List<UserInfo> user=searchDao.selectUsers(sqlMap.get(key));
			userList.addAll(user);
			if(userList.size()>200){
				userList.subList(0, 200);
			}
		}
		return userList;
	}

}
