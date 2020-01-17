package ar.com.educacionit.domain;

/**
 * @author chlopez
 *
 */
public class Profile {

	private String userName;
	
	private String lastName;
	
	private String firstName;
	
	private Curso curso;
	
	private String token;
	
	public Profile() {
		
	}
	
	public Profile(String userName, String lastName, String firstName, Curso curso, String token) {
		super();
		this.userName = userName;
		this.lastName = lastName;
		this.firstName = firstName;
		this.curso = curso;
		this.token = token;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Curso getCurso() {
		return curso;
	}

	
	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
}