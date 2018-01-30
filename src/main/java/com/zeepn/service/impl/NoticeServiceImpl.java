package com.zeepn.service.impl;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.zeepn.bean.Notice;
import com.zeepn.dao.NoticeDao;
import com.zeepn.dao.UserDao;
import com.zeepn.service.NoticeService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.TransCoding;
@Component("noticeService")
public class NoticeServiceImpl implements NoticeService{
	@Autowired
	NoticeDao noticeDao;
	@Autowired
	UserDao userDao;
	@Override
	public int createNotice(Notice notice) {
		notice.setNoti_time(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC));
		notice.setNoti_name(TransCoding.transCoding(notice.getNoti_name()));
		notice.setNoti_content(TransCoding.transCoding(notice.getNoti_content()));
		int row=noticeDao.createNotice(notice);
		return row;
	}
	
	@Override
	public List<Notice> selectNoticeByPage(int club_id,int page) {
		List<Notice> notice=noticeDao.selectNoticeByPage(club_id,page);
		return notice;
	}

	@Override
	public Notice selectOneNoticeById(int noti_id) {
		Notice notice=noticeDao.selectOneNoticeById(noti_id);
		return notice;
	}

	@Override
	public int selectNoticePage(int club_id) {
		int page=(noticeDao.selectNoticePage(club_id)-1)/4+1;
		return page;
	}

	@Override
	public int deleteNotice(int noti_id) {
		int row=noticeDao.deleteNotice(noti_id);
		return row;
	}

	@Override
	public Notice selectLatestNotice(int club_id) {
		Notice notice=noticeDao.selectLatestNotice(club_id);
		return notice;
	}

	@Override
	public int selectClubIdByUId(int u_id) {
		int club_id=userDao.selectClubIdByUId(u_id);
		return club_id;
	}

}
