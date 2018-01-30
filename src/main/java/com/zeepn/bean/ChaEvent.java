package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("ChaEvent")
public class ChaEvent {
	private int ce_id;
	private String ce_name;
	private String ce_img;
	private String ce_content;
	private String ce_place;
	private String ce_startime;
	private String ce_endtime;
	private String ce_goal;
	private int ce_del;
	public ChaEvent() {
	}
	public ChaEvent(int ce_id, String ce_name, String ce_img,
			String ce_content, String ce_place, String ce_startime,
			String ce_endtime, String ce_goal, int ce_del) {
		this.ce_id = ce_id;
		this.ce_name = ce_name;
		this.ce_img = ce_img;
		this.ce_content = ce_content;
		this.ce_place = ce_place;
		this.ce_startime = ce_startime;
		this.ce_endtime = ce_endtime;
		this.ce_goal = ce_goal;
		this.ce_del = ce_del;
	}
	public ChaEvent(String ce_name, String ce_img, String ce_content,
			String ce_place, String ce_startime, String ce_endtime,
			String ce_goal, int ce_del) {
		this.ce_name = ce_name;
		this.ce_img = ce_img;
		this.ce_content = ce_content;
		this.ce_place = ce_place;
		this.ce_startime = ce_startime;
		this.ce_endtime = ce_endtime;
		this.ce_goal = ce_goal;
		this.ce_del = ce_del;
	}
	
	public ChaEvent(String ce_name, String ce_content, String ce_place,
			String ce_startime, String ce_endtime, String ce_goal) {
		this.ce_name = ce_name;
		this.ce_content = ce_content;
		this.ce_place = ce_place;
		this.ce_startime = ce_startime;
		this.ce_endtime = ce_endtime;
		this.ce_goal = ce_goal;
	}
	public int getCe_id() {
		return ce_id;
	}
	public void setCe_id(int ce_id) {
		this.ce_id = ce_id;
	}
	public String getCe_name() {
		return ce_name;
	}
	public void setCe_name(String ce_name) {
		this.ce_name = ce_name;
	}
	public String getCe_img() {
		return ce_img;
	}
	public void setCe_img(String ce_img) {
		this.ce_img = ce_img;
	}
	public String getCe_content() {
		return ce_content;
	}
	public void setCe_content(String ce_content) {
		this.ce_content = ce_content;
	}
	public String getCe_place() {
		return ce_place;
	}
	public void setCe_place(String ce_place) {
		this.ce_place = ce_place;
	}
	public String getCe_startime() {
		return ce_startime;
	}
	public void setCe_startime(String ce_startime) {
		this.ce_startime = ce_startime;
	}
	public String getCe_endtime() {
		return ce_endtime;
	}
	public void setCe_endtime(String ce_endtime) {
		this.ce_endtime = ce_endtime;
	}
	public String getCe_goal() {
		return ce_goal;
	}
	public void setCe_goal(String ce_goal) {
		this.ce_goal = ce_goal;
	}
	public int getCe_del() {
		return ce_del;
	}
	public void setCe_del(int ce_del) {
		this.ce_del = ce_del;
	}
	@Override
	public String toString() {
		return "ChaEvent [ce_id=" + ce_id + ", ce_name=" + ce_name
				+ ", ce_img=" + ce_img + ", ce_content=" + ce_content
				+ ", ce_place=" + ce_place + ", ce_startime=" + ce_startime
				+ ", ce_endtime=" + ce_endtime + ", ce_goal=" + ce_goal
				+ ", ce_del=" + ce_del + "]";
	}
	
}
