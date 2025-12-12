class Food < ApplicationRecord
  has_many :meal_logs, dependent: :destroy
  has_many :users, through: :meal_logs
  before_validation :set_default_nutrition_values
  has_one_attached :food_image

  enum :unit_type, {
    g: 0,
    piece: 1,
    ml: 2
  }
  enum :source, {
    manual: 0,
    api: 1,
    jan: 2
  }

  validates :name,
    presence: true,
    length: { maximum: 30 }

  with_options numericality: {
    greater_than_or_equal_to: 0,
    format: { with: /\A\d+(\.\d{1,2})?\z/ }
  } do
    validates :kcal
    validates :protein
    validates :fat
    validates :carbs
    validates :sugar
    validates :fiber
  end

 validates :portion_value,
    numericality: {
      only_integer: true,
      message: "整数で入力してください"
    }

  validates :portion_value,
    numericality: {
      greater_than: 0,
      message: "1以上の数値を入力してください"
    }


  validates :unit_type,
    inclusion: { in: unit_types.keys }

  validates :source,
    inclusion: { in: sources.keys }

  validates :jan_code,
    format: {
      with: /\A\d{13}\z/,
      message: "13桁の数字を入力してください"
    },
    allow_blank: true


  validates :note,
    length: { maximum: 500 },
    allow_blank: true

  validates :food_image,
            content_type: {
              in: %w[image/jpeg image/png image/webp],
              message: "画像は JPEG/PNG/WebP のいずれかにしてください"
            },
            size: {
              less_than: 2.megabytes,
              message: "画像は 5MB 以下にしてください"
            }

  private

  def set_default_nutrition_values
    self.kcal   ||= 0
    self.protein ||= 0
    self.fat    ||= 0
    self.carbs  ||= 0
    self.sugar  ||= 0
    self.fiber  ||= 0
  end
end
