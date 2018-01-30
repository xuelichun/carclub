package com.zeepn.dao;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.zeepn.bean.InteAcqrec;

@Repository("inteAcqrecDao")
public interface InteAcqrecDao {
	
	public int insertInteAcqrec(InteAcqrec inteAcqrec);
	
	public List<InteAcqrec> selectInteAcqrecs(int u_id);

}
