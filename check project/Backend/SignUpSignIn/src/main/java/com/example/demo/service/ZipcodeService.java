package com.example.demo.service;

import java.util.Optional;

import com.example.demo.model.Zipcode;

public interface ZipcodeService {
	
	Optional<Zipcode> findByZipcode(String zip);
}
