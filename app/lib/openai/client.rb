# frozen_string_literal: true

require "openai"

module Openai
  module Client
    def self.instance
      return nil if Rails.env.test? || ENV["CI"]
      return nil if ENV["OPENAI_API_KEY"].blank?

      @instance ||= OpenAI::Client.new(api_key: ENV.fetch("OPENAI_API_KEY"))
    end
  end
end
