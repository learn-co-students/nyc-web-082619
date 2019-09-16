require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/pongo" do
    erb :pongo
  end

  # Index Action
  get "/users" do  
    @users = User.all
    erb :index
  end

end
