package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("OpRecord")
public class OpRecord {
	private int or_id;
	private String or_rec;
	private int u_id;
	private String orc_time;
	private int club_id;
	public OpRecord() {
	}
	public OpRecord(String or_rec, int u_id, String orc_time, int club_id) {
		this.or_rec = or_rec;
		this.u_id = u_id;
		this.orc_time = orc_time;
		this.club_id = club_id;
	}
	public OpRecord(int or_id, String or_rec, int u_id, String orc_time,
			int club_id) {
		this.or_id = or_id;
		this.or_rec = or_rec;
		this.u_id = u_id;
		this.orc_time = orc_time;
		this.club_id = club_id;
	}
	public int getOr_id() {
		return or_id;
	}
	public void setOr_id(int or_id) {
		this.or_id = or_id;
	}
	public String getOr_rec() {
		return or_rec;
	}
	public void setOr_rec(String or_rec) {
		this.or_rec = or_rec;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getOrc_time() {
		return orc_time;
	}
	public void setOrc_time(String orc_time) {
		this.orc_time = orc_time;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	@Override
	public String toString() {
		return "OpRecord [or_id=" + or_id + ", or_rec=" + or_rec + ", u_id="
				+ u_id + ", orc_time=" + orc_time + ", club_id=" + club_id
				+ "]";
	}

	
}
