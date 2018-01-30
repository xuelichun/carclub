package com.zeepn.utils;

import java.io.UnsupportedEncodingException;

public class TransCoding {
	
	public static String transCoding(String str){
		String result=str;
		try {
		 result = new String(str.getBytes("ISO-8859-1"),"utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return result;
	}

}
