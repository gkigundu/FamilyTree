package com.familytree.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.familytree.beans.Family;
import com.familytree.beans.Login;
import com.familytree.beans.User;
import com.familytree.services.FamilyService;
import com.familytree.services.LoginService;
import com.familytree.services.UserService;

@RestController
@RequestMapping("/family")
public class FamilyController extends GenericController<Family>{
	private UserService userService;
	private LoginService loginService;
	private FamilyService familyservice;
	private User user;
	private Login login;
	private Family family;
	@Autowired
	public FamilyController(UserService userService, LoginService loginService, FamilyService familyService, 
			User user, Login login, Family family) {
		super(familyService);
		this.userService = userService;
		this.loginService=loginService;
		this.familyservice=familyService;
		this.user=user;
		this.login=login;
		this.family=family;
	}
}
