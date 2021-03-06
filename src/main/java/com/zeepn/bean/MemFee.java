package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("MemFee")
public class MemFee {
	private int mf_id;
	private double mf_money;
	private double mf_grade;
	private int club_id;
	public MemFee() {
	}
	public MemFee(double mf_money, double mf_grade, int club_id) {
		this.mf_money = mf_money;
		this.mf_grade = mf_grade;
		this.club_id = club_id;
	}
	public MemFee(int mf_id, double mf_money, double mf_grade, int club_id) {
		this.mf_id = mf_id;
		this.mf_money = mf_money;
		this.mf_grade = mf_grade;
		this.club_id = club_id;
	}
	public int getMf_id() {
		return mf_id;
	}
	public void setMf_id(int mf_id) {
		this.mf_id = mf_id;
	}
	public double getMf_money() {
		return mf_money;
	}
	public void setMf_money(double mf_money) {
		this.mf_money = mf_money;
	}
	public double getMf_grade() {
		return mf_grade;
	}
	public void setMf_grade(double mf_grade) {
		this.mf_grade = mf_grade;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	@Override
	public String toString() {
		return "MemFee [mf_id=" + mf_id + ", mf_money=" + mf_money
				+ ", mf_grade=" + mf_grade + ", club_id=" + club_id + "]";
	}
	
}
