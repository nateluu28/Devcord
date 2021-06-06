export const createChannel = (serverId, channel) => (
  $.ajax({
    method: 'post',
    url: `api/servers${serverId}/channels`,
    data: { channel }
  })
)

export const deleteChannel = (serverId, channel) => (
  $.ajax({
    method: 'delete',
    url: `api/servers${serverId}/channels/${channel.id}`
  })
)

export const fetchChannel = (serverId, channel) => (
  $.ajax({
    method: 'get',
    url: `api/servers${serverId}/channels/${channel.id}`
  })
)

export const fetchChannels = (serverId) => (
  $.ajax({
    method: 'get',
    url: `api/servers${serverId}/channels`
  })
)