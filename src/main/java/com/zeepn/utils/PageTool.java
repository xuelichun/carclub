package com.zeepn.utils;

public class PageTool {
	/**
	 * 根据页数索引获取含有行数范围的对象
	 * @param pageIndex 页数索引
	 * @return 含有行数范围的对象
	 */
	public Page selectPage(int pageIndex){
		int p_first=0;
		int p_end=0;
		if(pageIndex==1){
			p_first=1;
		}else{
			p_first=(pageIndex-1)*11;
		}
		p_end=p_first+10;
		Page page=new Page(p_first, p_end);
		return page;
	}
}
