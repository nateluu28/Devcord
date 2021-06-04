import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/sessions_actions';
import SessionForm from './login_form';


const mSTP = ({ errors }) => (
  {
    errors: errors.session,
    formType: 'login',
  }
)

export default connect(mSTP, { login, receiveErrors })(SessionForm);
