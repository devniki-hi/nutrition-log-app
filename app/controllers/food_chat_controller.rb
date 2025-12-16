class FoodChatController < ApplicationController
    def index
        render inertia: "Chat/AIChat", props: {
        prompt: "",
        reply: nil,
        error: nil
        }
    end

    def create
        prompt = params.require(:prompt).to_s

        reply = Openai::Respond.call(input: prompt)

        render inertia: "Chat/AIChat", props: {
        prompt: prompt,
        reply: reply,
        error: nil
        }
    rescue => e
        render inertia: "Chat/AIChat", props: {
        prompt: prompt,
        reply: nil,
        error: e.message
        }, status: :unprocessable_entity
    end
end
