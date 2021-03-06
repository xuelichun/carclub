package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("Adm")
public class Adm {
	private String adm_name;
	private String adm_pwd;
	private String adm_level;
	public Adm() {
	}
	public Adm(String adm_name, String adm_pwd) {
		this.adm_name = adm_name;
		this.adm_pwd = adm_pwd;
	}
	public Adm(String adm_name, String adm_pwd, String adm_level) {
		this.adm_name = adm_name;
		this.adm_pwd = adm_pwd;
		this.adm_level = adm_level;
	}
	public String getAdm_name() {
		return adm_name;
	}
	public void setAdm_name(String adm_name) {
		this.adm_name = adm_name;
	}
	public String getAdm_pwd() {
		return adm_pwd;
	}
	public void setAdm_pwd(String adm_pwd) {
		this.adm_pwd = adm_pwd;
	}
	public String getAdm_level() {
		return adm_level;
	}
	public void setAdm_level(String adm_level) {
		this.adm_level = adm_level;
	}
	@Override
	public String toString() {
		return "Adm [adm_name=" + adm_name + ", adm_pwd=" + adm_pwd
				+ ", adm_level=" + adm_level + "]";
	}
}
