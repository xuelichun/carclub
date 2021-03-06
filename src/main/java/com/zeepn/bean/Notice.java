package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("Notice")
public class Notice {
	private int noti_id;
	private int club_id;
	private String noti_name;
	private String noti_content;
	private int noti_uid;
	private String noti_time;
	public Notice() {
	}
	public Notice(int club_id, String noti_name, String noti_content,
			int noti_uid, String noti_time) {
		this.club_id = club_id;
		this.noti_name = noti_name;
		this.noti_content = noti_content;
		this.noti_uid = noti_uid;
		this.noti_time = noti_time;
	}
	public Notice(int noti_id, int club_id, String noti_name,
			String noti_content, int noti_uid, String noti_time) {
		this.noti_id = noti_id;
		this.club_id = club_id;
		this.noti_name = noti_name;
		this.noti_content = noti_content;
		this.noti_uid = noti_uid;
		this.noti_time = noti_time;
	}
	public int getNoti_id() {
		return noti_id;
	}
	public void setNoti_id(int noti_id) {
		this.noti_id = noti_id;
	}
	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}
	public String getNoti_name() {
		return noti_name;
	}
	public void setNoti_name(String noti_name) {
		this.noti_name = noti_name;
	}
	public String getNoti_content() {
		return noti_content;
	}
	public void setNoti_content(String noti_content) {
		this.noti_content = noti_content;
	}
	public int getNoti_uid() {
		return noti_uid;
	}
	public void setNoti_uid(int noti_uid) {
		this.noti_uid = noti_uid;
	}
	public String getNoti_time() {
		return noti_time;
	}
	public void setNoti_time(String noti_time) {
		this.noti_time = noti_time;
	}
	@Override
	public String toString() {
		return "Notice [noti_id=" + noti_id + ", club_id=" + club_id
				+ ", noti_name=" + noti_name + ", noti_content=" + noti_content
				+ ", noti_uid=" + noti_uid + ", noti_time=" + noti_time + "]";
	}

}
