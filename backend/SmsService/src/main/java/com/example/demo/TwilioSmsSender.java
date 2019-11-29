package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;
import org.springframework.stereotype.Service;

@Service("twilio")
public class TwilioSmsSender implements SmsSender {
	
	private static final Logger LOGGER=LoggerFactory.getLogger(TwilioSmsSender.class);
	private final SmsConfiguration smsConfiguration;
	
	@Autowired
	public TwilioSmsSender(SmsConfiguration smsConfiguration) {
		super();
		this.smsConfiguration = smsConfiguration;
	}
	
	@Override
	public void sendSms(SmsRequest smsRequest) {
		if(isPhoneNumberValid(smsRequest.getPhoneNumber())) {
			PhoneNumber to=new PhoneNumber(smsRequest.getPhoneNumber());
			PhoneNumber from=new PhoneNumber(smsConfiguration.getTrialNumber());
			String message=smsRequest.getMessage();
			MessageCreator creator=Message.creator(to,from,message);
			creator.create();
			LOGGER.info("Send sms {}"+smsRequest);
		}
		else
		{
			throw new IllegalArgumentException(
					"Phone Number [" + smsRequest.getPhoneNumber()+"] is not a valid number");
		}
		
	}
	
	private boolean isPhoneNumberValid(String PhoneNumber) {
		return true;
	}
	

}
