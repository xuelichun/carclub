package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("GenAdm")
public class GenAdm {
	private int ga_id;
	private String ga_name;
	private String ga_pwd;
	private int ga_level;
	private int sa_id;
	public GenAdm() {
	}
	public GenAdm(String ga_name, String ga_pwd, int ga_level, int sa_id) {
		this.ga_name = ga_name;
		this.ga_pwd = ga_pwd;
		this.ga_level = ga_level;
		this.sa_id = sa_id;
	}
	public GenAdm(int ga_id, String ga_name, String ga_pwd, int ga_level,
			int sa_id) {
		this.ga_id = ga_id;
		this.ga_name = ga_name;
		this.ga_pwd = ga_pwd;
		this.ga_level = ga_level;
		this.sa_id = sa_id;
	}
	public int getGa_id() {
		return ga_id;
	}
	public void setGa_id(int ga_id) {
		this.ga_id = ga_id;
	}
	public String getGa_name() {
		return ga_name;
	}
	public void setGa_name(String ga_name) {
		this.ga_name = ga_name;
	}
	public String getGa_pwd() {
		return ga_pwd;
	}
	public void setGa_pwd(String ga_pwd) {
		this.ga_pwd = ga_pwd;
	}
	public int getGa_level() {
		return ga_level;
	}
	public void setGa_level(int ga_level) {
		this.ga_level = ga_level;
	}
	public int getSa_id() {
		return sa_id;
	}
	public void setSa_id(int sa_id) {
		this.sa_id = sa_id;
	}
	@Override
	public String toString() {
		return "GenAdm [ga_id=" + ga_id + ", ga_name=" + ga_name + ", ga_pwd="
				+ ga_pwd + ", ga_level=" + ga_level + ", sa_id=" + sa_id + "]";
	}
}
