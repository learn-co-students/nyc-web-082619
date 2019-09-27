class UsersController < ApplicationController
  before_action :valid?, except: [:new, :create]
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    session[:user] = @user.id
    redirect_to musicians_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :password)
  end
end
