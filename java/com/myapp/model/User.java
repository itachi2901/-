package com.myapp.model;

public class User {
    protected String name;
    public User(String name) {
        this.name = name;
    }

    public void sayHi() {
        System.out.println("Hi!" + this.name);
    }
}