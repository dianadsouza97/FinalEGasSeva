package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ConfirmationToken;
import com.example.demo.entity.User;
import com.example.demo.repository.ConfirmationTokenRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.EmailSenderService;

@RestController
@RequestMapping("/api")
public class UserAccountController {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ConfirmationTokenRepository confirmationTokenRepository;

	@Autowired
	private EmailSenderService emailSenderService;

	@PostMapping("/register")
	public List<String> registerUser(@RequestBody User user, Model model) {
		List<String> l = new ArrayList<String>();
		System.out.println(user);
		User existingUser = userRepository.findByEmailIgnoreCase(user.getEmail());
		System.out.println(existingUser);
		if (existingUser != null) {
			//model.addAttribute("message", "This email already exists!");
			l.add("Email already exists");
			return l;
			
		} else {
			userRepository.save(user);

			ConfirmationToken confirmationToken = new ConfirmationToken(user);

			confirmationTokenRepository.save(confirmationToken);

			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(user.getEmail());
			mailMessage.setSubject("Complete Registration!");
			mailMessage.setFrom("team.egasseva@gmail.com");
//			mailMessage.setText("To confirm your account, please click here : "
//					+ "http://localhost:1817/confirm-account?token=" + confirmationToken.getConfirmationToken());
			mailMessage.setText("To confirm your account, please click here : "+ " http://localhost:4200/cart-compoment");
			emailSenderService.sendEmail(mailMessage);

			model.addAttribute("email", user.getEmail());
			l.add("Success");
			return l;
		}
	}

	@RequestMapping(value = "/confirm-account", method = { RequestMethod.GET, RequestMethod.POST })
	public String confirmUserAccount(Model model, @RequestParam("token") String confirmationToken) {
		ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

		if (token != null) {
			User user = userRepository.findByEmailIgnoreCase(token.getUser().getEmail());
			user.setEnabled(true);
			userRepository.save(user);
			if (user.getCustomerType().equals("regular")) {
				return "regular";
			} else {
				return "dealer";
			}

		} else {
			model.addAttribute("message", "The link is invalid or broken!");
			return "error";
		}
	}

}
