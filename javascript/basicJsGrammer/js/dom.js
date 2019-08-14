'use strict';

{
    // Document
    document.body.textContent = 'Hello';
    document.title = 'Changed!';

    // 要素を指定してみよう
    // document.getElementById('target');
    // document.getElementsByClassName('box');
    // document.getElementsByTagName('li');
    // document.querySelector('form button');
    // document.querySelectorAll('ul.menu > li');
    document.getElementById('target').textContent = 'Changed!';

    // querySelectorを使ってみよう
    document.querySelector('h1').textContent = 'H1!';
    document.querySelectorAll('li').forEach(li => {
       li.textContent = 'li!';
    });

    // 親要素､子要素を指定してみよう
    const ul = document.querySelector('ul');
    ul.parentNode;
    ul.children;
    ul.children[0];
    for (let i = 0; i< ul.children.length; i++) {
        console.log(ul.children[i].textContent);
    }

    //
    const h1 = document.querySelector('h1');
    h1.title = 'changed!';
    h1.style.color = 'gray';

    // カスタムデータ属性を扱ってみよう
    const tag_h1 = document.querySelector('h1');
    console.log(tag_h1.dataset.appId);
    tag_h1.dataset.message = 'this is custom message';

    // クラス属性を操作してみよう
    const div = document.querySelector('div');
    div.className = 'box border-pink';

    div.classList.add('border-pink');
    div.classList.remove('box');

    //
    const h2 = document.createElement('h2');
    h2.textContent = 'Title h2';
    document.body.appendChild(h2);

    //
    const p = document.createElement('p');
    const copy = p.cloneNode(true);
    document.body.insertBefore(copy, p);

    //  フォーム部品を操作してみよう
    document.querySelectorAll('input[type="radio"]')[0].checked = true;

    // イベントリスナーを使ってみよう
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
       console.log('clicked');
    });

    // イベントオブジェクトを扱ってみよう
    const div02 = document.querySelector('div');
    button.addEventListener('mousemove', e => {
        div.textContent = `${e.clientX} : ${e.clientY}`;
        console.log('clicked');
    });

    // preventDefaultを使ってみよう
    const a = document.querySelector('a');
    const span = document.querySelector(('span'));

    a.addEventListener('click', e => {
        e.preventDefault();
       a.classList.add('hidden');
       span.classList.remove('hidden');
    });
}