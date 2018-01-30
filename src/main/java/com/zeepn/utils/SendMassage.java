package com.zeepn.utils;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.shcm.bean.BalanceResultBean;
import com.shcm.bean.SendResultBean;
import com.shcm.send.DataApi;
import com.shcm.send.OpenApi;

/**
 * 发送短信公用类
 * @author Administrator
 *
 */
public class SendMassage {
	/**
     * 发送短信
     * @param mobile
     * @param content
     * @return
     * @throws Exception
     */
    public static List<SendResultBean> sendOnce(String mobile, String content) throws Exception{
        // 发送短信
        return OpenApi.sendOnce(mobile, content, 0, 0, null);
    }
    
    /**
     * 
     * @param phoneNo 手机号码
     * @param massage 发送短信信息
     * @return
     * @throws Exception
     */
    public static int sendMassage(String phoneNo,String code) throws Exception{
//        ParameterProperties properties= SysParameterPropertiesUtils.getSysParameterProperties(request);
    	String sOpenUrl = "http://smsapi.c123.cn/OpenPlatform/OpenApi";
        String sDataUrl = "http://smsapi.c123.cn/DataPlatform/DataApi";
        // 接口帐号
        final String account = "1001@501246670001";
        // 接口密钥
        final String authkey = "1608E467C60D9FE77C25D645B0176E93";
        // 通道组编号
        final int cgid = (new Integer(Integer.parseInt("5728"))).intValue();
        // 默认使用的签名编号(未指定签名编号时传此值到服务器)
        final int csid = (new Integer(Integer.parseInt("0"))).intValue();
    	// 发送参数
        OpenApi.initialzeAccount(sOpenUrl, account, authkey, cgid, csid);
        // 状态及回复参数
        DataApi.initialzeAccount(sDataUrl, account, authkey);
        // 取帐户余额
        BalanceResultBean br = OpenApi.getBalance();
        if(br.getResult() < 1){
            //余额不足
        	System.out.println("【获取可用余额失败】: " + br.getErrMsg());
            return 2;
        }
        System.out.println("【短信可用条数】: " + br.getRemain());
        // 以下代码演示如何提交发送短信并获取提交的返回信息
        List<SendResultBean> listItem = sendOnce(phoneNo, "你的验证码为"+code+",此验证码60秒内有效，若非本人操作请无视本信息。");
        for(SendResultBean t:listItem){
            //返回返回码 1成功，0~-11失败
           	System.out.println("【发送成功】: 【消息编号】<" + t.getMsgId() + "> 【总数】<" + t.getTotal() + "> 余额<" + t.getRemain() + ">");
           	System.out.println(phoneNo);
            return t.getResult();
        }
        //短信未发出，出现未知错误
        return 3;
    }
}
