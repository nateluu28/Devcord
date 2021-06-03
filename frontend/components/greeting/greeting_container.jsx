import { connect } from 'react-redux';

import { logout } from '../../actions/sessions_actions';
import Greeting from './greeting';

const mSTP = ({ session, entities: { users } }) => (
  {
    currentUser: users[session.id]
  }
)

export default connect(mSTP, { logout })(Greeting)