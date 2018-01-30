package com.zeepn.dao;

import java.util.List;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.ClubVisitor;
@Repository("clubVisitorDao")
public interface ClubVisitorDao {
	
	public void insertClubVisitor(ClubVisitor clubVisitor);
	
	public List<ClubVisitor> selectClubVisitors(int club_id);
	
	public int countClubVistors(int club_id);
	
	public ClubVisitor selectClubVisitor(int cv_uid);
	
	public void updateClubVisitor(ClubVisitor clubVisitor);

}
