package com.zeepn.dao;
import java.util.List;
import org.springframework.stereotype.Repository;
import com.zeepn.bean.Club;
@Repository("clubRankDao")
public interface ClubRankDao {
	
	/**
	 * 车友会排行（按人数）
	 * @return 车友会列表
	 */
	public List<Club> clubRank();

	
	/**
	 * 车友会排行榜（按贡献值）
	 * @return 车友会列表
	 */
	public List<Club> clubRankIndex();
}
