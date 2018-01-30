package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("Comments")
public class Comments {
	private int com_id;
	private int pd_id;
	private int u_id;
	private String u_nick;
	private int user_id;
	private String com_msg;
	private String com_time;
	private int com_read;
	public Comments() {
	}
	
	public Comments(int com_id,int user_id,String u_nick, int pd_id, int u_id, String com_msg,
			String com_time, int com_read) {
		this.com_id = com_id;
		this.pd_id = pd_id;
		this.user_id=user_id;
		this.u_nick=u_nick;
		this.u_id = u_id;
		this.com_msg = com_msg;
		this.com_time = com_time;
		this.com_read = com_read;
	}


	public Comments( int pd_id, int u_id,int user_id, String com_msg,
			String com_time) {
		this.pd_id = pd_id;
		this.u_id = u_id;
		this.user_id=user_id;
		this.com_msg = com_msg;
		this.com_time = com_time;
	}
	
	public Comments(int pd_id, int u_id, int user_id,String com_msg) {
		
		this.pd_id = pd_id;
		this.u_id = u_id;
		this.user_id=user_id;
		this.com_msg = com_msg;
	}

	public Comments(int pd_id, int u_id,String u_nick,int user_id, String com_msg, String com_time,
			int com_read) {
		this.pd_id = pd_id;
		this.u_id = u_id;
		this.u_nick=u_nick;
		this.user_id=user_id;
		this.com_msg = com_msg;
		this.com_time = com_time;
		this.com_read = com_read;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getCom_id() {
		return com_id;
	}
	public void setCom_id(int com_id) {
		this.com_id = com_id;
	}
	public int getPd_id() {
		return pd_id;
	}
	public void setPd_id(int pd_id) {
		this.pd_id = pd_id;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getCom_msg() {
		return com_msg;
	}
	public void setCom_msg(String com_msg) {
		this.com_msg = com_msg;
	}
	public String getCom_time() {
		return com_time;
	}
	public void setCom_time(String com_time) {
		this.com_time = com_time;
	}

	public int getCom_read() {
		return com_read;
	}

	public void setCom_read(int com_read) {
		this.com_read = com_read;
	}
	

	public String getU_nick() {
		return u_nick;
	}

	public void setU_nick(String u_nick) {
		this.u_nick = u_nick;
	}

	@Override
	public String toString() {
		return "Comments [com_id=" + com_id + ", pd_id=" + pd_id + ", u_id="
				+ u_id + ", u_nick=" + u_nick + ", user_id=" + user_id
				+ ", com_msg=" + com_msg + ", com_time=" + com_time
				+ ", com_read=" + com_read + "]";
	}


	
	
	
	
}
