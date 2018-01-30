package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("AlbumPic")
public class AlbumPic {
	private int ap_id;
	private int a_id;
	private String ap_img;
	private String ap_time;
	public AlbumPic() {
	}
	
	public AlbumPic(int ap_id, int a_id, String ap_img, String ap_time
			) {
		this.ap_id = ap_id;
		this.a_id = a_id;
		this.ap_img = ap_img;
		this.ap_time = ap_time;

	}
	

	public AlbumPic(int a_id, String ap_img, String ap_time) {
		this.a_id = a_id;
		this.ap_img = ap_img;
		this.ap_time = ap_time;

	}


	


	public int getAp_id() {
		return ap_id;
	}
	public void setAp_id(int ap_id) {
		this.ap_id = ap_id;
	}
	public int getA_id() {
		return a_id;
	}
	public void setA_id(int a_id) {
		this.a_id = a_id;
	}
	public String getAp_img() {
		return ap_img;
	}
	public void setAp_img(String ap_img) {
		this.ap_img = ap_img;
	}
	public String getAp_time() {
		return ap_time;
	}
	public void setAp_time(String ap_time) {
		this.ap_time = ap_time;
	}
	


	@Override
	public String toString() {
		return "album_pic [ap_id=" + ap_id + ", a_id=" + a_id + ", ap_img="
				+ ap_img + ", ap_time=" + ap_time + "]";
	}
	
}	
