package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("ClubAlbum")

public class ClubAlbum {
	private int ca_id;
	private int club_id;
	private int ca_count;
	private String ca_name;
	private String ca_desc;
	private int u_id;
	private String ca_time;
	private String ca_main;
	public ClubAlbum() {
	}

	public ClubAlbum(int club_id, int ca_count, String ca_name, String ca_desc,
			int u_id, String ca_time, String ca_main) {
		this.club_id = club_id;
		this.ca_count = ca_count;
		this.ca_name = ca_name;
		this.ca_desc = ca_desc;
		this.u_id = u_id;
		this.ca_time = ca_time;
		this.ca_main = ca_main;
	}
	public ClubAlbum(int ca_id, int club_id, int ca_count, String ca_name,
			String ca_desc, int u_id, String ca_time, String ca_main) {

		this.ca_id = ca_id;
		this.club_id = club_id;
		this.ca_count = ca_count;
		this.ca_name = ca_name;
		this.ca_desc = ca_desc;
		this.u_id = u_id;
		this.ca_time = ca_time;
		this.ca_main = ca_main;
	}

	public int getCa_id() {
		return ca_id;
	}
	public void setCa_id(int ca_id) {
		this.ca_id = ca_id;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	public int getCa_count() {
		return ca_count;
	}
	public void setCa_count(int ca_count) {
		this.ca_count = ca_count;
	}
	public String getCa_name() {
		return ca_name;
	}
	public void setCa_name(String ca_name) {
		this.ca_name = ca_name;
	}
	public String getCa_desc() {
		return ca_desc;
	}
	public void setCa_desc(String ca_desc) {
		this.ca_desc = ca_desc;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getCa_time() {
		return ca_time;
	}
	public void setCa_time(String ca_time) {
		this.ca_time = ca_time;
	}
	public String getCa_main() {
		return ca_main;
	}
	public void setCa_main(String ca_main) {
		this.ca_main = ca_main;
	}
	@Override
	public String toString() {
		return "ClubAlbum [ca_id=" + ca_id + ", club_id=" + club_id
				+ ", ca_count=" + ca_count + ", ca_name=" + ca_name
				+ ", ca_desc=" + ca_desc + ", u_id=" + u_id + ", ca_time="
				+ ca_time + ", ca_main=" + ca_main + "]";
	}
	
	
}
