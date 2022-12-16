package com.example.demo.controller;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import com.example.demo.repository.QuestionsRepository;
import com.example.demo.model.Questions;

@Component
public class AppStartupEvent implements ApplicationListener<ApplicationReadyEvent> {
    private final QuestionsRepository questionsRepository;

    public AppStartupEvent(QuestionsRepository questionsRepository){
        this.questionsRepository = questionsRepository;
    }

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event){
        Iterable<Questions> questions = this.questionsRepository.findAll();
        questions.forEach(System.out::println);
    }

}