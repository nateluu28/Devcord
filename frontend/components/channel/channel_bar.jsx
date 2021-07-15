import React from 'react';
import { isEmpty } from "lodash";

class ChannelBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.match.params.serverId)
        .then(() => this.setState({loading: false}));
  }

  render() {
    let channelName;
    if (!this.state.loading) {
      if (this.props && !_.isEmpty(this.props.channels)) {
        let channelObj = this.props.channels[this.props.match.params.channelId];
        channelName = channelObj.name;
      }
    }
      
    return (
      <div className="channel-name"> 
        <h1>
          {channelName}
        </h1>
      </div>
    )
  }
}

export default ChannelBar;