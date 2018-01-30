package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("ClubChacon")
public class ClubChacon {
	private int cc_id;
	private int ce_id;
	private int club_id;
	private int cc_value;
	public ClubChacon() {
	}
	public ClubChacon(int cc_id, int ce_id, int club_id, int cc_value) {
		this.cc_id = cc_id;
		this.ce_id = ce_id;
		this.club_id = club_id;
		this.cc_value = cc_value;
	}
	public int getCc_id() {
		return cc_id;
	}
	public void setCc_id(int cc_id) {
		this.cc_id = cc_id;
	}
	public int getCe_id() {
		return ce_id;
	}
	public void setCe_id(int ce_id) {
		this.ce_id = ce_id;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	public int getCc_value() {
		return cc_value;
	}
	public void setCc_value(int cc_value) {
		this.cc_value = cc_value;
	}
	@Override
	public String toString() {
		return "ClubChacon [cc_id=" + cc_id + ", ce_id=" + ce_id + ", club_id="
				+ club_id + ", cc_value=" + cc_value + "]";
	}
}
