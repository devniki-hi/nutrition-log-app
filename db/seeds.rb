# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# 以下を追加
User.create!(
  name: "Test user",
  email: "test@example.com",
  password: "password",
  password_confirmation: "password"
)

# ======== その他 4 ユーザー（ダミー）========
4.times do |i|
  User.create!(
    name: "#{Faker::Name.name}",
    email: "user#{i + 2}@example.com",
    password: "password#{i + 2}",
    password_confirmation: "password#{i + 2}"
  )
end
