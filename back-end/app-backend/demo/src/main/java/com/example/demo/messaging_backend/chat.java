package com.example.demo.messaging_backend;

import java.time.*;

public class chat {

    public String ChatText;
    public int SenderID;
    public String DateSent;
    public String TimeSent;
    public int channelID;
    public int messageID;

    // temporary ID for testing

    public chat(String ChatText, int SenderID, String DateSent, String TimeSent,
            int channelID, int messageID) {
        this.ChatText = ChatText;
        this.SenderID = SenderID;
        this.DateSent = DateSent;
        this.TimeSent = TimeSent;
        this.channelID = channelID;
        this.messageID = messageID;

    }

    public chat(String ChatText, String DateSent, String TimeSent, int channelID, int messageID) {
        this.ChatText = ChatText;
        this.DateSent = DateSent;
        this.TimeSent = TimeSent;
        this.channelID = channelID;
        this.messageID = messageID;

    }

    public chat() {

    }

    public int getChannelID() {
        return channelID;
    }

    public void setChannelID(int channelID) {
        this.channelID = channelID;
    }

    public String getChatText() {
        return ChatText;
    }

    public void setChatText(String chatText) {
        ChatText = chatText;
    }

    public int getSenderID() {
        return SenderID;
    }

    public void setSenderID(int senderID) {
        SenderID = senderID;
    }

    public String getDateSent() {
        return DateSent;
    }

    public void setDateSent(String dateSent) {
        DateSent = dateSent;
    }

    public String getTimeSent() {
        return TimeSent;
    }

    public void setTimeSent(String timeSent) {
        TimeSent = timeSent;
    }

    public int getMessageID() {
        return messageID;
    }

    public void setMessageID(int messageID) {
        this.messageID = messageID;
    }

    // to string method
    @Override
    public  String toString() {
        return "chat [ChatText=" + ChatText + ", DateSent=" + DateSent + ", SenderID=" + SenderID
                + ", TimeSent=" + TimeSent + ", channelID=" + channelID + ", messageID=" + messageID
                + "]";
    }

}
