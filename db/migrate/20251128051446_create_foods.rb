class CreateFoods < ActiveRecord::Migration[8.1]
  def change
    create_table :foods do |t|
      t.string :name, null: false
      t.integer :portion_value
      t.integer :unit_type

      t.float :kcal
      t.float :protein
      t.float :fat
      t.float :carbs
      t.float :sugar
      t.float :fiber

      t.integer :source
      t.string  :jan_code
      t.text    :note

      t.timestamps
    end
    add_index :foods, :jan_code
    add_index :foods, :name
  end
end
