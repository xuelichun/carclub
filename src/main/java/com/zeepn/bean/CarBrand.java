package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("CarBrand")
public class CarBrand {
	private int cb_id;
	private String cb_name;
	public CarBrand() {
	}
	public CarBrand(String cb_name) {
		this.cb_name = cb_name;
	}
	public CarBrand(int cb_id, String cb_name) {
		this.cb_id = cb_id;
		this.cb_name = cb_name;
	}
	public int getCb_id() {
		return cb_id;
	}
	public void setCb_id(int cb_id) {
		this.cb_id = cb_id;
	}
	public String getCb_name() {
		return cb_name;
	}
	public void setCb_name(String cb_name) {
		this.cb_name = cb_name;
	}
	@Override
	public String toString() {
		return "CarBrand [cb_id=" + cb_id + ", cb_name=" + cb_name + "]";
	}
}
