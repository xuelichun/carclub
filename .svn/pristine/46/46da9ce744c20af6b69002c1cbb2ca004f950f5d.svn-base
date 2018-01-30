package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("PiPayRecord")
public class PiPayRecord {
	private int club_id;
	private int p_id;
	private String pr_time;
	private int pr_day;
	public PiPayRecord() {
	}
	public PiPayRecord(int p_id, String pr_time, int pr_day) {
		this.p_id = p_id;
		this.pr_time = pr_time;
		this.pr_day = pr_day;
	}
	public PiPayRecord(int club_id, int p_id, String pr_time, int pr_day) {
		this.club_id = club_id;
		this.p_id = p_id;
		this.pr_time = pr_time;
		this.pr_day = pr_day;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	public int getP_id() {
		return p_id;
	}
	public void setP_id(int p_id) {
		this.p_id = p_id;
	}
	public String getPr_time() {
		return pr_time;
	}
	public void setPr_time(String pr_time) {
		this.pr_time = pr_time;
	}
	public int getPr_day() {
		return pr_day;
	}
	public void setPr_day(int pr_day) {
		this.pr_day = pr_day;
	}
	@Override
	public String toString() {
		return "PiPayRecord [club_id=" + club_id + ", p_id=" + p_id
				+ ", pr_time=" + pr_time + ", pr_day=" + pr_day + "]";
	}
}
