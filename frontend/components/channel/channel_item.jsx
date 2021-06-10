import React from 'react';
import MessageBoardContainer from '../../messages/message_board_container';

class ChannelItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>channel item {this.props.match.params.channelId}</h1>
        <MessageBoardContainer channelId={this.props.match.params.channelId} />
      </div>
    )
  }
}

export default ChannelItem;