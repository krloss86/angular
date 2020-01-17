package ar.com.educacionit.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import ar.com.educacionit.dao.ProfileDAO;
import ar.com.educacionit.domain.Profile;
import ar.com.educacionit.domain.RegisterData;

@Path("user")
public class RegisterService {
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response register(RegisterData registerData) {
		
		Profile profile = ProfileDAO.profile;
		
		profile.setCurso(null);
		
		profile.setUserName(registerData.getUserName());
		
		profile.setLastName(registerData.getLastName());
		
		profile.setFirstName(registerData.getFirstName());
		
		return Response.status(Status.OK).entity(profile).build();
	}

}
