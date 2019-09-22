class User < ActiveRecord::Base
  has_many :addresses

  # 住所の追加、更新、削除ができるようになります
  # allow_destroy: true 入れ子にしたモデルの削除機能の追加
  # reject_if　住所を入力する気がなくてもバリデーションが実行されてしまいユーザーが登録できません
  accepts_nested_attributes_for :addresses, allow_destroy: true, reject_if: :all_blank

  # presence: true 各項目が存在しない場合バリデーションエラーになる
  validates :username,  presence: true
  validates :age,       presence: true
end