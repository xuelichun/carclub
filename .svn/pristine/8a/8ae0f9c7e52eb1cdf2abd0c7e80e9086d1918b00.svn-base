package com.zeepn.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import com.zeepn.bean.Notice;

@Repository("noticeDao")
public interface NoticeDao {
	
	public int createNotice(Notice notice);
	
	public List<Notice> selectNoticeByPage(@Param("club_id")int club_id,@Param("page")int page);
	
	public Notice selectOneNoticeById(int noti_id);
	
	public int selectNoticePage(int club_id);
	
	public int deleteNotice(int noti_id);
	
	public Notice selectLatestNotice(int club_id);
	
	
}
