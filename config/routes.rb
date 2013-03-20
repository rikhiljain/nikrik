Nikrik::Application.routes.draw do

 
  devise_for :users,:path => '', path_names:{sign_in: "login", sign_out: "logout"}


  get "welcome/index"
  get "home/admin"
  post "home/callus" => "home#callus"
  get "home/complaint" => "home#new_complaint"
  post "home/complaint" => "home#complaint"

  get "motor/idv_charts/distinctMakers" => "motor/idv_charts#distinctMakers"
  get "motor/idv_charts/modelsForAManufacturer" => "motor/idv_charts#modelsForAManufacturer"
  get "motor/idv_charts/:id/motorValue" => "motor/idv_charts#motorValue"
  get "motor/idv_charts/models" => "motor/idv_charts#models"
  get  "motor/searches/currentUser" => "motor/searches#currentUser"
  post "motor/searches/quote" => "motor/searches#quote"
  post "motor/searches/buy" => "motor/searches#buy"
  
  post "health/searches/quote" => "health/searches#quote"
  post "health/searches/buy" => "health/searches#buy"

  post "travel/searches/quote" => "travel/searches#quote"
  post "travel/searches/buy" => "travel/searches#buy"

  post "loyalty/referral" => "loyalty#create_referral"
  get  "loyalty/user_referrals/:id" => "loyalty#user_referrals"
  get  "loyalty/find_referrals" => "loyalty#find_referrals"
  get  "loyalty/referral/:id" => "loyalty#referral"
  put "loyalty/update_referral/:id" => "loyalty#update_referral"

  get "loyalty/points/:id" => "loyalty#points"
  get "loyalty/rewards" => "loyalty#rewards"
  get "loyalty/purchase/:id" => "loyalty#purchase"
  get "loyalty/confirm/:id" => "loyalty#confirm"
  get "loyalty/details/:id/:ref_type/:ref_id" => "loyalty#details"

  #post  "loyalty/referrals" => "loyalty#create_referral"
  #get   "loyalty/:userId/referrals" => "loyalty#user_referrals"  #user
  #get   "loyalty/referrals?status=:status" => "loyalty#find_referrals"
  #get   "loyalty/referrals/:id" => "loyalty#referral"
  #put   "loyalty/referrals/:id" => "loyalty#update_referral"

  #get "loyalty/:userId/points" => "loyalty#points" #user
  #get "loyalty/activeRewards" => "loyalty#rewards" #user

  get "policies/display/:id"  =>    "policies#display"
  get "policies/policies/:id"  =>    "policies#policies"
  get "policies/download/:id"  => "policies#download"

  namespace :motor do
    resources :rtos
    resources :discounts
    resources :searches
    resources :quotes
    resources :idv_charts
  end
 
 namespace :travel do
   resources :charts
 end

 namespace :health do
   resources :charts
 end

  resources :policies
  resources :rewards 
  resources :admin_users
 resources :policy_attributes
 
  match "/delayed_job" => DelayedJobWeb, :anchor => false

  root :to => "welcome#index"

end
