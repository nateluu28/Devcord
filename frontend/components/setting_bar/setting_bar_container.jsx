import { connect } from 'react-redux';
import SettingBar from './setting_bar';


const mSTP = ({ session, entities: { users } }) => (
  {
    currentUser: users[session.id]
  }
)

export default connect(mSTP, {})(SettingBar);