package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("PayCon")
public class PayCon {
	private int pc_id;
	private double pc_money;
	private int pc_grade;
	private int u_id;
	private int club_id;
	private String pc_paytime;
	private String pc_mattime;
	public PayCon() {
	}
	public PayCon(double pc_money, int pc_grade, int u_id, int club_id,
			String pc_paytime, String pc_mattime) {
		this.pc_money = pc_money;
		this.pc_grade = pc_grade;
		this.u_id = u_id;
		this.club_id = club_id;
		this.pc_paytime = pc_paytime;
		this.pc_mattime = pc_mattime;
	}
	public PayCon(int pc_id, double pc_money, int pc_grade, int u_id,
			int club_id, String pc_paytime, String pc_mattime) {
		this.pc_id = pc_id;
		this.pc_money = pc_money;
		this.pc_grade = pc_grade;
		this.u_id = u_id;
		this.club_id = club_id;
		this.pc_paytime = pc_paytime;
		this.pc_mattime = pc_mattime;
	}
	public int getPc_id() {
		return pc_id;
	}
	public void setPc_id(int pc_id) {
		this.pc_id = pc_id;
	}
	public double getPc_money() {
		return pc_money;
	}
	public void setPc_money(double pc_money) {
		this.pc_money = pc_money;
	}
	public int getPc_grade() {
		return pc_grade;
	}
	public void setPc_grade(int pc_grade) {
		this.pc_grade = pc_grade;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	public String getPc_paytime() {
		return pc_paytime;
	}
	public void setPc_paytime(String pc_paytime) {
		this.pc_paytime = pc_paytime;
	}
	public String getPc_mattime() {
		return pc_mattime;
	}
	public void setPc_mattime(String pc_mattime) {
		this.pc_mattime = pc_mattime;
	}
	@Override
	public String toString() {
		return "PayCon [pc_id=" + pc_id + ", pc_money=" + pc_money
				+ ", pc_grade=" + pc_grade + ", u_id=" + u_id + ", club_id="
				+ club_id + ", pc_paytime=" + pc_paytime + ", pc_mattime="
				+ pc_mattime + "]";
	}
	
}
