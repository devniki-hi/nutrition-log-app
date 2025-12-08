class MealLog < ApplicationRecord
  belongs_to :user
  belongs_to :food

  validates :user_id, presence: true
  validates :food_id, presence: true

  validates :intake_rate,
    numericality: {
      only_integer: true,
      greater_than: 0
    },
    allow_nil: true

  validates :logged_at, presence: true

  # バック側で割合の計算を実施
  def rate
    (intake_rate.to_f / 100.0)
  end

  def intake_kcal
    food.kcal.to_f * rate
  end

  def intake_protein
    food.protein.to_f * rate
  end

  def intake_fat
    food.fat.to_f * rate
  end

  def intake_carbs
    food.carbs.to_f * rate
  end
end
