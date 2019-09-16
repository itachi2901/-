Railsでは、accepts_nested_attributes_forを使うことで、簡単に1対多のモデルを一度に更新するフォームを作成することできます。

例
ユーザーUserが家、会社など複数の住所が持っているというという１対多関係のモデル。

手順流れ
・プロジェクトを作成
```coffeescript
rails new accepts_nested_attributes_for_test
cd accepts_nested_attributes_for_test
```
・ユーザーをtest01で作成する
```coffeescript
rails g test01 User username age:integer
```

・住所モデルを作成
```coffeescript
rails g model Address zipcode city street tel user_id:integer
```

マイグレートを実行する
```coffeescript
rake db:migrate
```

Ajaxで動的に住所の入力項目を追加/削除する
```coffeescript
echo "gem 'jquery-turbolinks'" >> Gemfile
bundle install
```
