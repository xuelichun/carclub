package com.zeepn.utils;
/**
 * 产生随机数、字符等的工具类
 * @author Administrator
 *
 */
public class Rand {
	/**
     * 产生随机的四位数
     * @return 返回字符串类型的四位数[1000,10000)
     */
    public static String randFourNum(){
        return ((int)(Math.random()*9000+1000))+"";
        
    }
    /**
     * 产生随机的六位数
     * @return 返回字符串类型的六位数[100000,1000000)
     */
    public static String randSixNum(){
        return ((int)(Math.random()*900000+100000))+"";
    }
}
