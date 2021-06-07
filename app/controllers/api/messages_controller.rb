class Api::MessagesController < ApplicationController
  def create
  end
  
  #add a limit for the messages later
  def index 
    @messages = Message.all
    render :index
  end


end
