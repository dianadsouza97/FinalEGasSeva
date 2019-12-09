package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.model.Login;
import com.example.demo.model.Zipcode;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.service.CustomerService;
import com.example.demo.service.ZipcodeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin("http://localhost:4200")
public class CustomerAccountController {

	@Autowired
	private CustomerService customerService;

	@Autowired
	private ZipcodeService zipcodeService;

	@PostMapping("/customers")
	public Customer create(@RequestBody Customer customer) {
		customerService.add(customer);
		System.out.println(customer);
		return customer;
	}

	@GetMapping("/zipcode/{zip}")
	public Optional<Zipcode> getZipcode(@PathVariable String zip) {
		System.out.println("zip" + zip);
		return zipcodeService.findByZipcode(zip);
	}
	@PostMapping("/login")
	public boolean verifyLogin(@RequestBody Login user) {
		if(customerService.verifyUser(user) == true) {
			return true;
		}
		else {
			return false;
		}
	}
}
