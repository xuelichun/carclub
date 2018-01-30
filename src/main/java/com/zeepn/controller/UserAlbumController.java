package com.zeepn.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.zeepn.bean.Album;
import com.zeepn.bean.AlbumPic;
import com.zeepn.bean.UserInfo;
import com.zeepn.service.UserAlbumService;
import com.zeepn.service.UserService;
import com.zeepn.utils.EscapeChars;
import com.zeepn.utils.TransCoding;
import com.zeepn.utils.Upload;

@Controller
@RequestMapping("/album")
public class UserAlbumController {
	
	@Autowired
	UserAlbumService userAlbumService;
	@Autowired
	UserService userService;
	/**
	 * 创建相册
	 * @param u_id
	 * @param a_title
	 * @param a_desc
	 * @return
	 */
	@RequestMapping("/createAlbum")
	@ResponseBody
	public Object createAlbum(int u_id,String a_title,String a_desc){
		a_title=TransCoding.transCoding(a_title);
		a_title=new EscapeChars().escapeHTMLTags(a_title);
		a_desc=TransCoding.transCoding(a_desc);
		a_desc=new EscapeChars().escapeHTMLTags(a_desc);
		Album album=new Album(u_id, a_title, a_desc);
		if(userAlbumService.insertAlbum(album)>0){
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}
	}
	
	/**
	 *查询用户 的所有相册
	 * @param u_id
	 * @return
	 */
	@RequestMapping("/showPhoto")
	@ResponseBody
	public List<Album> showPhoto(int u_id){
		List<Album> list=userAlbumService.selectAlbum(u_id);
		return list;	
	}
	
	/**分页
	 *查询用户 的所有相册
	 * @param u_id
	 * @return
	 */
	@RequestMapping("/showPhotoFenye")
	@ResponseBody
	public List<Album> showPhotoFenye(int u_id,int pageIndex){
		List<Album> list=userAlbumService.selectAlbumfenye(u_id, pageIndex);
		return list;
	}
	/**
	 * 上传图片到相册
	 * @param img
	 * @param request
	 * @param a_id
	 * @return
	 * @throws IOException
	 */
	@Transactional
	@RequestMapping(value="/uploadPhoto",method=RequestMethod.POST)
	@ResponseBody
	public Object uploadPhoto(@RequestParam MultipartFile[] img,HttpServletRequest request ,int a_id) throws IOException {
		String ap_img="";
		
		//System.out.println(img.length);
		AlbumPic albumPic=new AlbumPic();
		albumPic.setA_id(a_id);
		ArrayList<String > list=new ArrayList<String>();
		int a=0;
		for(MultipartFile file:img){
			if(!file.isEmpty()){
				a++;
			}
			ap_img=Upload.uploadPicture(file, request,"photo");
			if(ap_img!=null){
				albumPic.setAp_img(ap_img);
				if(userAlbumService.insertAlbumPic(albumPic)>0){
					list.add(ap_img);
				}else{
					Upload.deletePicture(ap_img);
				}
			}			
		}
		if(list.size()==a){	
			
			Album album=userAlbumService.selectOneAlbumById(a_id);
			if(album.getA_num()==0){
				userAlbumService.updateMain(a_id, list.get(0));
			}
			userAlbumService.updateAblumNum(a_id);
			UserInfo user=(UserInfo) request.getSession().getAttribute("user");
			int u_id=user.getU_id();
			userService.updateExp(u_id, 5*a,request);
			return "{\"rs\":\"ok\"}";
			
		}else{
			for(String image:list){
				Upload.deletePicture(image);  //删除其他上传成功的图片
			}
			return "{\"rs\":\"no\"}";
		}
		
	}
	

	/**
	 * 计算页数
	 * @param u_id
	 * @return
	 */
	@RequestMapping("/countPage")
	@ResponseBody
	public Object countPage(int u_id){
		int a=userAlbumService.countPage(u_id);
		return "{\"rs\":\""+a+"\"}";
	}
	
	/**
	 * 查询相册详情
	 * @param a_id
	 * @return
	 */
	@RequestMapping("/selectAllAlbumPic")
	@ResponseBody
	public List selectAllAlbumPic(int a_id){
		Album album=userAlbumService.selectOneAlbumById(a_id);
		List<AlbumPic> list=userAlbumService.selectAllAlbumPic(a_id);
		List li=new ArrayList();
		li.add(album);
		for(AlbumPic albumPic:list){
			li.add(albumPic);
		}
		return li;
	}
	
	@RequestMapping("/deleteAlbumPic")
	@ResponseBody
	public Object deleteAlbumPic(int ap_id,int a_id){
		if(userAlbumService.deleteAlbumPicById(ap_id)>0){
			userAlbumService.updateAblumNum(a_id);
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}
	}
	@Transactional
	@RequestMapping("/deleteAlbum")
	@ResponseBody
	public Object deleteAlbum(int a_id){
		try {
				if(userAlbumService.deleteAblum(a_id)){
					return "{\"rs\":\"ok\"}";
				}
			
		} catch (Exception e) {
			return "{\"rs\":\"no\"}";
		}
		return "{\"rs\":\"no\"}";
	}
	
	
	@RequestMapping("/updateAlbum")
	@ResponseBody
	public Object updateAlbum(Album album ){
		album.getA_title();
		
		String a_title=TransCoding.transCoding(album.getA_title());
		a_title=new EscapeChars().escapeHTMLTags(a_title);
		String a_desc=TransCoding.transCoding(album.getA_desc());
		a_desc=new EscapeChars().escapeHTMLTags(a_desc);
		album.setA_desc(a_desc);
		album.setA_title(a_title);
		if(userAlbumService.updateAlbum(album)>0){
			return "{\"rs\":\"ok\"}";
		}else{
			return "{\"rs\":\"no\"}";
		}
		
	}
	
	@RequestMapping("/selectOneAlbum")
	@ResponseBody
	public Album selectOneAlbum(int a_id){
		return userAlbumService.selectOneAlbumById(a_id);
	}
	
}
