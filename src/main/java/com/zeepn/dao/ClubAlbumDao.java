package com.zeepn.dao;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.zeepn.bean.ClubAlbum;
import com.zeepn.bean.PhotoAlbum;

@Repository("clubAlbumDao")
public interface ClubAlbumDao {
	
	public int createClubAlbum(ClubAlbum clubAlbum);
	
	public List<ClubAlbum> selectClubAlbum(@Param("club_id")int club_id,@Param("page")int page);
	
	public int updateClubAlbum(ClubAlbum clubAlbum);
	
	public int insertPicture(PhotoAlbum photoAlbum);
	
	public void updateClubAlbumOnCaCount(Map<String, Integer> map);
	
	public List<PhotoAlbum> selectPhotoAlbum(int ca_id);
	
	public int deletePhotoAlbum(int pa_id);
	
	public int deleteClubAlbum(int ca_id);
	
	public void deletePhotoAlbumByCaId(int ca_id);
	
	public int updatePhotoAlbumOnPaName(@Param("pa_id")int pa_id,@Param("pa_name")String pa_name);
	
	public String selectPicture(int pa_id);
	
	public List<String> selectPictures(int ca_id);

	public List<PhotoAlbum> selectPhotoAlbum(@Param("ca_id")int ca_id, @Param("page")int page);

	public int selectPhotoAlbumPage(int ca_id);
	
	public int countClubAlbum(int club_id);
	
	@Select("select count(ca_id) from club_album where ca_id=#{ca_id}")
	public int isExistClubAlbum(int ca_id);
	
	@Select("select * from club_album where club_id=#{club_id}")
	public List<ClubAlbum> selectClubAlbumNotPage(int club_id);
	
	@Select("select count(pa_id) from photo_album where ca_id=#{ca_id}")
	public int countPhotos(int ca_id);
	
	@Select("select * from (select pa_img from photo_album where ca_id=#{ca_id} order by pa_uptime) where rownum=1")
	public String selectFirstImg(int ca_id);
	
	@Select("update club_album set ca_main=#{ca_main} where ca_id=#{ca_id}")
	public void updateCaMainImg(@Param("ca_id")int ca_id,@Param("ca_main")String ca_main);
	

}
