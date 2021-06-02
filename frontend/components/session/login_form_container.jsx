import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/sessions_actions';
import SessionForm from './session_form';


const mSTP = ({ errors }) => (
  {
    errors: errors.session,
    formType: 'login',
  }
)

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};


export default connect(mSTP, mDTP)(SessionForm);
