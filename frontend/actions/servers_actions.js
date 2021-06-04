import * as serverAPIUtil from  '../util/server_api_util';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

export const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

export const removeServer = (server) => ({
  type: REMOVE_SERVER,
  serverId: server.id
});

export const createServer = id => dispatch => {
  return serverAPIUtil.createServer(id)
    .then(payload => dispatch(receiveServer(payload)));
}

export const fetchServer = id => dispatch => {
  return serverAPIUtil.fetchServer(id)
    .then(payload => dispatch(receiveServer(payload)));
}

export const fetchServers = () => dispatch => {
  return serverAPIUtil.fetchServers()
    .then(server => dispatch(receiveServers(server)));
}

export const deleteServer = (server) => dispatch => {
  return serverAPIUtil.deleteServer(server.id)
    .then(server => dispatch(removeServer(server)));
}