Rails.application.routes.draw do
  resources :messages
  resources :user_channels
  resources :channels
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server, at: '/cable'
end

# ws://localhost:3001/cable
