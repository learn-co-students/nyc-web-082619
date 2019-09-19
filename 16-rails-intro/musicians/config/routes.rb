Rails.application.routes.draw do
  # resources :musicians
  get "/musicians", to: "musicians#index"
  get "/musicians/ofAge", to: "musicians#ofAge"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
