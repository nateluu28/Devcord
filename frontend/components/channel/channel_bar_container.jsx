import { connect } from 'react-redux';

import ChannelBar from './channel_bar';
import { withRouter } from 'react-router';
import { fetchChannels } from '../../actions/channels_actions';


const mSTP = ({ entities: { channels } }) => ({
    channels: channels
})

export default withRouter(connect(mSTP, { fetchChannels })(ChannelBar));