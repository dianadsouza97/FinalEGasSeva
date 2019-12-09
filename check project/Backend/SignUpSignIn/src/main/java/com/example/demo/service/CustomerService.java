package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.model.Login;

public interface CustomerService {
	void add(Customer customer);

	boolean verifyUser(Login user);
}