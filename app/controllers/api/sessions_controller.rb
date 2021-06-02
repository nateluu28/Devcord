class Api::SessionsController < ApplicationController
  def new
    render :new
  end

  def create 
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
    if @user.nil?
      flash.now[:errors] = ['Invalid Email or Password']
      redirect_to root_url
    else
      login(@user)
      redirect_to root_url
    end
  end

  def destroy
    logout
    redirect_to root_url
  end

end
