データベース用意
```coffeescript
rails g model event name:string content:text
rails g model article title:string body:text
rails g model comment content:text commentable_id:integer commentable_type:string
rake db:migrate
```