package com.zeepn.utils;
public class Page {
	private int p_first;
	private int p_end;
	public Page() {
	}
	public Page(int p_first, int p_end) {
		this.p_first = p_first;
		this.p_end = p_end;
	}
	public int getP_first() {
		return p_first;
	}
	public void setP_first(int p_first) {
		this.p_first = p_first;
	}
	public int getP_end() {
		return p_end;
	}
	public void setP_end(int p_end) {
		this.p_end = p_end;
	}
	@Override
	public String toString() {
		return "Page [p_first=" + p_first + ", p_end=" + p_end + "]";
	}
}
