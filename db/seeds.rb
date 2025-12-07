# ============================================
# Users
# ============================================

test_user = User.create!(
  name: "Test user",
  email: "test@example.com",
  password: "password1",
  password_confirmation: "password1"
)

# その他 4 ユーザー（合計 5 ユーザー）
other_users = []
4.times do |i|
  other_users << User.create!(
    name: "#{Faker::Name.name}",
    email: "user#{i + 2}@example.com",
    password: "password#{i + 2}",
    password_confirmation: "password#{i + 2}"
  )
end

users = [ test_user ] + other_users


# ============================================
# Foods（超簡易ダミー）5種類
# Q2: プロテイン, ご飯, ヨーグルト, バナナ, サラダ
# ============================================

foods = [
  {
    name: "プロテイン",
    kcal: 120,
    protein: 24,
    fat: 1.5,
    carbs: 3,
    sugar: 2,
    fiber: 0,
    portion_value: 30,          # g
    unit_type: :g,
    source: :manual,
    jan_code: nil,
    note: "ホエイプロテイン 30g"
  },
  {
    name: "ご飯",
    kcal: 250,
    protein: 3.8,
    fat: 0.5,
    carbs: 55.7,
    sugar: 0,
    fiber: 0.3,
    portion_value: 150,         # g
    unit_type: :g,
    source: :manual,
    jan_code: nil,
    note: "白米 150g"
  },
  {
    name: "ヨーグルト",
    kcal: 62,
    protein: 3.6,
    fat: 3.0,
    carbs: 5.0,
    sugar: 4.5,
    fiber: 0,
    portion_value: 100,         # g
    unit_type: :g,
    source: :manual,
    jan_code: nil,
    note: "プレーンヨーグルト 100g"
  },
  {
    name: "バナナ",
    kcal: 86,
    protein: 1.1,
    fat: 0.2,
    carbs: 22.8,
    sugar: 12,
    fiber: 1.1,
    portion_value: 1,           # 1本
    unit_type: :piece,
    source: :manual,
    jan_code: nil,
    note: "中サイズ 1本"
  },
  {
    name: "サラダ",
    kcal: 40,
    protein: 2,
    fat: 0.5,
    carbs: 7,
    sugar: 3,
    fiber: 2,
    portion_value: 100,         # g
    unit_type: :g,
    source: :manual,
    jan_code: nil,
    note: "野菜サラダ 100g"
  }
]

foods = foods.map { |data| Food.create!(data) }


# ============================================
# MealLogs（5日分 × ユーザー × 3〜7件）
# intake_rate はランダム（20/50/70/100/200/300）
# Q3: 1日3〜7件、Q5: 5日分、Q7: ランダム
# ============================================

intake_rates = [ 20, 50, 70, 100, 200, 300 ]

users.each do |user|
  (0..4).each do |i|
    date = i.days.ago.to_date

    rand(3..7).times do
      food = foods.sample
      rate = intake_rates.sample / 100.0

      MealLog.create!(
        user: user,
        food: food,
        logged_at: date.to_datetime + rand(7..21).hours,  # ランダム時間
        intake_rate: (rate * 100).to_i
      )
    end
  end
end

puts "Seed data created successfully!"
