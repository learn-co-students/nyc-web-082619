class ShoesController < ApplicationController
     
  # Shoes Index Action
  get "/shoes" do
    @shoes = Shoe.all
    erb :"shoes/index"
  end

    # Show Action
  get "/shoes/:argument" do
    binding.pry
  end

  # New Action: This is to return a form to create a new instance 
  get "/shoes/new" do
    binding.pry
  end

  # Create Action: This has to handle some submitted information that we will use to create our new user
  post "/shoes" do
    binding.pry
  end

  # Edit Action: this is to return an edit form for an existing user
  get "/shoes/:argument/edit" do
    binding.pry
  end

  # Update Action: This has to handle some submitted information that we will use to edit an existing user 
  patch "/shoes/:argument" do
    binding.pry
  end

  # Delete Action: this is to delete an existing user
  delete "/shoes/:argument" do
    binding.pry
  end

    
end