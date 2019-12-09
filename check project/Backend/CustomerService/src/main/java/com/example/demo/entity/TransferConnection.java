package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="transferconnection")
@Data
public class TransferConnection {
	@Id
	@Column(name="email")

	String email;
	@Column(name="name")

	String name;
	@Column(name="agency")
	String agency;
	@Column(name="adhaar")

	String aadhar;
	@Column(name="date")
	String date;
	@Column(name="country")

	String newCountry;
	@Column(name="State")

	String newState;
	@Column(name="city")

	String newCity;
	@Column(name="zip")

	String newZip;
	
}
