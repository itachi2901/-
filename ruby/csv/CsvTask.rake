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