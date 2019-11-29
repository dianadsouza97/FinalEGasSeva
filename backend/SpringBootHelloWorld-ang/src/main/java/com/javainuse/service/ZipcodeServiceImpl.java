package com.javainuse.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javainuse.model.Zipcode;
import com.javainuse.repository.ZipcodeRepository;
@Service
public class ZipcodeServiceImpl implements ZipcodeService{
	@Autowired
	private ZipcodeRepository zipcodeRepository;
	
	public Optional<Zipcode> findByZipcode(String zip) {
		return zipcodeRepository.findByZipcode(zip);
	}
}
