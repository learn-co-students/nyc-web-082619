Rails.application.routes.draw do

  resources :players
  namespace :api do
    namespace :v1 do
      resources :games
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
