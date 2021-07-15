import React from 'react';
import { isEmpty } from "lodash";

class ChannelBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      channelId: null
    }
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.match.params.serverId)
        .then(() => this.setState({loading: false}));
  }

  componentDidUpdate(prevProps){
    // console.log("outside")
    // // debugger;
    
    // console.log(this.state.channelId)
    // console.log(this.props.match.params.channelId)
    if (this.state.channelId !== this.props.match.params.channelId){
      
      console.log("called")
      console.log(this.props.match.params.serverId);
      this.props.fetchChannels(this.props.match.params.serverId)
        .then(this.setState({ channelId: this.props.match.params.channelId }));
    }
  }

  render() {
    let channelName;
    if (!this.state.loading && this.state.channelId === this.props.match.params.channelId) {
      let channelObj = Object.values(this.props.channels).find(x=> x.id === parseInt(this.props.match.params.channelId));
      if (channelObj) channelName = channelObj.name;
    }
      
    return (
      <div className="channel-name"> 
        <div>
          <h1>
            {channelName}
          </h1>
        </div>
        <div className="channel-links">

        </div>
      </div>
    )
  }
}

export default ChannelBar;