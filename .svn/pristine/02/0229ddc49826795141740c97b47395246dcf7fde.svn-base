package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("FunCharge")
public class FunCharge {
	private int fc_id;
	private int fun_id;
	private String fc_paytime;
	private String fc_mattime;
	private String fc_monthtime;
	private int club_id;
	public FunCharge() {
	}
	public FunCharge(int fun_id, String fc_paytime, String fc_mattime,
			String fc_monthtime, int club_id) {
		this.fun_id = fun_id;
		this.fc_paytime = fc_paytime;
		this.fc_mattime = fc_mattime;
		this.fc_monthtime = fc_monthtime;
		this.club_id = club_id;
	}
	public FunCharge(int fc_id, int fun_id, String fc_paytime,
			String fc_mattime, String fc_monthtime, int club_id) {
		this.fc_id = fc_id;
		this.fun_id = fun_id;
		this.fc_paytime = fc_paytime;
		this.fc_mattime = fc_mattime;
		this.fc_monthtime = fc_monthtime;
		this.club_id = club_id;
	}
	public int getFc_id() {
		return fc_id;
	}
	public void setFc_id(int fc_id) {
		this.fc_id = fc_id;
	}
	public int getFun_id() {
		return fun_id;
	}
	public void setFun_id(int fun_id) {
		this.fun_id = fun_id;
	}
	public String getFc_paytime() {
		return fc_paytime;
	}
	public void setFc_paytime(String fc_paytime) {
		this.fc_paytime = fc_paytime;
	}
	public String getFc_mattime() {
		return fc_mattime;
	}
	public void setFc_mattime(String fc_mattime) {
		this.fc_mattime = fc_mattime;
	}
	public String getFc_monthtime() {
		return fc_monthtime;
	}
	public void setFc_monthtime(String fc_monthtime) {
		this.fc_monthtime = fc_monthtime;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	@Override
	public String toString() {
		return "FunCharge [fc_id=" + fc_id + ", fun_id=" + fun_id
				+ ", fc_paytime=" + fc_paytime + ", fc_mattime=" + fc_mattime
				+ ", fc_monthtime=" + fc_monthtime + ", club_id=" + club_id
				+ "]";
	}
}