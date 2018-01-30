package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Alias("AccountLog")
@Component 
public class AccountLog {
	private int al_id;
	private int u_id;
	private String al_trans;
	private String al_time;
	public AccountLog() {
	}
	public AccountLog(int al_id, int u_id, String al_trans, String al_time) {
		this.al_id = al_id;
		this.u_id = u_id;
		this.al_trans = al_trans;
		this.al_time = al_time;
	}
	public AccountLog(int u_id, String al_trans, String al_time) {
		this.u_id = u_id;
		this.al_trans = al_trans;
		this.al_time = al_time;
	}
	
	
	public int getAl_id() {
		return al_id;
	}
	public void setAl_id(int al_id) {
		this.al_id = al_id;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getAl_trans() {
		return al_trans;
	}
	public void setAl_trans(String al_trans) {
		this.al_trans = al_trans;
	}
	public String getAl_time() {
		return al_time;
	}
	public void setAl_time(String al_time) {
		this.al_time = al_time;
	}
	@Override
	public String toString() {
		return "account_log [al_id=" + al_id + ", u_id=" + u_id + ", al_trans="
				+ al_trans + ", al_time=" + al_time + "]";
	}
	
	
}
