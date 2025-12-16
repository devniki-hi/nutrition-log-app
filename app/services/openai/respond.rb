# frozen_string_literal: true

module Openai
  class Respond
    def self.call(input:, model: :"gpt-5.2")
      resp = OPENAI_CLIENT.responses.create(
        model: model,
        input: input
      )
      resp.output_text
    end
  end
end