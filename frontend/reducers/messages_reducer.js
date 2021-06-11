import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE} from '../actions/messages_actions';

const messagesReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      nextState[action.message.id] = action.message;
      return nextState;
    case RECEIVE_MESSAGES:
      return Object.assign({}, action.messages);
    case REMOVE_MESSAGE:
      delete nextState[action.messageId];
      return nextState;  
    default:
      return state;
  }
}

export default messagesReducer;