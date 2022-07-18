package com.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.event.EventListener;

import com.main.mail.EmailSenderService;

@SpringBootApplication
@EnableEurekaClient
public class ShopForHomeBackendApplication {

	@Autowired
	private EmailSenderService emailService;
	String mailSubject="Alert!!!! Product Stock less than 10";
	String mailBody="Hello Team,\n This is the mail regarding the stock of the product,the product Stock is reduced please update it as soon as possible! \n Thankyou";

	
	public static void main(String[] args) {
		SpringApplication.run(ShopForHomeBackendApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void triggerMail() {
		emailService.sendSimpleEmail("teammoshcreativebusiness@gmail.com", mailBody, mailSubject);
	}

}
