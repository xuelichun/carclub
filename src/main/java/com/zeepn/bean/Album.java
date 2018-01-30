package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("Album")
public class Album {
	private int a_id;
	private int u_id;
	private String a_time;
	private int a_num;
	private String a_title;
	private String a_desc;
	private String a_main;
	public Album() {
	}
	public Album(int a_id, int u_id, String a_time, int a_num, String a_title,
			String a_desc, String a_main) {
		this.a_id = a_id;
		this.u_id = u_id;
		this.a_time = a_time;
		this.a_num = a_num;
		this.a_title = a_title;
		this.a_desc = a_desc;
		this.a_main = a_main;
	}
	public Album(int u_id, String a_time, int a_num, String a_title,
			String a_desc, String a_main) {
		this.u_id = u_id;
		this.a_time = a_time;
		this.a_num = a_num;
		this.a_title = a_title;
		this.a_desc = a_desc;
		this.a_main = a_main;
	}
	
	
	public Album(int u_id, String a_title, String a_desc) {
		this.u_id = u_id;
		this.a_title = a_title;
		this.a_desc = a_desc;
	}
	public Album(int a_id, String a_title, String a_desc, String a_main) {
		this.a_id = a_id;
		this.a_title = a_title;
		this.a_desc = a_desc;
		this.a_main = a_main;
	}
	public int getA_id() {
		return a_id;
	}
	public void setA_id(int a_id) {
		this.a_id = a_id;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getA_time() {
		return a_time;
	}
	public void setA_time(String a_time) {
		this.a_time = a_time;
	}
	public int getA_num() {
		return a_num;
	}
	public void setA_num(int a_num) {
		this.a_num = a_num;
	}
	public String getA_title() {
		return a_title;
	}
	public void setA_title(String a_title) {
		this.a_title = a_title;
	}
	public String getA_desc() {
		return a_desc;
	}
	public void setA_desc(String a_desc) {
		this.a_desc = a_desc;
	}
	public String getA_main() {
		return a_main;
	}
	public void setA_main(String a_main) {
		this.a_main = a_main;
	}
	@Override
	public String toString() {
		return "album [a_id=" + a_id + ", u_id=" + u_id + ", a_time=" + a_time
				+ ", a_num=" + a_num + ", a_title=" + a_title + ", a_desc="
				+ a_desc + ", a_main=" + a_main + "]";
	}
	
}
