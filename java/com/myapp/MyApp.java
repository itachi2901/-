package com.myapp;
import com.myapp.model.User;
import com.myapp.model.AdminUser;
// import com.myapp.model.*;

public class MyApp {
    public static void main(String[] args) {
        // class
        User tom;
        tom = new User("Tom"); // install
        // System.out.println(tom.name);
        tom.sayHi();

        AdminUser bod;
        bod = new AdminUser("bod"); // install
        // System.out.println(bod.name);
        bod.sayHello();
    }
}