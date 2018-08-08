package com.familytree.repositories;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.familytree.beans.Login;
import com.familytree.exceptions.GeneralException;

public class LoginService {
    @Autowired
    private LoginRepository LoginRepository;
        
    public LoginService() {
        super();
    }
    /**
     * Creates a Login service 
     * Instantiates repositories
     * @param LoginRepository DAO for retrieving and modifying Login data.
     */
    public LoginService(LoginRepository LoginRepository) {
        super();
        this.LoginRepository = LoginRepository;
    }

    /**
     * Returns all Logins.
     * @return A list of all the Logins in the database.
     * @throws GeneralException 
     */
    public List<Login> getAllLogins() throws GeneralException {
        List<Login> LoginList = LoginRepository.findAll();
        
        if (LoginList != null && !LoginList.isEmpty()) {
            return LoginList;
        } else {
            throw new GeneralException("No Logins found");
        }
    }
    
    
    /**
     * Find a Login by id.
     * @param id The id of the Login to find.
     * @return The Login with the given id if it exists; otherwise, null is returned.
     */
    public Login getLoginByID(Integer id) throws GeneralException {
    	if(id!= null) {
	        Login Login = LoginRepository.findLoginByUserID(id);
	        
	        if(Login != null) {
	            return Login;
	        } else {
	            throw new GeneralException("Login by id: " + id + " was not found");
	        }
    	}else {
            throw new GeneralException("Login ID is empty or null");
        }
    }
    /**
     * Find a Login by Username.
     * @param Loginname The Username of the Login to find.
     * @return The Login with the given Username if it exists; otherwise, null is returned.
     */
    public Login getLoginByLoginname(String username) throws GeneralException {
    	if (username !=null && !username.isEmpty() ) {
	        Login Login = LoginRepository.findLoginByUsername(username);
	    	
	        if(Login != null) {
	            return Login;
	        }else {
	            throw new GeneralException("Login by Loginname: " + username + " was not found");
	        }
        } else {
            throw new GeneralException("Loginname is null or empty");
        }
    }
    /**
     * Find a Login by email.
     * @param Loginname The email of the Login to find.
     * @return The Login with the given email if it exists; otherwise, null is returned.
     */
    public Login getLoginByEmail(String email) throws GeneralException {
    	if (email !=null && !email.isEmpty() ) {
	        Login Login = LoginRepository.findLoginByEmail(email);
	    	
	        if(Login != null) {
	            return Login;
	        }else {
	            throw new GeneralException("Login by email: " + email + " was not found");
	        }
        } else {
            throw new GeneralException("Email is null or empty");
        }
    }
    /**
     * Find a Login by phone number.
     * @param Loginname The phone number of the Login to find.
     * @return The Login with the given phone number if it exists; otherwise, null is returned.
     */
    public Login getLoginByPhoneNumber(String phoneNumber) throws GeneralException {
    	if (phoneNumber !=null && !phoneNumber.isEmpty() ) {
	        Login Login = LoginRepository.findLoginByPhoneNumber(phoneNumber);
	    	
	        if(Login != null) {
	            return Login;
	        }else {
	            throw new GeneralException("Login by phone number: " + phoneNumber + " was not found");
	        }
        } else {
            throw new GeneralException("Phone number is null or empty");
        }
    }
    /**
     * Retrieves a number of Logins by a set of Login ID's
     * @param UserIDs
     * @return List<Login>
     * @throws GeneralException 
     */
    public List<Login> getLogins(Set<Integer> userIDs) throws GeneralException {
    	if(userIDs !=null && userIDs.isEmpty()) {
    		List<Login> logins = LoginRepository.findLoginsByUserIDIn(userIDs);
    		if(logins != null && !logins.isEmpty()) {
    			return logins;
    		}else {
                throw new GeneralException("Logins not found by Login ID's in " + userIDs.toString());
            }
    	}else {
            throw new GeneralException("Set of Login ID's is null or empty");
        }
    }
    /**
     * Adds a Login to the database
     * @param Login
     * @return saved Login
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public Integer addLogin(Login Login) throws GeneralException {
        Login.setUserID(null);
        LoginRepository.save(Login);
        return Login.getUserID();
    }    
   
    /**
     * Updates a Login in the database
     * @param Login
     * @return
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public Login updateLogin(Login login) throws GeneralException {
        Login existing = getLoginByID(login.getUserID());
        
        if(existing == null)
            return null;
        existing.copyAll(login);
        //ReflectionUtils.deepCopyNonNull(existing, Login);
        
        login = LoginRepository.save(existing);

        return login;
    }
}
