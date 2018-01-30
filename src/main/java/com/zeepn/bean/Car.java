package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("Car")
public class Car {
	private int c_id;
	private int u_id;
	private String c_pic;
	private String  c_brand;
	private String c_model;
	public Car() {
	}
	public Car(int c_id, int u_id, String c_pic, String c_brand, String c_model) {
		this.c_id = c_id;
		this.u_id = u_id;
		this.c_pic = c_pic;
		this.c_brand = c_brand;
		this.c_model = c_model;
	}
	public Car(int u_id, String c_pic, String c_brand, String c_model) {
		this.u_id = u_id;
		this.c_pic = c_pic;
		this.c_brand = c_brand;
		this.c_model = c_model;
	}
	
	
	public Car(int u_id, String c_brand, String c_model) {
		
		this.u_id = u_id;
		this.c_brand = c_brand;
		this.c_model = c_model;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getC_pic() {
		return c_pic;
	}
	public void setC_pic(String c_pic) {
		this.c_pic = c_pic;
	}
	public String getC_brand() {
		return c_brand;
	}
	public void setC_brand(String c_brand) {
		this.c_brand = c_brand;
	}
	public String getC_model() {
		return c_model;
	}
	public void setC_model(String c_model) {
		this.c_model = c_model;
	}
	@Override
	public String toString() {
		return "car [c_id=" + c_id + ", u_id=" + u_id + ", c_pic=" + c_pic
				+ ", c_brand=" + c_brand + ", c_model=" + c_model + "]";
	}
	
	
}
