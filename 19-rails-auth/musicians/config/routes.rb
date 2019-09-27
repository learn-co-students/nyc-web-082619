Rails.application.routes.draw do

  # User Routes
  # a route to recieve a new form for a User
  get '/signup', to: "users#new", as: "new_user"
  # a route to submit information coming from the form
  post '/users', to: "users#create" 

  # Login Routes
  # a route to recieve a login form
  get "/login", to: "sessions#new", as: "login"
  # a route to submit login information to
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#logout", as: "logout"


# Musician Routes
get "/musicians", to: "musicians#index", as: "musicians"
  get "/musicians/ofAge", to: "musicians#ofAge"
  get "/musicians/new", to: "musicians#new" 
  get "/musicians/:id", to: "musicians#show", as: "musician"
  get "/musicians/:id/edit", to: "musicians#edit"
  post "/musicians", to: "musicians#create"
  patch "/musicians/:id", to: "musicians#update"
  
# Song Routes
  get "/songs/new", to: "songs#new", as: "new_song"
  post "/songs", to: "songs#create"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
