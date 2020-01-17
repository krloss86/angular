package ar.com.educacionit.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ar.com.educacionit.dao.ProfileDAO;
import ar.com.educacionit.domain.Profile;

@Path("profile")
public class ProfileService {

	private static Profile currentProfile = ProfileDAO.profile;
	
	@GET
	@Path("/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProfile(@PathParam("username") String username) {
		
		Profile profile = currentProfile;
		
		return Response.ok(profile).build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response udpateProducto(Profile newProfile) {
		
		Profile updateProfile = currentProfile;
		
		updateProfile.setUserName(newProfile.getUserName());
		
		updateProfile.setCurso(newProfile.getCurso());

		return Response.ok().entity(updateProfile).build();
		
	}

}
