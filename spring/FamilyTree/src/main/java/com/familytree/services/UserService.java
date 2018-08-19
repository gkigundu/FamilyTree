package com.familytree.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.familytree.beans.User;
import com.familytree.repositories.GenericRepository;
import com.familytree.repositories.UserRepository;

/**
 * A Service class for retrieving and modifying User data.
 */
@Service("UserService")
@Qualifier("UserService")
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class UserService extends GenericService<User> {
        
    public UserService() {
        super();
    }
    /**
     * Creates a User service 
     * Instantiates repositories
     * @param UserRepository DAO for retrieving and modifying User data.
     */
    @Autowired
    public UserService(UserRepository repo) {
        super((GenericRepository<User>) repo);
        this.repo = repo;
    }
}