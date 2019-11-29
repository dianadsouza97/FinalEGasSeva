package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.OnlineBooking;
import com.example.demo.service.OnlineBookingService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class Controller {
	@Autowired
	private OnlineBookingService onlineBookingService;
	@PostMapping("/onlineBookings")
	public void saveOnlineBooking(@RequestBody OnlineBooking data) {
		onlineBookingService.save(data);
		
	}
}
