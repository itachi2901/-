Railsでのログ・ロガーまとめ

```ruby
logger.debug "ログ出力先にDebugレベルで情報を出力する"

# 五つのメソッドがある
logger.fatal "致命的なエラー情報"
logger.error "エラー情報"
logger.warn  "警告情報"
logger.info  "お知らせ情報"
logger.debug "デバッグ情報"

# レペル使い方
fatal  # プログラムがクラッシュしたなどエラーハンドリングできないエラー
error  # エラーハンドリングできるエラー
warn   # 警告
info   # システム操作に対する一般的な役に立つ情報
debug  # 開発者向けの詳細な情報 


#新たにロガーを作成
 
# log/developmetn.logに出力するロガーを作成。週ごとにログファイルがローテートされる
config.logger = Logger.new('log/development.log', 'weekly')

# log/developmetn_special.logに出力する２つ目のロガーを作成。日ごとにログファイルがローテートされる
config.special_logger = Logger.new('log/development_special.log', 'daily')

# ントローラー、モデル、ビューなどで上記で作成したログを使う
  
logger.debug "log/development.logに出力します"

# 新たに定義したロガーは次のような指定をしないといけない
Rails.application.config.special_logger.debug "log/development_special.logに出力される"

# デフォルトのフォーマッター
  
config.logger.formatter = ::Logger::Formatter.new


# 自分でログフォーマットを調整する
 config.logger.formatter = proc do |severity, datetime, progname, msg|
   "[#{severity}]#{datetime}: #{progname} : #{msg}\n"
 end
 
 # ログ内容です。
 [INFO]2014-12-18 22:48:40 +0900:  : Started GET "/users" for 127.0.0.1 at 2014-12-18 22:48:40 +0900
 [INFO]2014-12-18 22:48:40 +0900:  : Processing by UsersController#index as HTML
 
 
 #他の情報がログに導入すると、 各のパーラーで調整できる
logger.progname = "[user_id=#{user.id}]"

```