package com.javainuse.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.model.Employee;
import com.javainuse.service.CustomerService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserAccountController {

	

	
	@Autowired
	private CustomerService customerService;
	@PostMapping("/employees")
	public Employee create(@RequestBody Employee user) {
		customerService.add(user);
		System.out.println(user);
		return user;
	}
	
	
}