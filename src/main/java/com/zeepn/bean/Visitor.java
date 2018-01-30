package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("Visitor")
public class Visitor {
	private int v_id;
	private int v_uid1;
	private String u_nick;
	private int v_uid2;
	private String v_time;
	public Visitor() {
	}
	public Visitor(int v_id, int v_uid1, String u_nick, int v_uid2,
			String v_time) {
		this.v_id = v_id;
		this.v_uid1 = v_uid1;
		this.u_nick = u_nick;
		this.v_uid2 = v_uid2;
		this.v_time = v_time;
	}


	public String getU_nick() {
		return u_nick;
	}
	public void setU_nick(String u_nick) {
		this.u_nick = u_nick;
	}
	public Visitor(int v_uid1, String u_nick, int v_uid2, String v_time) {
		this.v_uid1 = v_uid1;
		this.u_nick = u_nick;
		this.v_uid2 = v_uid2;
		this.v_time = v_time;
	}
	public int getV_id() {
		return v_id;
	}
	public void setV_id(int v_id) {
		this.v_id = v_id;
	}
	public int getV_uid1() {
		return v_uid1;
	}
	public void setV_uid1(int v_uid1) {
		this.v_uid1 = v_uid1;
	}
	public int getV_uid2() {
		return v_uid2;
	}
	public void setV_uid2(int v_uid2) {
		this.v_uid2 = v_uid2;
	}
	public String getV_time() {
		return v_time;
	}
	public void setV_time(String v_time) {
		this.v_time = v_time;
	}
	@Override
	public String toString() {
		return "Visitor [v_id=" + v_id + ", v_uid1=" + v_uid1 + ", u_nick="
				+ u_nick + ", v_uid2=" + v_uid2 + ", v_time=" + v_time + "]";
	}
	
}
