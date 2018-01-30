package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component 
@Alias("AdvDesc")
public class AdvDesc {
	private int ad_id;
	private int at_id;
	private int adv_id;
	private String ad_content;
	private String ad_img;
	private double ad_price;
	private String ad_web;
	private String ad_click;
	public AdvDesc() {
	}
	public AdvDesc(int ad_id, int at_id, int adv_id, String ad_content,
			String ad_img, double ad_price, String ad_web, String ad_click) {
		super();
		this.ad_id = ad_id;
		this.at_id = at_id;
		this.adv_id = adv_id;
		this.ad_content = ad_content;
		this.ad_img = ad_img;
		this.ad_price = ad_price;
		this.ad_web = ad_web;
		this.ad_click = ad_click;
	}
	public AdvDesc(int at_id, int adv_id, String ad_content, String ad_img,
			double ad_price, String ad_web, String ad_click) {
		super();
		this.at_id = at_id;
		this.adv_id = adv_id;
		this.ad_content = ad_content;
		this.ad_img = ad_img;
		this.ad_price = ad_price;
		this.ad_web = ad_web;
		this.ad_click = ad_click;
	}
	public AdvDesc(int at_id, int adv_id, String ad_content, double ad_price,
			String ad_web, String ad_click) {
		super();
		this.at_id = at_id;
		this.adv_id = adv_id;
		this.ad_content = ad_content;
		this.ad_price = ad_price;
		this.ad_web = ad_web;
		this.ad_click = ad_click;
	}
	public int getAd_id() {
		return ad_id;
	}
	public void setAd_id(int ad_id) {
		this.ad_id = ad_id;
	}
	public int getAt_id() {
		return at_id;
	}
	public void setAt_id(int at_id) {
		this.at_id = at_id;
	}
	public int getAdv_id() {
		return adv_id;
	}
	public void setAdv_id(int adv_id) {
		this.adv_id = adv_id;
	}
	public String getAd_content() {
		return ad_content;
	}
	public void setAd_content(String ad_content) {
		this.ad_content = ad_content;
	}
	public String getAd_img() {
		return ad_img;
	}
	public void setAd_img(String ad_img) {
		this.ad_img = ad_img;
	}
	public double getAd_price() {
		return ad_price;
	}
	public void setAd_price(double ad_price) {
		this.ad_price = ad_price;
	}
	public String getAd_web() {
		return ad_web;
	}
	public void setAd_web(String ad_web) {
		this.ad_web = ad_web;
	}
	public String getAd_click() {
		return ad_click;
	}
	public void setAd_click(String ad_click) {
		this.ad_click = ad_click;
	}
	@Override
	public String toString() {
		return "AdvDesc [ad_id=" + ad_id + ", at_id=" + at_id + ", adv_id="
				+ adv_id + ", ad_content=" + ad_content + ", ad_img=" + ad_img
				+ ", ad_price=" + ad_price + ", ad_web=" + ad_web
				+ ", ad_click=" + ad_click + "]";
	}

}
