# config/environments/deploy.rb
require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.active_storage.service = :amazon
end