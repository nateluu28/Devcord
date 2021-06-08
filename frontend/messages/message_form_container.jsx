import { connect } from 'react-redux';

import MessageForm from './message_form';

const mSTP = ({ session, entities: { users } }) => (
  {
    currentUser: users[session.id]
  }
)

export default connect(mSTP, {})(MessageForm)