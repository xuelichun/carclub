package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("MessageType")
public class MessageType {
	private int mt_id;
	private String mt_title;
	private String mt_con;
	private int ga_id;
	@Override
	public String toString() {
		return "MessageType [mt_id=" + mt_id + ", mt_title=" + mt_title
				+ ", mt_con=" + mt_con + ", ga_id=" + ga_id + "]";
	}
	public MessageType() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MessageType(int mt_id, String mt_title, String mt_con, int ga_id) {
		super();
		this.mt_id = mt_id;
		this.mt_title = mt_title;
		this.mt_con = mt_con;
		this.ga_id = ga_id;
	}
	public MessageType(String mt_title, String mt_con, int ga_id) {
		super();
		this.mt_title = mt_title;
		this.mt_con = mt_con;
		this.ga_id = ga_id;
	}
	public int getMt_id() {
		return mt_id;
	}
	public void setMt_id(int mt_id) {
		this.mt_id = mt_id;
	}
	public String getMt_title() {
		return mt_title;
	}
	public void setMt_title(String mt_title) {
		this.mt_title = mt_title;
	}
	public String getMt_con() {
		return mt_con;
	}
	public void setMt_con(String mt_con) {
		this.mt_con = mt_con;
	}
	public int getGa_id() {
		return ga_id;
	}
	public void setGa_id(int ga_id) {
		this.ga_id = ga_id;
	}
}