class Api::ServersController < ApplicationController
  def create
    @server = Server.new(servers_params)
    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def index 
    @servers = Server.all
    render :index
  end

  def show 
    @server = Server.find(params[:id])
    render :show
  end

  # create delete ...

  def servers_params
    params.require(:server).permit(:name, :owner_id)
  end
end
