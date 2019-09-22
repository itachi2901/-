■ ransackとは

・モデルの探索インターフェイスを簡単に作れるgemです。

■ 動作確認

・Rails 4.2

・Ransack

■ 目次

・Railsプロジェクトの作成

```ruby
rails new ransack
cd ransack

rails g scaffold Product name:string description:string price:integer discontinued:boolean carrier_id:integer

rails g model Phones name:string

rake db:migrate

rake db:seed

rails s

```

・Ransackのインストール

```ruby
# Gemfile
gem "ransack"

bundle install
```
・Ransackで検索機能と検索フォームを作成

・Ransackでテーブルのソートリンク

・Ransackで検索条件を絞る

■ ススメ

```ruby
# 基本
Item.search(:name_cont => 'hoge').result

# 探索方
Item.search(:name_cont => 'ほげ').result.to_sql
# => "SELECT `items`.* FROM `items` WHERE `items`.`name` LIKE '%ほげ%')"

# eq 等しいものにマッチする
# not_eq 等しくないもの
Item.search(:name_eq => 'hoge').result.to_sql
# => "SELECT `items`.* FROM `items` WHERE `items`.`name` = 'hoge')" 

# ある値より小さいものにマッチする
Item.search(:price_lt => 1000).result.to_sql
# => "SELECT `items`.* FROM `items` WHERE `items`.`price` < 1000)" 
# lteqだと「以下」になります

# ある値より大きいものにマッチする
# gteqだと「以上」になります
Item.search(:price_gt => 1000).result.to_sql
# => "SELECT `items`.* FROM `items` WHERE `items`.`price` > 1000)"

# SQLのin。含まれるものにマッチする
Item.search(:category_id_in => [5,10,15,20]).result.to_sql
# => "SELECT `items`.* FROM `items` WHERE `items`.`category_id` IN (5,10,15,20))"
# not_inで「含まれないもの」になります 


# cont 文字例が含まれるものにマッチする
# not_contで文字例が含まれないものになります

# start 特定の文字例が先頭のものにマッチする
Item.search(:name_start => 'ほげ').result.to_sql
# => "SELECT `items`.* FROM `items` WHERE `items`.`name` LIKE 'ほげ%')" 
# endで「特定の文字列が末尾のもの」になります 

# 組み合わせ
Item.search(:name_and_description_cont => 'ほげ').result.to_sql
# => "SELECT `items`.* FROM `items` WHERE (((`items`.`name` LIKE '%ほげ%') AND (`items`.`description` LIKE '%ほげ%')))"
Item.search(:name_or_description_cont => 'ほげ').result.to_sql
# => "SELECT `items`.* FROM `items` WHERE (((`items`.`name` LIKE '%ほげ%') OR (`items`.`description` LIKE '%ほげ%')))"

# 複数案件
Item.search(:name_cont_all => ['ほげ', 'ひげ']).result.to_sql
# => "SELECT `items`.* FROM `items` WHERE (((`items`.`name` LIKE '%ほげ%') AND (`items`.`name` LIKE '%ひげ%')))"
Item.search(:name_cont_any => ['ほげ', 'ひげ']).result.to_sql
# => "SELECT `items`.* FROM `items` WHERE (((`items`.`name` LIKE '%ほげ%') OR (`items`.`name` LIKE '%ほげ%')))"

# 関連モデルの検索
Item.search(:comments_body_cont => 'ほげ').result.to_sql
# => "SELECT `items`.* FROM `items` LEFT OUTER JOIN `item_comments` ON `item_comments`.`item_id` = `items`.`id` WHERE `item_comments`.`body` LIKE '%ほげ%'" 

```