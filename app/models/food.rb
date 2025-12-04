class Food < ApplicationRecord
  has_many :meal_logs, dependent: :destroy
  has_many :users, through: :meal_logs
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
end
