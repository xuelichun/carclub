package com.zeepn.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.DynPic;
import com.zeepn.bean.PersonDyn;
import com.zeepn.dao.PersonDynDao;
import com.zeepn.dao.UserDynDao;
import com.zeepn.service.PersonDynService;
@Component("personDynService")
public class PersonDynServiceImpl implements PersonDynService {
	@Autowired
	PersonDynDao personDynDao;
	@Autowired
	UserDynDao userDynDao;
	@Override
	public Map<Integer, List> showSpare(int club_id, int pageIndex) {
		Map<Integer, List> map=new HashMap<Integer, List>();
		List<PersonDyn> lis=personDynDao.showSpare(club_id, pageIndex);
		for (PersonDyn personDyn : lis) {
			String a[]=personDyn.getPd_time().split(" ");
			personDyn.setPd_time(a[0]);
			List<DynPic> li=userDynDao.showDynPic(personDyn.getPd_id());
			List list=new ArrayList();
			list.add(personDyn);
			for(DynPic dynpic:li){
				list.add(dynpic);
			}
			map.put(personDyn.getPd_id(), list);
		}
		return map;
	}
	@Override
	public int countClubDyn(int club_id) {
		int a=personDynDao.countClubDyn(club_id);
		
		return (a-1)/8+1;
	}

	
}
