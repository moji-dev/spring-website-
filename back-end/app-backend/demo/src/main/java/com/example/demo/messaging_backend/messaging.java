package com.example.demo.messaging_backend;

public class messaging {
    // variables for the messeging class

    private String ChatText;
    private int SenderID = 2;
    private String DateSent = "12/12/12";
    private String TimeSent = "12:00";
    private int channelID = 1;
    private int messageID;

    // temporary ID for testing

    public messaging(String ChatText, int SenderID, String DateSent, String TimeSent,
            int channelID, int messageID) {
        this.ChatText = ChatText;
        this.SenderID = SenderID;
        this.DateSent = DateSent;
        this.TimeSent = TimeSent;
        this.channelID = channelID;
        this.messageID = messageID;

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

    // sends message to th database using sql
    public void sendMessage() {
    }

    // creates sql query to send message to database
    public void createMessage(String ChatText, int SenderID, String DateSent, String TimeSent,
            int channelID, int messageID) {

        // creates sql query
        String sql = "INSERT INTO messages (ChatText, SenderID, DateSent, TimeSent, channelID, messageID) VALUES ('"
                + ChatText + "', '" + SenderID + "', '" + DateSent + "', '" + TimeSent + "', '"
                + channelID + "', '" + messageID + "')";

        System.out.println(sql);

    }

}
