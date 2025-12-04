class MealLog < ApplicationRecord
  belongs_to :user
  belongs_to :food

  # intake_rate は % 前提（20 / 50 / 70 / 100 / 200 / 300）
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
