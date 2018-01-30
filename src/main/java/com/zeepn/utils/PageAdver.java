package com.zeepn.utils;
public class PageAdver {
	private int rows;
	private int page;
	public PageAdver() {
	}
	public PageAdver(int rows, int page) {
		this.rows = rows;
		this.page = page;
	}
	public int getRows() {
		return rows;
	}
	public void setRows(int rows) {
		this.rows = rows;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	@Override
	public String toString() {
		return "PageAdver [rows=" + rows + ", page=" + page + "]";
	}
	
}
