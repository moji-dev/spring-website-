package com.example.demo.advice_bot_backend.service;

import com.example.demo.advice_bot_backend.model.Questions;
import com.example.demo.advice_bot_backend.repository.QuestionsRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class QuestionsService {
    private final QuestionsRepository questionsRepository;
    Long currentID;

    public QuestionsService(QuestionsRepository questionsRepository) {
        this.questionsRepository = questionsRepository;
    }

    public Long getCurrentID() {
        return currentID;
    }

    public void setCurrentID(Long currentID) {
        this.currentID = currentID;
    }

    public List<Questions> getAllQuestions(){
        Iterable<Questions> questions = this.questionsRepository.findAll();
        List<Questions> questionList = new ArrayList<Questions>();
        questions.forEach(questionList::add);
        return questionList;
    }

    public Questions findByID(Long id) {
        Iterable<Questions> questions = this.questionsRepository.findAll();
        Iterator it = questions.iterator();
        while (it.hasNext()) {
            Questions question = (Questions) it.next();
            if (question.getId() == id)
                return question;
        }

        return null;
    }





}
