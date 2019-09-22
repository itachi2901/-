■ 動作確認
```ruby
# config/initializers/filter_parameter_logging.rb
Rails.application.config.filter_parameters += [:password]

# クレジットカード番号もフィルタリングする
# Rails.application.config.filter_parameters += [:password, :credit_card_number]


# Rails.application.config.filter_parameters += []場合は
Started POST "/users" for 127.0.0.1 at 2014-12-06 14:02:35 +0900
Processing by UsersController#create as HTML
Parameters: {"utf8"=>"✓", "authenticity_token"=>"IV2rjQ4ta9xPMTvvAMNOhp6XtgfIhh2nj7UpD8ZjHpQ=", "user"=>{"email"=>"test@test.com", "password"=>"secret", "credit_card_number"=>"1111-2222-3333-4444"}, "commit"=>"Create User"}
  
  
 
#Rails.application.config.filter_parameters += [:password, :credit_card_number]を設定し
#サーバーを再起動させる
#ログ確認
 
Processing by UsersController#create as HTML
Parameters: {"utf8"=>"✓", "authenticity_token"=>"IV2rjQ4ta9xPMTvvAMNOhp6XtgfIhh2nj7UpD8ZjHpQ=", "user"=>{"email"=>"test@test.com", "password"=>"[FILTERED]", "credit_card_number"=>"[FILTERED]"}, "commit"=>"Create User"} 
```


