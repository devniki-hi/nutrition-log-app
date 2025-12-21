# frozen_string_literal: true

module Openai
  class Respond
    def self.call(input:, model: :"gpt-5.2")
      client = Openai::Client.instance
      return dummy_response(input) if client.nil?

      resp = client.responses.create(
        model: model,
        input: input
      )
      resp.output_text
    end

    def self.dummy_response(input)
      "DUMMY: #{input}"
    end
  end
end
