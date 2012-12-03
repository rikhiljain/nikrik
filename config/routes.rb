Nikrik::Application.routes.draw do

  get "welcome/index"

  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "welcome#index"
  devise_for :users
  resources :users
  resources :motorquotes
end
