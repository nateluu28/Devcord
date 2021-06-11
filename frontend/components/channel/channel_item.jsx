import React from 'react';
import MessageBoardContainer from '../../messages/message_board_container';
import ServerContainer from '../server/server_container';
import ChannelContainer from './channel_container';
import { withRouter } from 'react-router-dom';

class ChannelItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return (
      <div className='chat-room'>
        <ServerContainer />
        <ChannelContainer 
          serverId={this.props.match.params.serverId} 
          channelId={this.props.match.params.channelId} 
          />
        <MessageBoardContainer channelId={this.props.match.params.channelId} />
      </div>
    )
  }
}

export default withRouter(ChannelItem);