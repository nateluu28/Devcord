import { 
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/sessions_actions';


const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state= _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {id: action.currentUser.id})
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, { id: null })
    default:
      return state; 
  }
};

export default sessionReducer;