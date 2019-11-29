package com.javainuse.controllers;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.model.Employee;
import com.javainuse.model.Zipcode;
import com.javainuse.service.CustomerService;
import com.javainuse.service.ZipcodeService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserAccountController {

	@Autowired
	private ZipcodeService zipcodeService;
	
	@Autowired
	private CustomerService customerService;
	@PostMapping("/employees")
	public Employee create(@RequestBody Employee user) {
		customerService.add(user);
		System.out.println(user);
		return user;
	}
	@GetMapping("/zipcode/{zip}")
	public Optional<Zipcode> getZipcode(@PathVariable String zip) {
		return zipcodeService.findByZipcode(zip);
		
	}
	@PostMapping("/sms")
	public String smsService() {
		
		return "";
	}
	
}