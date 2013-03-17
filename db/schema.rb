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

ActiveRecord::Schema.define(:version => 20130317112358) do

  create_table "companies", :force => true do |t|
    t.string   "name",       :limit => 20
    t.datetime "created_at",               :null => false
  end

  create_table "delayed_jobs", :force => true do |t|
    t.integer  "priority",   :default => 0
    t.integer  "attempts",   :default => 0
    t.text     "handler"
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  add_index "delayed_jobs", ["priority", "run_at"], :name => "delayed_jobs_priority"

  create_table "health_charts", :force => true do |t|
    t.integer  "company_id", :null => false
    t.integer  "coverage"
    t.integer  "age_start"
    t.integer  "age_end"
    t.integer  "premium"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "health_searches", :force => true do |t|
    t.integer  "no_of_childs",  :limit => 1
    t.integer  "adult_age",     :limit => 2
    t.integer  "father_age",    :limit => 2
    t.integer  "mother_age",    :limit => 2
    t.integer  "health_cover",                 :null => false
    t.integer  "policy_for",    :limit => 2,   :null => false
    t.string   "name",          :limit => 30
    t.string   "email_id",      :limit => 50
    t.integer  "mobile_number"
    t.string   "address",       :limit => 250
    t.string   "company_name",  :limit => 20
    t.integer  "final_premium"
    t.datetime "created_at",                   :null => false
  end

  create_table "idv_charts", :force => true do |t|
    t.string   "maker",      :limit => 20
    t.string   "model",      :limit => 20
    t.string   "subtype",    :limit => 20
    t.integer  "seats",      :limit => 2
    t.integer  "cubic",      :limit => 2
    t.string   "fuel",       :limit => 1
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
    t.datetime "created_at",               :null => false
    t.datetime "updated_at",               :null => false
  end

  create_table "motor_discounts", :force => true do |t|
    t.integer  "idv_chart_id"
    t.integer  "company_id",   :limit => 2
    t.integer  "rto_id"
    t.float    "amount"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "motor_searches", :force => true do |t|
    t.boolean  "new_policy"
    t.date     "policy_exp_date"
    t.integer  "year_of_manufacture"
    t.integer  "idv_chart_id"
    t.string   "register_type",          :limit => 1,  :null => false
    t.date     "register_date"
    t.integer  "rto_id",                               :null => false
    t.boolean  "has_claim"
    t.integer  "ncb"
    t.integer  "elec_acc"
    t.integer  "non_elec_acc"
    t.string   "cng_type",               :limit => 20
    t.integer  "cng_value"
    t.integer  "passenger_coverage_amt"
    t.boolean  "has_anti_theft"
    t.boolean  "has_full_cover"
    t.boolean  "is_aai_member"
    t.string   "name",                   :limit => 30
    t.string   "email_id",               :limit => 50
    t.integer  "mobile_number"
    t.string   "address"
    t.string   "company_name",           :limit => 20
    t.integer  "final_premium"
    t.datetime "created_at",                           :null => false
  end

  create_table "points", :force => true do |t|
    t.integer  "user_id"
    t.string   "ref_type",   :limit => 10, :null => false
    t.integer  "ref_id"
    t.integer  "value"
    t.string   "status",     :limit => 10
    t.datetime "exp_dt"
    t.datetime "created_at",               :null => false
  end

  create_table "policies", :force => true do |t|
    t.integer  "policy_id"
    t.string   "policy_type", :limit => 20, :null => false
    t.integer  "user_id"
    t.integer  "company_id",  :limit => 2
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "premium"
    t.integer  "discount"
    t.string   "policy_path"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "policy_attributes", :force => true do |t|
    t.integer  "company_id"
    t.string   "policy_type"
    t.string   "plan"
    t.string   "attrib_name"
    t.string   "attrib_value"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "policy_types", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "referrals", :force => true do |t|
    t.integer  "user_id"
    t.string   "email",      :limit => 50
    t.string   "mobile",     :limit => 10
    t.string   "ref_name",   :limit => 30
    t.string   "ref_mobile", :limit => 10
    t.string   "ref_desc",   :limit => 200
    t.integer  "amount"
    t.string   "status",     :limit => 10,  :null => false
    t.datetime "created_at",                :null => false
  end

  create_table "rewards", :force => true do |t|
    t.string   "name"
    t.string   "details"
    t.integer  "points"
    t.string   "image_name"
    t.string   "status"
    t.date     "start_date"
    t.date     "end_date"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "roles", :force => true do |t|
    t.string   "name",          :limit => 10, :null => false
    t.integer  "resource_id"
    t.string   "resource_type", :limit => 10
    t.datetime "created_at",                  :null => false
  end

  add_index "roles", ["name", "resource_type", "resource_id"], :name => "index_roles_on_name_and_resource_type_and_resource_id"
  add_index "roles", ["name"], :name => "index_roles_on_name"

  create_table "rtos", :force => true do |t|
    t.string   "code",       :limit => 2
    t.string   "sub_code",   :limit => 2
    t.string   "city",       :limit => 30
    t.string   "state",      :limit => 20
    t.datetime "created_at",               :null => false
    t.datetime "updated_at",               :null => false
  end

  create_table "travel_charts", :force => true do |t|
    t.integer  "company_id",        :limit => 2
    t.string   "policy_for",        :limit => 2
    t.string   "trip_type",         :limit => 1,                 :null => false
    t.integer  "max_trip_duration", :limit => 1,  :default => 0, :null => false
    t.integer  "coverage"
    t.integer  "age_start",         :limit => 1
    t.integer  "age_end",           :limit => 1
    t.string   "plan",              :limit => 20
    t.integer  "duration_start",    :limit => 1
    t.integer  "duration_end",      :limit => 1
    t.boolean  "has_usa"
    t.integer  "premium"
    t.datetime "created_at",                                     :null => false
    t.datetime "updated_at",                                     :null => false
  end

  create_table "travel_searches", :force => true do |t|
    t.integer  "age",               :limit => 2,                 :null => false
    t.string   "location",          :limit => 1,                 :null => false
    t.integer  "travel_cover",                                   :null => false
    t.string   "policy_for",        :limit => 1,                 :null => false
    t.string   "trip_type",         :limit => 1,                 :null => false
    t.integer  "max_trip_duration", :limit => 1,  :default => 0, :null => false
    t.date     "start_date"
    t.date     "end_date"
    t.string   "name",              :limit => 30
    t.string   "email_id",          :limit => 50
    t.integer  "mobile_number"
    t.string   "address"
    t.string   "company_name",      :limit => 20
    t.integer  "final_premium"
    t.datetime "created_at",                                     :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "email",                  :limit => 50, :default => "", :null => false
    t.string   "encrypted_password",                   :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                        :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     :limit => 30
    t.string   "last_sign_in_ip",        :limit => 30
    t.datetime "created_at",                                           :null => false
    t.datetime "updated_at",                                           :null => false
    t.string   "name",                   :limit => 50
    t.string   "mobile",                 :limit => 11
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
