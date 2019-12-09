package com.example.demo.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.TransferConnection;
import com.example.demo.repository.TransferConnectionRepository;
@Service
public class TransferConnectionServiceImpl implements TransferConnectionService{
	@Autowired
	private TransferConnectionRepository transferConnection;
	
	@Override
	public void save(TransferConnection data) {
		String timeStamp = new SimpleDateFormat("dd/MM/yyyy").format(Calendar.getInstance().getTime());
		data.setDate(timeStamp);
		transferConnection.save(data);
	}
	
}
