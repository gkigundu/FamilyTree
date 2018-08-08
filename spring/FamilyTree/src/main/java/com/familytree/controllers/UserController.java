package com.familytree.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.familytree.beans.User;
import com.familytree.exceptions.GeneralException;
import com.familytree.repositories.UserService;

@RestController
@RequestMapping
public class UserController {
	private UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	@GetMapping("/users")
	public ResponseEntity<List<User>> getUsers(){
		List<User> users = null;
		HttpStatus status = HttpStatus.OK;
		try{
			users = userService.getAllUsers();
		}catch(GeneralException e) {
			status = HttpStatus.NO_CONTENT;
		}catch(Exception e) {
			status = HttpStatus.BAD_GATEWAY;
		}
		return new ResponseEntity<>(users,status);
	}
}
