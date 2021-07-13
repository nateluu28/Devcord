json.array! servers do |server|
  json.id server.id
  json.name server.name 
  json.firstChannelId server.channels.first.id

end
