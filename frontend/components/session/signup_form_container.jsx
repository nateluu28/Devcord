import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_actions';
import SignUpForm from './signup_form';


const mSTP = ({ errors }) => (
  {
    errors: errors.session,
    formType: 'signup',
  }
)

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};


export default connect(mSTP, mDTP)(SignUpForm);
