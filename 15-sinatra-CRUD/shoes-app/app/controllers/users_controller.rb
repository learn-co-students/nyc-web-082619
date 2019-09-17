class UsersController < ApplicationController 

     # Index Action
  get "/users" do  
    @users = User.all
    erb :"users/index"
  end
  
  
  # New Action: This is to return a form to create a new instance 
    get "/users/new" do
        erb :"users/new"
    end

    # Show Action
    get "/users/:id" do
    @user = User.find(params[:id])
    erb :"users/show"
    end

# Create Action: This has to handle some submitted information that we will use to create our new user
post "/users" do
    user = User.create(params[:user])
    redirect :"/users/#{user.id}"
end

# Edit Action: this is to return an edit form for an existing user
get "/users/:id/edit" do
    @user = User.find(params[:id])
    erb :"users/edit"
end

# Update Action: This has to handle some submitted information that we will use to edit an existing user 
patch "/users/:id" do
    user = User.find(params[:id])
    user.update(params[:user])
    redirect :"users/#{user.id}"
end

# Delete Action: this is to delete an existing user
  delete "/users/:argument" do
    binding.pry
  end


end