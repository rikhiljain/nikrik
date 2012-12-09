Nikrik::Application.routes.draw do

  resources :rtos


  resources :motor_discounts


  resources :motor_searches


  get "welcome/index"
  get "idv_charts/distinctMakers"
  
  resources :my_names
  resources :idv_charts
  resources :users
  resources :motorquotes


  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "welcome#index"
  devise_for :users
end
