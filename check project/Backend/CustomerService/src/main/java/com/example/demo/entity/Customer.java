package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Table(name="customer")
@Entity
@Getter
@Setter
public class Customer {
	@Id 
	private String email;
	private String name;

	private String contact;
	private int zipcode;
	private String city;
	private String state;
	private String country;
	private String agency;
	private String password;
	
	
	
}
