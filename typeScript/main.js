"use strict";
// 静的型付けをしてみよう
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var x = 10;
// さまざまな型
/*
    number
    string
    boolean
    any
 */
var i;
var i = 10;
var y; // var y:any
var results;
results = [1, 2, 4];
// 列挙型
// signal
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 1] = "Blue";
    Signal[Signal["Yellow"] = 2] = "Yellow";
})(Signal || (Signal = {}));
var SignalTest;
(function (SignalTest) {
    SignalTest[SignalTest["Red"] = 0] = "Red";
    SignalTest[SignalTest["Blue"] = 3] = "Blue";
    SignalTest[SignalTest["Yellow"] = 4] = "Yellow"; // index: 4
})(SignalTest || (SignalTest = {}));
var result;
// if (result === Signal.Yellow) { ... }
console.log(Signal.Red); // 0
// 関数宣言
/*
    void

 */
function add(a, b) {
    return a + a;
}
function add01(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a + a;
    }
}
function add02(a, b) {
    if (b === void 0) { b = 10; }
    return a + a;
}
add(4, 5);
add01(4);
add02(4, 5);
// 関数式
var add03 = function (a, b) {
    return a + b;
};
var add04 = function (a, b) { return a + b; };
function add05(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}
// クラス
// public, protected, private
var User = /** @class */ (function () {
    function User(name) {
    }
    User.prototype.sayHi = function () {
        console.log("Hi i am !" + this.name);
    };
    return User;
}());
var tom = new User("tom");
tom.sayHi();
// getterやsetter
var User01 = /** @class */ (function () {
    function User01(_name) {
        this._name = _name;
    }
    User01.prototype.sayHi = function () {
        console.log("Hi i am !" + this._name);
    };
    Object.defineProperty(User01.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return User01;
}());
var tom = new User("tom");
tom.name = "Tom"; // Tom
tom.sayHi(); // Hi i am ! Tom
// 継承
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(_name, _age) {
        var _this = _super.call(this, _name) || this;
        _this._age = _age;
        return _this;
    }
    AdminUser.prototype.sayHi = function () {
        _super.prototype.sayHi.call(this);
    };
    return AdminUser;
}(User01));
var bod = new AdminUser("bod", 22);
bod.sayHi();
// クラス
// 静的メンバ
var User10 = /** @class */ (function () {
    function User10(name) {
        this.name = name;
        User10.count++;
    }
    User10.prototype.sayHi = function () {
        console.log("Hi ! i am.");
    };
    User10.showDescription = function () {
        console.log("this class is about !");
    };
    User10.count = 0;
    return User10;
}());
User10.showDescription();
console.log(User10.count);
function getTotal(result) {
    return result.a + result.b;
}
function getTotalInheritance(result) {
    return result.final;
}
var result01 = {
    a: 32,
    b: 43
};
console.log(getTotal(result01));
var User11 = /** @class */ (function () {
    function User11(name) {
        this.score = 0;
        this.name = name;
    }
    User11.prototype.sayHi = function () {
        console.log("Hi ! i am.");
    };
    User11.prototype.showScore = function () {
        console.log("Hi ! i am." + this.score);
    };
    return User11;
}());
// ジェネリクス (Generics)
// 話題
// function getStringArray(value: string): string[] {
//     return [value, value, value];
// }
//
// function getNumberArray(value: number): number[] {
//     return [value, value, value];
// }
function getArray(value) {
    return [value, value, value];
}
console.log(getArray(3));
console.log(getArray("hello"));
var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
var v1 = new MyData({ a: 43, b: 32 });
console.log(v1.getArray());
// 内部モジュール
var UserModule;
(function (UserModule) {
    UserModule.name = "itachi";
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-1111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);
var addr = UserModule.AddressModule;
console.log(addr.zip);
// tsc main.ts -m amd
// tsc main.ts -m commonjs
console.log(UserModule.name);
