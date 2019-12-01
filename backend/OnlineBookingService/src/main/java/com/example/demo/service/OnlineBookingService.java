package com.example.demo.service;

import com.example.demo.model.Customer;
import com.example.demo.model.OnlineBooking;

public interface OnlineBookingService { 
	public void save(OnlineBooking data);

	public Customer getCustomerData(String email);

}
