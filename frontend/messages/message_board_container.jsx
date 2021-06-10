import { connect } from 'react-redux';

import MessageBoard from './message_board';
import { fetchMessages } from '../actions/messages_actions'

const mSTP = ({ session, entities: { users, messages } }) => ({
    currentUser: users[session.id],
    messages
})

export default connect(mSTP, { fetchMessages })(MessageBoard)