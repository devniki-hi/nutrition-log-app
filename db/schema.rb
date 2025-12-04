# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2025_12_03_065419) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "foods", force: :cascade do |t|
    t.float "carbs"
    t.datetime "created_at", null: false
    t.float "fat"
    t.float "fiber"
    t.string "jan_code"
    t.float "kcal"
    t.string "name", null: false
    t.text "note"
    t.integer "portion_value"
    t.float "protein"
    t.integer "source"
    t.float "sugar"
    t.integer "unit_type"
    t.datetime "updated_at", null: false
    t.index ["jan_code"], name: "index_foods_on_jan_code"
    t.index ["name"], name: "index_foods_on_name"
  end

  create_table "meal_logs", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "food_id", null: false
    t.integer "intake_rate"
    t.datetime "logged_at"
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["food_id"], name: "index_meal_logs_on_food_id"
    t.index ["user_id"], name: "index_meal_logs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "name"
    t.datetime "remember_created_at"
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "meal_logs", "foods"
  add_foreign_key "meal_logs", "users"
end
