package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("Club")
public class Club {
	private int club_id;
	private String club_no;
	private String club_name;
	private String club_domnam;
	private String club_pro;
	private String club_city;
	private int p_id;
	private String club_cb;
	private String club_cd;
	private String club_desc;
	private String club_img;
	private String club_cretime;
	private int club_maxnum;
	private int club_tcon;
	private int club_pnum;
	public Club() {
	}
	public Club(String club_no, String club_name, String club_domnam,
			String club_pro, String club_city, int p_id, String club_cb,
			String club_cd, String club_desc, String club_img,
			String club_cretime, int club_maxnum, int club_tcon, int club_pnum) {
		this.club_no = club_no;
		this.club_name = club_name;
		this.club_domnam = club_domnam;
		this.club_pro = club_pro;
		this.club_city = club_city;
		this.p_id = p_id;
		this.club_cb = club_cb;
		this.club_cd = club_cd;
		this.club_desc = club_desc;
		this.club_img = club_img;
		this.club_cretime = club_cretime;
		this.club_maxnum = club_maxnum;
		this.club_tcon = club_tcon;
		this.club_pnum = club_pnum;
	}
	public Club(int club_id, String club_no, String club_name,
			String club_domnam, String club_pro, String club_city, int p_id,
			String club_cb, String club_cd, String club_desc, String club_img,
			String club_cretime, int club_maxnum, int club_tcon, int club_pnum) {
		this.club_id = club_id;
		this.club_no = club_no;
		this.club_name = club_name;
		this.club_domnam = club_domnam;
		this.club_pro = club_pro;
		this.club_city = club_city;
		this.p_id = p_id;
		this.club_cb = club_cb;
		this.club_cd = club_cd;
		this.club_desc = club_desc;
		this.club_img = club_img;
		this.club_cretime = club_cretime;
		this.club_maxnum = club_maxnum;
		this.club_tcon = club_tcon;
		this.club_pnum = club_pnum;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	public String getClub_no() {
		return club_no;
	}
	public void setClub_no(String club_no) {
		this.club_no = club_no;
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
	public int getP_id() {
		return p_id;
	}
	public void setP_id(int p_id) {
		this.p_id = p_id;
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
	public String getClub_desc() {
		return club_desc;
	}
	public void setClub_desc(String club_desc) {
		this.club_desc = club_desc;
	}
	public String getClub_img() {
		return club_img;
	}
	public void setClub_img(String club_img) {
		this.club_img = club_img;
	}
	public String getClub_cretime() {
		return club_cretime;
	}
	public void setClub_cretime(String club_cretime) {
		this.club_cretime = club_cretime;
	}
	public int getClub_maxnum() {
		return club_maxnum;
	}
	public void setClub_maxnum(int club_maxnum) {
		this.club_maxnum = club_maxnum;
	}
	public int getClub_tcon() {
		return club_tcon;
	}
	public void setClub_tcon(int club_tcon) {
		this.club_tcon = club_tcon;
	}
	public int getClub_pnum() {
		return club_pnum;
	}
	public void setClub_pnum(int club_pnum) {
		this.club_pnum = club_pnum;
	}
	@Override
	public String toString() {
		return "Club [club_id=" + club_id + ", club_no=" + club_no
				+ ", club_name=" + club_name + ", club_domnam=" + club_domnam
				+ ", club_pro=" + club_pro + ", club_city=" + club_city
				+ ", p_id=" + p_id + ", club_cb=" + club_cb + ", club_cd="
				+ club_cd + ", club_desc=" + club_desc + ", club_img="
				+ club_img + ", club_cretime=" + club_cretime
				+ ", club_maxnum=" + club_maxnum + ", club_tcon=" + club_tcon
				+ ", club_pnum=" + club_pnum + "]";
	}
}