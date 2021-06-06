import * as channelAPIUtil from  '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
//TO DO FINISH CHANNELS action

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const removeChannel = (channel) => ({
  type: REMOVE_CHANNEL,
  channelId: channel.id
});

export const fetchChannel = (serverId, channel) => dispatch => {
  return channelAPIUtil.fetchChannel(serverId, channel)
    .then(payload => dispatch(receiveChannel(payload)));
}

export const fetchChannels = (serverId) => dispatch => {
  return channelAPIUtil.fetchChannels(serverId)
    .then(payload => dispatch(receiveChannels(payload)))
}

export const deleteChannel = (serverId, channel) => dispatch => {
  return channelAPIUtil.deleteChannel(serverId, channel)
    .then(payload => dispatch(removeChannel(payload)));
}