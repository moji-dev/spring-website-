package com.example.demo.registration_loginbackend.controller;

import com.example.demo.registration_loginbackend.model.User;
import com.example.demo.registration_loginbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {


    @Autowired
    private UserRepository userRepository;
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User loginUser) {
        User user = userRepository.findByUsernameAndPassword(loginUser.getUsername(), loginUser.getPassword());
        if (user == null) {
            // User with email and password not found
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password.");
        }
        // User found, log them in (e.g. set session cookie)
        return ResponseEntity.ok().body(new LoginResponse(true));
    }

    class LoginResponse {
        public final boolean success;

        public LoginResponse(boolean success) {

                this.success = success;
        }
    }


    private User authenticate(String username, String password) {
        // check the user and password against the database
        User user = userRepository.findByUsernameAndPassword(username, password);
        if (user != null) {
            // if the user and password are valid, return the user
            return user;
        } else {
            // if the user and password are invalid, return null
            return null;
        }
    }
}
