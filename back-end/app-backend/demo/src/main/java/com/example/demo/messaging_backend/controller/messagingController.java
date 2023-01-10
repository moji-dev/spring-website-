package com.example.demo.messaging_backend.controller;

import com.example.demo.messaging_backend.chat;
import com.example.demo.messaging_backend.service.messagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "messaging")
public class messagingController {

    private final com.example.demo.messaging_backend.service.messagingService messagingService;

    @Autowired
    public messagingController(messagingService messagingService) {

        this.messagingService = messagingService;
    }


    @GetMapping
    public List<chat> getmessage() {

        return messagingService.getmessage();
    }


}
