package com.javainuse.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.javainuse.model.Zipcode;
@Repository
public interface ZipcodeRepository extends MongoRepository<Zipcode, String> {

	Optional<Zipcode> findByZipcode(String zip);

}
