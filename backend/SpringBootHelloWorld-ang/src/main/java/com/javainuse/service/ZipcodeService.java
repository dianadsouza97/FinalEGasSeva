package com.javainuse.service;

import java.util.Optional;

import com.javainuse.model.Zipcode;

public interface ZipcodeService{



	Optional<Zipcode> findByZipcode(String zip);

	

}
