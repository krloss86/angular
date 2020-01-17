package ar.com.educacionit.domain;

/**
 * @author chlopez
 *
 */
public class Profile {

	private String username;
	
	private String lastName;
	
	private Curso curso;
	
	public Profile() {
		
	}
	
	public Profile(String username, String lastName, Curso curso) {
		super();
		this.username = username;
		this.lastName = lastName;
		this.curso = curso;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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