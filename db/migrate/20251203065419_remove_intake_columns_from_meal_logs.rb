class RemoveIntakeColumnsFromMealLogs < ActiveRecord::Migration[8.1]
  def change
    remove_column :meal_logs, :intake_kcal, :float
    remove_column :meal_logs, :intake_protein, :float
    remove_column :meal_logs, :intake_fat, :float
    remove_column :meal_logs, :intake_carbs, :float
  end
end
