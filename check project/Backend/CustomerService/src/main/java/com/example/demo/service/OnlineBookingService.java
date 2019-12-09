package com.example.demo.service;

import com.example.demo.entity.Customer;
import com.example.demo.entity.OnlineBooking;

public interface OnlineBookingService { 
	public void save(OnlineBooking data);

	public Customer getCustomerData(String email);

}
