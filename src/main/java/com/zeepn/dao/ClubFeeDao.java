package com.zeepn.dao;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import com.zeepn.bean.ClubFee;

@Repository("clubFeeDao")
public interface ClubFeeDao {
	
	public int updateClubFee(@Param("club_id")int club_id,@Param("cf_money")double cf_money,@Param("cf_grade")int cf_grade);
	
	public int insertClubFee(int club_id);
	
	public ClubFee selectClubFee(int club_id);

}
