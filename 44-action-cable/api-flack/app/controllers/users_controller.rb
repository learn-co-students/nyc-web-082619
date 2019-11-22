class UsersController < ApplicationController

  def create
    user = User.find_or_create_by(user_params)

    if user.valid?
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  private

  def user_params
    params.permit(:username)
  end

end
