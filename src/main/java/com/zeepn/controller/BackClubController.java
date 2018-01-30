package com.zeepn.controller;

import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zeepn.service.BackClubService;

@Controller
@RequestMapping("/backClub")
public class BackClubController {
	/**
	 * 自动注入dao
	 */
	@Resource(name="backClubService")
	private BackClubService backClubService;
	
	@RequestMapping("/selectAllClub")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClub(int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClub(pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByPro")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByPro(String province,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByPro(province,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCity")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCity(String city,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByCity(city,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCarBrand")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCarBrand(String carBrand,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByCarBrand(carBrand,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCarDep")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCarDep(String carDep,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByCarDep(carDep,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByClubId")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByClubId(int club_id,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByClubId(club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByProCB")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByProCB(String province,String carBrand,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByProCB(province,carBrand,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByProCD")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByProCD(String province,String carDep,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByProCD(province,carDep,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByProCID")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByProCID(String province,int club_id,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByProCID(province,club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCityCB")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCityCB(String city,String carBrand,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByCityCB(city,carBrand,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCityCD")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCityCD(String city,String carDep,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectClubByCityCD(city,carDep,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCityCID")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCityCID(String city,int club_id,int pageIndex){
		HashMap<Integer,Object> anMap=backClubService.selectClubByCityCID(city,club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCBCID")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCBCID(String carBrand,int club_id,int pageIndex){
		HashMap<Integer,Object> anMap=backClubService. selectClubByCBCID(carBrand,club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCDCID")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCDCID(String carDep,int club_id,int pageIndex){
		HashMap<Integer,Object> anMap=backClubService. selectClubByCDCID(carDep,club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByProCBCID")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByProCBCID(String province,String carBrand,int club_id,int pageIndex){
		HashMap<Integer,Object> anMap=backClubService. selectClubByProCBCID(province,carBrand,club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByProCDCID")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByProCDCID(String province,String carDep,int club_id,int pageIndex){
		HashMap<Integer,Object> anMap=backClubService. selectClubByProCDCID(province,carDep,club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCityCBCID")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCityCBCID(String city,String carBrand,int club_id,int pageIndex){
		HashMap<Integer,Object> anMap=backClubService. selectClubByCityCBCID(city,carBrand,club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectClubByCityCDCID")
	@ResponseBody
	public HashMap<Integer, Object> selectClubByCityCDCID(String city,String carDep,int club_id,int pageIndex){
		HashMap<Integer,Object> anMap=backClubService. selectClubByCityCDCID(city,carDep,club_id,pageIndex);
		return anMap;
	}
	@RequestMapping("/insetClub")
	@ResponseBody 
	public int[] insetClub(int[] chk_value){
		int[] count=backClubService.insertClub(chk_value);
		return count;
	}
	
	@RequestMapping("/selectAllClubByPro2")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClubByPro2(String province,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubByPro2(province, pageIndex);
		return anMap;
	}
	
	@RequestMapping("/selectAllClubByCity2")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClubByCity2(String city,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubByCity2(city, pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllClubByCarBrand2")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClubByCarBrand2(String carBrand,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubByCarBrand2(carBrand, pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllClubByCarDep2")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClubByCarDep2(String carDep,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubByCarDep2(carDep, pageIndex);
		return anMap;
	}
	
	@RequestMapping("/selectAllClubByProCB2")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClubByProCB2(String province,String carBrand,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubByProCB2(province,carBrand,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllClubByProCD2")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClubByProCD2(String province,String carDep,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubByProCD2(province,carDep,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllClubByCityCB2")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClubByCityCB2(String city,String carBrand,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubByCityCB2(city,carBrand,pageIndex);
		return anMap;
	}
	@RequestMapping("/selectAllClubByCityCD2")
	@ResponseBody
	public HashMap<Integer, Object> selectAllClubByCityCD2(String city,String carDep,int pageIndex){
		HashMap<Integer, Object> anMap=backClubService.selectAllClubByCityCD2(city,carDep,pageIndex);
		return anMap;
	}
	
}
