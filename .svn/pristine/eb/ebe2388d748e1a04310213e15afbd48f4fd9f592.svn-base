package com.zeepn.utils;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import com.zeepn.bean.Adv;
import com.zeepn.bean.AnfSta;
import com.zeepn.bean.AnnualFee;
import com.zeepn.bean.AppliNotice;
import com.zeepn.bean.CarBrand;
import com.zeepn.bean.CarDep;
import com.zeepn.bean.ChaEvent;
import com.zeepn.bean.Club;
import com.zeepn.bean.DraTravel;
import com.zeepn.bean.FcSta;
import com.zeepn.bean.FunCharge;
import com.zeepn.bean.GenAdm;
import com.zeepn.bean.NlfSta;
import com.zeepn.bean.NumLevelFee;
import com.zeepn.bean.PiPayRecord;
import com.zeepn.bean.PriView;
import com.zeepn.bean.UserInfo;

public class FeeUtils {
	/**
	 * 根据年费收费集合和当前系统时间查询年费欠费集合
	 * @param anfList 年费收费集合
	 * @param time 当前系统时间
	 * @return 年费欠费集合
	 */
	public List<AnfSta> getAnfStaList(List<AnnualFee> anfList,String time) {
		List<AnfSta> anfStaList=new ArrayList<AnfSta>();
		int i;
		for (i=0;i<anfList.size();i++) {
			AnnualFee annualFee=anfList.get(i);
			if(selectAnfMatTime(annualFee,time)){
				AnfSta anfSta=packetAnfSta(annualFee,time);
				anfStaList.add(anfSta);
			}
		}
		return anfStaList;
	}
	/**
	 * 根据功能费用收费集合和当前系统时间查询功能费用欠费集合
	 * @param fcList 功能费用收费集合
	 * @param time 当前系统时间
	 * @return 功能费用欠费集合
	 */
	public List<FcSta> getFcStaList(List<FunCharge> fcList, String time) {
		List<FcSta> fcStaList=new ArrayList<FcSta>();
		int i;
		for(i=0;i<fcList.size();i++){
			FunCharge funCharge=fcList.get(i);
			if(selectFcMatTime(funCharge, time)){
				FcSta fcSta=packetFcSta(funCharge, time);
				fcStaList.add(fcSta);
			}
		}
		return fcStaList;
	}
	/**
	 * 根据人数级别费用收费集合和当前系统时间查询人数级别费用欠费集合
	 * @param nlfList 人数级别费用收费集合
	 * @param time 当前系统时间
	 * @return 人数级别费用欠费集合
	 */
	public List<NlfSta> getNlfStaList(List<NumLevelFee> nlfList, String time) {
		List<NlfSta> nlfStaList=new ArrayList<NlfSta>();
		int i;
		for(i=0;i<nlfList.size();i++){
			NumLevelFee numLevelFee=nlfList.get(i);
			if(selectNlfMatTime(numLevelFee, time)){
				NlfSta nlfSta=packetNlFSta(numLevelFee, time);
				nlfStaList.add(nlfSta);
			}
		}
		return nlfStaList;
	}
	/**
	 * 根据年费收费对象和目标时间判断收费期限是否已到
	 * @param annualFee 年费收费对象
	 * @param time 目标时间
	 * @return 已到，返回true；否则返回false
	 */
	public boolean selectAnfMatTime(AnnualFee annualFee,String time){
		Date d1=new TimeUtils().stringToDate(annualFee.getAf_mattime(), "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		Date d2=new TimeUtils().stringToDate(time, "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		boolean flag=new TimeUtils().compareTwoDate(d1, d2);
		return flag;
	}
	/**
	 * 根据功能费用收费对象和目标时间判断收费期限是否已到
	 * @param funCharge 功能费用收费对象
	 * @param time 目标时间
	 * @return 已到，返回true；否则返回false
	 */
	public boolean selectFcMatTime(FunCharge funCharge,String time){
		Date d1=new TimeUtils().stringToDate(funCharge.getFc_mattime(), "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		Date d2=new TimeUtils().stringToDate(time, "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		boolean flag=new TimeUtils().compareTwoDate(d1, d2);
		return flag;
	}
	/**
	 * 根据人数级别费用收费对象和目标时间判断收费期限是否已到
	 * @param numLevelFee 人数级别费用收费
	 * @param time 目标时间
	 * @return 已到，返回true；否则返回false
	 */
	public boolean selectNlfMatTime(NumLevelFee numLevelFee,String time){
		Date d1=new TimeUtils().stringToDate(numLevelFee.getNlf_mattime(), "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		Date d2=new TimeUtils().stringToDate(time, "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		boolean flag=new TimeUtils().compareTwoDate(d1, d2);
		return flag;
	}
	/**
	 * 获取年费欠费对象
	 * @param annualFee 年费收费对象
	 * @param time 当前系统时间
	 * @return 年费欠费对象
	 */
	@SuppressWarnings("static-access")
	public AnfSta packetAnfSta(AnnualFee annualFee,String time){
		Date d1=new TimeUtils().stringToDate(annualFee.getAf_mattime(), "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		Date d2=new TimeUtils().stringToDate(time, "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		int as_day=(int) (new TimeUtils().getTwoDateSub(d1, d2));
		int club_id=annualFee.getClub_id();
		String as_time=new TimeUtils().dateToString(d1, new DateFormat().DEFAULT_DATE_FORMAT);
		AnfSta anfSta=new AnfSta(as_time, as_day, club_id);
		return anfSta;
	}
	/**
	 * 获取功能费用欠费对象
	 * @param funCharge 功能费用收费对象
	 * @param time 当前系统时间
	 * @return 功能费用欠费对象
	 */
	@SuppressWarnings("static-access")
	public FcSta packetFcSta(FunCharge funCharge,String time){
		Date d1=new TimeUtils().stringToDate(funCharge.getFc_mattime(), "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		Date d2=new TimeUtils().stringToDate(time, "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		int fs_day=(int) (new TimeUtils().getTwoDateSub(d1, d2));
		int club_id=funCharge.getClub_id();
		String fs_time=new TimeUtils().dateToString(d1, new DateFormat().DEFAULT_DATE_FORMAT);
		FcSta fcSta=new FcSta(fs_time, fs_day, club_id);
		return fcSta;
	}
	/**
	 * 获取人数级别费用欠费对象
	 * @param numLevelFee 人数级别费用收费对象
	 * @param time 当前系统时间
	 * @return 数级别费用欠费对象
	 */
	@SuppressWarnings("static-access")
	public NlfSta packetNlFSta(NumLevelFee numLevelFee,String time){
		Date d1=new TimeUtils().stringToDate(numLevelFee.getNlf_mattime(), "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		Date d2=new TimeUtils().stringToDate(time, "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm:ss");
		int ns_day=(int) (new TimeUtils().getTwoDateSub(d1, d2));
		int club_id=numLevelFee.getClub_id();
		String ns_time=new TimeUtils().dateToString(d1, new DateFormat().DEFAULT_DATE_FORMAT);
		NlfSta nlfSta=new NlfSta(ns_time, ns_day, club_id);
		return nlfSta;
	}
	/**
	 * 获取含有记录条数的集合
	 * @param objList 目标页的集合
	 * @param pageIndex 目标页
	 * @param count 数据总数
	 * @return 含有记录条数的集合
	 */
	public HashMap<Integer, List<Object>> packageAn(List<Object> objList,int pageIndex,int count){
		HashMap<Integer, List<Object>> anMap=new HashMap<Integer, List<Object>>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	/**
	 * 封装申请车友会通知数据的方法
	 * @param objList 申请车友会通知集合
	 * @param pageIndex 页数索引
	 * @param count 数据总数
	 * @return 含有记录数的集合
	 */
	public HashMap<Integer, Object> packageTotal(List<AppliNotice> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	/**
	 * 封装年费欠费数据的方法
	 * @param objList 年费欠费集合
	 * @param pageIndex 页数索引
	 * @param count 数据总数
	 * @return 含有记录数的集合
	 */
	public HashMap<Integer, Object> packageAsTotal(List<AnfSta> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	/**
	 * 封装人数级别欠费数据的方法
	 * @param objList 人数级别欠费集合
	 * @param pageIndex 页数索引
	 * @param count 数据总数
	 * @return 含有记录数的集合
	 */
	public HashMap<Integer, Object> packageNsTotal(List<NlfSta> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	/**
	 * 封装功能费用欠费数据的方法
	 * @param objList 功能费用欠费集合
	 * @param pageIndex 页数索引
	 * @param count 数据总数
	 * @return 含有与记录数的集合
	 */
	public HashMap<Integer, Object> packageFsTotal(List<FcSta> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	/**
	 * 封装年费收费数据的方法
	 * @param objList 年费收费集合
	 * @param pageIndex 页数索引
	 * @param count 数据总数
	 * @return 含有记录数的集合
	 */
	public HashMap<Integer, Object> packageAfTotal(List<AnnualFee> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	/**
	 * 封装人数级别费用收费数据方法
	 * @param objList 人数级别费用收费集合
	 * @param pageIndex 页数索引
	 * @param count 数据总数
	 * @return 含有记录数的集合
	 */
	public HashMap<Integer, Object> packageNlfTotal(List<NumLevelFee> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageFcTotal(List<FunCharge> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packagePPRTotal(List<PiPayRecord> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageClubTotal(List<Club> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packagePriViewTotal(List<PriView> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageChETotal(List<ChaEvent> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageDTTotal(List<DraTravel> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageUITotal(List<UserInfo> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageCarBrandTotal(List<CarBrand> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageCarDepTotal(List<CarDep> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageGaTotal(List<GenAdm> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
	public HashMap<Integer, Object> packageAdvTotal(List<Adv> objList,int pageIndex,int count){
		HashMap<Integer, Object> anMap=new HashMap<Integer, Object>();
		List<Object> total=new ArrayList<Object>();
		int size=objList.size();
		int pageCount=(count-1)/10+1;
		total.add(size);
		total.add(count);
		total.add(pageIndex);
		total.add(pageCount);
		anMap.put(0, objList);
		anMap.put(1, total);
		return anMap;
	}
}
