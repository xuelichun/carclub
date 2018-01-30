package com.zeepn.bean;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("DynPic")
public class DynPic {
	private int dp_id;
	private int pd_id;
	private String dp_msg;
	public DynPic() {

	}

	public DynPic(int dp_id, int pd_id, String dp_msg) {

		this.dp_id = dp_id;
		this.pd_id = pd_id;
		this.dp_msg = dp_msg;
	}

	public DynPic(int pd_id, String dp_msg) {

		this.pd_id = pd_id;
		this.dp_msg = dp_msg;
	}

	public DynPic(int pd_id) {
		this.pd_id = pd_id;
	}


	public int getDp_id() {
		return dp_id;
	}
	public void setDp_id(int dp_id) {
		this.dp_id = dp_id;
	}
	public int getPd_id() {
		return pd_id;
	}
	public void setPd_id(int pd_id) {
		this.pd_id = pd_id;
	}
	public String getDp_msg() {
		return dp_msg;
	}
	public void setDp_msg(String dp_msg) {
		this.dp_msg = dp_msg;
	}
	@Override
	public String toString() {
		return "DynPic [dp_id=" + dp_id + ", pd_id=" + pd_id + ", dp_msg="
				+ dp_msg + "]";
	}
	
}
	

