package main.java.com.example.demo.advice_bot_backend.service;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public class ScoreCount {
    private int UserID;
    private int QuestionID;
    private int Option;
    private int Score;
    
    
    public int GetUserID(){

        return UserID;
    }

    public Void SetUserID(int UserID){
        this.UserID=UserID;
        return null;
    }

    public int GetQuestionID(){

        return QuestionID;
    }

    public Void SetQuestionID(int QuestionID){
        this.QuestionID=QuestionID;
        return null;
    }

    public int calculation(int QuestionID, int Option){
        int QuestionScore=0;



        
        return QuestionScore;

    }
}
