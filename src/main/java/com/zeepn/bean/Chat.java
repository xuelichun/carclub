package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("Chat")
public class Chat {
	private int ch_id;
	private int ch_uid1;
	private int ch_uid2;
	private String ch_msg;
	private String ch_time;
	private int ch_read;
	public Chat() {
	}

	public Chat(int ch_id, int ch_uid1, int ch_uid2, String ch_msg,
			String ch_time, int ch_read) {
		this.ch_id = ch_id;
		this.ch_uid1 = ch_uid1;
		this.ch_uid2 = ch_uid2;
		this.ch_msg = ch_msg;
		this.ch_time = ch_time;
		this.ch_read = ch_read;
	}

	public Chat(int ch_uid1, int ch_uid2, String ch_msg, String ch_time,
			int ch_read) {
		super();
		this.ch_uid1 = ch_uid1;
		this.ch_uid2 = ch_uid2;
		this.ch_msg = ch_msg;
		this.ch_time = ch_time;
		this.ch_read = ch_read;
	}

	public int getCh_id() {
		return ch_id;
	}

	public void setCh_id(int ch_id) {
		this.ch_id = ch_id;
	}

	public int getCh_uid1() {
		return ch_uid1;
	}

	public void setCh_uid1(int ch_uid1) {
		this.ch_uid1 = ch_uid1;
	}

	public int getCh_uid2() {
		return ch_uid2;
	}

	public void setCh_uid2(int ch_uid2) {
		this.ch_uid2 = ch_uid2;
	}

	public String getCh_msg() {
		return ch_msg;
	}

	public void setCh_msg(String ch_msg) {
		this.ch_msg = ch_msg;
	}

	public String getCh_time() {
		return ch_time;
	}

	public void setCh_time(String ch_time) {
		this.ch_time = ch_time;
	}

	public int getCh_read() {
		return ch_read;
	}

	public void setCh_read(int ch_read) {
		this.ch_read = ch_read;
	}

	@Override
	public String toString() {
		return "Chat [ch_id=" + ch_id + ", ch_uid1=" + ch_uid1 + ", ch_uid2="
				+ ch_uid2 + ", ch_msg=" + ch_msg + ", ch_time=" + ch_time
				+ ", ch_read=" + ch_read + "]";
	}
	
}	
