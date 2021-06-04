import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/sessions_actions';
import SignUpForm from './signup_form';


const mSTP = ({ errors }) => (
  {
    errors: errors.session,
    formType: 'signup',
  }
)

export default connect(mSTP, { signup, receiveErrors })(SignUpForm);
