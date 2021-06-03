import { RECEIVE_SERVER } from '../actions/servers_actions';

const serversReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER:
    return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
}

export default serversReducer;