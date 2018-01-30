package com.zeepn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.zeepn.bean.Album;
import com.zeepn.bean.AlbumPic;
import com.zeepn.dao.UserAlbumDao;
import com.zeepn.service.UserAlbumService;
import com.zeepn.utils.DateFormat;
@Component("userAlbumService")
public class UserAlbumServiceImpl implements UserAlbumService{
	@Autowired
	UserAlbumDao userAlbumDao;
	@Override
	public int insertAlbum(Album album) {
		String a_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMATS);
		album.setA_time(a_time);
		album.setA_main("userPhotoMoren/12.png");
		album.setA_num(0);
		return userAlbumDao.insertAlbum(album);
	}

	@Override
	public int insertAlbumPic(AlbumPic albumPic) {
		String ap_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMATS);
		albumPic.setAp_time(ap_time);
		return userAlbumDao.insertAlbumPic(albumPic);
	}

	
	@Override
	public int updateAblumNum(int a_id) {
		int a_num=userAlbumDao.countNum(a_id);
		return userAlbumDao.updateAblumNum(a_id, a_num);
	}

	@Transactional
	@Override
	public boolean deleteAblum(int a_id) {
		boolean flag=false;
		 int num=userAlbumDao.countNum(a_id);
		 if(userAlbumDao.deleteAllAlbumPic(a_id)==num&&userAlbumDao.deleteAblum(a_id)>0){
			 flag=true;
		 }
		 return flag;
	}


	@Override
	public List<AlbumPic> selectAllAlbumPic(int a_id) {
		
		return userAlbumDao.selectAllAlbumPic(a_id);
	}

	@Override
	public int deleteAlbumPicById(int ap_id) {
		
		return userAlbumDao.deleteAlbumPicById(ap_id);
	}

	@Override
	public List<Album> selectAlbum(int u_id) {
		
		return userAlbumDao.selectAlbum(u_id);
	}

	@Override
	public Album selectOneAlbumById(int a_id) {
		
		return userAlbumDao.selectOneAlbumById(a_id);
	}

	@Override
	public int updateAlbum(Album album) {
		
		return userAlbumDao.updateAlbum(album);
	}

	@Override
	public int updateMain(int a_id, String a_main) {
		
		return userAlbumDao.updateMain(a_id, a_main);
	}

	@Override
	public int countPage(int u_id) {
		int a=userAlbumDao.countAlbum(u_id);
		
		return (a-1)/9+1;
	}

	@Override
	public List<Album> selectAlbumfenye(int u_id, int indexPage) {
		
		return userAlbumDao.selectAlbumfenye(u_id, indexPage);
	}

}
