package ar.com.educacionit.domain;

/**
 * @author chlopez
 *
 */
public class Profile {

	private String userName;
	
	private String lastName;
	
	private Curso curso;
	
	public Profile() {
		
	}
	
	public Profile(String userName, String lastName, Curso curso) {
		super();
		this.userName = userName;
		this.lastName = lastName;
		this.curso = curso;
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
	
}