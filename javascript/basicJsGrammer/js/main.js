'use strict';

// 数値の計算
console.log(10 + 3);
console.log(10 % 3); // 1

// 定数 const
const price = 10;

// 変数 let var
let price = 130;
price += 100;

// データ型
// string -> 'test'
// number -> 1,2
// undefined -> undefined
// null -> null
// boolean -> true false
// object -> {a: 3, b: 5}

console.log(typeof 'hello');

// ifで条件分岐をしてみよう
const score = 86;
if (score >= 80) {
    // log
}

let a = score >= 80 ? "a" : "b";

// && なおかつ
// || もしくは
// ! ~ では無い

let signal = 'red';
switch (signal) {
    case 'red':
        break;
    case 'yellow':
        break;
    default:
        break;
}

// for文
for (let i = 1; i<= 10; i++) {

}

// while
let hp = 200;
while (hp > 0) {
    console.log(`${hp} HP left!`);
    hp -= 15;
}

for (let hp = 200; hp > 0; hp -= 15) {
    console.log(`${hp} HP left!`);
}

// continue, break
for (let i = 1; i<= 10; i++) {
    if (i === 4) {
        continue;
    }
}

for (let i = 1; i<= 10; i++) {
    if (i === 4) {
        break;
    }
}

// 関数
function showAd(message) {
    return message;
}

showAd('A');
showAd('B');
showAd('C');


const sum = function(a,b,c) {
    return a + b + c;
};

sum(1,3,4);

// アロー関数を使ってみよう
const sum = (a,b,c) => a + b + c;
sum(1,2,4);

// スコープについて理解しよう
{
    const x = 2;
    function f() {
        const x = 1;
        console.log(x);
    }

    f();
    console.log(x);
}

