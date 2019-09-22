ActiveRecordをもとにRailsプロジェクトのER図を作成してくれるツールです。

■目的

・プロジェクトのER図を作成してくれてツールです。

■動作確認

・Ruby 2.4.2

・Rails 5.1

・rails-erd

・Graphviz

・Mac

■目次

・Railsプロジェクトを作成

・Rails ERDのインストール

・Rails ERD使い方

```ruby
rails new rails-erd
cd rails-erd

rails g scaffold User firstname:string lastname:string email:string
rails g model Post title:string body:text user:references
rails g model Comment body:text user:references
rake db:migrate

# Gemfile 
group :development, :test do
  gem 'rails-erd'
  # 上記でうまくいかない、かつ、OSX Mavericksを使っている場合はこちらを使ってください
  # gem 'rails-erd', github: 'paulwittmann/rails-erd', branch: 'mavericks'
end

# Gemインストール
bundle install

# 使い方
rake erd
 
# オプションを指定する
rake erd attributes=foreign_keys,primary_keys,content filename=rails-erd filetype=png
```
■参考リンク

・http://voormedia.github.io/rails-erd/customise.html

・http://voormedia.github.io/rails-erd/