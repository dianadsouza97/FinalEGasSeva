package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "data")
@Data
public class Zipcode {

	// private ObjectId _id;
	private String zipcode;
	private String country;
	private String state;
	private String city;
	private String dealer;
}