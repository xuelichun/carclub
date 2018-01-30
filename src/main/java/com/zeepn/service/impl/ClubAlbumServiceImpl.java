package com.zeepn.service.impl;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.zeepn.bean.ClubAlbum;
import com.zeepn.bean.PhotoAlbum;
import com.zeepn.dao.ClubAlbumDao;
import com.zeepn.service.ClubAlbumService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.TransCoding;
import com.zeepn.utils.Upload;

@Component("clubAlbumService")
public class ClubAlbumServiceImpl implements ClubAlbumService{
	@Autowired
	ClubAlbumDao clubAlbumDao;

	@Override
	public int createClubAlbum(ClubAlbum clubAlbum) {
		clubAlbum.setCa_name(TransCoding.transCoding(clubAlbum.getCa_name()));
		clubAlbum.setCa_desc(TransCoding.transCoding(clubAlbum.getCa_desc()));
		clubAlbum.setCa_main("clubxiangce/moren.jpg");
		clubAlbum.setCa_time(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC));
		int row=clubAlbumDao.createClubAlbum(clubAlbum);
		return row;
	}

	@Override
	public List<ClubAlbum> selectClubAlbum(int club_id,int page) {
		List<ClubAlbum> clubAlbum=clubAlbumDao.selectClubAlbum(club_id,page);
		return clubAlbum;
	}

	@Override
	public int updateClubAlbum(ClubAlbum clubAlbum) {
		int row=clubAlbumDao.updateClubAlbum(clubAlbum);
		return row;
	}

	@Override
	public int[] insertPicture(MultipartFile[] pa_img,HttpServletRequest request) {
		int row0=0;
		int row1=0;
		int []row=new int[2];
		int ca_id=Integer.parseInt(request.getParameter("ca_id"));
		int flagTemp=clubAlbumDao.countPhotos(ca_id);
		int u_id=Integer.parseInt(request.getParameter("u_id"));
		PhotoAlbum photoAlbum=new PhotoAlbum(ca_id, u_id);
		for(MultipartFile file:pa_img){
			photoAlbum.setPa_name(file.getOriginalFilename());
			String pa_imgTemp;
			try {
				pa_imgTemp = Upload.uploadPicture(file, request,"image");
				if(pa_imgTemp!=null){
					photoAlbum.setPa_img(pa_imgTemp);
					photoAlbum.setPa_uptime(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC));
					int flag=clubAlbumDao.insertPicture(photoAlbum);
					if(flag==1){
						row0++;
					}else{
						row1++;
					}
				}else{
					row1++;
				}
			} catch (IOException e) {
					e.printStackTrace();
			}
		}
		if(flagTemp==0){
			clubAlbumDao.updateCaMainImg(ca_id, clubAlbumDao.selectFirstImg(ca_id));
		}
		row[0]=row0;
		row[1]=row1;
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("ca_count", row0);
		map.put("ca_id", ca_id);
		clubAlbumDao.updateClubAlbumOnCaCount(map);
		return row;
	}

	@Override
	public void updateClubAlbumOnCaCount(Map<String, Integer> map) {
		clubAlbumDao.updateClubAlbumOnCaCount(map);
	}

	@Override
	public List<PhotoAlbum> selectPhotoAlbum(int ca_id,int page) {
		List<PhotoAlbum> photoAlbum=clubAlbumDao.selectPhotoAlbum(ca_id,page);
		return photoAlbum;
	}

	@Override
	public int deletePhotoAlbum(int pa_id) {
		String path=clubAlbumDao.selectPicture(pa_id);
		int row=clubAlbumDao.deletePhotoAlbum(pa_id);
		Upload.deletePicture(path);
		return row;
	}

	@Override
	public int deleteClubAlbum(int ca_id) {
		List<String> paths=clubAlbumDao.selectPictures(ca_id);
		int row=clubAlbumDao.deleteClubAlbum(ca_id);
		for(String path:paths){
			Upload.deletePicture(path);
		}
		return row;
	}

	@Override
	public void deletePhotoAlbumByCaId(int ca_id) {
		clubAlbumDao.deletePhotoAlbumByCaId(ca_id);
	}

	@Override
	public int updatePhotoAlbumOnPaName(int pa_id, String pa_name) {
		int row=clubAlbumDao.updatePhotoAlbumOnPaName(pa_id, pa_name);
		return row;
	}

	@Override
	public int selectPhotoAlbumPage(int ca_id) {
		int page=(clubAlbumDao.selectPhotoAlbumPage(ca_id)-1)/8+1;
		return page;
	}

	@Override
	public int selectClubAlbumPage(int club_id) {
		int page=(clubAlbumDao.countClubAlbum(club_id)-1)/6+1;
		return page;
	}

	@Override
	public List<ClubAlbum> selectClubAlbumNotPage(int club_id) {
		return clubAlbumDao.selectClubAlbumNotPage(club_id);
	}


	
}
