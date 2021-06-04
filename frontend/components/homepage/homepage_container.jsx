import { connect } from 'react-redux';

import { logout } from '../../actions/sessions_actions';
import HomePage from './homepage';

const mSTP = ({ session, entities: { users } }) => (
  {
    currentUser: users[session.id]
  }
)

export default connect(mSTP, { logout })(HomePage)