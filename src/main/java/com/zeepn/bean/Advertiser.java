package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("Advertiser")
public class Advertiser {
	private int adv_id;
	private String adv_name;
	private String adv_adress;
	private String adv_img;
	public Advertiser() {
	}
	public Advertiser(int adv_id, String adv_name, String adv_adress,
			String adv_img) {
		super();
		this.adv_id = adv_id;
		this.adv_name = adv_name;
		this.adv_adress = adv_adress;
		this.adv_img = adv_img;
	}
	public Advertiser(String adv_name, String adv_adress, String adv_img) {
		super();
		this.adv_name = adv_name;
		this.adv_adress = adv_adress;
		this.adv_img = adv_img;
	}
	public Advertiser(String adv_name, String adv_adress) {
		super();
		this.adv_name = adv_name;
		this.adv_adress = adv_adress;
	}
	public int getAdv_id() {
		return adv_id;
	}
	public void setAdv_id(int adv_id) {
		this.adv_id = adv_id;
	}
	public String getAdv_name() {
		return adv_name;
	}
	public void setAdv_name(String adv_name) {
		this.adv_name = adv_name;
	}
	public String getAdv_adress() {
		return adv_adress;
	}
	public void setAdv_adress(String adv_adress) {
		this.adv_adress = adv_adress;
	}
	public String getAdv_img() {
		return adv_img;
	}
	public void setAdv_img(String adv_img) {
		this.adv_img = adv_img;
	}
	@Override
	public String toString() {
		return "Advertiser [adv_id=" + adv_id + ", adv_name=" + adv_name
				+ ", adv_adress=" + adv_adress + ", adv_img=" + adv_img + "]";
	}
	
}
