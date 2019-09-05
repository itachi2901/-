package com.test.model

class User(_name: String) {
    val name = _name
    def sayHi() = println("Hi!" + name)
}

class AdminUser(name: String, val age: Int) extends User(name) {
    def sayHello() = println("Hello!" + name + "(" + age + ")")
    override def sayHi() = println("Admin Hi!" + name)
}