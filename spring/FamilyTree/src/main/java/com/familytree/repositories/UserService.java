package com.familytree.repositories;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.familytree.beans.User;
import com.familytree.exceptions.GeneralException;

/**
 * A Service class for retrieving and modifying User data.
 */
@Service("UserService")
public class UserService {

    @Autowired
    private UserRepository UserRepository;
        
    public UserService() {
        super();
    }
    /**
     * Creates a User service 
     * Instantiates repositories
     * @param UserRepository DAO for retrieving and modifying User data.
     */
    public UserService(UserRepository UserRepository) {
        super();
        this.UserRepository = UserRepository;
    }

    /**
     * Returns all users.
     * @return A list of all the Users in the database.
     * @throws GeneralException 
     */
    public List<User> getAllUsers() throws GeneralException {
        List<User> UserList = UserRepository.findAll();
        
        if (UserList != null && !UserList.isEmpty()) {
            return UserList;
        } else {
            throw new GeneralException("No Users found");
        }
    }
    
    
    /**
     * Find a User by id.
     * @param id The id of the User to find.
     * @return The User with the given id if it exists; otherwise, null is returned.
     */
    public User getUserByID(Integer id) throws GeneralException {
    	if(id!= null) {
	        User User = UserRepository.findUserByUserID(id);
	        
	        if(User != null) {
	            return User;
	        } else {
	            throw new GeneralException("User by id: " + id + " was not found");
	        }
    	}else {
            throw new GeneralException("User ID is empty or null");
        }
    }
    /**
     * Find a User by username.
     * @param username The username of the User to find.
     * @return The User with the given username if it exists; otherwise, null is returned.
     */
    public User getUserByUsername(String username) throws GeneralException {
    	if (username !=null && !username.isEmpty() ) {
	        User User = UserRepository.findUserByUsername(username);
	    	
	        if(User != null) {
	            return User;
	        }else {
	            throw new GeneralException("User by username: " + username + " was not found");
	        }
        } else {
            throw new GeneralException("Username is null or empty");
        }
    }
    /**
     * Find a User by email.
     * @param username The email of the User to find.
     * @return The User with the given email if it exists; otherwise, null is returned.
     */
    public User getUserByEmail(String email) throws GeneralException {
    	if (email !=null && !email.isEmpty() ) {
	        User user = UserRepository.findUserByEmail(email);
	    	
	        if(user != null) {
	            return user;
	        }else {
	            throw new GeneralException("User by email: " + email + " was not found");
	        }
        } else {
            throw new GeneralException("Email is null or empty");
        }
    }
    /**
     * Find a User by phone number.
     * @param username The phone number of the User to find.
     * @return The User with the given phone number if it exists; otherwise, null is returned.
     */
    public User getUserByPhoneNumber(String phoneNumber) throws GeneralException {
    	if (phoneNumber !=null && !phoneNumber.isEmpty() ) {
	        User user = UserRepository.findUserByPhoneNumber(phoneNumber);
	    	
	        if(user != null) {
	            return user;
	        }else {
	            throw new GeneralException("User by phone number: " + phoneNumber + " was not found");
	        }
        } else {
            throw new GeneralException("Phone number is null or empty");
        }
    }
    /**
     * Retrieves a number of users by a set of user ID's
     * @param UserIds
     * @return List<User>
     * @throws GeneralException 
     */
    public List<User> getUsers(Set<Integer> userIDs) throws GeneralException {
    	if(userIDs !=null && userIDs.isEmpty()) {
    		List<User> users = UserRepository.findUsersByUserIDIn(userIDs);
    		if(users != null && !users.isEmpty()) {
    			return users;
    		}else {
                throw new GeneralException("Users not found by user ID's in " + userIDs.toString());
            }
    	}else {
            throw new GeneralException("Set of user ID's is null or empty");
        }
    }
    /**
     * Adds a user to the database
     * @param User
     * @return saved User
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public Integer addUser(User user) throws GeneralException {
        user.setUserID(null);
        UserRepository.save(user);
        return user.getUserID();
    }    
   
    /**
     * Updates a user in the database
     * @param user
     * @return
     * @throws GeneralException
     */
    @Transactional(rollbackOn = Exception.class)
    public User updateUser(User user) throws GeneralException {
        User existing = getUserByID(user.getUserID());
        
        if(existing == null)
            return null;
        existing.copyAll(user);
        //ReflectionUtils.deepCopyNonNull(existing, User);
        
        user = UserRepository.save(existing);

        return user;
    }    
}