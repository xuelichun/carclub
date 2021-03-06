package com.zeepn.controller;

import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.service.CarService;

@Controller()
@RequestMapping("/backCar")
public class CarController {
	
	/**
	 * 自动注入dao
	 */
	@Resource(name="carService")
	private CarService carService;
	
	@RequestMapping("/insertCB")
	@ResponseBody
	public int[] insertCarBr(String[] arr){
		if(carService.cnIsExit(arr)){
			int [] a=new int [0];
			return a;
		}else{
			return carService.insertCarB(arr);
		}
	}
	@RequestMapping("/insertCD")
	@ResponseBody
	public int[] insertCarDe(String[] arr,int cb_id){
		if(carService.cdIsExit(arr,cb_id)){
			int [] a=new int [0];
			return a;
		}else{
			return carService.insertCarD(arr,cb_id);
		}
	}
	@RequestMapping("/delCB")
	@ResponseBody
	public String delCarBr(String cbId){
		boolean flag=carService.delCarB(cbId);
		if(flag){
			return "删除成功";
		}else{
			return "删除失败";
		}
	}
	@RequestMapping("/delCD")
	@ResponseBody
	public String delCarDe(String cdId){
		boolean flag=carService.delCarD(cdId);
		if(flag){
			return "删除成功";
		}else{
			return "删除失败";
		}
	}
	@RequestMapping("/selectAllCD")
	@ResponseBody
	public HashMap<Integer, Object> selectAllCD(int pageIndex){
		HashMap<Integer, Object> anMap=carService.selectAllCD(pageIndex);
		return anMap;
	}
	@RequestMapping("/selectCDByCB")
	@ResponseBody
	public HashMap<Integer, Object> selectAllCDByCB(int carBrand,int pageIndex){
		HashMap<Integer, Object> anMap=carService.selectAllCDByCB(carBrand,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllCB")
	@ResponseBody
	public HashMap<Integer, Object> selectAllCB(){
		HashMap<Integer, Object> anMap=carService.selectAllCB();
		return anMap;
	}
	@RequestMapping("/selectCDListByCB")
	@ResponseBody
	public HashMap<Integer, Object> selectCDListByCB(String carBrand){
		HashMap<Integer, Object> anMap=carService.selectCDListByCB(carBrand);
		return anMap;
	}
}
