class ChatChannel < ApplicationCable::Channel
  def subscribed
    if params[:channelId]
      @channel = Channel.find_by(id: params[:channelId])
      stream_for @channel if @channel
    end
  end

  def speak(data)
    @message = Message.new(data['message'])
    if @message.save
      debugger
      ChatChannel.broadcast_to(@channel, data['message']) 
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
