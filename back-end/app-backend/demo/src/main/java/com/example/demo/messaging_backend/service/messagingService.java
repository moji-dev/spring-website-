package com.example.demo.messaging_backend.service;

import com.example.demo.messaging_backend.chat;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
@Service
public class messagingService {


    public List<chat> getmessage() {
        return List.of(
                new chat("Hello", 1, "2021-04-01", "12:00:00", 1, 1)
        );
    }

}



