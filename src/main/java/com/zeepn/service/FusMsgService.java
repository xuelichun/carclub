package com.zeepn.service;

import java.util.List;
import java.util.Map;


import com.zeepn.bean.FusMsg;

public interface FusMsgService {
	/**
	 * 创建全用户系统消息
	 * @param fusMsg 消息对象
	 * @return 1:创建成功 0:创建失败
	 */
	public int createFusMsg(FusMsg fusMsg);
	/**
	 * 分页查询全用户系统消息
	 * @param map 
	 * @return 消息集合
	 */
	public List<FusMsg> selectFusMsgByPage(Map<String, Integer> map);
	
	/**
	 * 分页查询全用户系统消息按时间排序
	 * @param map 
	 * @return 消息集合
	 */
	public List<FusMsg> selectFusMsgByPageTime(Map<String, Integer> map);
	/**
	 * 查找一个全用户系统消息
	 * @param fm_id 消息id
	 * @return 消息对象
	 */
	public FusMsg selectOneFusMsgById(int fm_id);
	/**
	 * 查询全用户系统消息条数
	 * @return 消息条数
	 */
	
	public int selectFusMsgPage();
	/**删除全用户系统消息
	 * 
	 * @param fm_id  消息id
	 * @return 1:删除成功 0:删除失败
	 */
	
	public int deleteFusMsg(int fm_id);
	/**
	 * 修改全用户系统消息推送字段
	 * @param fm_id 消息id
	 * @return 1:修改成功 0:修改失败
	 */
	public int updateFusMsgShow(int fm_id);
	/**
	 * 查询该消息类型的消息数量
	 * @param mt_id 类型id
	 * @return 消息数量
	 */
	public int selectfusmsgpagetype(int mt_id);
	/**
	 * 批量删除消息
	 * @param s 消息id字符串
	 * @return 删除成功反回1，删除失败反回0；
	 */
	public int deleteSomeFusMsg(String s);
}




