package com.example.demo;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
	private final Service service;
	
	@Autowired
	public Controller(Service service) {
		this.service=service;
	}
	@PostMapping("api/v1/sms")
	public void sendSms(@Valid @RequestBody SmsRequest smsRequest) {
		
		service.sendSms(smsRequest);
	}
}
