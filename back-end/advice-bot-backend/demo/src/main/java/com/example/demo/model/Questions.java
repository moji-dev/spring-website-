package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name="Questions")
public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="Qid")
    private Long id;
    @Column(name="Qtext")
    private String text;
    @Column(name="Qtype")
    private String type;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Questions{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
