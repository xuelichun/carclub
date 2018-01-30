package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("AdvType")
public class AdvType {
	private String at_name;
	private int  at_id;
	public AdvType() {
	}
	public AdvType(String at_name, int at_id) {
		this.at_name = at_name;
		this.at_id = at_id;
	}
	public AdvType(String at_name) {
		super();
		this.at_name = at_name;
	}
	public String getAt_name() {
		return at_name;
	}
	public void setAt_name(String at_name) {
		this.at_name = at_name;
	}
	public int getAt_id() {
		return at_id;
	}
	public void setAt_id(int at_id) {
		this.at_id = at_id;
	}
	@Override
	public String toString() {
		return "AdvType [at_name=" + at_name + ", at_id=" + at_id + "]";
	}
	
}
