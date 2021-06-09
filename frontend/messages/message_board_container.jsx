import { connect } from 'react-redux';

const mSTP = ({ session, entities: { users, messages } }) => (
  {
    currentUser: users[session.id],
    
  }
)