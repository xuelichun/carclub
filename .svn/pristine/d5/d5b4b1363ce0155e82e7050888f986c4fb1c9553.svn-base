package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("NlfSta")
public class NlfSta {
	private int ns_id;
	private String ns_time;
	private int ns_day;
	private int club_id;
	public NlfSta() {
	}
	public NlfSta(String ns_time, int ns_day, int club_id) {
		this.ns_time = ns_time;
		this.ns_day = ns_day;
		this.club_id = club_id;
	}
	public NlfSta(int ns_id, String ns_time, int ns_day, int club_id) {
		this.ns_id = ns_id;
		this.ns_time = ns_time;
		this.ns_day = ns_day;
		this.club_id = club_id;
	}
	public int getNs_id() {
		return ns_id;
	}
	public void setNs_id(int ns_id) {
		this.ns_id = ns_id;
	}
	public String getNs_time() {
		return ns_time;
	}
	public void setNs_time(String ns_time) {
		this.ns_time = ns_time;
	}
	public int getNs_day() {
		return ns_day;
	}
	public void setNs_day(int ns_day) {
		this.ns_day = ns_day;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	@Override
	public String toString() {
		return "NlfSta [ns_id=" + ns_id + ", ns_time=" + ns_time + ", ns_day="
				+ ns_day + ", club_id=" + club_id + "]";
	}
}
