package com.familytree.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.familytree.beans.User;
import com.familytree.services.GenericService;

@RestController
@RequestMapping("/user")
public class UserController<T extends User> extends GenericController<T>{
	@Autowired
	public UserController(GenericService<T> userService) {
		super(userService);
		this.service = userService;
	}

}
