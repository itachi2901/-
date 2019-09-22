RailsでSeleniumを使ってスタンドアローンなブラウザテストをする方法

■ 目次

・必要なGemをインストールする

・ブラウザをインストールする

・テストコードを導入する

■ 動作環境

・Ruby 

・selenium-webdriver

・chromedriver

・rspec

・capybara

```ruby
bundle install

#　テスト実行
rpsec github_spec.rb
```
■ 参考

・https://gist.github.com/kenrett/7553278

・https://kitak.hatenablog.jp/entry/2013/10/08/214241