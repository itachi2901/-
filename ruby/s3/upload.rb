class Upload
  # gem 'aws-sdk'
  def upload_to_s3
    @file_dir  = "report/2019".freeze
    s3 = Aws::S3::Resource.new(region: ENV['REPORT_AWS_REGION'])
    bucket = s3.bucket("report-#{Rails.env}").object("#{@file_dir}/report.txt")
    bucket.upload_file("report.txt")
  end
end