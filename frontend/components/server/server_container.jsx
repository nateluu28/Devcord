import { connect } from 'react-redux';

import { logout } from '../../actions/sessions_actions';
import { fetchServers } from '../../actions/servers_actions';
import { fetchChannels } from '../../util/channel_api_util';
import Server from './server';

const mSTP = ({ session, entities: { users, servers } }) => ({
  currentUser: users[session.id],
  servers
})

export default connect(mSTP, { logout, fetchServers, fetchChannels})(Server)