package ar.com.educacionit.dao;

import ar.com.educacionit.domain.Curso;
import ar.com.educacionit.domain.Profile;

public class ProfileDAO {

	public static Profile profile = getProfile();
	
	private static Profile getProfile() {
		
		Profile profile = new Profile("educacionit", "educacionit", "educacionit,", new Curso("angular", "Sabado", "mañana", "10-14"), "token");
		
		return profile;
	}
}
