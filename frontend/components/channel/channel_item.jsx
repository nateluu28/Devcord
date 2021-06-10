import React from 'react';
import MessageBoardContainer from '../../messages/message_board_container';
import ServerContainer from '../server/server_container';

class ChannelItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <h1>channel item {this.props.match.params.channelId}</h1>
        <ServerContainer />

        <MessageBoardContainer channelId={this.props.match.params.channelId} />
      </div>
    )
  }
}

export default ChannelItem;