package com.example.demo.messaging_backend;

public class messaging {
    // variables for the messeging class
    private int chatID;
    private String ChatText;
    private int SenderID;
    private String DateSent;
    private String TimeSent;

    public messaging(int chatID, String ChatText, int SenderID, String DateSent, String TimeSent, int GroupID) {
        this.chatID = chatID;
        this.ChatText = ChatText;
        this.SenderID = SenderID;
        this.DateSent = DateSent;
        this.TimeSent = TimeSent;

    }

    // function to spam the chats table database with messages (chatID ChatText
    // SenderID DateSent TimeSent GroupID)
    public static void spamChats() {

    }

}
