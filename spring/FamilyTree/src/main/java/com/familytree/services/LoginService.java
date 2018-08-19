package com.familytree.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.familytree.beans.Login;
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
    public Login getLoginByUsername(String username) throws GeneralException {
    	if (username !=null && !username.isEmpty() ) {
	        Login login = this.repo.findByUsername(username);
	    	
	        if(login != null) {
	            return login;
	        }
    	}
    	return null;
    }
    /**
     * Find a Login by email.
     * @param Loginname The email of the Login to find.
     * @return The Login with the given email if it exists; otherwise, null is returned.
     */
    public Login getLoginByEmail(String email) throws GeneralException {
    	if (email !=null && !email.isEmpty() ) {
    		Login login = this.repo.findByEmail(email);
	    	
	        if(login != null) {
	            return login;
	        }else {
	            throw new GeneralException("Login by email: " + email + " was not found");
	        }
        } else {
            throw new GeneralException("Email is null or empty");
        }
    }

}
