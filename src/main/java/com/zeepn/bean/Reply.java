package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("Reply")
public class Reply {
	private int rp_id;
	private int com_id;
	private int rp_pid;
	private String rp_nick;
	private int rp_rpid;
	private String rp_rnick;
	private String rp_text;
	private String rp_time;
	private int rp_read;
	public Reply() {
	}
	
	

	public Reply(int rp_id, int com_id, int rp_pid, String rp_nick,
			int rp_rpid, String rp_rnick, String rp_text, String rp_time,
			int rp_read) {
		this.rp_id = rp_id;
		this.com_id = com_id;
		this.rp_pid = rp_pid;
		this.rp_nick = rp_nick;
		this.rp_rpid = rp_rpid;
		this.rp_rnick = rp_rnick;
		this.rp_text = rp_text;
		this.rp_time = rp_time;
		this.rp_read = rp_read;
	}



	public Reply(int com_id, int rp_pid, String rp_nick, int rp_rpid,
			String rp_rnick, String rp_text, String rp_time, int rp_read) {
		this.com_id = com_id;
		this.rp_pid = rp_pid;
		this.rp_nick = rp_nick;
		this.rp_rpid = rp_rpid;
		this.rp_rnick = rp_rnick;
		this.rp_text = rp_text;
		this.rp_time = rp_time;
		this.rp_read = rp_read;
	}



	public Reply(int com_id, int rp_pid, int rp_rpid, String rp_text) {
		this.com_id = com_id;
		this.rp_pid = rp_pid;
		this.rp_rpid = rp_rpid;
		this.rp_text = rp_text;
	}



	public int getRp_id() {
		return rp_id;
	}
	public void setRp_id(int rp_id) {
		this.rp_id = rp_id;
	}
	public int getCom_id() {
		return com_id;
	}
	public void setCom_id(int com_id) {
		this.com_id = com_id;
	}
	public int getRp_pid() {
		return rp_pid;
	}
	public void setRp_pid(int rp_pid) {
		this.rp_pid = rp_pid;
	}
	public int getRp_rpid() {
		return rp_rpid;
	}
	public void setRp_rpid(int rp_rpid) {
		this.rp_rpid = rp_rpid;
	}
	public String getRp_text() {
		return rp_text;
	}
	public void setRp_text(String rp_text) {
		this.rp_text = rp_text;
	}
	public String getRp_time() {
		return rp_time;
	}
	public void setRp_time(String rp_time) {
		this.rp_time = rp_time;
	}
	
	public int getRp_read() {
		return rp_read;
	}

	public void setRp_read(int rp_read) {
		this.rp_read = rp_read;
	}
	

	public String getRp_nick() {
		return rp_nick;
	}



	public void setRp_nick(String rp_nick) {
		this.rp_nick = rp_nick;
	}



	public String getRp_rnick() {
		return rp_rnick;
	}



	public void setRp_rnick(String rp_rnick) {
		this.rp_rnick = rp_rnick;
	}



	@Override
	public String toString() {
		return "Reply [rp_id=" + rp_id + ", com_id=" + com_id + ", rp_pid="
				+ rp_pid + ", rp_nick=" + rp_nick + ", rp_rpid=" + rp_rpid
				+ ", rp_rnick=" + rp_rnick + ", rp_text=" + rp_text
				+ ", rp_time=" + rp_time + ", rp_read=" + rp_read + "]";
	}




	
}
