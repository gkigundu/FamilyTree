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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.familytree.DTO.DTO;
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
	protected DTO dto;
	@Autowired
	public LoginController(
			@Qualifier("LoginService")LoginService loginService,
			@Qualifier("FamilyService")GenericService<Family> familyService, 
			@Qualifier("UserService")UserService userService,
			Family family,
			User user,
			Login login,
			DTO dto
			) {
		super(loginService);
		this.loginService = loginService;
		this.familyService=familyService;
		this.userService =userService;
		this.family=family;
		this.user=user;
		this.login=login;
		this.dto=dto;
	}
	@GetMapping("/username/{username}")
	public ResponseEntity<DTO> getByUsername(@PathVariable String username) throws GeneralException{
		this.login=loginService.getLoginByUsername(username);
		if(this.login!=null) {
			logger.info(this.login.toString());
			try {
				dto.nullifyAllFields();
			} catch (IllegalArgumentException | IllegalAccessException e ) {
				logger.error(e.getMessage());
				logger.error("unable to nullify DTO fields");
				e.printStackTrace();
			} 
			dto.setStatus(true);
			dto.setLogin(login);
			return new ResponseEntity<DTO>(this.dto, HttpStatus.OK);
		}else {
			String msg ="No entry found with username: " + username;
			logger.info(msg);
			throw new GeneralException(msg);
		}
	}
	@GetMapping("/email/{email}")
	public ResponseEntity<DTO> getByEmail(@PathVariable String email) throws GeneralException{
		this.login=loginService.getLoginByEmail(email);
		if(this.login!=null) {
			logger.info(this.login.toString());
			try {
				this.dto.nullifyAllFields();
			} catch (IllegalArgumentException | IllegalAccessException e) {
				logger.error(e.getMessage());
				logger.error("unable to nullify DTO fields");
				e.printStackTrace();
			}
			dto.setStatus(true);
			dto.setLogin(login);
			return new ResponseEntity<DTO>(this.dto, HttpStatus.OK);
		}else {
			String msg ="No entry found with email: " + email;
			logger.info(msg);
			throw new GeneralException(msg);
		}
	}
	@PostMapping("/login")
	@ResponseBody
	public ResponseEntity<DTO> login(@RequestBody Login login) throws GeneralException{
		logger.info("Received login: " +login.toString());
		if(login==null 
				|| (login.getPassword()==null || login.getPassword().isEmpty()) 
				||((login.getUsername()==null || login.getUsername().isEmpty())
				&&(login.getEmail()==null || login.getEmail().isEmpty()))) {
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
			this.dto.setLogin(this.login);
			logger.info("This login is : " + this.login.toString());
			this.user = this.userService.getByID(this.login.getUser().getId());
			logger.info("This user is : " + this.user.toString());
			this.dto.setUser(this.user);
			this.family=this.familyService.getByID(this.user.getFamily().getId());
			logger.info("This family is : " + this.family.toString());
			this.dto.setFamily(this.family);
			logger.info("Returning DTO " + this.dto.toString());
			return new ResponseEntity<DTO>(this.dto, HttpStatus.OK);
		}else {
			throw new GeneralException("User not found");
		}
	}
	@PostMapping("/register")
	public ResponseEntity<DTO> register(@RequestBody Login login) throws GeneralException{
		if(login==null || !login.hasRequired()) {
			throw new GeneralException("Null registration information");
		}
		logger.info("Received login: " + login.toString());
		//Check existing
		if(loginService.getLoginByEmail(login.getEmail())!= null ) {
			throw new GeneralException("email is previously registered");
		}
		if(loginService.getLoginByUsername(login.getUsername())!=null) {
			throw new GeneralException("username is already taken");
		}
				
		HttpStatus status = HttpStatus.OK;		
		try{
			this.family.nullifyAllFields();
			this.user.nullifyAllFields();
			this.login.nullifyAllFields();
			
			this.login.copyAll(login);
			
			this.family=familyService.add(this.family);
			
			this.user.setFamily(this.family);
			this.user=userService.add(this.user);
			
			this.login.setUser(this.user);
			this.login=loginService.add(this.login);
			
		}catch(Exception e) {
			throw new GeneralException("Error while registering: 1");
		}
		if(this.user.getId()!=null) {
			this.dto.setLogin(this.login);
			this.dto.setUser(this.user);
			this.dto.setFamily(this.family);
			this.dto.setStatus(true);
			logger.info("Returning DTO " + this.dto.toString());
			return new ResponseEntity<DTO>(this.dto,status);
		}else {
			throw new GeneralException("Error while registering: 2");
		}
	}
	@GetMapping("/register/{familyId}")
	public ResponseEntity<Login> register(@RequestBody Login login, @PathVariable Integer familyId) throws GeneralException{
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
			login.setId(user.getId());
			login.setUser(user);
			login = loginService.add(login);
		}else {
			throw new GeneralException("User not found");
		}
		if(user!=null) {
			return new ResponseEntity<Login>(this.login,status);
		}else {
			throw new GeneralException("User not found");
		}
	}
}
