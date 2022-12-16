package com.example.demo;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			System.out.println("Let's inspect the beans provided by Spring Boot: ");
			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				System.out.println(beanName);
			} // for
		};// method
	}// commandLineRunner

	// creates a message using the messaging class and prints it out in the terminal
	@Bean
	public CommandLineRunner message() {
		return args -> {
			// prints out 10 blank lines to make the message more visible in the terminal
			for (int i = 0; i < 10; i++) {
				System.out.println(" ");
			}
			messaging message = new messaging("Hello", "User", 1, "12:00");
			System.out.println(message.getMessage());

			for (int i = 0; i < 10; i++) {
				System.out.println(" ");
			}
		};// method
	}// message

}
