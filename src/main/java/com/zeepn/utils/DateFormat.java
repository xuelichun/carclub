package com.zeepn.utils;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
/**
 * @author zhoupeng
 *
 */
public class DateFormat {
	/**
	 * 时间格式:
	 * yyyyMMddhhmmssSSS
	 */
	public static final String DEFAULT_DATE_MSEC="yyyyMMddhhmmssSSS";
	/**
	 * 时间格式:
	 *yyyy-MM-dd 
	 */
	public static final String DEFAULT_DATE_FORMAT="yyyy-MM-dd";
	
	/**
	 * 时间格式：
	 * yyyy年MM月dd
	 */
	public static final String  DEFAULT_DATE_FORMATS="yyyy年MM月dd日";
	
	/**
	 * 时间格式：
	 * yyyy年MM月dd HH:mm:ss
	 */
	public static final String  DEFAULT_DATE_FORMAT_SECS="yyyy年MM月dd日 HH:mm:ss";
	/**
	 * 时间格式:
	 * yyyy-MM-dd HH:mm:ss
	 */
	public static final String DEFAULT_DATE_FORMAT_SEC="yyyy-MM-dd HH:mm:ss";
	
	/**
	 * 时间格式:
	 * yyyy-MM-dd HH:mm:ss:SSS
	 */
	public static final String DEFAULT_DATE_FORMAT_MSEC="yyyy-MM-dd HH:mm:ss:SSS";
	
	/**
	 * 获取系统时间
	 * @param format 时间格式
	 * @return
	 */
	public static String getCurrentTime(String format){
		String result=new SimpleDateFormat(format).format(new Date());
		return result;
	}
	
	/**
	 * 获取某个时间的下一年时间
	 * @param time
	 * @return
	 */
	public static String getNextYearTime(String time){
		String result=(Integer.parseInt(time.substring(0, 4))+1)+time.substring(4);
		return result;
	}
	
	/**
	 * 判断指定时间是否在过去(yyyy-MM-dd HH:mm:ss)
	 * @param time
	 * @return 过去时间返回true;，未来时间返回false;
	 */
	public static boolean isOutOfDate(String time){
		boolean flag=true;
		try {
			Date date=new SimpleDateFormat(DEFAULT_DATE_FORMAT_SEC).parse(time);
			flag=date.after(new Date());
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return !flag;
	}
	
	/**
	 * 判断某天是某天的下一天
	 * @param timeNow
	 * @param timeAgo
	 * @return 是，返回true,否则返回false
	 */
	public static boolean isNextDay(String timeNow,String timeAgo){
		boolean flag=false;
		if(timeNow.substring(0, 3).equals(timeAgo.substring(0, 3))){
			if(timeNow.substring(5, 6).equals(timeAgo.substring(5, 6))){
				if(timeNow.substring(8, 9).equals(timeAgo.substring(8, 9))){
					flag=true;
				}
			}
		}
		return flag;
	}
	
	public static String smartTime(String time){
		String result="";
		int year=Integer.parseInt(time.substring(0, 4));
		int month=Integer.parseInt(time.substring(5,7));
		int day=Integer.parseInt(time.substring(8,10));
		String timeTemp=getCurrentTime(DEFAULT_DATE_FORMAT);
		int yearTemp=Integer.parseInt(timeTemp.substring(0, 4));
		int monthTemp=Integer.parseInt(timeTemp.substring(5,7));
		int dayTemp=Integer.parseInt(timeTemp.substring(8,10));
		if(year==yearTemp){
			if(month==monthTemp){
				if(day==dayTemp){
					result=time.substring(11,16);
				}else{
					result=time.substring(8, 10)+"日";
				}
			}else{
				result=time.substring(5, 7)+"月";
			}
		}else{
			result=time.substring(0, 4)+"年";
		}
		return result;
	}
	
	public static boolean isToday(String time){
		boolean flag=false;
		int year=Integer.parseInt(time.substring(0, 4));
		int month=Integer.parseInt(time.substring(5,7));
		int day=Integer.parseInt(time.substring(8,10));
		String timeTemp=getCurrentTime(DEFAULT_DATE_FORMAT);
		int yearTemp=Integer.parseInt(timeTemp.substring(0, 4));
		int monthTemp=Integer.parseInt(timeTemp.substring(5,7));
		int dayTemp=Integer.parseInt(timeTemp.substring(8,10));
		if(year==yearTemp){
			if(month==monthTemp){
				if(day==dayTemp){
					flag=true;
				}
			}
		}
		return flag;
	}
}
