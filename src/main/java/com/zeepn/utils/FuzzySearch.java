package com.zeepn.utils;

import java.util.HashMap;
import java.util.Map;

/**
 * 
 * @author zhoupeng
 *
 */
public class FuzzySearch {
	
	/**
	 * 模糊查询sql语句生成,匹配度高的在前，键从1开始
	 * @param str
	 * @param table
	 * @param field
	 * @return sql语句map集合
	 */
	public static Map<Integer, String> search(String str,String table,String field){
		String result1=null;
		String result2=null;
		String temp="select * from "+table+" where ("+field+" like " ;
		Map<Integer, String> map=new HashMap<Integer, String>();
		for(int j=str.length();j>0;j--){
			for(int i=0;i<str.length()+1-j;i++){
				String str1=str.substring(i, i+j);
				if(i==0){
					result2=temp+"'%"+str1+"%')";
					result1=result2.replaceAll("\\*", field);
				}else{
					result2=result2.replace(")", " ")+" or "+field+" like "+"'%"+str1+"%'"+')';
					result1=result2.replaceAll("\\*", field);
				}
			}
			map.put(j+str.length(), result2);
			map.put(j, result1);
		}
		Map<Integer, String> resultMap=new HashMap<Integer, String>();
		for(int i=1;i<=str.length();i++){
			if(i==1){
				resultMap.put(i, map.get(2*str.length()));
			}else{
				String sql=map.get(2*str.length()+1-i)+" and "+field+" not in ("+map.get(str.length()+2-i)+")";	
				resultMap.put(i, sql);
			}
		}
		return resultMap;
	}

}
