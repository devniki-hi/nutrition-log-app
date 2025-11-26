class StaticPagesController < ApplicationController
  def welcome
    render inertia: "WelcomePage", props: {
      title: "Welcome"
    }
  end
end
