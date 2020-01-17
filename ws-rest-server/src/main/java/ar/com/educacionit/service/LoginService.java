package ar.com.educacionit.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import ar.com.educacionit.dao.ProfileDAO;
import ar.com.educacionit.domain.LoginData;
import ar.com.educacionit.domain.Profile;

@Path("auth")
public class LoginService {
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createProducto(LoginData login) {
		
		Profile profile = ProfileDAO.profile;
		
		profile.setUserName(login.getUserName());
		
		return Response.status(Status.OK).entity(profile).build();
	}

}
