import React from 'react';
import { Link } from 'react-router-dom';
import SettingBarContainer from '../setting_bar/setting_bar_container';
import { isEmpty } from "lodash";

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentServerId: null
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.serverId !== this.props.serverId){
      this.props.fetchChannels(this.props.serverId)
        .then(() => this.setState({loading: false}));
    }
  }
  componentDidMount(){
    this.props.fetchChannels(this.props.serverId)
        .then(() => this.setState({loading: false}));
  }


  render () {
    let channelNames;
    let currentServerName;
    let serverId = this.props.serverId;
    if (!this.state.loading) {
      let channels = Object.values(this.props.channels);
      channelNames = channels.map((channel,i) => (
        <li key={i}>
          <Link to={`/servers/${serverId}/channels/${channel.id}`}>
            {channel.name}
          </Link>
        </li>
      ));
      if (this.props && !_.isEmpty(this.props.servers)) {
        currentServerName = Object.values(this.props.servers)
          .filter(server => server.id === parseInt(this.props.serverId))[0]["name"]
      }
    }
    return (
      <div className='channel-list'>
        <div className="channel-links">
          <div className="server-name">
            <h3>{currentServerName}</h3>
          </div>
          <h4>TEXT CHANNELS</h4>
          {channelNames}
        </div>
        <SettingBarContainer />

      </div>
    )
  }
}

export default Channel;