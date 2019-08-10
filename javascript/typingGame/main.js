'use strict';

{
    // 複数の単語に対応させよう
    const words = [
      'apple',
      'sky',
      'blue',
      'middle',
      'set'
    ];

    let word;
    let loc;
    let score;
    let miss;

    // イベント発生時の誤動作を防止しよう (khi chưa hết time mà click thì sẽ ko hiển thị alert)
    let isPlaying = false;

    // 3s制限
    const timeLimit = 3 * 1000;
    let startTime;

    // ターゲット
    const target = document.getElementById('target');

    // 正解とミスの数をカウント
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');

    // 正解した文字の表示を変えよう
    let updateTarget = function() {
        let placeholder = '';
        for (let i = 0 ; i < loc; i++) {
            placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
    };

    // 正答率を表示しよう
    let showResult = function() {
        const accurace = score + miss === 0 ? 0 : score / (score + miss) * 100;
        alert(`${score} letters, ${miss} misses, ${accurace.toFixed(2)} accuracy !`);
    };

    // 残る時間を表示する
    let updateTimer = function () {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);

        const timeoutID = setTimeout(() => {
            updateTimer();
        }, 10);

        if(timeLeft < 0) {
            isPlaying = false;
            clearTimeout(timeoutID);
            timerLabel.textContent = '0.00';
            setTimeout(() => {
                showResult();
            }, 100);

            // リプレイができるようにしよう
            timerLabel.textContent = '0.00';
            target.textContent = 'click to replay';
        }
    };

    window.addEventListener('click', () => {
        if (isPlaying === true) {
            return;
        }
        isPlaying = true;

        // リプレイできるように対応する
        loc = 0;
        score = 0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        word = words[Math.floor(Math.random() * words.length)];

        updateTarget();
        startTime = Date.now();
        updateTimer();
    });

    // タイプしたキーを取得する
    window.addEventListener("keyup", e => {

        // keyup イベントで isPlaying が true ではなかったら、
        // ゲームが始まっていなかったら以降の処理をしないでね
        if (isPlaying !== true) {
            return;
        }

        // 正解を設定する
        if (e.key === word[loc]) {
            loc++;
            if (loc === word.length) {
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
            }

            score++;
            scoreLabel.textContent = score;
            updateTarget();
        } else {
            miss++;
            missLabel.textContent = miss;
        }
    });
}