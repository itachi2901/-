'use strict';

{
    // 配列
    const scores = [1,2,3];
    scores[2] = 100;
    console.log(scores);
    console.log(scores.length);

    // オブジェクト
    const player = {
        name: 'itachi',
        score: 32
    };

    console.log(player.name);
    console.log(player['name']);

    player.score = 100;
    console.log(player);

    player.email = 'gmail@gmail.com';
    console.log(player);

    delete player.score;
    console.log(player);

    // クラス
    // { name, score} => オブジェクト {name: 'a', score: 3}, {name: 'b', score: 3}

    class Player { // 親クラス
        constructor(name, score) {
            // メソッド
            this.name = name;
            this.score = score;
        }

        showINfo() {
            console.log(`${this.name}`);
        }

        static showVersion() {
            console.log('1.0');
        }
    }

    const itachi = new Player('itachi', 34);
    const itachi01 = new Player('itachi01', 34);

    itachi.showINfo();

    // static
    Player.showVersion();

    class SoccerPlayer extends Player {　// 子クラス
        constructor(name, score, number) {
            super(name, score);
            this.number = number;
        }

        kick() {
            console.log('Gooaaaaalll');
        }
     }

     const tsubasa = new SoccerPlayer('tusbasa', 99, 1);
    tsubasa.kick();
    tsubasa.showINfo();


    // 配列
    const a = [2,3,4];
    a.push(6);

    a.pop();

    a.splice(2, 0, 6, 7);

    //
    a.forEach((item, index) => {
       console.log(item);
    });

    const b = a.map(item => item * 2);

    // filter
    const c = a.filter(item => item % 2 === 0);

    // Object
    const o = {
        a: 1,
        b: 2
    };

    console.log(Object.keys(o)); // ['a', 'b']
    console.log(Object.values(o)); // [1,2]
    console.log(Object.entries(0)); // ['a', 1], ['b', 2]

    Object.keys(o).forEach(key => {

    });

    const numbers = [1,2,3,8];
    const [a, b, ...rest] = numbers;
    console.log(a);
    console.log(b);


    const player = {
        name: 'itachi',
        score: 44,
        hp: 33,
        mp: 22
    };
    const {nam, score, ...points} = player;

    //
    const str = 'hellp';
    str.length   // 5
    str.substring(2,4) // ll
    str[1] // e


    // Math
    Math.random(); // 0 ... 0.99999
    Math.random() * 6; // 0 ... 5.9999
    Math.random() * 6 + 1 // 1 ... 6.9999
    Math.floor(Math.random() * 6 + 1); // 1 ... 6

    // Date
    const d = new Date();
    d.getDate();

    // alert, confirm
    window.alert('hello');
    alert('hello');

    const answer = confirm('Are you OK ?');
    console.log(answer);

    // setIntervalで繰り返し処理をしよう
    let i = 0;
    const showTime = () => {
        console.log(new Date());
        i++;
        if (i > 2) {
            clearInterval(timerId);
        }
    };

    let timerId = setInterval(showTime, 1000);

    // setTimeoutを使ってみよう
    let j = 0;
    const showTime01 = () => {
        console.log(new Date());
        let timerId = setTimeout(showTime, 1000);
        j++;
        if (j > 2) {
            clearInterval(timerId);
        }
    };
    showTime01();

    // 例外処理を使ってみよう

    const a01 = "a";
    try {
        console.log(a);
    } catch(e) {
        console.log(e.message);
    }
}