class Api::UsersController < ApplicationController

  def create 
    @user = User.new(users_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def users_params
    params.require(:user).permit(:email, :password, :username)
  end

end
