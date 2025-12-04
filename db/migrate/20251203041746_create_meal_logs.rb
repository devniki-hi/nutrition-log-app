class CreateMealLogs < ActiveRecord::Migration[8.1]
  def change
    create_table :meal_logs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :food, null: false, foreign_key: true
      t.datetime :logged_at
      t.float :intake_kcal
      t.float :intake_protein
      t.float :intake_fat
      t.float :intake_carbs
      t.integer :intake_rate

      t.timestamps
    end
  end
end
