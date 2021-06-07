class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channels_params)
    @channel.server_id = params[:server_id]
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def index 
    @channels = Server.find(params[:server_id]).channels
    render :index
  end

  # def show 
  #   @channel = Channel.find(params[:channel_id])
  #   render :show
  # end

  def channels_params
    params.require(:channel).permit(:name)
  end
end
