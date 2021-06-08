class ChatChannel < ApplicationCable::Channel
  def subscribed
    puts "subscribed"
    stream_for "chat_channel"
  end

  def speak(data)
    message = Message.create(body: data['message'])
    socket = { message: message.body }
    # debugger
    ChatChannel.broadcast_to('chat_channel', socket)

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
