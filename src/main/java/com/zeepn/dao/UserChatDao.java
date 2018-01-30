package com.zeepn.dao;
import java.util.List;

import com.zeepn.bean.Chat;
public interface UserChatDao {
	/**
	 * 用户与用户之间聊天
	 * @param chat 聊天对象
	 * @return  影响数据库行数
	 */
	public int userSendMessage(Chat chat);
	
	/***
	 * 查询用户的聊天记录
	 * @param ch_uid1 发信人id
	 * @param ch_uid2 收信人id
	 * @return 聊天集合
	 */
	public List<Chat> selectMessage(int ch_uid1,int  ch_uid2);
}
