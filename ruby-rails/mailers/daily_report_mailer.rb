class DailyReportMailer < ApplicationMailer
  def daily
    mail to: "test@example.com", subject: "【TEST】レポートメール"
  end
end