resources :articles do
  resources :comments
end

resources :events do
  resources :comments
end