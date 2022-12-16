Create table Questions (Qid int, Qtext String, Qtype Char, PRIMARY KEY (Qid));
Create table QuesAndAns (QAid int, Qid int, Atext String, Score int, PRIMARY KEY (QAid));
Create table UserScore (USid int, Uid int, DTotalScore int, ATotalScore int, PRIMARY KEY (USid));
Create table Users (Uid int, UserName String, Password String, PRIMARY KEY (Uid));
