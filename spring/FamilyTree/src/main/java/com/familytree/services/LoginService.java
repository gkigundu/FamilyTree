package com.familytree.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.familytree.beans.Login;
import com.familytree.beans.User;
import com.familytree.exceptions.GeneralException;
import com.familytree.repositories.GenericRepository;
import com.familytree.repositories.LoginRepository;
@Service("LoginService")
@Qualifier("LoginService")
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class LoginService extends GenericService<Login> {
    protected LoginRepository repo;
    public LoginService() {
        super();
    }
    /**
     * Creates a Login service 
     * Instantiates repositories
     * @param LoginRepository DAO for retrieving and modifying Login data.
     */
    @Autowired
    public LoginService(LoginRepository repo) {
        super((GenericRepository<Login>)repo);
        this.repo = repo;
    }
    
    /**
     * Find a Login by Username.
     * @param Loginname The Username of the Login to find.
     * @return The Login with the given Username if it exists; otherwise, null is returned.
     */
    public Login getLoginByUsername(String username) {
    	if (username !=null && !username.isEmpty() ) {
        	logger.info("Getting login with username: "+ username);
    		try {
    			Login login= this.repo.findByUsername(username);
    			if(login==null) {
    				logger.info("No entry found with username: " + username);
    				return null;
    			}
    			logger.info("Login Found: " + login.toString());
    			return login;
	    	}catch(Exception e) {
	    		logger.error("Error getting login with username: " + username);
	    		throw e;
	    	}
    	}else {
    		logger.error("getLoginByUsername(): invalid username provided");
    	}
    	return null;
    }
    /**
     * Find a User by Username.
     * @param Loginname The Username of the Login to find.
     * @return The Login with the given Username if it exists; otherwise, null is returned.
     */
    public User getUserByUsername(String username) {
    	if (username !=null && !username.isEmpty() ) {
        	logger.info("Getting login with username: "+ username);
    		try {
    			User user= this.repo.findUserByUsername(username);
    			if(user==null) {
    				logger.info("No entry found with username: " + username);
    				return null;
    			}
    			logger.info("User Found: " + user.toString());
    			return user;
	    	}catch(Exception e) {
	    		logger.error("Error getting login with username: " + username);
	    		throw e;
	    	}
    	}else {
    		logger.error("getUserByUsername(): invalid username provided");
    	}
    	return null;
    }
    /**
     * Find a Login by email.
     * @param Loginname The email of the Login to find.
     * @return The Login with the given email if it exists; otherwise, null is returned.
     */
    public Login getLoginByEmail(String email) {
    	if (email !=null && !email.isEmpty() ) {
        	logger.info("Getting login with email"+ email);
    		try {
    			Login login= this.repo.findByEmail(email);
    			if(login==null) {
    				logger.info("No entry found with email: " + email);
    				return null;
    			}
    			logger.info("Login Found: " + login.toString());
    			return login;
	    	}catch(Exception e) {
	    		logger.error("Error getting login with email: " + email);
	    		throw e;
	    	}
    	}else {
    		logger.error("getLoginByEmail(): invalid email provided");
    	}
    	return null;
    }

}
