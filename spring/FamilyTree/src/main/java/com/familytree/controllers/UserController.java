package com.familytree.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.familytree.beans.Login;
import com.familytree.beans.User;
import com.familytree.exceptions.GeneralException;
import com.familytree.services.GenericService;
import com.familytree.services.LoginService;
import com.familytree.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController extends GenericController<User>{
	private UserService userService;
	private LoginService loginService;
	private User user;
	private Login login;
	@Autowired
	public UserController(UserService userService, LoginService loginService, User user, Login login) {
		super(userService);
		this.userService = userService;
		this.loginService=loginService;
		this.user=user;
		this.login=login;
	}
	@GetMapping("/username/{username}")
	public ResponseEntity<User> getByUsername(@PathVariable String username) throws GeneralException{
		this.login=loginService.getLoginByUsername(username);
		if(login!=null) {
			this.user=login.getUser();
		}else {
			logger.info("Unable to get login by username: " + username);
		}
		if(this.user!=null) {
			logger.info("Returning request: " + this.user.toString());
			return new ResponseEntity<User>(this.user, HttpStatus.OK);
		}else {
			String msg ="No entry found with username: " + username;
			logger.info(msg);
			throw new GeneralException(msg);
		}
	}
}
