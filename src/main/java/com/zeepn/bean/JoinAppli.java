package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("JoinAppli")
public class JoinAppli {
	private int ja_id;
	private int u_id;
	private int club_id;
	private String ja_applitime;
	private String ja_status;
	public JoinAppli() {
	}
	
	public JoinAppli(int ja_id, int u_id, int club_id, String ja_applitime,
			String ja_status) {
		this.ja_id = ja_id;
		this.u_id = u_id;
		this.club_id = club_id;
		this.ja_applitime = ja_applitime;
		this.ja_status = ja_status;
	}

	public int getJa_id() {
		return ja_id;
	}
	public void setJa_id(int ja_id) {
		this.ja_id = ja_id;
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
	public String getJa_applitime() {
		return ja_applitime;
	}
	public void setJa_applitime(String ja_applitime) {
		this.ja_applitime = ja_applitime;
	}
	public String getJa_status() {
		return ja_status;
	}
	public void setJa_status(String ja_status) {
		this.ja_status = ja_status;
	}

	@Override
	public String toString() {
		return "JoinAppli [ja_id=" + ja_id + ", u_id=" + u_id + ", club_id="
				+ club_id + ", ja_applitime=" + ja_applitime + ", ja_status="
				+ ja_status + "]";
	}
	}
