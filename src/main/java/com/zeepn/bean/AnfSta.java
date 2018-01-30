package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;


@Component
@Alias("AnfSta")
public class AnfSta {
	private int as_id;
	private String as_time;
	private int as_day;
	private int club_id;
	public AnfSta() {
	}
	public AnfSta(String as_time, int as_day, int club_id) {
		this.as_time = as_time;
		this.as_day = as_day;
		this.club_id = club_id;
	}
	public AnfSta(int as_id, String as_time, int as_day, int club_id) {
		this.as_id = as_id;
		this.as_time = as_time;
		this.as_day = as_day;
		this.club_id = club_id;
	}
	public int getAs_id() {
		return as_id;
	}
	public void setAs_id(int as_id) {
		this.as_id = as_id;
	}
	public String getAs_time() {
		return as_time;
	}
	public void setAs_time(String as_time) {
		this.as_time = as_time;
	}
	public int getAs_day() {
		return as_day;
	}
	public void setAs_day(int as_day) {
		this.as_day = as_day;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	@Override
	public String toString() {
		return "AnfSta [as_id=" + as_id + ", as_time=" + as_time + ", as_day="
				+ as_day + ", club_id=" + club_id + "]";
	}
}
