class ActiveSupport::TimeWithZone
  def as_json(options = nil)
    strftime('%d-%b-%Y')
  end
end