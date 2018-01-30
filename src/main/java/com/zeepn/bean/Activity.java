package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("Activity")
public class Activity {
	private int act_id;
	private String act_name;
	private String act_content;
	private String act_img;
	private String act_pro;
	private String act_city;
	private double act_money;
	private double act_dis;
	private String act_applitime;
	private String act_starttime;
	private String act_stoptime;
	private int club_id;
	private int act_del;
	public Activity() {
	}
	
	public Activity(String act_name, String act_content, String act_img,
			String act_pro,String act_city, double act_money, double act_dis,
			String act_applitime, String act_starttime, String act_stoptime,int club_id,int act_del) {
		this.act_name = act_name;
		this.act_content = act_content;
		this.act_img = act_img;
		this.act_pro = act_pro;
		this.act_city=act_city;
		this.act_money = act_money;
		this.act_dis = act_dis;
		this.act_applitime = act_applitime;
		this.act_starttime = act_starttime;
		this.act_stoptime=act_stoptime;
		this.club_id = club_id;
		this.act_del=act_del;
	}

	public Activity(int act_id, String act_name, String act_content,
			String act_img, String act_pro,String act_city, double act_money, double act_dis,
			String act_applitime, String act_starttime,String act_stoptime) {
		this.act_id = act_id;
		this.act_name = act_name;
		this.act_content = act_content;
		this.act_img = act_img;
		this.act_pro = act_pro;
		this.act_city=act_city;
		this.act_money = act_money;
		this.act_dis = act_dis;
		this.act_applitime = act_applitime;
		this.act_starttime = act_starttime;
		this.act_stoptime=act_stoptime;
	}

	public Activity(int act_id, String act_name, String act_content,
			String act_img, String act_pro,String act_city, double act_money, double act_dis,
			String act_applitime, String act_starttime,String act_stoptime, int club_id,int act_del) {
		this.act_id = act_id;
		this.act_name = act_name;
		this.act_content = act_content;
		this.act_img = act_img;
		this.act_pro = act_pro;
		this.act_city=act_city;
		this.act_money = act_money;
		this.act_dis = act_dis;
		this.act_applitime = act_applitime;
		this.act_starttime = act_starttime;
		this.act_stoptime=act_stoptime;
		this.club_id = club_id;
		this.act_del=act_del;
	}
	public int getAct_id() {
		return act_id;
	}
	public void setAct_id(int act_id) {
		this.act_id = act_id;
	}
	public String getAct_name() {
		return act_name;
	}
	public void setAct_name(String act_name) {
		this.act_name = act_name;
	}
	public String getAct_content() {
		return act_content;
	}
	public void setAct_content(String act_content) {
		this.act_content = act_content;
	}
	public String getAct_img() {
		return act_img;
	}
	public void setAct_img(String act_img) {
		this.act_img = act_img;
	}
	public String getAct_pro() {
		return act_pro;
	}

	public void setAct_pro(String act_pro) {
		this.act_pro = act_pro;
	}

	public String getAct_city() {
		return act_city;
	}

	public void setAct_city(String act_city) {
		this.act_city = act_city;
	}

	public double getAct_money() {
		return act_money;
	}
	public void setAct_money(double act_money) {
		this.act_money = act_money;
	}
	public double getAct_dis() {
		return act_dis;
	}
	public void setAct_dis(double act_dis) {
		this.act_dis = act_dis;
	}
	public String getAct_applitime() {
		return act_applitime;
	}
	public void setAct_applitime(String act_applitime) {
		this.act_applitime = act_applitime;
	}
	
	public String getAct_starttime() {
		return act_starttime;
	}

	public void setAct_satrttime(String act_starttime) {
		this.act_starttime = act_starttime;
	}

	public String getAct_stoptime() {
		return act_stoptime;
	}

	public void setAct_stoptime(String act_stoptime) {
		this.act_stoptime = act_stoptime;
	}

	public int getClub_id() {
		return club_id;
	}
	public void setClub_id(int club_id) {
		this.club_id = club_id;
	}

	public int getAct_del() {
		return act_del;
	}

	public void setAct_del(int act_del) {
		this.act_del = act_del;
	}

	@Override
	public String toString() {
		return "Activity [act_id=" + act_id + ", act_name=" + act_name
				+ ", act_content=" + act_content + ", act_img=" + act_img
				+ ", act_pro=" + act_pro + ", act_city=" + act_city
				+ ", act_money=" + act_money + ", act_dis=" + act_dis
				+ ", act_applitime=" + act_applitime + ", act_starttime="
				+ act_starttime + ", act_stoptime=" + act_stoptime
				+ ", club_id=" + club_id + ", act_del=" + act_del + "]";
	}

	

	
	
}
