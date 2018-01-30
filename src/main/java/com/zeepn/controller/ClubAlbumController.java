package com.zeepn.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.zeepn.bean.ClubAlbum;
import com.zeepn.bean.PhotoAlbum;
import com.zeepn.service.ClubAlbumService;
@Controller
public class ClubAlbumController {
	@Autowired
	ClubAlbumService clubAlbumService;
	
	
	@RequestMapping("/clubAlbuma")
	@ResponseBody
	public int createClubAlbum(ClubAlbum clubAlbum){
		int row=clubAlbumService.createClubAlbum(clubAlbum);
		return row;
	}
	
	@RequestMapping("/clubAlbumb")
	@ResponseBody
	public List<ClubAlbum> selectClubAlbum(int club_id,int page){
		List<ClubAlbum> clubAlbum=clubAlbumService.selectClubAlbum(club_id,page);
		return clubAlbum;
	}
	
	@RequestMapping("/clubAlbumc")
	@ResponseBody
	public int updateClubAlbum(ClubAlbum clubAlbum){
		int row=clubAlbumService.createClubAlbum(clubAlbum);
		return row;
	}
	
	@RequestMapping(value="/upload",method=RequestMethod.POST)
	@ResponseBody
	public int[] insertPicture(@RequestParam MultipartFile[] pa_img,HttpServletRequest request) {
		int []row=clubAlbumService.insertPicture(pa_img, request);
		return row;
	}
	
	@RequestMapping("/clubAlbume")
	@ResponseBody
	public List<PhotoAlbum> selectPhotoAlbum(int ca_id,int page){
		List<PhotoAlbum> photoAlbum=clubAlbumService.selectPhotoAlbum(ca_id,page);
		return photoAlbum;
	}
	
	@RequestMapping("/clubAlbumf")
	@ResponseBody
	public int deletePhotoAlbum(int pa_id,int ca_id){
		int row=clubAlbumService.deletePhotoAlbum(pa_id);
		if(row==1){
			Map<String, Integer> map=new HashMap<String, Integer>();
			map.put("ca_count", -1);
			map.put("ca_id", ca_id);
			clubAlbumService.updateClubAlbumOnCaCount(map);
		}
		return row;
	}
	
	@RequestMapping("/clubAlbumg")
	@ResponseBody
	public int deleteClubAlbum(int ca_id){
		int row=clubAlbumService.deleteClubAlbum(ca_id);
		if(row==1){
			clubAlbumService.deletePhotoAlbumByCaId(ca_id);
		}
		return row;
	}
	
	@RequestMapping("/clubAlbumh")
	@ResponseBody
	public int updatePhotoAlbumOnPaName(int pa_id,String pa_name){
		int row=clubAlbumService.updatePhotoAlbumOnPaName(pa_id, pa_name);
		return row;
	}
	
	@RequestMapping("/clubAlbumi")
	@ResponseBody
	public int selectPhotoAlbumPage(int ca_id){
		int page=clubAlbumService.selectPhotoAlbumPage(ca_id);
		return page;
	}
	
	@RequestMapping("/clubAlbumj")
	@ResponseBody
	public int countClubAlbumPage(int club_id){
		int page=clubAlbumService.selectClubAlbumPage(club_id);
		return page;
	}
	
	@RequestMapping("/clubAlbumk")
	@ResponseBody
	public List< ClubAlbum> selectClubAlbumNotPage(int club_id){
		return clubAlbumService.selectClubAlbumNotPage(club_id);
	}
	
	
}
