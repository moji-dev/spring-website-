package com.example.demo.registration_loginbackend.repository;
import com.example.demo.registration_loginbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsernameAndPassword(String username, String password);
    List<User> findByUsernameAndEmail(String username, String email);


}
