package com.familytree.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/projects")
public class ViewController {
	
	@RequestMapping("/family/familytree")
	public String getView() {
		return "/";
	}
}
