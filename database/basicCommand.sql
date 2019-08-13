-- データベース作成
create database mydb01;

-- データベース一覧
show databases;

-- 削除
drop database mydb01;

-- データベース洗濯中
select database();

-- 作業用ユーザーを設定しよう
create user dbuser01@localhost indenfified by 'ANDAaceg3';
grant all on mydb01.* to dbuser01@localhost
mysql -u dbuser01 -p mydb01
select user();
drop user dbuser01@localhost;

-- 外部ファイルのコマンド
mysql -u root < create_myapp.sql
mysql -u myapp_user -pp myapp

-- ユーザーテーブル
create table users (
  id int unsigned,
  name varchar(20),
  score float,
  rank enum('gold', 'silver', 'bronze'),
  coins set('gold', 'silver', 'bronze')
)

desc users;
drop table users;
show tables;

/*
number
- int
- float
- double
- int unsigned

string
- char(4)
- varchar(255)
- text (長いさわからない場合は)

date/time
- date
- time
- datetime '2019-08-08 13:01:08'

true/ false
- boolean -> tinyint(1)
true -> 1
false -> 0
 */

-- レコードを挿入する
insert into users (id, name, score) values
(1, 'itachi', 3.4),
(2, 'itachi01', 3.7),
(3, 'itachi01', 3.9);

-- テーブルの構造を変えてみよう
alter table  users add column email varchar(255) after name;
alter table users change name user_name varchar(80) default 'nobody';
alter table users rename presons;

-- レコードを抽出する
/*
 < > <= >= = <> !=
 is null, is not null
 and or not
 %a %a%
 order by (desc, asc)
 */

-- レコードの更新､削除
update users set score = 7.6 where id = 1;

-- 数値の演算をする
update users set score = score * 1.2 where id % 2 = 2;
select * from users order by rand() limit 1;

-- if､caseを使ってみます
select
  name,
  score,
  if (score > 5.0, 'OK', 'NG') as result,
  case floor(score) % 2
    when 0 then 'even'
    when 1 then 'odd'
    else null
  end as type
from
  users;

-- 抽出結果をテーブルにしてみます
create table users_with_team as
select id, name, score,
    case
      when score > 8.0 then 'Team-A',
      when score > 8.0 then 'Team-B'
      else 'Team-C'
    end as team
from users;

create tabke users_copy select * from users;

select sum(score), min(score), max(score), avg(socre) from users;
select count(distinct team) from users;
select distinct team from users;

-- group by､having
select sum(score), team from users group by team having sum(score) > 10.0;
select sum(score), team from users where id > 3 group by team;

-- サブクエリを使ってみます
select
  sum(t.score),
  t.team
from
  (select id, name, score,
    case
      when score > 8.0 then 'Team-A',
      when score > 8.0 then 'Team-B'
      else 'Team-C'
    end as team
    from users
  ) as t
group by team;

-- viewで抽出条件を保存
drop view if exists top3;
create view top3 as select * from users order by score desc limit 3;
select * from top3;

show create view top3;

-- トランザクションを使ってみよう
start transaction;
update users set score = socre + 1 where id = 1;
update users set score = socre + 2 where id = 2;
-- commit;
rollback; -- 前の価値に戻る為

-- 索引を設定してみよう
alter table users add index index_score (score);
show index from users;
explain select * from users where score > 5.0; -- key

alter table users drop index index_score;
show index from users;

-- 複数のテーブルを作成
drop table if exists posts;

create table posts (
  id int unsigned primary key auto_increment,
  title varchar(255),
  body text
);

drop table if exists comments;

create table comments (
  id int unsigned primary key auto_increment,
  post_id int not null,
  body text
);

select posts.id, posts.body, comments.* from posts
inner join comments
on posts.id = comments.post_id;

-- 外部結合でデータを抽出してみよう
select * from posts
left outer join comments
on posts.id = comments.post_id;

-- last_insert_id()を使ってみよう

delete from posts where id = 2;
insert into posts(title, body) values ('new title', 'new body post');
insert into comments (post_id, body) values (last_indest_id(), 'first comment for new post');

-- トリガーを使ってみ

drop table if exists posts;
create table posts (
  id int unsigned primary key auto_increment,
  title varchar(255),
  body text
);

drop table if exists logs;
create table logs (
  id int unsigned primary key auto_increment,
  msg varchar(255)
);

drop table if exists posts_insert_trigger;
create trigger posts_insert_trigger after(before) insert (delete ....)
on posts
for each row
insert into logs(msg) values ('post add !');

select * from posts;
select * from logs;
show triggers;

-- 複雑なトリガー処理を実行してみ

drop table if exists posts_update_trigger;

delimiter //
create trigger posts_update_trigger after(before) update
on posts
for each row
  begin
      insert into logs(msg) values ('post update !');
      insert into logs(msg) values (concat(old.tilte, '->', new.title));
  end;

//
delimiter;


-- 挿入/更新時刻でレコードを更新
drop table if exists posts;
create table logs (
  id int unsigned primary key auto_increment,
  title varchar(255),
  created_at datetime default current_timestamp,
  updated_at default current_time on update current_timestamp

);

-- 日時の計算をしてみます

drop table if exists posts;
create table logs (
  id int unsigned primary key auto_increment,
  title varchar(255),
  created_at datetime default current_timestamp,
  updated_at default current_time on update current_timestamp

);

select created, date_add(created, interval 14 day) from posts;
select created, date_format(created, '%W %M %Y') from posts;

-- データベースを書き出してみよう
mysqldump -u myapp_user - p myapp > db_app.backup.sql


