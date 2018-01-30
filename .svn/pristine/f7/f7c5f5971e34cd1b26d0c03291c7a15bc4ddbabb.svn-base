package com.zeepn.utils;

import java.util.List;

public class CompObUtils {
	private boolean flag=false;
	/**
	 * 比较两个整数
	 * @param num1 第一个整数
	 * @param num2 第二个整数
	 * @return 如果第一个整数>第二个整数，返回true；否则返回false
	 */
	public boolean CompareInt1(int num1,int num2){
		if(num1>num2){
			flag=true;
		}
		return flag;
	}
	/**
	 * 比较两个整数
	 * @param num1 第一个整数
	 * @param num2 第二个整数
	 * @return 如果第一个整数>=第二个整数，返回true；否则返回false
	 */
	public boolean CompareInt2(int num1,int num2){
		if(num1>=num2){
			flag=true;
		}
		return flag;
	}
	/**
	 * 比较两个字符串
	 * @param str1 第一个字符串
	 * @param str2 第二个字符串
	 * @return 如果两个字符串两个相等，返回true；否则返回false
	 */
	public boolean compareString(String str1,String str2){
		if(str1.equals(str2)){
			flag=true;
		}
		return flag;
	}
	/**
	 * 判断目标字符串是否是非空
	 * @param str 要判断的字符串
	 * @return 是非空，返回true；不是，返回false
	 */
	public boolean isNotNull(String str){
		if(str!=null&&!str.equals("")){
			flag=true;
		}
		return flag;
	}
	/**
	 * 判断目标参数是否否是非空
	 * @param adm_name 管理员账号
	 * @param adm_pwd 管理员密码
	 * @param rePwd 重复密码
	 * @return 是，返回true；否，返回false
	 */
	public boolean comparePL(String adm_name, String adm_pwd, String rePwd) {
		CompObUtils cbu=new CompObUtils();
		if(cbu.isNotNull(adm_name)&&cbu.isNotNull(adm_pwd)&&cbu.isNotNull(rePwd)){
			flag=true;
		}
		return flag;
	}
	/**
	 * 字符串类型的集合和字符串进行比较
	 * @param list 字符串类型集合
	 * @param str 字符串
	 * @return 如果有相同，返回true；不同返回false
	 */
	public boolean compareListStr(List<String> list,String str){
		for(String str1:list){
			if(str1.equals(str)){
				flag=true;
				return flag;
			}
		}
		return flag;
	}
	/**
	 * 判断目标字符串是否为空
	 * @param str 目标字符串
	 * @return 如果为空，返回true；否则返回false
	 */
	public boolean strIsNull(String str){
		if(str!=""&&str!=null){
			return false;
		}else{
			return true;
		}
	}
}
