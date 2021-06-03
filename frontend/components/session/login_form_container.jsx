import { connect } from 'react-redux';
import { login } from '../../actions/sessions_actions';
import SessionForm from './login_form';


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
