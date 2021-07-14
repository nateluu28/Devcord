import React from 'react';
import { Link } from 'react-router-dom';
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
    }
    console.log(this.props);
    return (
      <div className='channel-list'>
      {/* have server name on the top */}
        <h1>channelist</h1>
        {channelNames}
      </div>
    )
  }
}

export default Channel;