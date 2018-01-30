package com.zeepn.service.impl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.omg.CORBA.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.zeepn.bean.AccountLog;
import com.zeepn.bean.AddFriends;
import com.zeepn.bean.Car;
import com.zeepn.bean.ClickLike;
import com.zeepn.bean.Club;
import com.zeepn.bean.Friends;
import com.zeepn.bean.Levels;
import com.zeepn.bean.UserInfo;
import com.zeepn.bean.Visitor;
import com.zeepn.dao.JoinAppliDao;
import com.zeepn.dao.UserDao;
import com.zeepn.service.UserService;
import com.zeepn.utils.DateFormat;
import com.zeepn.utils.TransCoding;
@Component("userService")
public class UserServiceImpl implements UserService{
	@Autowired
	UserDao userDao;
	@Override
	public UserInfo userLoginByPhone(String u_phone, String u_pwd) {
		return userDao.userLoginByPhone(u_phone, u_pwd);
	}
	@Override
	public UserInfo userLoginByEmail(String u_email, String u_pwd) {
		
		return userDao.userLoginByEmail(u_email, u_pwd);
	}
	@Override
	public int userReg(UserInfo user) {
		
		return userDao.userReg(user);
	}
	@Override
	public int perfectUser(UserInfo user) {
		
		return userDao.perfectUser(user);
	}
	@Override
	public int updateUserPwd(UserInfo user) {
		
		return userDao.updateUserPwd(user);
	}
	@Override
	public int updateUserPwdByPhone(String u_phone,String u_pwd) {
		return userDao.updateUserPwdByPhone(u_phone, u_pwd);
	}
	
	@Override
	public Club selectClubByUser(int club_id) {
		
		return userDao.selectClubByUser(club_id);
	}
	@Override
	public List<UserInfo> selectFriends(int u_id,int pageIndex) {

		return userDao.selectFriends(u_id, pageIndex);
	}
	@Override
	public int CLickLike(ClickLike clickLike) {
		int isOk=0;
		int isClick=userDao.countId(clickLike);
		if(isClick==0){
			if(userDao.insertCLickLike(clickLike)>0&&userDao.addNum(clickLike.getPd_id())>0){
				isOk=1;
			}else{
				isOk=2;
			}
		}else{
			isOk=3;
		}
		return isOk;
	}
	@Override
	public boolean deleteCLickLike(ClickLike clickLike) {
		boolean flag=false;
		if(userDao.deleteCLickLike(clickLike)>0&&userDao.reduceNum(clickLike.getPd_id())>0){
			flag=true;
		}
		return flag;	
	}
	@Override
	public int insertCar(Car car) {
		
		return userDao.insertCar(car);
	}
	@Override
	public int updateCar(Car car) {
		
		return userDao.updateCar(car);
	}
	@Override
	public int deleteCar(int u_id) {
		
		return userDao.deleteCar(u_id);
	}
	@Override
	public List<Visitor> showVisitor(int v_uid2,int pageIndex) {
		
		return userDao.showVisitor(v_uid2, pageIndex);
	}
	@Override
	public int addClub(int u_id, int club_id) {
		
		return userDao.addClub(u_id, club_id);
	}
	@Override
	public int ExitClub(int u_id) {
		
		return userDao.ExitClub(u_id);
	}
	@Override
	public int addFriends(int u_id, int fu_id) {
		
		return userDao.addFriends(u_id, fu_id);
	}
	@Override
	public int deleteFriends(int u_id, int fu_id) {
		
		return userDao.deleteFriends(u_id, fu_id);
	}
	@Override
	public UserInfo selectUserById(int u_id) {
		
		return userDao.selectUserById(u_id);
	}
	@Override
	public int countPhone(String u_phone) {
		return userDao.countPhone(u_phone);
	}
	@Override
	public int countEmail(String u_email) {
		
		return userDao.countEmail(u_email);
	}
	
	@Override
	public int updateHead(int u_id, String u_head) {
		
		return userDao.updateHead(u_id, u_head);
	}
	@Override
	public int addGrade(int u_id, int u_grade) {
		
		return userDao.addGrade(u_id, u_grade);
	}
	@Override
	public int ReduceGrade(int u_id, int u_grade) {
		
		return userDao.ReduceGrade(u_id, u_grade);
	}
	@Override
	public int AddExp(int u_id, int u_exp) {
		
		return userDao.AddExp(u_id, u_exp);
	}
	@Override
	public int deleteUser(int u_id) {
	
		return userDao.deleteUser(u_id);
	}
	@Transactional
	@Override
	public boolean addMoney(int u_id, double u_money,HttpServletRequest request) {
		boolean flag=false;
		int a=userDao.addMoney(u_id, u_money);
		UserInfo user=userDao.selectUserById(u_id);
		HttpSession session=request.getSession();
		session.setAttribute("user", user);
		String u_nick=userDao.selectUserNameById(u_id);
		String al_trans="用户id:"+u_id+",用户昵称:"+u_nick+",账户充值:"+u_money+"元";
		String al_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC);
		AccountLog accountLog=new AccountLog(u_id, al_trans, al_time);
		int b=userDao.insertAccountLog(accountLog);
		if(a>0&&b>0){
			flag=true;
		}
		return flag;
	}
	@Override
	public boolean reduceMoney(int u_id, double u_money,HttpServletRequest request) {
		boolean flag=false;
		int a=userDao.reduceMoney(u_id, u_money);
		UserInfo user=userDao.selectUserById(u_id);
		HttpSession session=request.getSession();
		session.setAttribute("user", user);
		String u_nick=userDao.selectUserNameById(u_id);
		String al_trans="用户id:"+u_id+",用户昵称:"+u_nick+"账户花费:"+u_money+"元";
		String al_time=DateFormat.getCurrentTime(DateFormat.DEFAULT_DATE_FORMAT_SEC);
		AccountLog accountLog=new AccountLog(u_id, al_trans, al_time);
		int b=userDao.insertAccountLog(accountLog);
		if(a>0&&b>0){
			flag=true;
		}
		return flag;
	}
	@Override
	public int sumValue(int u_id) {
		return userDao.sumValue(u_id);
	}
	@Override
	public List<UserInfo> selectAllUser(int pageIndex) {
		
		return userDao.selectAllUser(pageIndex);
	}
	@Override
	public List<Car> showCar(int u_id,int pageIndex) {
		
		return userDao.showCar(u_id,pageIndex);
	}
	@Override
	public int deleteCarById(int c_id) {
		
		return userDao.deleteCarById(c_id);
	}
	
	@Override
	public int countuser() {
		
		return userDao.countuser();
	}
	@Override
	public UserInfo selectHeadAndNick(int u_id) {
		
		return userDao.selectHeadAndNick(u_id);
	}
	@Override
	public int countCar(int u_id) {
		int a=userDao.countCar(u_id);
		return (a-1)/6+1;
	}
	@Override
	public int updateTotal(int u_id) {
		
		return userDao.updateTotal(u_id);
	}
	@Override
	public int insertVisitor(Visitor visitor) {
		
		return userDao.insertVisitor(visitor);
	}

	@Override
	public int createCarClub(UserInfo user,int u_id) {
		user.setU_name(TransCoding.transCoding(user.getU_name()));
		user.setU_addr(TransCoding.transCoding(user.getU_addr()));
		return userDao.createCarClub(user.getU_name(),user.getU_addr(),user.getU_idcard(),u_id);
	}

	@Override
	public int checkFriends(int u_id, int fu_id) {
		
		return userDao.checkFriends(u_id, fu_id);
	}
	@Override
	public int addFriendMsg(AddFriends addfriends) {
		
		return userDao.addFriendMsg(addfriends);
	}
	@Override
	public List<AddFriends> selectNewAddFriendsMsg(int ad_fid, int pageIndex) {
		List<AddFriends> list=userDao.selectNewAddFriendsMsg(ad_fid, pageIndex);
		for(AddFriends addFriends:list){
			userDao.updateAddFriendsMsg(addFriends.getAd_id());
		}
		return list;
	}
	@Override
	public List<AddFriends> selectAllAddFriendsMsg(int ad_fid, int pageIndex) {
		
		return userDao.selectAllAddFriendsMsg(ad_fid, pageIndex);
	}

	
	@Override
	public int countNewAddFriendsMsg(int ad_fid) {
		
		return userDao.countNewAddFriendsMsg(ad_fid);
	}
	
	
	@Override
	public int countAddFriendsMsg(int ad_fid) {
		int a=userDao.countAddFriendsMsg(ad_fid);
		return (a-1)/10+1;
	}
	@Override
	public int countNewAddFriendsMsgPage(int ad_fid) {
		int a=userDao.countNewAddFriendsMsg(ad_fid);
		return (a-1)/10+1;
	}
	@Override
	public int deleteAddFriendsMsg(int ad_id) {
		
		return userDao.deleteAddFriendsMsg(ad_id);
	}
	@Override
	public int updateAgree(int ad_id) {
		return userDao.updateAgree(ad_id);
	}
	@Override
	public int updateAddFriendsReply(int ad_id) {
		
		return 0;
	}
	@Override
	public int countNewAddFriendsReply(int ad_uid) {
		
		return userDao.countNewAddFriendsReply(ad_uid);
	}
	@Override
	public List<AddFriends> selectNewAddFriendsReply(int ad_uid, int pageIndex) {
		List<AddFriends> list=userDao.selectNewAddFriendsReply(ad_uid, pageIndex);
		for(AddFriends add:list){
			userDao.updateAddFriendsReply(add.getAd_id());
		}
		return list;
	}
	@Override
	public int updateNo(int ad_id) {
		
		return userDao.updateNo(ad_id);
	}
	@Override
	public int countNewAddFriendsReplyPage(int ad_uid) {
		int a=userDao.countNewAddFriendsReply(ad_uid);
		return (a-1)/10+1;
	}
	@Override
	public int countAddFriendsMsgReply(int ad_uid) {
		int a=userDao.countAddFriendsMsgReply(ad_uid);
		return (a-1)/10+1;
	}
	@Override
	public List<AddFriends> selectAllAddFriendsMsgReply(int ad_uid,
			int pageIndex) {
		
		return userDao.selectAllAddFriendsMsgReply(ad_uid, pageIndex);
	}

	@Override
	public List<UserInfo> userRank() {
		return userDao.userRank();
	}

	@Override
	public void updateUCon(int u_id) {
		int u_con=userDao.sumValue(u_id);
		userDao.updateUCon(u_id, u_con);
		
	}
	@Override
	public void updateExp(int u_id, int u_exp,HttpServletRequest request) {
		userDao.updateExp(u_id, u_exp);
		int u_ex=userDao.selectUserExp(u_id);
		List<Levels> list=userDao.selectLevels();
		String u_level="";
		for(Levels level:list){
			if(level.getLev_lefboun()<=u_ex&level.getLev_rigboun()>=u_ex){
				u_level=level.getLev_name();
				break;
			}	
		}
		userDao.changeLevel(u_id, u_level);
		HttpSession session =request.getSession();
		UserInfo user=userDao.selectUserById(u_id);
		session.setAttribute("user", user);
		
	}
	@Autowired
	JoinAppliDao joinAppliDao;
	@Override
	public int isCreateClub(int u_id) {
		int row;
		String ja_status=joinAppliDao.selectJaStatus(u_id);
		String an_status=userDao.selectAn_status(u_id);
		int club_id=userDao.selectClub_id(u_id);
		if((ja_status==null||ja_status.equals("拒绝"))&&(an_status==null||an_status.equals("未通过"))&&(club_id==0)){
			row=1;
		}else{
			row=2;
		}
		return row;
	}
	@Override
	public int countVisitor(int v_uid2) {
		
		return userDao.countVisitor(v_uid2);
	}
	@Override
	public int countVisitorPage(int v_uid2) {
		int a=userDao.countVisitor(v_uid2);
		
		return (a-1)/10+1;
	}
	

}
