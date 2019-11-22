package com.javainuse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javainuse.model.Employee;
import com.javainuse.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	
	@Autowired
		private CustomerRepository customerRepository; 
	@Override
	public void add(Employee customer) {
			customerRepository.save(customer);
	}
	
	
}
