Rails.application.routes.draw do
  # resources :musicians
  get "/musicians", to: "musicians#index", as: "musicians"
  get "/musicians/ofAge", to: "musicians#ofAge"
  get "/musicians/new", to: "musicians#new" 
  get "/musicians/:id", to: "musicians#show", as: "musician"
  get "/musicians/:id/edit", to: "musicians#edit"
  post "/musicians", to: "musicians#create"
  patch "/musicians/:id", to: "musicians#update"
  

  get "/songs/new", to: "songs#new", as: "new_song"
  post "/songs", to: "songs#create"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
