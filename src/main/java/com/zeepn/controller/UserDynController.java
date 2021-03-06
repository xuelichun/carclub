package com.zeepn.controller;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.zeepn.bean.ClickLike;
import com.zeepn.bean.Comments;
import com.zeepn.bean.DynPic;
import com.zeepn.bean.Reply;
import com.zeepn.bean.PersonDyn;
import com.zeepn.bean.UserInfo;
import com.zeepn.service.PersonDynService;
import com.zeepn.service.UserDynService;
import com.zeepn.service.UserService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.EscapeChars;
import com.zeepn.utils.TransCoding;
import com.zeepn.utils.Upload;
@Controller
@RequestMapping("/userDyn")
public class UserDynController {
	@Autowired
	UserDynService userDynService;
	@Autowired
	PersonDynService personDynService;
	@Autowired
	UserService userService;
	
	
	@RequestMapping(value="/publishimage",method=RequestMethod.POST)
	@ResponseBody
	public Object userPublishimage(@RequestParam MultipartFile[] img,PersonDyn personDyn,HttpServletRequest request) throws IOException{
		HttpSession session=request.getSession();
		UserInfo userinfo=(UserInfo) session.getAttribute("user");
		String pd_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SECS);
		int u_id=userinfo.getU_id();
		int pd_num=0;
		String pd_msg=personDyn.getPd_msg();
//		pd_msg=TransCoding.transCoding(pd_msg);
		pd_msg=new EscapeChars().escapeHTMLTags(pd_msg);
		personDyn.setPd_msg(pd_msg);
		personDyn.setU_id(u_id);
		personDyn.setPd_num(pd_num);
		personDyn.setPd_time(pd_time);
		ArrayList<String > list=new ArrayList<String>();
		if(userDynService.userPublishDyn(personDyn)){
			int pd_id=userDynService.selectDynByTime(u_id, pd_time);
			String dp_msg="";
			for(MultipartFile file:img){
				dp_msg=Upload.uploadPicture(file, request,"picture");
				if(dp_msg!=null){
					if(userDynService.userDynPic(pd_id, dp_msg)){
						list.add(dp_msg);  //成功上传一张图片
					}else{
						Upload.deletePicture(dp_msg); //在传图片时，操作数据库失败
					}
				}
				dp_msg="";
			}	
				if(list.size()==img.length){
					userService.updateExp(u_id, 5*img.length,request);
					return "{\"rs\":\"ok\"}";
				}else{   //如果上传图片有一张失败，则删除其他图片，动态发表不成功
					for(String image:list){
						Upload.deletePicture(image);  //删除其他上传成功的图片
						userDynService.deletePicByTimeAndPdId(pd_id, image); // 删除数据库记录
					}
					return "{\"rs\":\"imageno\"}";
				}
		}else{
			return "{\"rs\":\"no\"}";  //发表失败
		}		
	}
	@RequestMapping("/publishdyn")
	@ResponseBody
	public Object userPublicDyn(PersonDyn personDyn,HttpServletRequest request){
		HttpSession session=request.getSession();
		UserInfo userinfo=(UserInfo) session.getAttribute("user");
		String pd_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMATS);
		int u_id=userinfo.getU_id();
		int pd_num=0;
		String pd_msg=personDyn.getPd_msg();
		pd_msg=TransCoding.transCoding(pd_msg);
		pd_msg=new EscapeChars().escapeHTMLTags(pd_msg);
		personDyn.setPd_msg(pd_msg);
		personDyn.setU_id(u_id);
		personDyn.setPd_num(pd_num);
		personDyn.setPd_time(pd_time);
		if(userDynService.userPublishDyn(personDyn)){
			userService.updateExp(u_id, 10,request);
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}
		}
	@RequestMapping("/showDyn")
	@ResponseBody
	public Map<Integer, List> showDyn(int u_id,int indexPage){
		Map<Integer, List> map=userDynService.showDyn(u_id,indexPage);
		return map;
	}
	
	/**
	 * 计算页数
	 * @param u_id
	 * @return
	 */
	@RequestMapping("/countDyn")
	@ResponseBody
	public Object countDyn(int u_id){
		int a=userDynService.countPyn(u_id);
		 return "{\"rs\":\""+a+"\"}";
	}

	/*
	 * 删除动态
	 */
	@RequestMapping("/deletedyn")
	@ResponseBody
	public Object deletedyn(int pd_id){
		
		if(userDynService.deletedyn(pd_id)){
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}
	}
	
	/**
	 * 查询一条动态下的所有评论和回复
	 * @param pd_id  动态id
	 * @return  map
	 */
	@RequestMapping("/showAllCommentsAndReply")
	@ResponseBody
	public Map<Integer, List> showAllCommentsAndReply(int pd_id){
		//userDynService.showAllCommentsAndReply(pd_id);
		
		Map<Integer, List> map=userDynService.showAllCommentsAndReply(pd_id);
		
		return userDynService.showAllCommentsAndReply(pd_id);
	}
	
	/*
	 * 回复评论
	 */
	@RequestMapping("/reply")
	@ResponseBody
	public Object Reply(int rp_rpid,String rp_rnick,int com_id,int rp_pid,String rp_nick,String rp_text){
		String rp_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT);
		rp_rnick=TransCoding.transCoding(rp_rnick);
		rp_nick=TransCoding.transCoding(rp_nick);
		rp_text=TransCoding.transCoding(rp_text);
		rp_text=new EscapeChars().escapeHTMLTags(rp_text);
		Reply reply=new Reply(com_id, rp_pid, rp_nick, rp_rpid, rp_rnick, rp_text, rp_time,0);
		if(userDynService.insertReply(reply)>0){
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}	
	}
	 /*
	  * 评论动态
	  */
	@RequestMapping("/comments")
	@ResponseBody
	public Object comments(int u_id,int user_id,String u_nick,String com_msg,int pd_id){
		u_nick=TransCoding.transCoding(u_nick);
		com_msg=TransCoding.transCoding(com_msg);
		com_msg=new EscapeChars().escapeHTMLTags(com_msg);
		String com_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMATS);
		Comments comments=new Comments(pd_id, u_id, user_id, com_msg, com_time);
		if(userDynService.insertComments(comments)>0){
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}
	}
	
	@RequestMapping("/deleteCom")
	@ResponseBody
	public Object deleteCom(int com_id){
		if(userDynService.deleteComments(com_id)){
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}
	}	
	@RequestMapping("/click")
	@ResponseBody
	public Object click(int pd_id,int u_id,String u_nick){
		ClickLike clickLike=new ClickLike(u_id, u_nick, pd_id);
		int a=userService.CLickLike(clickLike);
		if(a==1){
			return "{\"rs\":\"ok\"}";
		}else if(a==2){
			return "{\"rs\":\"no\"}";
		}else{
			return "{\"rs\":\"ch\"}";
		}		
	}
	
	@RequestMapping("/showFriendsDyn")
	@ResponseBody
	public Map<Integer,List> showFriendsDyn(int u_id,int pageIndex){
		Map<Integer, List> map=userDynService.showSpare(u_id, pageIndex);
		return map;
	}
	
	@RequestMapping("/countSparePyn")
	@ResponseBody
	public Object countSparePyn(int u_id){
		int a=userDynService.countSparePyn(u_id);
		return "{\"rs\":\""+a+"\"}";
	}
	
	@RequestMapping("/showNewReply")
	@ResponseBody
	public Map<Integer,List> showNewReply(int u_id){
		Map<Integer, List> map=userDynService.showNewReply(u_id);
		return map;
	}
	

	@RequestMapping("/showPic")
	@ResponseBody
	public List<DynPic> showPic(int pd_id){
		List<DynPic> list=userDynService.showDynPic(pd_id);
		return list;
	}
	
	@RequestMapping("/showReply")
	@ResponseBody
	public List<Reply> showReply(int com_id){
		List<Reply> list=userDynService.showAllReply(com_id);
		return list;
	}
	
	@RequestMapping("/showNewComments")
	@ResponseBody
	public Map<Integer,List> showNewComments(int u_id){
		Map<Integer, List> map=userDynService.showNewComments(u_id);
		return map;
	}
	
	@RequestMapping("/showClubDyn")
	@ResponseBody
	public Map<Integer,List> showClubDyn(int club_id,int pageIndex){
		
		return personDynService.showSpare(club_id, pageIndex);
	}

	@RequestMapping("/countClubDyn")
	@ResponseBody
	public Object countClubDyn(int club_id){
		int a=personDynService.countClubDyn(club_id);
		return "{\"rs\":\""+a+"\"}";
	}
	
	/**
	 * 计算用户未读回复的总条数
	 * @param u_id  用户的id
	 * @return
	 */
	@RequestMapping("/countNewReply")
	@ResponseBody
	public Object countNewReply(HttpServletRequest request){
		HttpSession session=request.getSession();
		UserInfo user=(UserInfo) session.getAttribute("user");
		int a=0;
		if(user!=null){
			int u_id=user.getU_id();
			a=userDynService.countNewReply(u_id);
		}
		return "{\"rs\":\""+a+"\"}";
		
	}
	
	/**
	 * 计算用户未读评论的总条数
	 * @param u_id  用户的id
	 * @return
	 */
	@RequestMapping("/countNewComments")
	@ResponseBody
	public Object countNewComments(HttpServletRequest request){
		HttpSession session=request.getSession();
		UserInfo user=(UserInfo) session.getAttribute("user");
		int a=0;
		if(user!=null){
			int u_id=user.getU_id();
			a=userDynService.countNewComments(u_id);
		}
		return "{\"rs\":\""+a+"\"}";
	}
}
