json.array! servers do |server|
  json.id :id
  json.name :name 
  json.firstChannelId server.channels.first.id

end
