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

ActiveRecord::Schema[8.1].define(version: 2025_12_10_154038) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.string "name", null: false
    t.bigint "record_id", null: false
    t.string "record_type", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.string "content_type"
    t.datetime "created_at", null: false
    t.string "filename", null: false
    t.string "key", null: false
    t.text "metadata"
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

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
    t.check_constraint "carbs >= 0::double precision", name: "foods_carbs_non_negative"
    t.check_constraint "char_length(name::text) <= 30", name: "foods_name_length_check"
    t.check_constraint "char_length(note) <= 500", name: "foods_note_length_check"
    t.check_constraint "fat >= 0::double precision", name: "foods_fat_non_negative"
    t.check_constraint "fiber >= 0::double precision", name: "foods_fiber_non_negative"
    t.check_constraint "jan_code::text ~ '^[0-9]{13}$'::text OR jan_code IS NULL OR jan_code::text = ''::text", name: "foods_jan_code_format_check"
    t.check_constraint "kcal >= 0::double precision", name: "foods_kcal_non_negative"
    t.check_constraint "portion_value > 0", name: "foods_portion_positive"
    t.check_constraint "protein >= 0::double precision", name: "foods_protein_non_negative"
    t.check_constraint "sugar >= 0::double precision", name: "foods_sugar_non_negative"
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
    t.check_constraint "intake_rate > 0", name: "meal_logs_intake_rate_positive"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "meal_logs", "foods"
  add_foreign_key "meal_logs", "users"
end
