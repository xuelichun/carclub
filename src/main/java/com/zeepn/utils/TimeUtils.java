package com.zeepn.utils;

import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TimeUtils {
	/**
	 * 获取当前时间方法
	 * @return 字符串类型的时间
	 */
	public String getCurrentTime(){
		Date date=new Date();
		String time=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
		return time;
	}
	/**
	 * 将字符串日期转换成Date类型日期
	 * @param strDate 当前时间
	 * @param srcDateFormat 当前日期时间格式
	 * @param dstDateFormat 目标日期时间格式
	 * @return Date类型的日期
	 */
	public Date stringToDate(String strDate, String srcDateFormat, String dstDateFormat) {
        Date rtDate = null;
        Date tmpDate = (new SimpleDateFormat(srcDateFormat)).parse(strDate, new ParsePosition(0));
        String tmpString = null;
        if (tmpDate != null)
            tmpString = (new SimpleDateFormat(dstDateFormat)).format(tmpDate);
        if (tmpString != null)
            rtDate = (new SimpleDateFormat(dstDateFormat)).parse(tmpString, new ParsePosition(0));
        return rtDate;
    }
	/**
	 * 将Date类型日期转换成String类型日期
	 * @param date 当前时间
	 * @return 字符串类型日期
	 */
	public String dateToString(Date date,String str){
		String time=new SimpleDateFormat(str).format(date);
		return time;
	}
	/**
	 * 获得一个月后的日期
	 * @param date 当前时间
	 * @return 字符串类型的日期
	 */
	public String getFMonthTime(Date date){
		Calendar c=Calendar.getInstance();
		c.add(Calendar.MONTH,1); 
		String validityDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(c.getTime()); 
		return validityDate;
	}
	/**
	 * 获得一年后的日期
	 * @param date 当前时间
	 * @return 字符串类型的日期
	 */
	public String getFYearTime(Date date){
		Calendar c=Calendar.getInstance();
		c.add(Calendar.YEAR,1); 
		String validityDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(c.getTime()); 
		return validityDate;
	}
	/**
	 * 获得两个日期相隔的天数
	 * @param d1 日期1
	 * @param d2 日期2
	 * @return 相隔的天数
	 */
	public long getTwoDateSub(Date d1,Date d2){
		long day=(d2.getTime()-d1.getTime())/(24*60*60*1000);
		return day;
	}
	/**
	 * 比较两个日期
	 * @param d1 日期1
	 * @param d2 日期2
	 * @return d2>=d1，返回true；d2<d1，返回false
	 */
	public boolean compareTwoDate(Date d1,Date d2){
		long day=(d2.getTime()-d1.getTime());
		if(day>=0){
			return true;
		}else{
			return false;
		}
	}
}

