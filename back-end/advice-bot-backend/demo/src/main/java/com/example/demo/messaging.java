package com.example.demo;

public class messaging {
    private String message;
    private String sender;
    private Integer rooomID;
    private String time;

    public messaging(String message, String sender, Integer rooomID, String time) {
        this.message = message;
        this.sender = sender;
        this.rooomID = rooomID;
        this.time = time;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public Integer getRooomID() {
        return rooomID;
    }

    public void setRooomID(Integer rooomID) {
        this.rooomID = rooomID;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

}
