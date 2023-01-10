package com.example.demo.registration_loginbackend.controller;

import com.example.demo.registration_loginbackend.model.User;
import com.example.demo.registration_loginbackend.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User loginUser, HttpServletResponse response) {
        User user = userRepository.findByUsernameAndPassword(loginUser.getUsername(), loginUser.getPassword());
        if (user == null) {
            // User with email and password not found
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password.");
        }
        // Generate a new token
        String token = generateToken();
        // Set the token in a cookie
        response.addCookie(new Cookie("token", token));
        // Return the token to the client
        return ResponseEntity.ok().body(new LoginResponse(true, token));
    }

    private String generateToken() {
        return UUID.randomUUID().toString();
    }


    class LoginResponse {
        public final boolean success;
        public final String token;

        public LoginResponse(boolean success, String token) {
            this.success = success;
            this.token = token;
        }

    }
}