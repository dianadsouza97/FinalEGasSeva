package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.model.Customer;
import com.example.demo.model.Login;
import com.example.demo.repository.CustomerRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
@CrossOrigin("http://localhost:4200")
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	@Override

	public void add(Customer customer) {
		// TODO Auto-generated method stub
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(customer.getPassword());
		customerRepository.save(new Customer(customer.getEmail(), customer.getName(), customer.getContact(),
				customer.getZipcode(), customer.getCity(), customer.getState(), customer.getCountry(),
				customer.getAgency(), hashedPassword));
		//customerRepository.save(customer);
	}

	@Override
	public boolean verifyUser(Login user) {
		// TODO Auto-generated method stub
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		Customer tempCustomer = customerRepository.findByEmail(user.getEmail());
		if(tempCustomer != null) {
			if(passwordEncoder.matches(user.getPassword(), tempCustomer.getPassword())) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}	
}

}
