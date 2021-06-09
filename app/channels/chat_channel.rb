class ChatChannel < ApplicationCable::Channel
  def subscribed
    if params[:channelId]
      @channel = Channel.find_by(id: params[:channelId])
      stream_for @channel if @channel
    end
  end

  def speak(data)
    socket = { 
      body: data['body'],
      author_id: data['author_id']
    }
    @message = Message.create(socket)
    @channel = Channel.find_by(id: data['channel_id'])
    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
