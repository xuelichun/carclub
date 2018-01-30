package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;


@Component
@Alias("ActReg")
public class ActReg {
	private int ar_id;
	private int act_id;
	private int u_id;
	private String ar_regtime;
	private int ar_money;
	private int ar_refund;
	public ActReg() {
	}
	
	public ActReg(int act_id, int u_id, String ar_regtime, int ar_money,
			int ar_refund) {
		this.act_id = act_id;
		this.u_id = u_id;
		this.ar_regtime = ar_regtime;
		this.ar_money = ar_money;
		this.ar_refund = ar_refund;
	}

	public ActReg(int ar_id, int act_id, int u_id, String ar_regtime,
			int ar_money, int ar_refund) {
		this.ar_id = ar_id;
		this.act_id = act_id;
		this.u_id = u_id;
		this.ar_regtime = ar_regtime;
		this.ar_money = ar_money;
		this.ar_refund = ar_refund;
	}
	public int getAr_id() {
		return ar_id;
	}
	public void setAr_id(int ar_id) {
		this.ar_id = ar_id;
	}
	public int getAct_id() {
		return act_id;
	}
	public void setAct_id(int act_id) {
		this.act_id = act_id;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getAr_regtime() {
		return ar_regtime;
	}
	public void setAr_regtime(String ar_regtime) {
		this.ar_regtime = ar_regtime;
	}
	public int getAr_money() {
		return ar_money;
	}
	public void setAr_money(int ar_money) {
		this.ar_money = ar_money;
	}
	public int getAr_refund() {
		return ar_refund;
	}
	public void setAr_refund(int ar_refund) {
		this.ar_refund = ar_refund;
	}
	@Override
	public String toString() {
		return "ActReg [ar_id=" + ar_id + ", act_id=" + act_id + ", u_id="
				+ u_id + ", ar_regtime=" + ar_regtime + ", ar_money="
				+ ar_money + ", ar_refund=" + ar_refund + "]";
	}
	
}