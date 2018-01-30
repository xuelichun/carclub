package com.zeepn.utils;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

@Component
@Alias("AUJSON")
public class AUJSON {
	private int aj_pid;
	private String aj_clubname;
	private String aj_clubdomn;
	private String aj_cb;
	private String aj_cd;
	private String aj_clubpro;
	private String aj_clubcity;
	private String aj_uname;
	private String aj_usex;
	private String aj_uidcard;
	private String aj_upro;
	private String aj_ucity;
	private String aj_uaddr;
	private String aj_uemail;
	private String aj_uphone;
	public AUJSON() {
	}
	public AUJSON(String aj_clubname, String aj_clubdomn, String aj_cb,
			String aj_cd, String aj_clubpro, String aj_clubcity,
			String aj_uname, String aj_usex, String aj_uidcard, String aj_upro,
			String aj_ucity, String aj_uaddr, String aj_uemail, String aj_uphone) {
		this.aj_clubname = aj_clubname;
		this.aj_clubdomn = aj_clubdomn;
		this.aj_cb = aj_cb;
		this.aj_cd = aj_cd;
		this.aj_clubpro = aj_clubpro;
		this.aj_clubcity = aj_clubcity;
		this.aj_uname = aj_uname;
		this.aj_usex = aj_usex;
		this.aj_uidcard = aj_uidcard;
		this.aj_upro = aj_upro;
		this.aj_ucity = aj_ucity;
		this.aj_uaddr = aj_uaddr;
		this.aj_uemail = aj_uemail;
		this.aj_uphone = aj_uphone;
	}
	public AUJSON(int aj_pid, String aj_clubname, String aj_clubdomn,
			String aj_cb, String aj_cd, String aj_clubpro, String aj_clubcity,
			String aj_uname, String aj_usex, String aj_uidcard, String aj_upro,
			String aj_ucity, String aj_uaddr, String aj_uemail, String aj_uphone) {
		this.aj_pid = aj_pid;
		this.aj_clubname = aj_clubname;
		this.aj_clubdomn = aj_clubdomn;
		this.aj_cb = aj_cb;
		this.aj_cd = aj_cd;
		this.aj_clubpro = aj_clubpro;
		this.aj_clubcity = aj_clubcity;
		this.aj_uname = aj_uname;
		this.aj_usex = aj_usex;
		this.aj_uidcard = aj_uidcard;
		this.aj_upro = aj_upro;
		this.aj_ucity = aj_ucity;
		this.aj_uaddr = aj_uaddr;
		this.aj_uemail = aj_uemail;
		this.aj_uphone = aj_uphone;
	}
	public int getAj_pid() {
		return aj_pid;
	}
	public void setAj_pid(int aj_pid) {
		this.aj_pid = aj_pid;
	}
	public String getAj_clubname() {
		return aj_clubname;
	}
	public void setAj_clubname(String aj_clubname) {
		this.aj_clubname = aj_clubname;
	}
	public String getAj_clubdomn() {
		return aj_clubdomn;
	}
	public void setAj_clubdomn(String aj_clubdomn) {
		this.aj_clubdomn = aj_clubdomn;
	}
	public String getAj_cb() {
		return aj_cb;
	}
	public void setAj_cb(String aj_cb) {
		this.aj_cb = aj_cb;
	}
	public String getAj_cd() {
		return aj_cd;
	}
	public void setAj_cd(String aj_cd) {
		this.aj_cd = aj_cd;
	}
	public String getAj_clubpro() {
		return aj_clubpro;
	}
	public void setAj_clubpro(String aj_clubpro) {
		this.aj_clubpro = aj_clubpro;
	}
	public String getAj_clubcity() {
		return aj_clubcity;
	}
	public void setAj_clubcity(String aj_clubcity) {
		this.aj_clubcity = aj_clubcity;
	}
	public String getAj_uname() {
		return aj_uname;
	}
	public void setAj_uname(String aj_uname) {
		this.aj_uname = aj_uname;
	}
	public String getAj_usex() {
		return aj_usex;
	}
	public void setAj_usex(String aj_usex) {
		this.aj_usex = aj_usex;
	}
	public String getAj_uidcard() {
		return aj_uidcard;
	}
	public void setAj_uidcard(String aj_uidcard) {
		this.aj_uidcard = aj_uidcard;
	}
	public String getAj_upro() {
		return aj_upro;
	}
	public void setAj_upro(String aj_upro) {
		this.aj_upro = aj_upro;
	}
	public String getAj_ucity() {
		return aj_ucity;
	}
	public void setAj_ucity(String aj_ucity) {
		this.aj_ucity = aj_ucity;
	}
	public String getAj_uaddr() {
		return aj_uaddr;
	}
	public void setAj_uaddr(String aj_uaddr) {
		this.aj_uaddr = aj_uaddr;
	}
	public String getAj_uemail() {
		return aj_uemail;
	}
	public void setAj_uemail(String aj_uemail) {
		this.aj_uemail = aj_uemail;
	}
	public String getAj_uphone() {
		return aj_uphone;
	}
	public void setAj_uphone(String aj_uphone) {
		this.aj_uphone = aj_uphone;
	}
	@Override
	public String toString() {
		return "AUJSON [aj_pid=" + aj_pid + ", aj_clubname=" + aj_clubname
				+ ", aj_clubdomn=" + aj_clubdomn + ", aj_cb=" + aj_cb
				+ ", aj_cd=" + aj_cd + ", aj_clubpro=" + aj_clubpro
				+ ", aj_clubcity=" + aj_clubcity + ", aj_uname=" + aj_uname
				+ ", aj_usex=" + aj_usex + ", aj_uidcard=" + aj_uidcard
				+ ", aj_upro=" + aj_upro + ", aj_ucity=" + aj_ucity
				+ ", aj_uaddr=" + aj_uaddr + ", aj_uemail=" + aj_uemail
				+ ", aj_uphone=" + aj_uphone + "]";
	}
	
}
	