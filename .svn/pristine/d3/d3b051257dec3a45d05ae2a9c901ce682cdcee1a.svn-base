package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("ClickLike")
public class ClickLike {
	private int cl_id;
	private int u_id;
	private String u_nick;
	private int pd_id;
	
	public ClickLike() {
	}
	

	public ClickLike(int cl_id, int u_id, String u_nick, int pd_id) {
		this.cl_id = cl_id;
		this.u_id = u_id;
		this.u_nick = u_nick;
		this.pd_id = pd_id;
	}


	public ClickLike(int u_id, String u_nick, int pd_id) {
		this.u_id = u_id;
		this.u_nick = u_nick;
		this.pd_id = pd_id;
	}


	public int getCl_id() {
		return cl_id;
	}
	public void setCl_id(int cl_id) {
		this.cl_id = cl_id;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public int getPd_id() {
		return pd_id;
	}
	public void setPd_id(int pd_id) {
		this.pd_id = pd_id;
	}
	
	public String getU_nick() {
		return u_nick;
	}


	public void setU_nick(String u_nick) {
		this.u_nick = u_nick;
	}


	@Override
	public String toString() {
		return "ClickLike [cl_id=" + cl_id + ", u_id=" + u_id + ", u_nick="
				+ u_nick + ", pd_id=" + pd_id + "]";
	}


}
