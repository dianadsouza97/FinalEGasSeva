package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Zipcode;
import com.example.demo.repository.ZipcodeRepository;

@Service
public class ZipcodeServiceImpl implements ZipcodeService{
	@Autowired
	private ZipcodeRepository zipcodeRepository;
	
	public Optional<Zipcode> findByZipcode(String zip) {
		return zipcodeRepository.findByZipcode(zip);
	}
}
