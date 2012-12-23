# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121223073645) do

  create_table "companies", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "idv_charts", :force => true do |t|
    t.string   "maker"
    t.string   "model"
    t.string   "subtype"
    t.integer  "seats"
    t.integer  "cubic"
    t.string   "fuel"
    t.integer  "age_0_6"
    t.integer  "age_6_12"
    t.integer  "age_12_24"
    t.integer  "age_24_36"
    t.integer  "age_36_48"
    t.integer  "age_48_60"
    t.integer  "age_60_72"
    t.integer  "age_72_84"
    t.integer  "age_84_96"
    t.integer  "age_96"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "motor_discounts", :force => true do |t|
    t.integer  "idv_chart_id"
    t.integer  "company_id"
    t.float    "amount"
    t.string   "rto_code"
    t.string   "rto_sub_code"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "motor_policies", :force => true do |t|
    t.integer  "policy_id"
    t.integer  "user_id"
    t.integer  "company_id"
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "premium"
    t.integer  "discount"
    t.string   "policy_path"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "motor_searches", :force => true do |t|
    t.boolean  "new_policy"
    t.date     "policy_exp_date"
    t.date     "year_of_manufacture"
    t.integer  "idv_chart_id"
    t.string   "register_type"
    t.string   "register_city"
    t.boolean  "has_claim"
    t.integer  "ncb"
    t.integer  "elec_acc"
    t.integer  "non_elec_acc"
    t.string   "cng_type"
    t.integer  "cng_value"
    t.integer  "passenger_coverage_amt"
    t.boolean  "has_anti_theft"
    t.boolean  "is_aai_member"
    t.datetime "created_at",             :null => false
    t.datetime "updated_at",             :null => false
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.integer  "resource_id"
    t.string   "resource_type"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "roles", ["name", "resource_type", "resource_id"], :name => "index_roles_on_name_and_resource_type_and_resource_id"
  add_index "roles", ["name"], :name => "index_roles_on_name"

  create_table "rtos", :force => true do |t|
    t.string   "code"
    t.string   "sub_code"
    t.string   "city"
    t.string   "state"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "table 10", :id => false, :force => true do |t|
    t.string "COL 1", :limit => 4
    t.string "COL 2", :limit => 8
    t.string "COL 3", :limit => 23
    t.string "COL 4", :limit => 1
  end

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "name"
    t.string   "mobile"
    t.string   "address"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  create_table "users_roles", :id => false, :force => true do |t|
    t.integer "user_id"
    t.integer "role_id"
  end

  add_index "users_roles", ["user_id", "role_id"], :name => "index_users_roles_on_user_id_and_role_id"

end
