package com.zeepn.service;

import java.util.List;

import com.zeepn.bean.Club;

public interface ClubRankService {

	/**
	 * 后台车友会排行（按人数）
	 * @return
	 */
	public List<Club> clubRank();
	
	/**
	 * 前台车友会排行（按贡献值）
	 * @return
	 */
	public List<Club> clubRankIndex();
}
