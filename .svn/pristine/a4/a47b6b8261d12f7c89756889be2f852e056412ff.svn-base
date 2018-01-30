package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("ClubVisitor")
public class ClubVisitor {
	private int cv_id;
	private int cv_uid;
	private int club_id;
	private String cv_time;
	public ClubVisitor() {
	}
	public ClubVisitor(int cv_uid, int club_id, String cv_time) {
		this.cv_uid = cv_uid;
		this.club_id = club_id;
		this.cv_time = cv_time;
	}
	public ClubVisitor(int cv_id, int cv_uid, int club_id, String cv_time) {
		this.cv_id = cv_id;
		this.cv_uid = cv_uid;
		this.club_id = club_id;
		this.cv_time = cv_time;
	}
	public int getCv_id() {
		return cv_id;
	}
	public void setCv_id(int cv_id) {
		this.cv_id = cv_id;
	}
	public int getCv_uid() {
		return cv_uid;
	}
	public void setCv_uid(int cv_uid) {
		this.cv_uid = cv_uid;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	public String getCv_time() {
		return cv_time;
	}
	public void setCv_time(String cv_time) {
		this.cv_time = cv_time;
	}
	@Override
	public String toString() {
		return "ClubVisitor [cv_id=" + cv_id + ", cv_uid=" + cv_uid
				+ ", club_id=" + club_id + ", cv_time=" + cv_time + "]";
	}
	
}
