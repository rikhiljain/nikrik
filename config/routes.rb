Nikrik::Application.routes.draw do

  devise_for :users, path_names:{sign_in: "login", sign_out: "logout"}

  resources :rtos
  resources :motor_discounts
  resources :motor_searches

  get "welcome/index"
  get "idv_charts/distinctMakers"
  get "idv_charts/modelsForAManufacturer"
  get "idv_charts/:id/motorValue" => "idv_charts#motorValue"
  get "idv_charts/models"

  resources :my_names
  resources :idv_charts
  resources :users
  resources :motorquotes


  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "welcome#index"

end
