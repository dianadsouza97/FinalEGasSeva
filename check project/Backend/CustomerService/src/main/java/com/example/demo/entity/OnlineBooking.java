package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="onlinebooking")
@Data
public class OnlineBooking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	@Column(name="uuid")
	private String sid;
	@Column(name="name")
	private String name;
	@Column(name="contact")
	private long contact; 
	@Column(name="adhaar")
	private String adhaar;
	@Column(name="country")
	private String country;
	@Column(name="state")
	private String state;
	@Column(name="city")
	private String city;
	@Column(name="zip")
	private int zip;
	
}
