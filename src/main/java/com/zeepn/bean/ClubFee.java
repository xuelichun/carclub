package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("ClubFee")
public class ClubFee {
	private int cf_id;
	private double cf_money;
	private int cf_grade;
	private int club_id;
	public ClubFee() {
	}
	public ClubFee(int cf_id, double cf_money, int cf_grade, int club_id) {
		this.cf_id = cf_id;
		this.cf_money = cf_money;
		this.cf_grade = cf_grade;
		this.club_id = club_id;
	}
	public int getCf_id() {
		return cf_id;
	}
	public void setCf_id(int cf_id) {
		this.cf_id = cf_id;
	}
	public double getCf_money() {
		return cf_money;
	}
	public void setCf_money(double cf_money) {
		this.cf_money = cf_money;
	}
	public int getCf_grade() {
		return cf_grade;
	}
	public void setCf_grade(int cf_grade) {
		this.cf_grade = cf_grade;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	@Override
	public String toString() {
		return "ClubFee [cf_id=" + cf_id + ", cf_money=" + cf_money
				+ ", cf_grade=" + cf_grade + ", club_id=" + club_id + "]";
	}
}
