```ruby
# プロジェクト作成 
rails new error_handling_test
cd error_handling_test


# DB作成
rails g scaffold Post title:string content:text
rake db:migrate
```