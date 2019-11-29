package com.example.demo.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.OnlineBooking;
import com.example.demo.repository.OnlineBookingRepository;

@Service
public class OnlineBookingServiceImpl implements OnlineBookingService {
	@Autowired
	private OnlineBookingRepository onlineBookingRepository;
	public void save(OnlineBooking data) {
		
		UUID id=UUID.randomUUID();
		data.setSid(id);
		onlineBookingRepository.save(data);
	}
}
