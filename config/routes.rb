Nikrik::Application.routes.draw do

  devise_for :users,  :path => '', path_names:{sign_in: "login", sign_out: "logout"}


  get "welcome/index"
  get "home/admin"
  post "home/callus"

  get "motor/idv_charts/distinctMakers" => "motor/idv_charts#distinctMakers"
  get "motor/idv_charts/modelsForAManufacturer" => "motor/idv_charts#modelsForAManufacturer"
  get "motor/idv_charts/:id/motorValue" => "motor/idv_charts#motorValue"
  get "motor/idv_charts/models" => "motor/idv_charts#models"
  get  "motor/searches/currentUser" => "motor/searches#currentUser"
  post "motor/searches/quote" => "motor/searches#quote"
  post "motor/searches/buy" => "motor/searches#buy"
  
  post "health/searches/quote" => "health/searches#quote"
  
  namespace :motor do
    resources :rtos
    resources :discounts
    resources :searches
    resources :quotes
    resources :idv_charts
  end
  
  resources :policies

  get "policies/display/:id"  =>    "policies#display"
  get "policies/policies/:id"  =>    "policies#policies"
  get "policies/download/:id"  => "policies#download"
 
  resources :admin_users do
    resources :policies, :shallow=>true      
  end


  root :to => "welcome#index"

end
