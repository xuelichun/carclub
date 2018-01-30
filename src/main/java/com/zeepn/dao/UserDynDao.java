package com.zeepn.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.Comments;
import com.zeepn.bean.DynPic;
import com.zeepn.bean.PersonDyn;
import com.zeepn.bean.Reply;

@Repository("userDynDao")
public interface UserDynDao {
	/**
	 * 用户发布个人动态
	 * @param personDyn 个人动态对象
	 * @return	影响数据库行数
	 */
	public int publishdyn(PersonDyn personDyn);
	
	/**
	 * 个人动态时，发布图片
	 * @param dynPic  动态图片对象
	 * @return	影响数据库行数
	 */
	public int insertdynPicture(DynPic dynPic);
	
	/**
	 * 用户删除一条动态
	 * @param pd_id 动态的iD
	 * @return  影响数据库行数
	 */
	@Delete("delete from person_dyn where pd_id=#{pd_id}")
	public int deletedyn(int pd_id);
	
	/**
	 * 计算动态下图片的数量
	 * @param pd_id  动态的id
	 * @return  图片的数量
	 */
	public int countPic(int pd_id);
	
	/**
	 * 删除一条动态时，删除该动态先得所有图片
	 * @param pd_id  动态ID
	 * @return  影响数据库的行数
	 */
	@Delete("delete from dyn_pic where pd_id=#{pd_id}")
	public int deleteDynPic(int pd_id);
	
	//需要分页
	/**
	 * 根据用户ID查询动态
	 * @param u_id  用户ID
	 * @return  list集合。里面装有该用户的所有动态
	 */
	@Select("select * from(select s.*,rownum as rn from(select * from person_dyn where u_id=#{u_id} order by pd_time desc) s) "
			+ "where rn between (#{indexPage}-1)*5+1 and #{indexPage}*5 ")
	public List<PersonDyn> showDyn(@Param("u_id")int u_id,@Param("indexPage")int indexPage);

	/**
	 * 查询一个用户的动态的总条数
	 * @param u_id
	 * @return
	 */
	public int countPyn(int u_id);
	/**
	 *查询一个动态的所有图片
	 * @param pd_id 动态的ID
	 * @return  list集合，里面装有该动态下的所有图片对象
	 */
	@Select("select * from dyn_pic where pd_id=#{pd_id}")
	public List<DynPic> showDynPic(int pd_id);
	
	/**
	 * 根据动态编号iD 查询一个动态详情
	 * @param pd_id 动态ID
	 * @return  动态对象
	 */
	@Select("select * from person_dyn where pd_id=#{pd_id}")
	public PersonDyn selectOneDynById(int pd_id);
	
	//需要分页
		/**
		 * 用户点击动态中心
		 * @param u_id  用户id
		 * @return  list集合 装有用户和好友的动态，按时间降序排列
		 */
		
		
		public List<PersonDyn> showSpare(@Param("u_id")int u_id,@Param("pageIndex")int pageIndex);
		
		/**
		 * 计算好友圈动态的总条数
		 * @param u_id  用户id
		 * @return  总条数
		 */
		public int counrSpare(int u_id);
		
		/**
		 * 好友和自己评论个人动态 ,默认为未读状态，com_read=0
		 * @param comments   评论对象
		 * @return  影响数据库行数
		 */
		public int insertComments(Comments comments);
		
		/**
		 * 用户回复评论信息 默认为未读状态，rp_read=0
		 * @param reply  回复对象
		 * @return  影响数据库行数
		 */
		public int insertReply(Reply reply);
		
		/**
		 * 查询一条动态下的所有评论,按时间升序排列
		 * @param pd_id  动态的iD
		 * @return   list集合，里面装有该动态的 所有评论
		 */
		@Select("select * from comments where pd_id=#{pd_id} order by com_time asc")
		public List<Comments> showAllComments(int pd_id);
		
		/**
		 * 查询一条评论下的所有回复,按时间升序排列
		 * @param com_id  评论的ID
		 * @return  list集合，里面装有该评论下的 所有回复
		 */
		@Select("select * from reply where com_id=#{com_id} order by rp_time asc")
		public List<Reply> showAllReply(int com_id);
		
		/**
		 * 根据评论id ，查询评论对象
		 * @param com_id  评论id
		 * @return  评论对象
		 */
		@Select("select * from comments where com_id=#{com_id}")
		public Comments showCommentsById(int com_id);
		
		/**
		 * 查看所有未读 的回复
		 * @return   list集合,里面装有未读的回复对象
		 */
	
		public List<Reply> showNewReply(int u_id );
		
		/**查看所有未读 的评论
		 * 
		 * @return list集合,里面装有未读的评论对象
		 */
		@Select("select * from comments where user_id=#{user_id} and com_read=0")
		public List<Comments> showNewComments(int user_id);
		
		
		
		
		/**
		 * 将未读回复改为已读
		 * @param rp_id  回复id
		 * @return	影响数据库行数
		 */
		@Update("update reply set rp_read=1 where rp_id=#{rp_id}")
		public int updateReply(int rp_id);
		
		/**
		 * 将未读评论改为已读
		 * @param com_id  评论id
		 * @return 影响数据库行数
		 */
		@Update("update comments set com_read=1 where com_id=#{com_id}")
		public int updateComments(int com_id);
		
		
		
		/**
		 * 删除评论
		 * @param com_id  评论的id
		 * @return	  影响数据库的行数
		 */
		@Delete("delete from comments where com_id=#{com_id}")
		public int deleteComments(int com_id);
		
		/**
		 * 删除一条动态下的所有评论
		 * @param pd_id  动态id
		 * @return  影响数据库行数
		 */
		@Select("delete from comments where pd_id=#{pd_id}")
		public void deleteAllComments(int pd_id);
		
		/**
		 * 删除一条评论下的所有回复
		 * @param com_id 评论id 
		 * @return 影响数据库的行数
		 */
		@Delete("delete from reply where com_id=#{com_id}")
		public int deleteAllReply(int com_id);
		
		/**
		 * 删除一条回复
		 * @param rp_id 回复的id
		 * @return 影响数据库行数
		 */
		@Delete("delete from reply where rp_id=#{rp_id}")
		public int deleteReply(int rp_id);
		

		/**
		 * 根据用户id，和时间，查询用户发表动态的id
		 * @param u_id     用户id
		 * @param pd_time 时间
		 * @return 动态id
		 */
		@Select("select pd_id from person_dyn where u_id=#{u_id} and pd_time=#{pd_time}")
		public int selectDynByTime(@Param("u_id")int u_id,@Param("pd_time")String pd_time);
		
		/**
		 * 根据动态id查询动态发布者id
		 * @param pd_id  动态id
		 * @return  动态发布者id
		 */
		@Select("select u_id from person_dyn where pd_id=#{pd_id}")
		public int selectUidByPdid(int pd_id);
		
		/**
		 * 在用户图片动态时，如果图片上传失败，则删除数据库的记录
		 * @param pd_id  动态id
		 * @param pd_msg  图片信息
		 * @return  影响数据库行数
		 */
		@Delete("delete from dyn_pic where pd_id=#{pd_id} and dp_msg=#{dp_msg}")
		public int deletePicByTimeAndPdId(@Param("pd_id")int pd_id,@Param("dp_msg")String pd_msg);
		
		/**
		 * 计算用户未读回复的总条数
		 * @param u_id  用户的id
		 * @return
		 */
		public int countNewReply(int rp_rpid);
		
		/**
		 * 计算用户未读评论的总条数
		 * @param u_id  用户的id
		 * @return
		 */
		public int countNewComments(int user_id);

}
