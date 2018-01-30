package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;


@Component
@Alias("FcSta")
public class FcSta {
	private int fs_id;
	private String fs_time;
	private int fs_day;
	private int club_id;
	public FcSta() {
	}
	public FcSta(String fs_time, int fs_day, int club_id) {
		this.fs_time = fs_time;
		this.fs_day = fs_day;
		this.club_id = club_id;
	}
	public FcSta(int fs_id, String fs_time, int fs_day, int club_id) {
		this.fs_id = fs_id;
		this.fs_time = fs_time;
		this.fs_day = fs_day;
		this.club_id = club_id;
	}
	public int getFs_id() {
		return fs_id;
	}
	public void setFs_id(int fs_id) {
		this.fs_id = fs_id;
	}
	public String getFs_time() {
		return fs_time;
	}
	public void setFs_time(String fs_time) {
		this.fs_time = fs_time;
	}
	public int getFs_day() {
		return fs_day;
	}
	public void setFs_day(int fs_day) {
		this.fs_day = fs_day;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	@Override
	public String toString() {
		return "FcSta [fs_id=" + fs_id + ", fs_time=" + fs_time + ", fs_day="
				+ fs_day + ", club_id=" + club_id + "]";
	}
}
