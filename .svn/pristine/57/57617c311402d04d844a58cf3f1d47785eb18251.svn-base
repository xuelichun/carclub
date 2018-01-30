package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("CarDep")
public class CarDep {
	
	private int cd_id;
	private String cd_name;
	private int cb_id;
	public CarDep() {
	}
	public CarDep(String cd_name, int cb_id) {
		this.cd_name = cd_name;
		this.cb_id = cb_id;
	}
	public CarDep(int cd_id, String cd_name, int cb_id) {

		this.cd_id = cd_id;
		this.cd_name = cd_name;
		this.cb_id = cb_id;
	}
	public int getCd_id() {
		return cd_id;
	}
	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}
	public String getCd_name() {
		return cd_name;
	}
	public void setCd_name(String cd_name) {
		this.cd_name = cd_name;
	}
	public int getCb_id() {
		return cb_id;
	}
	public void setCb_id(int cb_id) {
		this.cb_id = cb_id;
	}
	@Override
	public String toString() {
		return "CarDep [cd_id=" + cd_id + ", cd_name=" + cd_name + ", cb_id="
				+ cb_id + "]";
	}
}
