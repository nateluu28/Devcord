export const createChannel = (serverId, channel) => (
  $.ajax({
    method: 'POST',
    url: `api/servers/${serverId}/channels`,
    data: { channel }
  })
)

export const deleteChannel = (serverId, channel) => (
  $.ajax({
    method: 'DELETE',
    url: `api/servers/${serverId}/channels/${channel.id}`
  })
)

export const fetchChannel = (serverId, channel) => (
  $.ajax({
    method: 'GET',
    url: `api/servers/${serverId}/channels/${channel.id}`
  })
)

export const fetchChannels = (serverId) => (
  $.ajax({
    method: 'GET',
    url: `api/servers/${serverId}/channels`
  })
)