
package com.myapp.model;

public class AdminUser extends User {
    public AdminUser(String name) {
        super(name);
    }

    public void sayHello() {
        System.out.println("Hello!" + this.name);
    }

    // override
    @Override // function name correct ?
    public void sayHi() {
        System.out.println("[Admin] Hi!" + this.name);
    }
}