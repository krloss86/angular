package ar.com.educacionit.domain;

/**
 * @author chlopez
 *
 */
public class Profile {

	private String username;
	
	private Curso curso;
	
	public Profile() {
		
	}
	
	public Profile(String username, Curso curso) {
		super();
		this.username = username;
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
	

}