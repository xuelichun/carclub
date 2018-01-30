package com.zeepn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.Club;
import com.zeepn.dao.ClubRankDao;
import com.zeepn.service.ClubRankService;
@Component("clubRankService")
public class ClubRankServiceImpl implements ClubRankService {
	@Autowired
	ClubRankDao clubRankDao;
	@Override
	public List<Club> clubRank() {
		return clubRankDao.clubRank();
	}
	@Override
	public List<Club> clubRankIndex() {
		return clubRankDao.clubRankIndex();
	}
}
