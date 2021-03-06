package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("PhotoAlbum")
public class PhotoAlbum {
	private int pa_id;
	private int ca_id;
	private String pa_img;
	private int u_id;
	private String pa_uptime;
	private String pa_name;
	public PhotoAlbum() {
	}
	public PhotoAlbum(int ca_id, int u_id) {
		this.ca_id = ca_id;
		this.u_id = u_id;
	}
	
	public PhotoAlbum(int pa_id, int ca_id, String pa_img, int u_id,
			String pa_uptime, String pa_name) {
		this.pa_id = pa_id;
		this.ca_id = ca_id;
		this.pa_img = pa_img;
		this.u_id = u_id;
		this.pa_uptime = pa_uptime;
		this.pa_name = pa_name;
	}
	public int getPa_id() {
		return pa_id;
	}
	public void setPa_id(int pa_id) {
		this.pa_id = pa_id;
	}
	public int getCa_id() {
		return ca_id;
	}
	public void setCa_id(int ca_id) {
		this.ca_id = ca_id;
	}
	public String getPa_img() {
		return pa_img;
	}
	public void setPa_img(String pa_img) {
		this.pa_img = pa_img;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getPa_uptime() {
		return pa_uptime;
	}
	public void setPa_uptime(String pa_uptime) {
		this.pa_uptime = pa_uptime;
	}
	public String getPa_name() {
		return pa_name;
	}
	public void setPa_name(String pa_name) {
		this.pa_name = pa_name;
	}
	@Override
	public String toString() {
		return "PhotoAlbum [pa_id=" + pa_id + ", ca_id=" + ca_id + ", pa_img="
				+ pa_img + ", u_id=" + u_id + ", pa_uptime=" + pa_uptime
				+ ", pa_name=" + pa_name + "]";
	}
	
}
