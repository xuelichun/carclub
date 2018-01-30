package com.zeepn.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zeepn.bean.CarBrand;
import com.zeepn.bean.CarDep;
import com.zeepn.dao.CarBrandDao;
import com.zeepn.dao.CarDepDao;
import com.zeepn.service.CarService;
import com.zeepn.utils.FeeUtils;
import com.zeepn.utils.TransCoding;

@Service("carService")
public class CarServiceImpl implements CarService{

	/**
	 * 自动注入dao	
	 */
	@Autowired
	CarBrandDao carBrandDao;
	@Autowired
	CarDepDao carDepDao;
	
	@Override
	public List<CarBrand> selectAllCarB() {
		List<CarBrand> cbList=carBrandDao.selectAllCarBrand();
		return cbList;
	}

	@Override
	public List<CarDep> selectAllCarD(int cb_id) {
		List<CarDep> cdList=carDepDao.selectAllCarDep(cb_id);
		return cdList;
	}

	@Override
	public int[] insertCarD(String[] arr,int cb_id) {
		int count1=0;
		int count2=0;
		int[] arr1=new int[2];
		for(int i=0;i<arr.length;i++){
			if(carDepDao.insertCarDep(arr[i], cb_id)>0){ 
				count1++;
			}else{
				count2++;
			}
		}
		arr1[0]=count1;
		arr1[1]=count2;
		return arr1;
	}

	@Override
	public boolean delCarB(String cbId) {
		
		return false;
	}

	@Override
	public boolean delCarD(String cdId) {
		
		return false;
	}

	@Override
	public HashMap<Integer, Object> selectAllCD(int pageIndex) {
		int count=carDepDao.selectCountCarDep();
		List<CarDep> cdList=carDepDao.selectAllCarDep(pageIndex);
		HashMap<Integer, Object> anMap=new FeeUtils().packageCarDepTotal(cdList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAllCDByCB(int carBrand, int pageIndex) {
		List<CarDep> cdList=carDepDao.selectCarDepByCB(carBrand,pageIndex);
		int count=carDepDao.selectCountCarDepByCB(carBrand);
		HashMap<Integer, Object> anMap=new FeeUtils().packageCarDepTotal(cdList, pageIndex, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectAllCB() {
		List<CarBrand> cbList=carBrandDao.selectAllCarBrand();
		int count=carBrandDao.selectCountCarBrand();
		HashMap<Integer, Object> anMap=new FeeUtils().packageCarBrandTotal(cbList, 1, count);
		return anMap;
	}

	@Override
	public HashMap<Integer, Object> selectCDListByCB(String carBrand) {
		carBrand=TransCoding.transCoding(carBrand);
		List<CarDep> cdList=carDepDao.electCDListByCB(carBrand);
		int count=carDepDao.selectCountCDByCB(carBrand);
		HashMap<Integer, Object> anMap=new FeeUtils().packageCarDepTotal(cdList, 1, count);
		return anMap;
	}

	@Override
	public int[] insertCarB(String[] arr) {
		int count1=0;
		int count2=0;
		int[] arr1=new int[2];
		for(int i=0;i<arr.length;i++){
			if(carBrandDao.insertCarBrand(arr[i])>0){
				count1++;
			}else{
				count2++;
			}
		}
		arr1[0]=count1;
		arr1[1]=count2;
		return arr1;
	}

	@Override
	public boolean cnIsExit(String[] arr) {
		boolean flag=false;
		for(int i=0;i<arr.length;i++){
			if(carBrandDao.selectCBId(arr[i])>0){
				flag=true;
				return flag;
			}
		}
		return flag;
	}

	@Override
	public boolean cdIsExit(String[] arr, int cb_id) {
		boolean flag=false;
		for(int i=0;i<arr.length;i++){
			if(carDepDao.selectCDId(arr[i],cb_id)>0){
				flag=true;
				return flag;
			}
		}
		return flag;
	}
	
}
