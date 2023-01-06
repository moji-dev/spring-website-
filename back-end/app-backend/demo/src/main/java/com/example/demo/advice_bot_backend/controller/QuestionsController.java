package com.example.demo.advice_bot_backend.controller;
import com.example.demo.advice_bot_backend.model.Questions;
import com.example.demo.advice_bot_backend.service.QuestionsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
public class QuestionsController {
    private final QuestionsService qService;


    public QuestionsController(QuestionsService qService) {
        this.qService = qService;
    }

    //Get All Questions
    @GetMapping("/questions")
    public List<Questions> getQuestions() {
        return qService.getAllQuestions();
    }

    //Get Question by id
    @GetMapping("/question/{id}")
    public Optional<Questions> getUserById(@PathVariable(value = "id") Long Id) {
        return Optional.ofNullable(qService.findByID(Id));
    }



}//QuestionsController
