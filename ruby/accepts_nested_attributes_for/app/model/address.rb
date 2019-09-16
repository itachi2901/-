class Address < ActiveRecord::Base
  belongs_to :user

  # モデルを保存できなくなるのでpresence: trueは記載しない
  validates :user_id, presence: true

  # presence: true 各項目が存在しない場合バリデーションエラーになる
  validates :zipcode,  presence: true
  validates :city,     presence: true
  validates :street,   presence: true
  validates :tel,      presence: true
end