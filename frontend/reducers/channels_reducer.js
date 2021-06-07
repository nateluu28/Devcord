import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from '../actions//channels_actions';

const channelsReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      nextState[action.channel.id] = action.channel;
      return nextState;
    case RECEIVE_CHANNELS:
      return Object.assign({}, action.channels, state);
    case REMOVE_CHANNEL:
      delete nextState[action.channelId];
      return nextState;
    default:
      return state;
  }
}

export default channelsReducer;