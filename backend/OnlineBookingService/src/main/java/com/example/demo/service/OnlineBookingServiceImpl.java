package com.example.demo.service;

import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.model.OnlineBooking;
import com.example.demo.repository.OnlineBookingRepository;

@Service
public class OnlineBookingServiceImpl implements OnlineBookingService {
	EntityManager entityManager;
	
	public OnlineBookingServiceImpl(EntityManager entityManager) {
		
		this.entityManager = entityManager;
	}
	@Autowired
	private OnlineBookingRepository onlineBookingRepository;
	public void save(OnlineBooking data) {
		
		String id=UUID.randomUUID().toString().substring(0, 8);
		data.setSid(id);
		onlineBookingRepository.save(data);
	}
	@Override
	public Customer getCustomerData(String email) {
		Customer cust=entityManager.find(Customer.class, email);
		
			
		return cust ;
	}
}
