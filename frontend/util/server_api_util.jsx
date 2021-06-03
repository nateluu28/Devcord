export const createServer = server => (
  $.ajax({
    method: 'post',
    url: 'api/servers',
    data: { server }
  })
)

export const deleteServer = serverId => (
  $.ajax({
    method: 'delete',
    url: `api/servers${serverId}`
  })
)

export const fetchServer = serverId => (
  $.ajax({
    method: 'get',
    url: `api/servers${serverId}`
  })
)

export const fetchServers = () => (
  $.ajax({
    method: 'get',
    url: 'api/servers'
  })
)