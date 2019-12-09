package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.model.Product;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface ProductRepository extends MongoRepository<Product, Integer>{
	
}
