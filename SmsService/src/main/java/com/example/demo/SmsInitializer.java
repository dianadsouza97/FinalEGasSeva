package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import com.twilio.Twilio;

@Configuration
public class SmsInitializer {
	private final static Logger LOGGER=LoggerFactory.getLogger(SmsConfiguration.class);
	private final SmsConfiguration smsConfiguration;
	@Autowired
	public SmsInitializer(SmsConfiguration smsConfiguration) {
		this.smsConfiguration=smsConfiguration;
		Twilio.init(
				smsConfiguration.getAccountSid(),
				smsConfiguration.getAuthToken()
				);
		LOGGER.info("Twilio initialized {} ", smsConfiguration.getAccountSid());
	}
	
}
