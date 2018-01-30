package com.zeepn.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.Message;
import com.zeepn.bean.MessageType;
import com.zeepn.bean.UserMessage;

@Repository("messageDao")
public interface MessageDao {
	/**
	 * 创建系统消息
	 * @param message 消息对象
	 * @return 数据库改变行数
	 */
	public int createMessage(Message message);
	/**
	 * 删除系统消息
	 * @param m_id 消息id
	 * @return 数据库改变行数
	 */
	public int deleteMessage(int m_id);
	/**
	 * 分页查询系统消息
	 * @param map
	 * @return 消息集合
	 */
	public List<Message> selectMessageByPage(Map<String , Integer> map); 
	/**
	 *创建消息类型 
	 * @param messageType 消息类型对象
	 * @return 改变数据库行数
	 */
	public int createMessageType(MessageType messageType);
	/**
	 * 删除消息类型
	 * @param mt_id 类型id
	 * @return 数据库改变行数
	 */
	public int deleteMessageType(int mt_id);
	/**
	 * 修改消息类型
	 * @param messageType 修改好的消息对象
	 * @return 数据库改变行数
	 */
	public int updateMessageType(MessageType messageType);
	/**
	 * 查询所有消息类型
	 * @return 消息类型集合
	 */
	public List<MessageType> selectMessageType();
	/**
	 * 查询系统消息条数
	 * @return 消息条数
	 */	
	public int selectMessagePage();
	/**
	 * 查询一条系统消息
	 * @param m_id 消息id
	 * @return 消息对象
	 */
	public Message selectOneMessageById(int m_id);
	/**
	 *根据消息类型查询系统消息 
	 * @param mt_id 消息类型id
	 * @return 消息集合
	 */
	public List<Message> selectMessageByType(int mt_id);
	/**
	 *查询一条 消息类型
	 * @param mt_id 类型id
	 * @return 消息类型对象
	 */
	public MessageType selectMessageTypeById(int mt_id);
	/**
	 * 修改一条系统消息
	 * @param message 修改好的消息对象
	 * @return 数据库改变行数
	 */
	public int updateMessage(Message message);

	
	/**
	 * 分页查询用户未读的系统消息
	 * @param u_id 用户的id 
	 * @return  list集合
	 */
	public List<UserMessage> selectNewMessage(@Param("mu_id")int mu_id,@Param("pageIndex")int pageIndex);
	/**
	 * 计算用户未读消息的总数
	 * @param mu_id  用户的id
	 * @return
	 */
	public int countNewMessage(int mu_id);

	/**
	 * 分页查询发给该用户的消息
	 * @param map  用户id 页数 page
	 * @return 消息集合
	 */
	public List<Message> selectMessageByPageQian(Map<String , Integer> map );
	/**
	 * 发给该用户的消息条数
	 * @param mu_id 前台用户id
	 * @return 记录条数
	 */
	public int selectMessagepageByid(int mu_id);
	/**
	 * 使消息从未读变成已读
	 * @param m_id 消息id
	 * @return 改变数据库函数
	 */
	public int updateMessageShow(int m_id);
	/**
	 * 查询该消息类型的消息数量
	 * @param mt_id 类型id
	 * @return 消息数量
	 */
	public int selectmessagepagebytype(int mt_id);
	/**
	 * 查询消息类型条数
	 ** @return 类型条数 
	 */
    public int selectmessagetypepage(); 
    /**
     * 根据用户昵称分页查询消息
     * @param u_nick 用户昵称
     * @return 消息集合
     */
    public List<Message> selectmessagebyunick(@Param("u_nick")String u_nick,@Param("pageIndex")int pageIndex  );
    /**
     * 用户昵称查询消息的纪录数
     * @param u_nick 用户昵称
     * @return 消息条数
     */
    public int selectmessagebyunickpage(String u_nick);
}
