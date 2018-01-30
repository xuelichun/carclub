package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("UserAllMessage")
public class UserAllMessage {
	private int fm_id;
	private String fm_msg;
	private String fm_date;
	private String mt_title;
	public UserAllMessage() {
	}
	public UserAllMessage(int fm_id, String fm_msg, String fm_date,
			String mt_title) {
		this.fm_id = fm_id;
		this.fm_msg = fm_msg;
		this.fm_date = fm_date;
		this.mt_title = mt_title;
	}
	public int getFm_id() {
		return fm_id;
	}
	public void setFm_id(int fm_id) {
		this.fm_id = fm_id;
	}
	public String getFm_msg() {
		return fm_msg;
	}
	public void setFm_msg(String fm_msg) {
		this.fm_msg = fm_msg;
	}
	public String getFm_date() {
		return fm_date;
	}
	public void setFm_date(String fm_date) {
		this.fm_date = fm_date;
	}
	public String getMt_title() {
		return mt_title;
	}
	public void setMt_title(String mt_title) {
		this.mt_title = mt_title;
	}
	@Override
	public String toString() {
		return "UserAllMessage [fm_id=" + fm_id + ", fm_msg=" + fm_msg
				+ ", fm_date=" + fm_date + ", mt_title=" + mt_title + "]";
	}
	
	
	
}
