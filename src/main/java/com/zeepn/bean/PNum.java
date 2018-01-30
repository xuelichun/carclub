package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;
@Component
@Alias("PNum")
public class PNum {
	private int pNum1;
	private int pNum2;
	public PNum() {
	}
	public PNum(int pNum1, int pNum2) {
		this.pNum1 = pNum1;
		this.pNum2 = pNum2;
	}
	public int getpNum1() {
		return pNum1;
	}
	public void setpNum1(int pNum1) {
		this.pNum1 = pNum1;
	}
	public int getpNum2() {
		return pNum2;
	}
	public void setpNum2(int pNum2) {
		this.pNum2 = pNum2;
	}
	@Override
	public String toString() {
		return "PNum [pNum1=" + pNum1 + ", pNum2=" + pNum2 + "]";
	}
}
