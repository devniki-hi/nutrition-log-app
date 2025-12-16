require "openai"

OPENAI_CLIENT = OpenAI::Client.new(
  api_key: ENV.fetch("OPENAI_API_KEY")
)