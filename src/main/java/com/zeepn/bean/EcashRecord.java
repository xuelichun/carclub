package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("EcashRecord")
public class EcashRecord {
	private int er_id;
	private double er_money;
	private int er_grade;
	private String er_status;
	private String er_time;
	private int club_id;
	public EcashRecord() {
	}
	public EcashRecord(double er_money, int er_grade, String er_status,
			String er_time, int club_id) {
		this.er_money = er_money;
		this.er_grade = er_grade;
		this.er_status = er_status;
		this.er_time = er_time;
		this.club_id = club_id;
	}
	public EcashRecord(int er_id, double er_money, int er_grade,
			String er_status, String er_time, int club_id) {
		this.er_id = er_id;
		this.er_money = er_money;
		this.er_grade = er_grade;
		this.er_status = er_status;
		this.er_time = er_time;
		this.club_id = club_id;
	}
	
	public int getEr_id() {
		return er_id;
	}
	public void setEr_id(int er_id) {
		this.er_id = er_id;
	}
	public double getEr_money() {
		return er_money;
	}
	public void setEr_money(double er_money) {
		this.er_money = er_money;
	}
	public int getEr_grade() {
		return er_grade;
	}
	public void setEr_grade(int er_grade) {
		this.er_grade = er_grade;
	}
	public String getEr_status() {
		return er_status;
	}
	public void setEr_status(String er_status) {
		this.er_status = er_status;
	}
	public String getEr_time() {
		return er_time;
	}
	public void setEr_time(String er_time) {
		this.er_time = er_time;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	@Override
	public String toString() {
		return "EcashRecord [er_id=" + er_id + ", er_money=" + er_money
				+ ", er_grade=" + er_grade + ", er_status=" + er_status
				+ ", er_time=" + er_time + ", club_id=" + club_id + "]";
	}

}
 