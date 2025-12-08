class AddIntakeRateConstraintToMealLogs < ActiveRecord::Migration[8.1]
  def change
    add_check_constraint :meal_logs,
      "intake_rate > 0",
      name: "meal_logs_intake_rate_positive"
  end
end