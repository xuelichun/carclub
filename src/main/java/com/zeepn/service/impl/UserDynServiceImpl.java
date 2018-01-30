package com.zeepn.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.zeepn.bean.Comments;
import com.zeepn.bean.DynPic;
import com.zeepn.bean.PersonDyn;
import com.zeepn.bean.Reply;
import com.zeepn.dao.UserDao;
import com.zeepn.dao.UserDynDao;
import com.zeepn.service.UserDynService;
import com.zeepn.utils.DateFormat;
@Component("userDynService")
public class UserDynServiceImpl implements UserDynService {

	@Autowired
	UserDynDao userDynDao;
	@Autowired
	UserDao userDao;
	@Transactional
	@Override
	public boolean userPublishDyn(PersonDyn personDyn) {
		boolean flag=false;
		if(userDynDao.publishdyn(personDyn)>0){
			flag=true;
		}
		return flag;
	}
	@Transactional
	@Override
	public boolean userDynPic(int pd_id,String dp_msg) {
		boolean flag=false;
		if(userDynDao.insertdynPicture(new DynPic(pd_id, dp_msg))>0){
			flag=true;
		}
		return flag;
	}
	
	@Transactional
	@Override
	public boolean deletedyn(int pd_id) {
		boolean flag=false;
		userDao.deleteALLCLickLike(pd_id);
		List<Comments> list=userDynDao.showAllComments(pd_id);
		for (Comments comments : list) {
			userDynDao.deleteAllReply(comments.getCom_id());
		}
		userDynDao.deleteAllComments(pd_id);
		userDynDao.deletedyn(pd_id);
		int num=userDynDao.countPic(pd_id);
		if(num==0){
			flag=true;
		}else{
			if(userDynDao.deleteDynPic(pd_id)==num){
				flag=true;
			}
		}
		return flag;
	}


	@Override
	public Map<Integer, List> showDyn(int u_id, int indexPage) {
		Map<Integer, List> map=new HashMap<Integer, List>();
		List<PersonDyn> lis=userDynDao.showDyn(u_id, indexPage);
		for (PersonDyn personDyn : lis) {
			String a[]=personDyn.getPd_time().split(" ");
			personDyn.setPd_time(a[0]);
			List<DynPic> li=userDynDao.showDynPic(personDyn.getPd_id());
			List list=new ArrayList();
			list.add(personDyn);
			for(DynPic p:li){
				list.add(p);
			}
			map.put(personDyn.getPd_id(), list);
		}
		return map;
	}

	@Override
	public List<DynPic> showDynPic(int pd_id) {
		
		return userDynDao.showDynPic(pd_id);
	}
	@Transactional
	@Override
	public Map<Integer, List> selectOneDynById(int pd_id) {
			PersonDyn personDyn=userDynDao.selectOneDynById(pd_id);
			String a[]=personDyn.getPd_time().split(" ");
			personDyn.setPd_time(a[0]);
			//Map<Integer, List> map=new HashMap<PersonDyn, List<DynPic>>();
			Map<Integer, List> map=new HashMap<Integer, List>();
			List<DynPic> list=userDynDao.showDynPic(pd_id);
			List li=new ArrayList();
			li.add(personDyn);
			for(DynPic dynpic:list){
				li.add(dynpic);
			}
			map.put(personDyn.getPd_id(), li);
			return map;
	}
	
	@Transactional
	@Override
	public Map<Integer, List> showSpare(int u_id, int pageIndex) {
		Map<Integer, List> map=new HashMap<Integer, List>();
		List<PersonDyn> lis=userDynDao.showSpare(u_id, pageIndex);
		for (PersonDyn personDyn : lis) {
			String a[]=personDyn.getPd_time().split(" ");
			personDyn.setPd_time(a[0]);
			List<DynPic> li=userDynDao.showDynPic(personDyn.getPd_id());
			List list=new ArrayList();
			list.add(personDyn);
			for(DynPic dynpic:li){
				list.add(dynpic);
			}
			map.put(personDyn.getPd_id(), list);
		}
		return map;
	}

	@Override
	public int insertComments(Comments comments) {
		int user_id=userDynDao.selectUidByPdid(comments.getPd_id());
		//String com_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_MSEC);
		String u_nick=userDao.selectUserNameById(comments.getU_id());
		comments.setUser_id(user_id);
		comments.setU_nick(u_nick);
		
		return userDynDao.insertComments(comments);
	}

	@Override
	public int insertReply(Reply reply) {
		String rp_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_MSEC);
		String rp_nick=userDao.selectUserNameById(reply.getRp_pid());
		String rp_rnick=userDao.selectUserNameById(reply.getRp_rpid());
		reply.setRp_nick(rp_nick);
		reply.setRp_rnick(rp_rnick);
		reply.setRp_time(rp_time);
		return userDynDao.insertReply(reply);
	}

	@Override
	public List<Comments> showAllComments(int pd_id) {
		
		return userDynDao.showAllComments(pd_id);
	}

	
	@Override
	public List<Reply> showAllReply(int com_id) {
		
		return userDynDao.showAllReply(com_id);
	}

	/**
	 * 第一次为评论，所以只要有新的回复，那么就是该评论下的回复
	 */
	@Override
	public Map<Integer, List>  showNewReply(int u_id) {
		List<Reply> list=userDynDao.showNewReply(u_id);
		List<Integer> listInteger=new ArrayList<Integer>();
		List<Comments> listComments=new ArrayList<Comments>();
		//Map<Integer, List> map=new HashMap<PersonDyn, List<Comments>>();
		listInteger.add(-1);
		Map<Integer, List> map=new HashMap<Integer, List>();
		//通过回复找到评论
		for (int i=0;i<list.size();i++) {
			int a=0;
			for(int j=0;j<listInteger.size();j++){			
				if(listInteger.get(j)!=list.get(i).getCom_id()){
					a++;				
				}
				if(a==listInteger.size()){
					listComments.add(userDynDao.showCommentsById(list.get(i).getCom_id()));
					listInteger.add(list.get(i).getCom_id());
				}
							
			}
			a=0;
			userDynDao.updateReply(list.get(i).getRp_id());
		}
		//清空listInteger集合
		for(int i=0;i<listInteger.size();i++){
			listInteger.remove(i);
		}
		List<Integer> listIn=new ArrayList<Integer>();
		listIn.add(-1);
		//通过评论找到动态
		for(int i=0;i<listComments.size();i++){
			int b=0;
			for(int j=0;j<listIn.size();j++){
				
				if(listIn.get(j)!=listComments.get(i).getPd_id()){
					b++;					
				}else{
					map.get(listIn.get(j)).add(listComments.get(i));
				}	
			}
			if(b==listIn.size()){
				PersonDyn personDyn=userDynDao.selectOneDynById(listComments.get(i).getPd_id());
				List li=new ArrayList();
				//li的第一个元素为动态，后面的为评论
				li.add(personDyn);
				li.add(listComments.get(i));
				map.put(personDyn.getPd_id(), li);
				listIn.add(listComments.get(i).getPd_id());
			}
			b=0;
		}
		return map;
	}

	@Transactional
	@Override
	public Map<Integer, List> showNewComments(int user_id) {
		List<Comments> list=userDynDao.showNewComments(user_id);
		List<Integer> listInteger=new ArrayList<Integer>();
		//Map<PersonDyn,List<Comments>> map=new HashMap<PersonDyn, List<Comments>>();
		Map<Integer, List> map=new HashMap<Integer, List>();
		listInteger.add(-1);
		int a;
		for(int i=0;i<list.size();i++){
			a=0;
			for(int j=0;j<listInteger.size();j++){
				if(listInteger.get(j)!=list.get(i).getPd_id()){
					a++;
				}else{
					map.get(listInteger.get(j)).add(list.get(i));
				}	
			}
			if(a==listInteger.size()){
				PersonDyn personDyn=userDynDao.selectOneDynById(list.get(i).getPd_id());
				List li=new ArrayList();
				li.add(personDyn);
				li.add(list.get(i));
				map.put(personDyn.getPd_id(), li);
				listInteger.add(personDyn.getPd_id());
			}
			a=0;
			userDynDao.updateComments(list.get(i).getCom_id());
		}
		return map;
	}



	@Override
	public boolean deleteComments(int com_id) {
		boolean flag=false;
		userDynDao.deleteAllReply(com_id);
		if(userDynDao.deleteComments(com_id)>0){
			flag=true;
		}
		return flag;
	}

	@Override
	public int deleteReply(int rp_id) {
		
		return userDynDao.deleteReply(rp_id);
	}
	@Override
	public Map<Integer, List> showAllCommentsAndReply(int pd_id) {
		Map<Integer, List> map =new HashMap<Integer, List>();
		List<Comments> list=userDynDao.showAllComments(pd_id);
		for (Comments comments : list) {
			List<Reply> li=userDynDao.showAllReply(comments.getCom_id());
			List lis=new ArrayList();
			lis.add(comments);
			//userDynDao.updateComments(comments.getCom_id());
			for(Reply reply:li){
				lis.add(reply);
				//userDynDao.updateReply(reply.getRp_id());
			}
			map.put(comments.getCom_id(), lis);
			}
		return map;
	}
	@Override
	public int selectDynByTime(int u_id, String pd_time) {
		
		return userDynDao.selectDynByTime(u_id, pd_time);
	}
	@Override
	public int deletePicByTimeAndPdId(int pd_id, String pd_msg) {
		
		return userDynDao.deletePicByTimeAndPdId(pd_id, pd_msg);
	}
	@Override
	public int countPyn(int u_id) {
		
		return (userDynDao.countPyn(u_id)-1)/5+1;
	}
	@Override
	public int countSparePyn(int u_id) {
		// TODO Auto-generated method stub
		return (userDynDao.counrSpare(u_id)-1)/7+1;
	}
	@Override
	public int countNewReply(int rp_rpid) {
		
		return userDynDao.countNewReply(rp_rpid);
	}
	@Override
	public int countNewComments(int user_id) {
		
		return userDynDao.countNewComments(user_id);
	}
	
}
