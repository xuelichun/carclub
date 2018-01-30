package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("AppliNotice")
public class AppliNotice {
	private int an_id;
	private String an_time;
	private String an_status;
	private int p_id;
	private int ga_id;
	private String club_name;
	private String club_domnam;
	private String club_pro;
	private String club_city;
	private int club_del;
	private String club_cb;
	private String club_cd;
	private int read_sign;
	public AppliNotice() {
	}
	public AppliNotice(String club_name, String club_domnam, String club_pro,
			String club_city, String club_cb, String club_cd) {
		this.club_name = club_name;
		this.club_domnam = club_domnam;
		this.club_pro = club_pro;
		this.club_city = club_city;
		this.club_cb = club_cb;
		this.club_cd = club_cd;
	}
	public AppliNotice(String an_time, String an_status, int p_id, int ga_id,
			String club_name, String club_domnam, String club_pro,
			String club_city, int club_del, String club_cb, String club_cd,
			int read_sign) {
		this.an_time = an_time;
		this.an_status = an_status;
		this.p_id = p_id;
		this.ga_id = ga_id;
		this.club_name = club_name;
		this.club_domnam = club_domnam;
		this.club_pro = club_pro;
		this.club_city = club_city;
		this.club_del = club_del;
		this.club_cb = club_cb;
		this.club_cd = club_cd;
		this.read_sign = read_sign;
	}
	public AppliNotice(int an_id, String an_time, String an_status, int p_id,
			int ga_id, String club_name, String club_domnam, String club_pro,
			String club_city, int club_del, String club_cb, String club_cd,
			int read_sign) {
		this.an_id = an_id;
		this.an_time = an_time;
		this.an_status = an_status;
		this.p_id = p_id;
		this.ga_id = ga_id;
		this.club_name = club_name;
		this.club_domnam = club_domnam;
		this.club_pro = club_pro;
		this.club_city = club_city;
		this.club_del = club_del;
		this.club_cb = club_cb;
		this.club_cd = club_cd;
		this.read_sign = read_sign;
	}
	public int getAn_id() {
		return an_id;
	}
	public void setAn_id(int an_id) {
		this.an_id = an_id;
	}
	public String getAn_time() {
		return an_time;
	}
	public void setAn_time(String an_time) {
		this.an_time = an_time;
	}
	public String getAn_status() {
		return an_status;
	}
	public void setAn_status(String an_status) {
		this.an_status = an_status;
	}
	public int getP_id() {
		return p_id;
	}
	public void setP_id(int p_id) {
		this.p_id = p_id;
	}
	public int getGa_id() {
		return ga_id;
	}
	public void setGa_id(int ga_id) {
		this.ga_id = ga_id;
	}
	public String getClub_name() {
		return club_name;
	}
	public void setClub_name(String club_name) {
		this.club_name = club_name;
	}
	public String getClub_domnam() {
		return club_domnam;
	}
	public void setClub_domnam(String club_domnam) {
		this.club_domnam = club_domnam;
	}
	public String getClub_pro() {
		return club_pro;
	}
	public void setClub_pro(String club_pro) {
		this.club_pro = club_pro;
	}
	public String getClub_city() {
		return club_city;
	}
	public void setClub_city(String club_city) {
		this.club_city = club_city;
	}
	public int getClub_del() {
		return club_del;
	}
	public void setClub_del(int club_del) {
		this.club_del = club_del;
	}
	public String getClub_cb() {
		return club_cb;
	}
	public void setClub_cb(String club_cb) {
		this.club_cb = club_cb;
	}
	public String getClub_cd() {
		return club_cd;
	}
	public void setClub_cd(String club_cd) {
		this.club_cd = club_cd;
	}
	public int getRead_sign() {
		return read_sign;
	}
	public void setRead_sign(int read_sign) {
		this.read_sign = read_sign;
	}
	@Override
	public String toString() {
		return "AppliNotice [an_id=" + an_id + ", an_time=" + an_time
				+ ", an_status=" + an_status + ", p_id=" + p_id + ", ga_id="
				+ ga_id + ", club_name=" + club_name + ", club_domnam="
				+ club_domnam + ", club_pro=" + club_pro + ", club_city="
				+ club_city + ", club_del=" + club_del + ", club_cb=" + club_cb
				+ ", club_cd=" + club_cd + ", read_sign=" + read_sign + "]";
	}
}
