package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("Function")
public class Function {
	private int fun_id;
	private String fun_name;
	private double fun_price;
	public Function() {
	}
	public Function(String fun_name, double fun_price) {
		this.fun_name = fun_name;
		this.fun_price = fun_price;
	}
	public Function(int fun_id, String fun_name, double fun_price) {
		this.fun_id = fun_id;
		this.fun_name = fun_name;
		this.fun_price = fun_price;
	}
	public int getFun_id() {
		return fun_id;
	}
	public void setFun_id(int fun_id) {
		this.fun_id = fun_id;
	}
	public String getFun_name() {
		return fun_name;
	}
	public void setFun_name(String fun_name) {
		this.fun_name = fun_name;
	}
	public double getFun_price() {
		return fun_price;
	}
	public void setFun_price(double fun_price) {
		this.fun_price = fun_price;
	}
	@Override
	public String toString() {
		return "Function [fun_id=" + fun_id + ", fun_name=" + fun_name
				+ ", fun_price=" + fun_price + "]";
	}
}
