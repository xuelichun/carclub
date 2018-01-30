package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("Sign")
public class Sign {
	private int s_id;
	private int club_id;
	private int u_id;
	private String s_time;
	private int s_num;
	public Sign() {
	}
	public Sign(int s_id, int club_id, int u_id, String s_time, int s_num) {
		
		this.s_id = s_id;
		this.club_id = club_id;
		this.u_id = u_id;
		this.s_time = s_time;
		this.s_num = s_num;
	}
	public Sign(int club_id, int u_id, String s_time, int s_num) {
		this.club_id = club_id;
		this.u_id = u_id;
		this.s_time = s_time;
		this.s_num = s_num;
	}
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		this.s_id = s_id;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getS_time() {
		return s_time;
	}
	public void setS_time(String s_time) {
		this.s_time = s_time;
	}
	public int getS_num() {
		return s_num;
	}
	public void setS_num(int s_num) {
		this.s_num = s_num;
	}
	@Override
	public String toString() {
		return "Sign [s_id=" + s_id + ", club_id=" + club_id + ", u_id=" + u_id
				+ ", s_time=" + s_time + ", s_num=" + s_num + "]";
	}
	
}

