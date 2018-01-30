package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("AddFriends")
public class AddFriends {
	private int ad_id;
	private int ad_uid;
	private String  ad_unick;
	private int ad_uread;
	private int ad_agree;
	private int ad_fid;
	private String ad_fnick;
	private int ad_fread;
	private String ad_time;
	
	public AddFriends() {
	}

	

	public AddFriends(int ad_id, int ad_uid, String ad_unick, int ad_uread,
			int ad_agree, int ad_fid, String ad_fnick, int ad_fread,
			String ad_time) {
		this.ad_id = ad_id;
		this.ad_uid = ad_uid;
		this.ad_unick = ad_unick;
		this.ad_uread = ad_uread;
		this.ad_agree = ad_agree;
		this.ad_fid = ad_fid;
		this.ad_fnick = ad_fnick;
		this.ad_fread = ad_fread;
		this.ad_time = ad_time;
	}



	public AddFriends(int ad_uid, String ad_unick, int ad_uread, int ad_agree,
			int ad_fid, String ad_fnick, int ad_fread, String ad_time) {
		this.ad_uid = ad_uid;
		this.ad_unick = ad_unick;
		this.ad_uread = ad_uread;
		this.ad_agree = ad_agree;
		this.ad_fid = ad_fid;
		this.ad_fnick = ad_fnick;
		this.ad_fread = ad_fread;
		this.ad_time = ad_time;
	}



	public int getAd_uread() {
		return ad_uread;
	}



	public void setAd_uread(int ad_uread) {
		this.ad_uread = ad_uread;
	}



	public String getAd_fnick() {
		return ad_fnick;
	}



	public void setAd_fnick(String ad_fnick) {
		this.ad_fnick = ad_fnick;
	}



	public int getAd_fread() {
		return ad_fread;
	}



	public void setAd_fread(int ad_fread) {
		this.ad_fread = ad_fread;
	}



	public String getAd_time() {
		return ad_time;
	}



	public void setAd_time(String ad_time) {
		this.ad_time = ad_time;
	}



	public int getAd_agree() {
		return ad_agree;
	}


	public void setAd_agree(int ad_agree) {
		this.ad_agree = ad_agree;
	}


	public int getAd_id() {
		return ad_id;
	}
	public void setAd_id(int ad_id) {
		this.ad_id = ad_id;
	}
	public int getAd_uid() {
		return ad_uid;
	}
	public void setAd_uid(int ad_uid) {
		this.ad_uid = ad_uid;
	}
	public String getAd_unick() {
		return ad_unick;
	}
	public void setAd_unick(String ad_unick) {
		this.ad_unick = ad_unick;
	}
	public int getAd_fid() {
		return ad_fid;
	}
	public void setAd_fid(int ad_fid) {
		this.ad_fid = ad_fid;
	}



	@Override
	public String toString() {
		return "AddFriends [ad_id=" + ad_id + ", ad_uid=" + ad_uid
				+ ", ad_unick=" + ad_unick + ", ad_uread=" + ad_uread
				+ ", ad_agree=" + ad_agree + ", ad_fid=" + ad_fid
				+ ", ad_fnick=" + ad_fnick + ", ad_fread=" + ad_fread
				+ ", ad_time=" + ad_time + "]";
	}
	


	
	
	
}
