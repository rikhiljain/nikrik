Nikrik::Application.routes.draw do

  resources :motor_policies


  devise_for :users,  :path => '', path_names:{sign_in: "login", sign_out: "logout"}



  get "welcome/index"
  get "idv_charts/distinctMakers"
  get "idv_charts/modelsForAManufacturer"
  get "idv_charts/:id/motorValue" => "idv_charts#motorValue"
  get "idv_charts/models"
  get "home/admin"
  post "motor_searches/quote"
  post "motor_searches/buy"
  get  "motor_searches/currentUser" => "motor_searches#currentUser"
  post "home/callus"
  get "motor_policies/download/:id"  => "motor_policies#download"

  resources :rtos
  resources :motor_discounts
  resources :motor_searches
  resources :my_names
  resources :idv_charts
  resources :admin_users
  resources :motorquotes

  root :to => "welcome#index"

end
