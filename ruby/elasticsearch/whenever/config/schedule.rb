# config/schedule.rb
# コマンドの出力先を設定（デフォルトはなし）
set :output, "#{path}/log/cron.log"

# コマンドを実行するシェルを設定する（デフォルトはbash -l -c ':job'）
# set :job_template, "zsh ':job'"

# RAILS_ENVを設定する（デフォルトはproduction）
# set :environment, "development"


# 毎日の午前1時30分に実行する
every 1.day, at: '1:30 am' do
  command "/usr/bin/some_great_command"
  runner "MyModel.some_method"
  rake "some:great:rake:task"
end

# 毎日曜日の昼の12時に実行する
every :sunday, at: '12pm' do
  runner "AnotherModel.prune_old_records"
end

every 3.hours do
  runner "MyModel.some_process"
  rake "my:rake:task"
  command "/usr/bin/my_great_command"
end