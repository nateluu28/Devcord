import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup } from './actions/sessions_actions';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');

  // current user information to persist
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;

  ReactDOM.render(<Root store={store}/>, root);

})