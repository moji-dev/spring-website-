package com.example.demo;

import com.example.demo.user.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@SpringBootApplication
@RestController
public class MainProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainProjectApplication.class, args);
	}


	@GetMapping
	public List<User> hello() {
		return List.of(
				new User(
						2323L,
						"ben",
						"ben@gmai.com",
						LocalDate.of(2000, Month.JANUARY, 5),
						62

				)
		);

	}

}
