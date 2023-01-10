package com.example.demo.registration_loginbackend.controller;

import com.example.demo.registration_loginbackend.model.User;
import com.example.demo.registration_loginbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class RegisterController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody User newUser) {
        // Check if the user's email or username is already in use
        List<User> existingUsers = userRepository.findByUsernameOrEmail(newUser.getUsername(), newUser.getEmail());
        if (!existingUsers.isEmpty()) {
            // If the email or username is already in use, return an error
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Email or username is already in use.");
        }
        // Check if the required fields are filled in
        if (newUser.getUsername() == null || newUser.getEmail() == null || newUser.getPassword() == null) {
            // If any of the required fields are empty, return an error
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Username, email, and password are required.");
        }
        // If all the validation checks pass, save the user
        userRepository.save(newUser);
        // Return a success message
        return ResponseEntity.ok().body("User successfully registered.");
    }
}