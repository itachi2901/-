RailsでCron設定をソース管理する

■動作確認

・ Rails 5.1

・ Ruby 2.4.2

・ whenever

■ 目次

・wheneverのインストール

```ruby
# Gemfile
gem 'whenever', :require => false

bundle install
```

・wheneverの基本的な使い方
```ruby
# 記載するファイル(/config/schedule.rb)を作成する
bundle exec wheneverize

#schedule.rb をcrontabの文法に変換する
bundle exec whenever

#crontabを更新する（既に書かれているcron設定は消えない）
bundle exec whenever -i

# crontabを上書きする（既に書かれているcron設定は消える）
bundle exec whenever -w 
```
・schedule.rbのサンプル

