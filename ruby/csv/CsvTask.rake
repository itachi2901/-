# run : rake inport_csv:fetch_by_csv filename
namespace :import_csv do
  require "csv"
  desc 'CSVデータからDBにインポートする'
  task :fetch_by_csv, ['filename'] => :environment do |task, args|
    CSV.foreach("db/seeds/#{args.filename}") do |row|
      # Typeでクラスを分岐
      user = User.find_or_initialize_by(email: row[0])
      user.name        = row[1]
      user.address     = row[2]
      user.save!
    end
  end
end

# ファイル名エクスポート
file_name = "filename_#{Time.zone.now.strftime('%Y%m%d%H%M%S')}.csv"
local_file_dir = "#{Rails.root.join("tmp")}/file_folder".freeze
FileUtils.mkdir_p(local_file_dir) unless Dir::exist?(local_file_dir)
file_path = "#{local_file_dir}/#{file_name}"
# ファイルのヘッダ
HEADER_COLUMNS = ["ランク", "1位", "2位", "3位", "4位", "5位"].freeze

# data
data_csv = [1,2,4,5,6,7]

# CSVファイル出力する
File.open(file_path, "w:Shift_JIS:UTF-8") do |f|
  f.puts HEADER_COLUMNS.join(",")
  data_csv.each do |row|
    data = [
        row[:rank],
        row[:place_1],
        row[:place_2],
        row[:place_3],
        row[:place_4],
        row[:place_5]
    ]
    f.puts data.join(",")
  end
end