package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("NumLevel")
public class NumLevel {
	private int nl_id;
	private int nl_maxnum;
	private double nl_price;
	public NumLevel() {
	}
	public NumLevel(int nl_maxnum, double nl_price) {
		this.nl_maxnum = nl_maxnum;
		this.nl_price = nl_price;
	}
	public NumLevel(int nl_id, int nl_maxnum, double nl_price) {
		this.nl_id = nl_id;
		this.nl_maxnum = nl_maxnum;
		this.nl_price = nl_price;
	}
	public int getNl_id() {
		return nl_id;
	}
	public void setNl_id(int nl_id) {
		this.nl_id = nl_id;
	}
	public int getNl_maxnum() {
		return nl_maxnum;
	}
	public void setNl_maxnum(int nl_maxnum) {
		this.nl_maxnum = nl_maxnum;
	}
	public double getNl_price() {
		return nl_price;
	}
	public void setNl_price(double nl_price) {
		this.nl_price = nl_price;
	}
	@Override
	public String toString() {
		return "NumLevel [nl_id=" + nl_id + ", nl_maxnum=" + nl_maxnum
				+ ", nl_price=" + nl_price + "]";
	}
}
