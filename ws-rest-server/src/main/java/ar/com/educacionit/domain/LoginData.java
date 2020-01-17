package ar.com.educacionit.domain;

public class LoginData {

	private String userName;
	
	private String password;

	public LoginData() {
		// TODO Auto-generated constructor stub
	}
	
	public LoginData(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
