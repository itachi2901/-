Rails.application.routes.draw do
  resources :posts

  root "posts#index"

  match "*path" => "application#handle_404", via: :all
end