package com.zeepn.service;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartFile;
import com.zeepn.bean.ClubAlbum;
import com.zeepn.bean.PhotoAlbum;
public interface ClubAlbumService {
	
	/**
	 * 创建车友会相册
	 * @param clubAlbum
	 * @return 创建成功返回1
	 */
	public int createClubAlbum(ClubAlbum clubAlbum);
	
	/**
	 * 查询车友会相册
	 * @param club_id
	 * @return 车友会相册对象
	 */
	public List<ClubAlbum> selectClubAlbum(int club_id,int page);
	
	/**
	 * 更新车友会相册
	 * @param clubAlbum
	 * @return 更新成功返回1
	 */
	public int updateClubAlbum(ClubAlbum clubAlbum);
	
	/**
	 * 车友会相册上传图片
	 * @param pa_img
	 * @param request
	 * @return 数组0索引成功数；1索引失败数
	 */
	public int[] insertPicture(MultipartFile[] pa_img,HttpServletRequest request);
	
	/**
	 * 更新车友会相册图片数量
	 * @param map
	 */
	public void updateClubAlbumOnCaCount(Map<String, Integer> map);
	
	/**
	 * 查询车友会相册图片
	 * @param ca_id
	 * @return 车友会相册图片对象列表
	 */
	public List<PhotoAlbum> selectPhotoAlbum(int ca_id,int page);
	
	/**
	 * 删除车友会相册图片
	 * @param pa_id
	 * @return 删除成功返回1
	 */
	public int deletePhotoAlbum(int pa_id);
	
	/**
	 * 删除车友会相册
	 * @param ca_id
	 * @return 删除成功返回1
	 */
	public int deleteClubAlbum(int ca_id);
	
	/**
	 * 删除车友会相册图片(删除车友会相册联动)
	 * @param ca_id
	 */
	public void deletePhotoAlbumByCaId(int ca_id);
	
	/**
	 * 修改图片名称
	 * @param pa_id
	 * @param pa_name
	 * @return 修改成功返回1
	 */
	public int updatePhotoAlbumOnPaName(int pa_id,String pa_name);
	
	/**
	 * 计算车友会相册图片页数
	 * @param ca_id
	 * @return 页数
	 */
	public int selectPhotoAlbumPage(int ca_id);
	
	public int selectClubAlbumPage(int club_id);
	
	public List<ClubAlbum> selectClubAlbumNotPage(int club_id);

}
