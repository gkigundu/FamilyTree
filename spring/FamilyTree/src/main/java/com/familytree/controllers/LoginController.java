package com.familytree.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.familytree.beans.Family;
import com.familytree.beans.Login;
import com.familytree.beans.User;
import com.familytree.exceptions.GeneralException;
import com.familytree.services.GenericService;
import com.familytree.services.LoginService;
import com.familytree.services.UserService;

@RestController
@RequestMapping("/login")
public class LoginController extends GenericController<Login>{
	protected LoginService loginService;
	protected GenericService<Family> familyService;
	protected UserService userService;
	protected Family family;
	protected User user;
	protected Login login;
	@Autowired
	public LoginController(
			@Qualifier("LoginService")LoginService loginService,
			@Qualifier("FamilyService")GenericService<Family> familyService, 
			@Qualifier("UserService")UserService userService,
			Family family,
			User user,
			Login login
			) {
		super(loginService);
		this.loginService = loginService;
		this.familyService=familyService;
		this.userService =userService;
		this.family=family;
		this.user=user;
	}
	@GetMapping("/login")
	public ResponseEntity<User> login(@RequestBody Login login) throws GeneralException{
		if(login==null 
				|| (login.getPassword()==null || login.getPassword().isEmpty()) 
				||((login.getUsername()==null || login.getUsername().isEmpty())
				||(login.getEmail()==null || login.getEmail().isEmpty()))) {
			throw new GeneralException("Null credentials");
		}

		try{
		//Check existing
		if(
				(
						(this.login=loginService.getLoginByEmail(login.getEmail()))!= null 
						|| (this.login=loginService.getLoginByUsername(login.getUsername()))!=null
				)
				&& this.login.hasRequired()
				) {
			
			if(!this.login.getPassword().equals(login.getPassword())) {
				throw new GeneralException("Invalid password");
			}
		}else {
			throw new GeneralException("Null login credentials");
		}

		}catch(Exception e) {
			throw new GeneralException("Server error");
		}
		if(this.login!=null) {
			User user = this.login.getUser();
			user.getFamily();
			user.getFamily().getUsers();
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}else {
			throw new GeneralException("User not found");
		}
	}
	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody Login login) throws GeneralException{
		if(login==null || login.hasRequired()) {
			throw new GeneralException("Null registration information");
		}
		//Check existing
		if(loginService.getLoginByEmail(login.getEmail())!= null ) {
			throw new GeneralException("email is previously registered");
		}
		if(loginService.getLoginByUsername(login.getUsername())!=null) {
			throw new GeneralException("username is already taken");
		}
				
		HttpStatus status = HttpStatus.OK;		
		try{
			family=familyService.add(family);
			user.setFamily(family);
			user=userService.add(user);
			family.addUser(user);
			familyService.save(family);
			login.setUser(user);
			login.setId(user.getID());
			login=loginService.add(login);
		}catch(Exception e) {
			status = HttpStatus.BAD_GATEWAY;
		}
		if(user!=null) {
			return new ResponseEntity<User>(user,status);
		}else {
			throw new GeneralException("User not found");
		}
	}
	@GetMapping("/register/{familyId}")
	public ResponseEntity<User> register(@RequestBody Login login, @PathVariable Integer familyId) throws GeneralException{
		if(login==null || login.hasRequired()) {
			throw new GeneralException("Null registration information");
		}
		//Check existing
		if(loginService.getLoginByEmail(login.getEmail())!= null ) {
			throw new GeneralException("email is previously registered");
		}
		if(loginService.getLoginByUsername(login.getUsername())!=null) {
			throw new GeneralException("username is already taken");
		}
		HttpStatus status = HttpStatus.OK;	
		if(familyId!=null) {
			user=userService.add(user);
			family=familyService.getByID(familyId);
			family.addUser(user);
			family =familyService.save(family);
			login.setId(user.getID());
			login.setUser(user);
			login = loginService.add(login);
		}else {
			throw new GeneralException("User not found");
		}
		if(user!=null) {
			return new ResponseEntity<User>(user,status);
		}else {
			throw new GeneralException("User not found");
		}
	}
}
