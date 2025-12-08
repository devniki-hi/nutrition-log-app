class RemoveJanCodeFormatCheckFromFoods < ActiveRecord::Migration[8.1]
  def change
    remove_check_constraint :foods,
      name: "foods_jan_code_format_check"
  end
end
