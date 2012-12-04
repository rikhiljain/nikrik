Nikrik::Application.routes.draw do

  resources :my_names


  resources :idv_charts


  resources :users
  resources :motorquotes

  get "welcome/index"

  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "welcome#index"
  devise_for :users
end
