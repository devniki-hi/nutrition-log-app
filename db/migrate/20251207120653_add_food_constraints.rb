class AddFoodConstraints < ActiveRecord::Migration[8.1]
  def change
    add_check_constraint :foods,
      "char_length(name) <= 30",
      name: "foods_name_length_check"

    %i[kcal protein fat carbs sugar fiber].each do |col|
      add_check_constraint :foods,
        "#{col} >= 0",
        name: "foods_#{col}_non_negative"
    end

    add_check_constraint :foods,
      "portion_value > 0",
      name: "foods_portion_positive"

    add_check_constraint :foods,
      "char_length(note) <= 500",
      name: "foods_note_length_check"

    add_check_constraint :foods,
      "jan_code ~ '^[0-9]{13}$' OR jan_code IS NULL OR jan_code = ''",
      name: "foods_jan_code_format_check"
  end
end
