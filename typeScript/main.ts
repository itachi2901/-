// 静的型付けをしてみよう

var x:number = 10;

// さまざまな型
/*
    number
    string
    boolean
    any
 */

var i:number;
var i:number = 10;

var y; // var y:any
var results: number[];
results = [1,2,4];

// 列挙型
// signal

enum Signal {
    Red = 0,
    Blue = 1,
    Yellow = 2
}

enum SignalTest {
    Red,  // index: 0
    Blue = 3, // index: 3
    Yellow // index: 4
}


var result: Signal;
// if (result === Signal.Yellow) { ... }
console.log(Signal.Red); // 0

// 関数宣言
/*
    void

 */

function add(a: number, b: number): number {
    return a + a;
}

function add01(a: number, b?: number): number {
    if (b) {
        return a + b;
    } else {
        return a + a;
    }
}

function add02(a: number, b: number = 10): number {
    return a + a;
}

add(4,5);
add01(4);
add02(4,5);

// 関数式

var add03 = function(a: number, b: number): number {
    return a + b;
};

var add04 = (a: number, b: number): number => a + b;

// 関数のオーバーロード
function add05(a: number, b:number): number;
function add05(a: string, b:string): string;

function add05(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}

// クラス
// public, protected, private

class User {
    public name: string;

    constructor(name: string) {

    }

    public sayHi(): void {
        console.log("Hi i am !" + this.name);
    }
}

var tom = new User("tom");
tom.sayHi();

// getterやsetter

class User01 {

    constructor(private _name: string) {

    }

    public sayHi(): void {
        console.log("Hi i am !" + this._name);
    }

    get name() {
        return this._name;
    }

    set name(newValue: string) {
        this._name = newValue;
    }
}

var tom = new User("tom");
tom.name = "Tom"; // Tom
tom.sayHi(); // Hi i am ! Tom


// 継承

class AdminUser extends User01 {
    private _age: number;
    constructor(_name: string, _age: number) {
        super(_name);
        this._age = _age;
    }

    public sayHi(): void {
        super.sayHi();
    }
}

var bod = new AdminUser("bod", 22);
bod.sayHi();

// クラス
// 静的メンバ

class User10 {
    name: string;
    constructor(name: string) {
        this.name = name;
        User10.count++;
    }

    sayHi(): void {
        console.log("Hi ! i am.");
    }

    static count: number = 0;

    static showDescription(): void {
        console.log("this class is about !");
    }
}

User10.showDescription();

console.log(User10.count);

// インターフェース
// 構造的
// インターフェースを継承

interface Result {
    a: number;
    b: number;
}

interface SpringResult {
    a: number;
}

interface FallResult {
    a: number;
}

interface finalResult extends SpringResult, FallResult {
    final: number;
}

function getTotal(result: Result) {
    return result.a + result.b;
}

function getTotalInheritance(result: finalResult) {
    return result.final;
}

var result01 = {
    a: 32,
    b: 43
};

console.log(getTotal(result01));

// Interface -> class

interface GameUser {
    score: number,
    showScore(): void;
}

class User11 implements GameUser {
    name: string;
    score: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    sayHi(): void {
        console.log("Hi ! i am.");
    }

    showScore(): void {
        console.log("Hi ! i am." + this.score);
    }
}

// ジェネリクス (Generics)

// 話題
// function getStringArray(value: string): string[] {
//     return [value, value, value];
// }
//
// function getNumberArray(value: number): number[] {
//     return [value, value, value];
// }

function getArray<T>(value: T): T[] {
    return [value, value, value];
}

console.log(getArray<number>(3));
console.log(getArray<string>("hello"));


// Generics

interface ResultGenerics {
    a: number;
    b: number;
}

class MyData<T extends ResultGenerics> {
    constructor(public value: T) {}
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}

var v1 = new MyData<Result>({a: 43, b: 32});
console.log(v1.getArray());

// 内部モジュール

module UserModule {
    export var name = "itachi";

    export module AddressModule {
        export var zip = "111-1111";
    }
}

console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);

import addr = UserModule.AddressModule;
console.log(addr.zip);


// 外部モジュール
// Node
// Require JS

// module User01Module {
//     export var name = "itachi";
// }

import UserTest = require("./user_commonjs");
import UserTest01 = require("./user_amd");

// tsc main.ts -m amd
// tsc main.ts -m commonjs
console.log(UserModule.name);