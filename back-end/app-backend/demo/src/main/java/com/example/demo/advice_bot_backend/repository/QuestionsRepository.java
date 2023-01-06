package com.example.demo.advice_bot_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.advice_bot_backend.model.Questions;

public interface QuestionsRepository extends JpaRepository<Questions, Long> {

}