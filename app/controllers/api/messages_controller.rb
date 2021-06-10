class Api::MessagesController < ApplicationController
  def create
    @channel = Channel.find_by(id: params[:channel_id])
    if @channel
      @message = Message.create(
        body: params[:body]
      )
    end

  end
  
  #add a limit for the messages later
  def index 
    @channel = Channel.find_by(id: params[:channel_id])
    if @channel
      @messages = @channel.messages
    end
    render :index
  end

  def message_params
    params.require(:message).permit(:body)
  end

end
