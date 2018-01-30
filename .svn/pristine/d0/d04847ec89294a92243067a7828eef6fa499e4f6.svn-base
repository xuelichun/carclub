package com.zeepn.service.impl;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zeepn.bean.Adm;
import com.zeepn.bean.FnetAnt;
import com.zeepn.dao.FnetAntDao;
import com.zeepn.dao.GenAdmDao;
import com.zeepn.dao.SupAdmDao;
import com.zeepn.service.FnetAntService;
import com.zeepn.utils.EscapeChars;
import com.zeepn.utils.TransCoding;


@Component("fnetAntService")
public class FnetAntServiceImpl implements FnetAntService{
	@Autowired
	FnetAntDao fnetAntDao;
	@Autowired
	SupAdmDao supAdmDao;
	@Autowired
	GenAdmDao genAdmDao;
	@Override
	public int relesAnt(FnetAnt fnetAnt) {
		fnetAnt.setP_time(new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()));
		fnetAnt.setFa_del(0);
		int row=fnetAntDao.relesAnt(fnetAnt);
		return row;
	}
	
	@Override
	public List<FnetAnt> selectFnetAntByPage(Map<String, Integer> map) {
		List<FnetAnt> fnetAnt=fnetAntDao.selectFnetAntByPage(map);
		return fnetAnt;
	}

	@Override
	public FnetAnt selectOneFnetAntById(int fa_id) {
		FnetAnt fnetAnt=fnetAntDao.selectOneFnetAntById(fa_id);
		return fnetAnt;
	}

	@Override
	public int selectFnetAntPage() {
		int page=fnetAntDao.selectFnetAntPage();
		return page;
	}

	@Override
	public int deleteFnetAnt(int fa_id) {
		int row=fnetAntDao.deleteFnetAnt(fa_id);
		return row;

	}
	@Override
	public int updateFnetAnt(FnetAnt fnetAnt){
		return fnetAntDao.updateFnetAnt(fnetAnt);
	}
	@Override
	public List<FnetAnt> selectOneFnetAntByTime(){
		return fnetAntDao.selectOneFnetAntByTime();
	}
	@Override
	public int deleteSomeFnetAnt(String s){
		String temp1[] =s.split(",");
		int m=temp1.length;
		int f=0;
		for(int i=0;i<temp1.length;i++){
			int fa_id=Integer.parseInt(temp1[i]);
			f+=fnetAntDao.deleteFnetAnt(fa_id);	
		}
		if(m==f){
			return 1;
		}else{
		return 0;
		}
	}
	 @Override
     public List<FnetAnt> selectFntAntByTitle(String fa_title,int pageIndex){
		 return fnetAntDao.selectFntAntByTitle(fa_title, pageIndex);
	 }
	 @Override
     public int selectFnetAntByTitlePage(String fa_title){
		 return fnetAntDao.selectFnetAntByTitlePage(fa_title);
	 }

	@Override
	public FnetAnt packgeFnt(String fa_title, String fa_msg, Adm adm) {
		int ga_id=0;
		if(adm.getAdm_level().equals("1")){
			ga_id=supAdmDao.selectSaId(adm.getAdm_name());
		}else{
			ga_id=genAdmDao.selectGaId(adm.getAdm_name());
		}
		fa_title=TransCoding.transCoding(fa_title);
		fa_title=EscapeChars.escapeHTMLTags(fa_title);
		fa_msg=TransCoding.transCoding(fa_msg);
		fa_msg=EscapeChars.escapeHTMLTags(fa_msg);
		FnetAnt fnetAnt=new FnetAnt(fa_title, fa_msg, ga_id);
		return fnetAnt;
	}	
}