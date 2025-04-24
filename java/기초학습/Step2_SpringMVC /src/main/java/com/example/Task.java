package com.example;

public class Task extends Object{
    // 원자적 ID 생성을 위한 정적 카운터
    // private static final AtomicLong counter = new AtomicLong(); // ID 자동 생성을 위해 추가

    private long id; // 할일 고유 ID
    private String description; // 할 일 설명
    private boolean completed; // 완료 여부

    public Task() {} // 기본 생성자(필요한 경우 수정)

    public Task(long id, String description) {
        this.id = id;
        this.setDescription(description);
        this.completed = false;
    }

    // Getter
    public long getId(){
        return id;
    }
    public String getDescription(){
        return description;
    }

    public boolean isCompleted(){
        return completed;
    }

    // Setter
    public void setId(long id){
        this.id = id;
    }

    public void setDescription(String description){
        this.description = description;
    }
}


