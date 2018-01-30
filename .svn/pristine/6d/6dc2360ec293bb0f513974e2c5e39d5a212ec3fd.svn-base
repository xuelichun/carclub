package com.zeepn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.zeepn.bean.JoinAppli;
import com.zeepn.bean.UserInfo;
import com.zeepn.dao.JoinAppliDao;
import com.zeepn.dao.UserDao;
import com.zeepn.service.JoinAppliService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.TransCoding;

@Component("joinAppliService")
public class JoinAppliServiceImpl implements JoinAppliService{
	@Autowired
	JoinAppliDao joinAppliDao;
	@Autowired
	UserDao userDao;
	@Override
	public int insertJoinAppli(UserInfo userInfo) {
		userInfo.setU_name(TransCoding.transCoding(userInfo.getU_name()));
		userInfo.setU_sex(TransCoding.transCoding(userInfo.getU_sex()));
		userInfo.setU_pro(TransCoding.transCoding(userInfo.getU_pro()));
		userInfo.setU_city(TransCoding.transCoding(userInfo.getU_city()));
		int row=userDao.updateUserInfoForJoinAppli(userInfo);
		int club_id=userInfo.getClub_id();
		int u_id=userInfo.getU_id();
		if(joinAppliDao.selectClubPnum(club_id)<joinAppliDao.selectClubMaxNum(club_id)){
			String ja_status=joinAppliDao.selectJaStatus(u_id);
			JoinAppli joinAppli=new JoinAppli();
			joinAppli.setU_id(u_id);
			joinAppli.setClub_id(club_id);
			joinAppli.setJa_applitime(DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC));
			joinAppli.setJa_status("申请中");
			if(ja_status==null){
				row=joinAppliDao.insertJoinAppli(joinAppli);
			}else if(ja_status.equals("申请中")){
				row=3;
			}else if(ja_status.equals("同意")){
				row=4;
			}else{
				row=joinAppliDao.updateJoinAppli(joinAppli);
			}
			
		}else{
			row=2;
		}
		return row;
	}
	
	@Override
	public List<JoinAppli> selectJoinAppli(int club_id,int page) {
		List<JoinAppli> joinAppli=joinAppliDao.selectJoinAppli(club_id,page);
		return joinAppli;
	}
	
	@Override
	public int[] updateJoinAppli(int[] u_id,int club_id,String ja_status) {
		int[] rows=new int[2];
		int m=0;
		int n=0;
		ja_status=TransCoding.transCoding(ja_status);
		JoinAppli joinAppli=new JoinAppli();
		joinAppli.setClub_id(club_id);
		joinAppli.setJa_status(ja_status);
		for(int i=0;i<u_id.length;i++){
			joinAppli.setU_id(u_id[i]);
			int row=updateJoinAppli(joinAppli);
			if(row==1){
				m++;
			}else{
				n++;
			}
		}
		rows[0]=m;
		rows[1]=n;
		return rows;
	}
	@Override
	public String[] selectClubAddress(int club_id) {
		String club_city=joinAppliDao.selectClubAddress(club_id);
		club_city="北京-朝阳";
		String []club_address=new String[2];
		club_address=club_city.split("-");
		return club_address;
	}

	@Override
	public int countJoinAppli(int club_id) {
		int row=joinAppliDao.countJoinAppli(club_id);
		return row;
	}

	@Override
	public int countJoinAppliPage(int club_id) {
		int page=(joinAppliDao.countJoinAppli(club_id)-1)/8+1;
		return page;
	}
	
	@Transactional
	@Override
	public int updateJoinAppli(JoinAppli joinAppli) {
		int row=joinAppliDao.updateJoinAppli(joinAppli);
		if(joinAppli.getJa_status().equals("同意")){
			row=joinAppliDao.updateClubOnClubPnum(joinAppli.getClub_id());
			row=userDao.updateUserInfoOnClubId(joinAppli.getU_id(), joinAppli.getClub_id());
		}
		return row;
	}

	
}
