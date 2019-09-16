定義方法1: scopeメソッドで定義

```ruby
class Post < ActiveRecord::Base
  scope :published, -> { where(published: true) }
end
```

定義方法2: クラスメソッドのように定義
```ruby
class Post < ActiveRecord::Base
  def self.published
    where(published: true)
  end
end
```

次のように呼び出すことができます。
```ruby
Post.published # => publishedカラムが"true"のPost達を取得

category = Category.first
category.posts.published
```

スコープに引数を指定
```ruby
# app/modes/post.rb
class Post < ActiveRecord::Base
  scope :created_before, ->(time) { where("created_at < ?", time) }
end

# 使用方法
Post.created_before(Time.local(2011))
```

スコープのマージ
```ruby
# app/models/user.rb
class User < ActiveRecord::Base
  scope :inactive, -> { where state: 'inactive' }
  scope :finished, -> { where state: 'finished' }
end

# 使用方法
User.inactive.finished
```

joinsメソッドと一緒
```ruby
# 定義
class Category < ActiveRecord::Base
  has_many :posts
  # スコープでjoinsを行い、Postクラスのrecentスコープを利用する方法
  scope :with_posts, -> { joins(:posts).merge(Post.recent) }
end

class Post < ActiveRecord::Base
  belongs_to :category
  scope :recent, -> { where(created_at: Time.zone.now.3.days.ago) }
end


# 使い方 
Category.with_posts
```

デフォルトスコープ
```ruby
# app/models/customer.rb
class Customer < ActiveRecord::Base
  # 退会した顧客では、removed_atカラムは "削除した日付"
  # 退会していない顧客では、removed_atカラムは "NULL"
  default_scope { where("removed_at IS NULL") } 
end

# 使用方法
# 全てのクエリにデフォルトスコープで指定した条件がつけられる
Customer.all
# => SELECT "customers".* FROM "customers" WHERE (removed_at IS NULL)
```