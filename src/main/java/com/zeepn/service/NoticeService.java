package com.zeepn.service;

import java.util.List;
import com.zeepn.bean.Notice;

public interface NoticeService {
	
	/**
	 * 添加车友会公告
	 * @param notice 车友会公告对象
	 * @return 添加成功返回1
	 */

	public int createNotice(Notice notice);
	
	/**
	 * 分页查询车友会公告
	 * @param map 
	 * @return 公告列表
	 */

	public List<Notice> selectNoticeByPage(int club_id,int page);
	
	/**
	 * 根据ID查询车友会公告
	 * @param noti_id 公告id
	 * @return 公告
	 */
	public Notice selectOneNoticeById(int noti_id);
	
	/**
	 * 计算车友会内公告页数
	 * @param club_id 车友会id
	 * @return 公告页数
	 */
	public int selectNoticePage(int club_id);
	
	/**
	 * 删除车友会公告
	 * @param noti_id 车友会公告id
	 * @return 删除成功返回1
	 */
	public int deleteNotice(int noti_id);
	
	/**
	 * 查询最新一条公告
	 * @param club_id
	 * @return 公告对象
	 */
	public Notice selectLatestNotice(int club_id);
	
	public int selectClubIdByUId(int u_id);
}
