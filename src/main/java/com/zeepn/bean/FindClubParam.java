package com.zeepn.bean;

import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;


@Component
@Alias("FindClubParam")
public class FindClubParam {
	private String fcp_pro;
	private String fcp_city;
	private int fcp_cbId;
	private int fcp_cdId;
	public FindClubParam() {
	}
	public FindClubParam(String fcp_city, int fcp_cbId, int fcp_cdId) {
		this.fcp_city = fcp_city;
		this.fcp_cbId = fcp_cbId;
		this.fcp_cdId = fcp_cdId;
	}
	public FindClubParam(String fcp_pro, String fcp_city, int fcp_cbId,
			int fcp_cdId) {
		this.fcp_pro = fcp_pro;
		this.fcp_city = fcp_city;
		this.fcp_cbId = fcp_cbId;
		this.fcp_cdId = fcp_cdId;
	}
	public String getFcp_pro() {
		return fcp_pro;
	}
	public void setFcp_pro(String fcp_pro) {
		this.fcp_pro = fcp_pro;
	}
	public String getFcp_city() {
		return fcp_city;
	}
	public void setFcp_city(String fcp_city) {
		this.fcp_city = fcp_city;
	}
	public int getFcp_cbId() {
		return fcp_cbId;
	}
	public void setFcp_cbId(int fcp_cbId) {
		this.fcp_cbId = fcp_cbId;
	}
	public int getFcp_cdId() {
		return fcp_cdId;
	}
	public void setFcp_cdId(int fcp_cdId) {
		this.fcp_cdId = fcp_cdId;
	}
	@Override
	public String toString() {
		return "FindClubParam [fcp_pro=" + fcp_pro + ", fcp_city=" + fcp_city
				+ ", fcp_cbId=" + fcp_cbId + ", fcp_cdId=" + fcp_cdId + "]";
	}
}
