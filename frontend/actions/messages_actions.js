import * as messageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const recieveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const recieveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId
});

export const fetchMessages = (type, messageable_id) => (dispatch) => {
  return messageAPIUtil.fetchMessages(type, messageable_id)
    .then(messages => dispatch(recieveMessages(messages)));
}

export const deleteMessage = (messageId) => (dispatch) => {
  return messageAPIUtil.deleteMessage(messageId)
    .then(messageId => dispatch(removeMessage(messageId)));
}

export const createMessage = (message) => (dispatch) => {
  return messageAPIUtil.createMessage(message)
    .then(payload => dispatch(recieveMessage(payload)))
}